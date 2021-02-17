import Head from "../../Component/head";
import Nav from "../../Component/nav/nav";
import axios from "axios";
import { host, host_api } from "../../config.json";
import Card from "../../Component/card";
import data from  '../../model/api/cat/[id]'//'../api/cat/[id]'
import { useRouter } from "next/router"
import Pagination from '../../Component/pagination'
export default function Home({ props }) {  
    const { query } = useRouter()
    let { taxonomy, name, count, description } = props.cat
    let type = taxonomy === 'category' ? 'قسم ' : "وسم "
    let length = count > 10 ? " الصفحة 1" : ''
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
                {/* <Pagination
                    url={`/cat/`}
                    search={query.id}
                    file='/cat/[id]/page/[page]'
                    page={1}
                    count={Math.ceil(count / 10)} /> */}
            </section>
        </>
    );
}
Home.getInitialProps = async ({ query }) => {
    let page = query.page ? query.page : 1
    let cat_url = host_api + '/categories/' + query.id + '?_fields=name,slug,id,count,description,taxonomy'
    let post = await data(query.id)
    let cat = await axios.get(cat_url)
    return { props: { post: post, cat: cat.data }, revalidate: 1 };
};
