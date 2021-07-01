// ***************Template Literals**********************
/*
let username = "Cihan"
const DOMAIN = "kodluyoruz.org"

let email = username + "@" + DOMAIN
console.log("Merhaba", username, "Sitemize hosgeldin", "mail adresin:", email)

let info = `Merhaba ${username} sitemize hoşgeldin..
mail adresin: ${email}
mail adresinin uzunluğu: ${email.length}
borcunuz: ${(2 + 3) * 5} TL
günün saat bilgisi: ${new Date().getHours()}
`
*/



/*************String Veri Türü İşlemleri
console.log("**************-Strings-*********************")

email = "cihan5421@gmail.com"
let firstName = "cihan"
let lastName = "Alıcı"

// string karakter sayısı -> length
console.log(`Email karakter sayısı: ${email.length}`)

// ilk karakteri bulmak
console.log(email[0])
console.log(email.charAt(0))

// buyuk harf / kucuk harf
firstName = firstName.toUpperCase()
console.log(firstName)

firstName = firstName.toLowerCase()
console.log(firstName)

// String içinde istediğimiz bilgiyi aramak ve yerini bulmak
console.log(email.search("@"))
console.log(email[9])
// olmayan sonuçta -1 döndürüyor.

// belirli bir yere kadar olanı alma
let domain = email.slice(email.search("@") + 1)
console.log(domain)

console.log(
    domain.slice(0, domain.indexOf('.'))
)

//Bilgiyi değiştir -> replace
email = email.replace('gmail.com', 'kodluyoruz.org')
console.log(email)

// istediğim bilgi var mı ? includes
email.includes('@') // true or false döner

// istediğim bilgiyle başladı mı ? bitti mi -> startsWith, endsWith
ends = email.endsWith('kodluyoruz.org')
console.log(ends)

// Ilk harflerini büyük yapmak
let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1)}
${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`
console.log(fullName)
*/

/*
// pathname
console.log(document.location.pathname)


console.log(document.head)
console.log(document.body)

document.body.style.backgroundColor = "aqua"
*/

/*

let title = document.getElementById('title')
title.innerHTML = "Değişen Bilgi"
console.log(title.innerHTML)


let link = document.querySelector('ul#list>li>a')
link.innerHTML += ": Hyperlink"
link.style.color = "blue"
link.classList.add('btn') // class eklemek.
*/


/*********************Prompt*********** */
/*
let fullName = prompt("Lütfen Adınızı Giriniz:")

let greeting = document.querySelector("#greeting")

greeting.innerHTML = `${greeting.innerHTML}
<small style="color:red">${fullName}</small>`
*/



/**********************Listeler*********************** */
/*
let lastChild = document.querySelector("ul#list>li:last-child")
lastChild.innerHTML = "son oge volkan öge..."

let firstChild = document.querySelector("ul#list>li:first-child")
firstChild.innerHTML = "ilk öge..."

let ulDOM = document.querySelector("ul#list")
let liDOM = document.createElement('li')

liDOM.innerHTML = "Kendi oluşturduğumuz öğe"
//ulDOM.appendChild(liDOM) en sona ekliyor
//ulDOM.prepend(liDOM) // Başa ekliyor.
*/


/******************Class ekle veya çıkar****************************/
/*

let greeting = document.querySelector('#greeting')
greeting.classList.add("text-primary")
greeting.classList.add("title")
greeting.classList.add("new-info", "second-class", "third-class")

greeting.classList.remove("title", "second-class", "third-class")

console.log(greeting.classList)
*/

/****************Mantıksal Operatörler*********** */
/*
let price = "100"
let user = "guest"
console.log(price == 100)
console.log(price === 100)

console.log("Eşit değildir:",price != 5)
console.log("Eşit değildir:",user != "guest")

console.log("Küçüktür:",price < 1000)

console.log("Küçük Eşit:",price <= 100)

price = 0
console.log(price >= 0 && user != "guest")
console.log(price >= 0 || user != "guest")
*/

/*
var randomSayi = parseInt(Math.floor(Math.random() * 5));
//Girdiğimiz sayıyı aklında tutması için prompt değişkene atanır
var tahmin = parseInt(prompt("Bir sayı gir ve rastgele sayıyı bulmaya çalış!"));
if (tahmin === randomSayi && tahmin != null) alert("Bildin!!!");
else if (tahmin == "") alert("Boş giriş yaptınız!");
else if (tahmin == null) alert("Giriş yapmaktan vazgeçtiniz!");
else {
  alert("Bir daha denee :(, Random sayi: " + randomSayi);
}
*/
/*
function vkiHesapla(w, h){
    let vki = w / (h * h)

    if(vki < 18.5) return alert(`Vücut kitle indeksiniz: ${vki}, değerleriniz düşüktür`)
    if(vki >= 18.5 && vki <= 24.9) return alert(`Vücut kitle indeksiniz: ${vki}, normal değerdesiniz `)
    if(vki >= 25.0 && vki <= 29.9) return alert(`Vücut kitle indeksiniz: ${vki}, kilolusunuz`)
    if(vki>=30) return alert(`Vücut kitle indeksiniz: ${vki}, aşırı kilolusunuz`)
    return alert("Girdiğiniz değerleri kontrol ediniz.")
}
let h = prompt("Boyunuzu metre cinsinden giriniz:")
let w = prompt("Kilonuzu giridiz:")

vkiHesapla(w, h)


function factorial(n){
    let sonuc  = 1
    if( n == 0 || n == 1){
        return sonuc
    } else {
        for(let i = n; i>=1; i--){
            sonuc = sonuc * i;
        }
        return sonuc
    }
}

let n = 5; 
sonuc = factorial(n)
console.log(sonuc)
*/

function getLetter(s){
    let letter

    switch(s[0]){
        case('a' || 'e' || 'o' || 'i' || 'u'):
            letter = "A"
            break;
        case('b' || 'c' || 'd' || 'f' || 'g'):
            letter = "B"
            break;
        case('h' || 'j' || 'k' || 'l' || 'm'):
            letter = "C"
            break;
        case('z' || 'n' || 'p' || 'q' || 'r' || 's' || 't' || 'v' || 'w' || 'x' || 'y'):
            lettter = 'D'
    }
    return letter
}
