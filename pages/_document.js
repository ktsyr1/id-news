import Document, { Html, Head, Main, NextScript } from "next/document";
import Footer from '../Component/footer' 
export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        // useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      })

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() { 
    // if (typeof window !== "undefined") { }
    return (
      <Html lang="ar">
        <Head />
        <body> 
          <Main />
          <Footer />
          <NextScript />
          <script src='/js/min.js' type='text/javascript'></script>
          {/* <script src='/serviceWorker.js'/> */}
        </body>
      </Html>
    );
  }
}