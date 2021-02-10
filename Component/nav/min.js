import Link from 'next/link' 
import React, { useState } from 'react'; 
export function Menu() {
    return (
        <div id='menu' className='_exit'  >
            <Link href='/'>
                <a className='nav_menu_link'> 
                    <p>الرئيسية</p>
                </a>
            </Link> 
            <Link className='nav_menu_link' href='/contact' >
                <a className='nav_menu_link '> 
                    <p>اتصل بنا</p>
                </a>
            </Link>
            <Link className='nav_menu_link' href='/about' >
                <a className='nav_menu_link '> 
                    <p>حول الموقع</p>
                </a>
            </Link> 
        </div>
    )
}
 