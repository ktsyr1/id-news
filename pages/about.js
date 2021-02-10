import Head from '../Component/head.js'
import Nav from '../Component/nav/nav.js'
export default function About() {
    return (
        < >
            <Head home='حول الموقع ' />
            <Nav />
            <section className='about'>
                <div >
                    <div >
                        <img src="/images/about_team.png" alt="about team" />
                    </div>

                    <article >

                        <h1 ><a href="">عن الموقع</a></h1>

                        {/* <p>تم التعديل بواسطة <a href="">Kadour H. kadour</a> في 23 أغسطس 2020</p> */}

                        <b>موقع بيسك توب موقع تحميل برامج وأنظمة تشغيل مفعلة كاملة بالكراك </b>

                        <p>بقوم فريق بيسك توب برفع ثلة من أفضل البرامج على شبكة الانترنت التي تعمل على جميع أجهوة التشغيل والتي تكون مفعلة كاملة بالكركات
                            ويقوم الفريق ايضاً بتجربة البرامج وفحصها من أي برمجيات ضارة قبل الرفع
                            الموقع ينمي الى فريق عمل حر الهدف الأول من أنشاء الموقع هي توفير استخدام البرامج المدفوعة
                            للأشخاص الذين لايتمكنون من شراء هذه البرامج او لا تتوفر في بلادهم طرق للدفع او اسباب اخرى ...
                            ونأمل أن يكون الموقع المصدر الأمن للتحميل بهلاف المواقع الضارة الاخرى .
    </p>

                        <b>تعرف على فريق عمل الموقع </b>
                        <div className='cards'>
                            <a href="https://www.facebook.com/redov.h.kadour.353" className='card'>
                                <img className="icon" src="/images/avatar_icon.png" alt="" />
                                <div>
                                    <h3>Kadour H. Kadour</h3>
                                    <p>مبرمج, مصمم, مؤسس الموقع</p>
                                </div>
                            </a>
                            <a href="https://www.facebook.com/islamedlby" className='card'>
                                <img className="icon" src="/images/avatar_icon.png" alt="" />
                                <div>
                                    <h3>Islam Edlby</h3>
                                    <p>مبرمج و مسؤول قسم الاندرويد</p>
                                </div>
                            </a>
                            {/* <div class='card'>
                                <img src="" alt="" />
                                <div>
                                    <h3>مجهول</h3>
                                    <p>معلومات غير معروفة </p>
                                </div> 
                             </div> */}
                        </div>
                    </article>
                </div>
            </section>
        </>
    )
}
