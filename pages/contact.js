import Head from '../Component/head.js'
import Nav from '../Component/nav/nav.js'
import axios from 'axios'
import React, { useState } from 'react'; 
import { host} from '../config.json'

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    function _name(e) { setName(e.target.value) }
    function _email(e) { setEmail(e.target.value) }
    function _title(e) { setTitle(e.target.value) }
    function _body(e) { setBody(e.target.value) }

    function post(e) {
        e.preventDefault();
        let data = {
            name: name,
            email: email,
            title: title,
            body: body,
        }
        document.querySelector('form .btn').classList.add("exit")
        axios.post(host + '/api/v1.0/contact', data)
            .then(res => console.log(res))
    }


    console.log(name);

    return (
        <>
            <Head home='اتصل بنا' />
            <Nav />
            <section>
                <div className='contect'>
                    <div className='_'>
                        <h2>أتصل بنا</h2>
                    </div>
                    <form  >
                        <div>
                            <input name="name" type="text" placeholder="الأسم" value={name} onChange={_name} />
                            <input name="email" type="email" placeholder="البريد الالكتروني" value={email} onChange={_email} />
                        </div>
                        <div>
                            <input name="title" type="text" placeholder="العنوان" value={title} onChange={_title} />
                        </div>

                        <div>
                            <textarea name="body" rows="10" placeholder="محتوى الرسالة" value={body} onChange={_body} />
                        </div>
                        <div>
                            <button className='btn' onClick={post}> ارسال</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}
