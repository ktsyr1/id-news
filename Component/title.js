import Link from 'next/link'
export default function Title(props) {
    let url
    if (props.url) {
        url = <Link href={'/android/category/' + props.url + "/page/2"}>
            <a>
                المزيد
                </a>
        </Link>
    }
    return (
        <div className='sh page'>
            <h2>
                {props.p} {props.query}
            </h2>
            {url}
        </div>
    )

}