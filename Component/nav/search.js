import Link from 'next/link'
import { useRouter } from "next/router"
export default function Search(props) {
    const router = useRouter()

    let back = () => {
        if (typeof window != undefined) localStorage.setItem("_back", router.asPath)
    }
    return (
        < >
            <Link href={'/search'} prefetch  >
                <a className="btn_search" onClick={back}>
                    <img src='/images/search.svg' alt='search icon' width="40" height="40" />
                </a>
            </Link>

        </>
    )

}
