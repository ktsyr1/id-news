
import { Post, dynamicSort, GET, GET_Array } from '../../../model/api'
const search = async(query) => { 
    let data = await GET(
        '/posts?search=' +
        encodeURIComponent(query),
        "&_fields=id,date,title,categories,"
    )
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
    // res.statusCode = 200
    // res.setHeader('Content-Type', 'application/json')
    // res.send(JSON.stringify(new_data))

} 
export default search