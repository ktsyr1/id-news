import Header from 'next/head'
export default function Head(props) {

    // // home 

    const { page, p, home, end, app } = props
    // page app
    let title, image, ends, mods = ''
    let description, des_fb
    if (app) {
        let { } = app
        let description_end = '  - id-news'
        title = props.app.title + description_end
        description = props.app.title + description_end
        image = props.image
    } else {
        title = home ? home : page ? p + page : ''
        image = props.image ? props.image : '/images/bg.png'
        ends = end ? end : ''
        description = 'منصة إعلامية مستقلة ، تأسست في 2021 لنشر اخبار العالم بمصداقية'

    }
    // let ga
    // if (typeof window != 'undefined') {
    //     window.dataLayer = window.dataLayer || [];
    //     function gtag() { dataLayer.push(arguments) }
    //     gtag('js', new Date());

    //     gtag('config', 'G-NZT5P1ZG3W');
    // }
    return (
        <>
            <Header>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title> {title} {ends}</title>
                <meta name="description" content={description} />
                <meta name="theme-color" content="#ffffff" />
                {/* <meta name="keywords" content={props.keywords} /> */}

                {/* --------------- files --------------- */}
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/images/logo.png" />

                {/* favicon.ico */}
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/vnd.microsoft.icon" />

                <meta name="author" content="https://id-news.vercel.app/" />

                {/* google */}
                {/* <meta property="og:locale" content="ar_AR" />
                <meta property="og:image" content={image} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="PeskTop بيسك توب" />
                <meta property="og:description" content={des_fb} />
                <meta property="og:url" content="https://pesktop.com/" />
                <meta property="og:site_name" content="PeskTop بيسك توب" />
                {/* facebook */}
                {/* <meta property="fb:page_id" content="1398534473631326" />
                <meta property="fb:app_id" content="4136267676414709" />
                <meta property="fb:image" content={image} />
                <meta property="article:publisher" content="https://www.facebook.com/pesktop.co/" />
                <meta property="profile:username" content="pesktop.com" /> */}

                {/* twitter */}
                {/* <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@Pesktop1" /> */}
                {/* <meta name="twitter:creator" content="@Pesktop1" />
                <meta name="twitter:title" content="PeskTop بيسك توب" />
                <meta name="twitter:description" content={des_fb} />
                <meta name="twitter:image:src" content={image} />
                <meta name="twitter:domain" content="PeskTop بيسك توب" />

                <script async src="https://www.googletagmanager.com/gtag/js?id=G-G1FP7Y6LHY"></script> */}
                {/* <script dangerouslySetInnerHTML={
    { __html: `
                    if (typeof window != 'undefined')
                  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
                    gtag('js', new Date());
                  
                    gtag('config', 'G-G1FP7Y6LHY');
                      }}
                      `}
                    }></script> */}
                {/* <meta name="yandex-verification" content="35a7a0f123d25015" /> */}
            </Header>
            {/* <br /><br /><br />
            <p style={{ textAlign: "center" }}>{des_fb}</p> */}
        </>
    )
}