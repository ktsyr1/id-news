import Head from "../Component/head";
import Nav from "../Component/nav/nav";
import Card from "../Component/card";
import axios from "axios";
import Title from "../Component/title";
import { host } from "../config.json";  

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
  let url = host + "/api/posts"
  let res = await axios.get(url)
  return { props: res.data, revalidate: 1 };
};
