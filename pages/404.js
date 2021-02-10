import Head from '../Component/head.js'
import Nav from '../Component/nav/nav.js'
import Footer from '../Component/footer.js'
export default function I404() {
  return (
    < >
      <Head home='not found'/>
      <Nav />
      <section>
        <div className='_404'>
          <h2>لم يتم العثور على الصفحة</h2>
          <p >
            عفواً، الصفحة التي طلبتها غير موجودة على هذا العنوان. لقد تم تحديث الموقع مؤخراً، و ربما تم تغيير أو نقل هذه الصفحة هناك عدة طرق لتحديد مكان المعلومات التي تبحث عنها. ابداء من جديد من خلال زيارة الصفحة الرئيسية. يمكنك أيضا زيارة خريطة الموقع للاطلاع على قائمة الأقسام داخل الموقع. إذا كان هذا لا يساعد، حاول مربع البحث في أعلى هذه الصفحة. للإبلاغ عن هذه المشكلة الرجاء الضغط هنا
            </p>
          <img className='__404' src="/images/404.png" alt="404" />
        </div>
      </section>
    </>
  )
}
