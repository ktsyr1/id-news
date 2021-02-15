import Head from "../../Component/head";
import Nav from "../../Component/nav/nav";
import axios from "axios";
import { host, host_api } from "../../config.json";
import Card from "../../Component/card";
import Link from 'next/link'
import { useRouter } from "next/router"
import Pagination from '../../Component/pagination'
export default function Home({ props }) {
    const { query } = useRouter() 
    return (
        <>
            <Head home="ID NEWS" />
            <Nav />
            <section className='cats'>
                <div className='Title_about'>
                    <h1>
                        نتيجة البحث <em>{query.query}</em>

                    </h1>
                </div>
                <div className='cards'>
                    {props.map((post, index) => {
                        return <Card data={post} key={index} />
                    })}
                </div>
                {/* <Pagination
                    url={`/cat/`}
                    search={query.id}
                    file='/cat/[id]/page/[page]'
                    page={1 }
                    count={Math.ceil(count /10)} /> */}
            </section>
        </>
    );
}
Home.getInitialProps = async ({ query }) => {
    let data
    try {
        let res = await axios.get('http://localhost:3000/api/search/' +encodeURIComponent(query.query) )
        data = res.data
    } catch (error) {
        console.log(error);
    }

    return { props: data, revalidate: 1 };
};
