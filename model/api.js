import DOMPurify from 'dompurify'
import axios from 'axios'
import { host_api } from '../config.json'

/**
 * Sanitize markup or text when used inside dangerouslysetInnerHTML
 *
 * @param {string} content Plain or html string.
 *
 * @return {string} Sanitized string
 */
export const sanitize = (content) => {
	return process.browser ? DOMPurify.sanitize(content) : content
}
export const GET = async (query, id, filters) => {
	let filter = filters ? "?_fields=" + filters : ''
	let url = host_api + query + id +filter 
	let authors = await axios.get(url)
	return authors.data
}

export const GET_Array = async (query, re, filters) => {
	let filter = filters ? "?_fields=" + filters : ''
	let array = []
	await Promise.all(
		await re.map(async id => { 
			let res = await GET(query, id + filter)
			array.push(res)
		})
	)
	return array
}
export const map = (arr) => {
	let new_arr = []
	arr.map(_res => {
		let { name, slug, id, count, description } = _res
		new_arr.push({
			name: name,
			slug: slug,
			id: id,
			description: description,
			count: count,
		})
	})
	return new_arr
}
export const Post = async (post) => {

	let category = map(categories)

	let tag = map(tags)

	let img_card = await axios.get(post._links['wp:attachment'][0].href)
	let date = post.date.split('T')

	let arr = {
		id: post.id,
		title: post.title.rendered,
		date: {
			history: date[0],
			time: date[1]
		},
		image: img_card.data[0].source_url,
		categories: category,
		tags: tag,
		author: {
			name: authors.name,
			website: authors.url,
			description: authors.description,
			image: authors.avatar_urls
		},
		content: post.content.rendered

	}
	return arr
}
export function dynamicSort(property) {
	var sortOrder = 1;
	if (property[0] === "-") {
		sortOrder = -1;
		property = property.substr(1);
	}
	return function (a, b) {
		var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
		return result * sortOrder;
	}
}