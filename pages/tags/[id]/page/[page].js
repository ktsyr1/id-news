import Head from "../../../../Component/head";
import Nav from "../../../../Component/nav/nav";
import axios from "axios";
import { host, host_api } from "../../../../config.json";
import Card from "../../../../Component/card";
import tags from '../../../../model/api/tags/[id]'
import { useRouter } from "next/router"
import Pagination from '../../../../Component/pagination'
export default function Home({ props }) {
    const { query } = useRouter()
    let { taxonomy, name, count, description } = props.cat
    let type = taxonomy != 'tags' ? 'قسم ' : "وسم "
    let length = count > 10 ? " الصفحة " + query.page : ''
    description = description.length > 1 ? description : 'لايوجد وصف'

    return (
        <>
            <Head home="ID NEWS" />
            <Nav />
            <section className='cats'>
                <div className='Title_about'>
                    <h1>
                        {type}
                        {name}
                        {length}
                    </h1>
                    <p>
                        {description}
                    </p>
                </div>
                <div className='cards'>
                    {props.post.map((post, index) => {
                        return <Card data={post} key={index} />
                    })}
                </div>
                <Pagination
                    url={`/tags/`}
                    search={query.id}
                    file='/tags/[id]/page/[page]'
                    page={1}
                    count={Math.ceil(count / 10)} />
            </section>
        </>
    );
}
Home.getInitialProps = async (ctx) => {
    let { query } = ctx
    let page = query.page ? query.page : 1 
    let tag_url = host_api + '/tags/' + query.id + '?_fields=name,slug,id,count,description,taxonomy'
    let post = await tags(query.id,page)
    let tag = await axios.get(tag_url)
    return { props: { post: post.data, tag: tag.data }, revalidate: 1 };
};
