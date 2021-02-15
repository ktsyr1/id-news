
import { Posts } from '../../../model/api'

export default async (req, res) => {
    let post = await Posts("/posts?tags=" + req.query.id + '&_fields=id,date,title,categories,')
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify(post))

} 