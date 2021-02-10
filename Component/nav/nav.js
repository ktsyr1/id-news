
import React, { Component } from 'react';
import Search from './search.js';
import { Menu } from './min.js'
import Link from 'next/link'

export default class Nav extends Component {
    view = () => {
        let menu = document.querySelector('#menu').classList
        if (document.querySelector('#menu._open')) {
            menu.add("_exit")
            menu.remove("_open")
        } else {
            menu.add("_open")
            menu.remove("_exit")
        }
    }


    render() {
        return (
            < >
                <nav id='nav'>
                    <div className='btn_menu'>
                        <img
                            src='/images/menu.svg'
                            className=' icon '
                            alt='menu icon'
                            width="40"
                            height="40"
                            onClick={this.view}
                        />
                    </div>

                    <Link href='/'  >
                        <a className='logo'>
                            <img src={'/images/logo.png'} width="40" height="40" alt='logo id news' />
                        </a>
                    </Link>
                    <Menu />

                    <Search />
                </nav>
            </>
        )
    }

}
