
import { Posts } from '../../../model/api'

const tags = async (query, page) => { 
    let post = await Posts("/posts?tags=" + query + '&_fields=id,date,title,categories,' + page)
    // res.statusCode = 200
    // res.setHeader('Content-Type', 'application/json')
    // res.send(JSON.stringify(post))
    return post
}
export default tags