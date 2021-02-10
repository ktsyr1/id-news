import {name_ar} from '../package.json'
export default function Footer() {
    let today = new Date();
    let year = today.getFullYear();
    let site = name_ar
    return (
        < >
            <footer>
                <div className='title'>روابط سريعة</div>
                <div className='min'  >
                    <ul >
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
