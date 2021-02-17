import Head from "../../Component/head";
import Nav from "../../Component/nav/nav"; 
import Card from "../../Component/card";
import Data from '../../model/api/search/[query]'
import { useRouter } from "next/router"
import Pagination from '../../Component/pagination'
export default function Home({ props }) {
    console.log(props);
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
        let res = await Data(encodeURIComponent(query.query))
        console.log(res);
        data = res
    } catch (error) {
        console.log(error);
    }

    return { props: data, revalidate: 1 };
};
