import Head from '../Component/head.js'
import Nav from '../Component/nav/nav.js'
export default function About() {
    return (
        < >
            <Head home='حول الموقع ' />
            <Nav />
            <section className='about'>
                <div > 

                    <article >

                        <h1 ><a href="">عن الموقع</a></h1>

                        {/* <p>تم التعديل بواسطة <a href="">Kadour H. kadour</a> في 23 أغسطس 2020</p> */}

                        <b>منصة إعلامية مستقلة ، تأسست في 2021 لنشر اخبار العالم بمصداقية</b>
 
  
                    </article>
                </div>
            </section>
        </>
    )
}
