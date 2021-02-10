import '../styles/globals.css'  
import '../styles/style.sass'
import '../styles/responsive.sass'
import "noto-sans-arabic/css/400.css";
import './_document.js'
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start());
 Router.events.on('routeChangeComplete', () => NProgress.done());
  Router.events.on('routeChangeError', () => NProgress.done());
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
} 
