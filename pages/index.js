import Head from "../Component/head";
import Nav from "../Component/nav/nav";
import Card from "../Component/card"; 
import Data from '../model/api/posts/index'
export default function Home({ props }) {
  return (
    <>
      <Head home="ID NEWS" />
      <Nav />
      <section>
        <div className='cards'>
          {props.map((post, index) => {
            return <Card data={post} key={index} />
          })}

        </div>
      </section>
    </>
  );
}
Home.getInitialProps = async () => {
  let res = await Data()
  return { props: res, revalidate: 1 };
};
