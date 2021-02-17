
import { Posts } from '../../../model/api'

const cat = async (query, page) => {
    let pages = page ? page : 1
    let path ="/posts?categories=" + query + '&_fields=id,date,title,categories&page=' + pages 
    let post = await Posts(path)
    
    // res.statusCode = 200
    // res.setHeader('Content-Type', 'application/json')
    // res.send(JSON.stringify(post))
    return post
}
export default cat