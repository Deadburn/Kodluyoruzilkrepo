/*Hepimizin Matematik derslerinden bildiği üzere Dairenin Alanı = π x r2 
şeklinde hesaplanır. Node.JS Javascript çalışma ortamında yarıçap değerini konsoldan parametre olarak 
girerek alanı bulmaya çalışacağız. Konsol çıktısı: Yarıçapı (Yarıçap) olan dairenin alanı: (Alan) şeklinde olmalıdır.
*/

const arguments = process.argv.slice(2)

function daireAlani(yaricap) {
    const alan = Math.round(Math.PI * (yaricap * yaricap));
    console.log(`Yarıçapı ${yaricap} olan dairenin alanı: ${alan}`)
}

daireAlani(arguments[0]* 1)