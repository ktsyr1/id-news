
import { GET, GET_Array } from '../../../model/api'

export default async (req, res) => {
    let post = await GET("/posts/", req.query.id, "author,id,title,date,content,tags,categories")
    let img_card = await GET('/media?parent=', post.id)
    let authors = await GET('/users/', post.author)
    let categories = await GET_Array('/categories/', post.categories, 'name,slug,id,count,description')
    let tags = await GET_Array('/tags/', post.tags, 'name,slug,id,count,description')
    let date = post.date.split('T')

    let cat = []
    categories.map(_res => {
        let { name, slug, id, count, description } = _res
        cat.push({
            name: name,
            slug: slug,
            id: id,
            description: description,
            count: count,
        })
    })
    
    let tag = []
    tags.map(_res => {
        let { name, slug, id, count, description } = _res
        tag.push({
            name: name,
            slug: slug,
            id: id,
            description: description,
            count: count,
        })
    })
    let data = {
        id: post.id,
        date: {
            history: date[0],
            time: date[1]
        },
        title: post.title.rendered,
        content: post.content.rendered,
        author: {
            name: authors.name,
            website: authors.url,
            description: authors.description,
            image: authors.avatar_urls
        },
        image: img_card[0].source_url,
        categories: cat,
        tags: tag
    }
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify(data))

} 