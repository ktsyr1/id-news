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
	let _id = id ? id : '' 
	let url = host_api + query + _id + filter 
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
export const Posts = async (url) => { 
	let data = await GET(url)
	let new_data = []
	await Promise.all(
		data.map(async (post) => {
			let date = post.date.split('T')
			let img_card = await GET('/media?parent=', post.id)
			let categories = await GET_Array('/categories/', post.categories, 'name,slug,id,count')
			let cat = []
			categories.map(_res => {
				let { name } = _res
				cat.push({ name: name })
			})
			let res_data = {
				id: post.id,
				title: post.title.rendered,
				date: {
					history: date[0],
					time: date[1]
				},
				image: img_card[0].source_url,
				categories: cat

			}
			new_data.push(res_data)
		})
	)
	new_data.sort(dynamicSort("id"))
	return new_data
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