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
           
        </div>
    )
}
 