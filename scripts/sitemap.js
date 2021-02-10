const fs = require('fs')
const axios = require('axios')
const { host } = require('../config.json')
const path = '../'
async function SiteMap() {
  let data = await axios.get(host + '/api/v1.1/android')

  const sitemap = `
  <urlset xmlns="http://www.google.com/schemas/sitemap/0.84" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.google.com/schemas/sitemap/0.84 http://www.google.com/schemas/sitemap/0.84/sitemap.xsd">
  <url>
  <loc>https://pesktop.vercel.app</loc>
</url>  
<url>
<loc>https://pesktop.vercel.app/about</loc>
</url>  
  ${data.data.map(urls => {
return `
    <url>
      <loc>https://pesktop.vercel.app/android/${urls.url}</loc>
    </url>  `
  })
      .join("")}
  </urlset>
  `
  fs.writeFileSync('./public/sitemap.xml', sitemap, "utf8");
}
SiteMap()