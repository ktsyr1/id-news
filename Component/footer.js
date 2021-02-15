import Link from 'next/link';
import { name_ar } from '../package.json'
export default function Footer() {
    let today = new Date();
    let year = today.getFullYear();
    let site = name_ar
    return (
        < >
            <footer>

                <div className='min'  >
                    <img src='/images/logo.png' />
                    <ul >
                        <strong className='title'>روابط مهمة</strong>
                        <li><a href="/"> الرئيسية </a></li>
                        <li><a href="/contact"> اتصل بنا</a></li>
                        <li><a href="/about"> عن الموقع </a></li>
                    </ul>
                </div>

                <div className="©"> كافة الحقوق محفوظة لموقع {site} © {year}</div>
            </footer>
        </>
    )
}
