const Koa = require('koa')
const app = new Koa();

/**
koa paketini indirelim.
index, hakkimda ve iletisim sayfaları oluşturalım.
Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h1 başlıkları yazdıralım.
port numarası olarak 3000'i kullanalım.
 */

//resp
app.use(ctx => {
    const url = ctx.url;
    console.log(url)

    if(url === '/') {
        ctx.body = "<h2>Anasayfa</h2>"
    } else if(url === '/hakkimda') {
        ctx.body = "<h2>hakkimda sayfasina hosgeldiniz</h2>"
    } else if(url === '/iletisim') {
        ctx.body = "<h2>iletisim sayfasina hosgeldiniz</h2>"
    } else {
        ctx.body = "<h2>404 SAYFA BULUNAMADI</h2>"
    }

   
})

app.listen(3000)