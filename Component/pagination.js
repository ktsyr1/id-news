import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router"
export default function Pagination(props) {
    let { page, search, count, url, file } = props
    let _page = Number(page)
    const { query } = useRouter()
    useEffect(() => {
        let Selector = query => document.querySelector(query)
        let values = []
        let indexed = 0
        Array.from(document.querySelectorAll(`.pages a`))
            .map(s => values.push(Number(s.innerText)))
        values.map((array, index) => {
            if (array == query.page) {
                indexed = index
            }
        })

        let page1 = query.page ? Selector(`.pages a:nth-child(${indexed + 1})`) : Selector(`.pages a`)
        Array.from(document.querySelectorAll(`.pages a`))
            .map(page => {
                page.style.color = '#000'
                page.style.backgroundColor = '#fff'
            })
        if (count >= 1) {
            page1.style.color = '#fff'
            page1.style.backgroundColor = '#2680EB'
        }
    })
    let pages = i => {
        let _search = search ? search : ''
        let route = url + _search + '/page/' + i
        if (page <= count && page >= 1 && i >= 1 && i <= count) {
            return (
                <Link as={route} href={file} passHref >
                    <a> {i} </a>
                </Link>
            )
        }
    }
    let x = !_page ? 1 : _page
    return (
        <div className='pages'>
            {pages(x - 2)}
            {pages(x - 1)}
            {pages(x)}
            {pages(x + 1)}
            {pages(x + 2)}
        </div>
    )
}
