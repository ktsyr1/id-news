import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router"
import axios from 'axios' 
import { host} from '../../config.json'
export default function Search(props) {
    const [data_search, setSearch] = useState('');
    const [result, setSearchLive] = useState([]);
    const router = useRouter()

    
    
    function handleSearch(e) {
        setSearch(e.target.value)
    }
    let liveSearch = async () => {
        if (data_search.length > 0) {
            let res = await axios.get(host + '/api/v1.1/search?app=' + data_search)
            setSearchLive(res.data.apps.slice(0, 5))
        }
    }
    let clear = () => {
        setSearch('')
        setSearchLive([])
    }
    let open_s = () => {
        let search = document.querySelector('.search').classList 
        let menu = document.querySelector('.btn_search ').classList

        search.remove("exit")
        search.add("open")
        menu.remove("open")
        menu.add("exit")
    }
    let exit_s = () => {
        let search = document.querySelector('.search').classList
        let menu = document.querySelector('.btn_search ').classList

        search.remove("open")
        search.add("exit")
        menu.remove("exit")
        menu.add("open")
    }
    useEffect(async () => {
        let input = document.querySelector('.search input')
        input.addEventListener("keyup", (event) => {
            if (event.keyCode === 13) {
                event.preventDefault();
                return document.querySelector('.search a.card').click()
            }
        })  

    })
    let url = data_search != '' ? `/search/` + data_search : router.asPath + ""
     
    return (
        < >
            <div className='search exit' onChange={liveSearch}>
                <input type='text' placeholder='البحث ...' onChange={handleSearch} name='search' value={data_search} />
                <img src='/images/close.svg' className='icon back' alt='search icon' width="40" height="40" onClick={exit_s} />
                <Link href={url} prefetch  >
                    <a className="card">
                        <img src='/images/search.svg' className='icon' alt='search icon' width="40" height="40" />
                    </a>
                </Link> 
            </div>

            <div className='btn_search open'>
                <img src='/images/search.svg' alt='search icon' width="40" height="40" onClick={open_s} />
            </div>
        </>
    )

}
