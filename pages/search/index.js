import Head from "../../Component/head";
import Nav from "../../Component/nav/nav";
import axios from "axios";
import React, { useState, useEffect } from 'react';
import Title from "../../Component/title";
import { host, host_api } from "../../config.json";
import { sanitize } from '../../model/api'
import { useRouter } from "next/router"
import Link from 'next/link'
export default function Search({ props }) {
    const [back, setBack] = useState('');
    const [data_search, setSearch] = useState('');
    const [result, setSearchLive] = useState([]);


    const router = useRouter()


    let liveSearch = async () => {
        if (data_search.length > 0) {
            let res = await axios.get(host_api + '/posts?search=' + data_search + "&_fields=title,id,count,")
            console.log(res.data);
            setSearchLive(res.data)
        }
    }
    function handleSearch(e) {
        setSearch(e.target.value)
        liveSearch()
    }
    // let clear = () => {
    //     setSearch('')
    //     setSearchLive([])
    // }

    useEffect(() => {
        setBack(localStorage.getItem("_back"))
        let input = document.querySelector('nav input')
        input.addEventListener("keyup", (event) => {
            if (event.keyCode === 13) {
                event.preventDefault();
                return document.querySelector('nav a.go').click()
            }
        })

    })
    let url = data_search != '' ? `/search/` + data_search : router.asPath

    return (
        <>
            <Head home="ID NEWS " />
            {/* <Nav /> */}
            <nav>
                <Link href={back} prefetch  >
                    <a  >
                        <img src='/images/back.svg' className='icon_full' alt='search icon' width="40" height="40" />

                    </a>
                </Link>
                <input type='text' placeholder='البحث ...' onChange={handleSearch} name='search' value={data_search} />
                <Link href={url} prefetch  >
                    <a>
                        <img src='/images/search.svg' className='icon_full go' style={{ padding: '5px' }} alt='search icon' width="40" height="40" />
                    </a>
                </Link>
            </nav>
            <section className='result'>
                {result.map((res, index) => {
                    console.log(res);
                    return (
                        <Link href={'/post/' + res.id} key={index}>
                            <a>
                                <img src='/images/set.svg' alt='set result ' />
                                <p> {res.title.rendered}</p>
                            </a>
                        </Link>
                    )
                })}
            </section>
        </>
    );
} 