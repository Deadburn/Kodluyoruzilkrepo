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

/*
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
*/

/******************Recursive Koşulu***********************/
/*
var money = 18;
var canBuy = 
    (money < 17) ? "Satın alamazsın..." :
    (money > 30) ? "Satın alabilirsin.." :
    "Para miktarını girmen gerekmektedir..";

console.log(canBuy)   
*/
/*
const SMILE = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>
`

const SAD = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>
`

let examGrade = prompt("Puani Girin")
let textInfo;
let info = document.querySelector("#info")

if (examGrade >= 0 && examGrade <= 100) {
    textInfo = SMILE
    info.classList.add('text-primary')
    if (examGrade >= 90) {
        textInfo += " AA"
    } else if (examGrade >= 85) {
        textInfo += " BA"
    } else if (examGrade >= 80) {
        textInfo += " BB"
    } else if (examGrade >= 75) {
        textInfo += " CB"
    } else if (examGrade >= 70) {
        textInfo += " CC"
    } else if (examGrade >= 65) {
        textInfo += " DC"
    } else if (examGrade >= 60) {
        textInfo += " DD"
    } else if (examGrade >= 50) {
        textInfo += " FD"
    } else if (examGrade < 50) {
        textInfo =  `${SAD} FF`
        info.classList.remove('text-primary')
        info.classList.add('text-danger')
    }
} else {
    textInfo = "Bilgiler doğru değil!"
}


info.innerHTML = `${textInfo} -> ${examGrade}`
*/

// function printHello(name){
//     console.log("Hello, World! "+ name)
// }
// printHello("Cihan")

// let sayi1 = 6
// let sayi2 = 2
// function addition(){
//     let sayi3 = 3
//     return sayi1 + sayi2 + sayi3
// }

// function multiple(){
//     return sayi1 * sayi3
//     //Burada hata alıyoruz: bunun nedeni başka bir fonksiyonun içinde tanımlı olan sayi3 lokal değişkenini kapsamı dışında 
// //kullanmaya çalışmamız. sayi1 değişkeni ise global olduğundan burada kullanılabilir
// }


/*
function daireAlaniHesaplama (r, PI = 3.14) 
{ 
    return PI*r*r;		
}
var donenSonuc = daireAlaniHesaplama(3); 
console.log(donenSonuc); // 28.25999999 sonucunu göreceğiz.

*/


//arrow this is a sorrow
// dikkat edilmesi gerekilen durum ise eğer arrow fonksiyonunun içinde
// süslü parantez var ise return yazılmalıdır.

/*
const myList = (param1, param2) => param1.concat(param2)

var feedTheCat = (cat) => {
    if (cat === "hungry"){
        return 'Feed the cat'
    } else {
        return "Do not feed the cat"
    }
}

*/

/*
 this'in arrow fonksiyonlardaki davranışı,regular fonksiyonlardaki
  davranışından farklıdır.Nasıl ve nerede oluşturulursa oluşturulsun 
  this'in arrow fonksiyonu içerisindeki değeri her zaman parent 
  fonksiyonuna eşittir.Diğer bir deyişle arrow fonksiyonu kendi 
  execution context'ini oluşturmaz. Yani kendisini referans göstermez, 
  her zaman parent'ına bakar.
*/

let movie = { 

    name: "La la land",
    
    thisInArrow:() => { 
    console.log("Movie name is " + this.name); // 'this' window'u referans gösterir. Bu yüzden name'yi bulamaz.
    }, 
    
    thisInRegular(){ 
    console.log("Movie name is " + this.name); // 'this' kendisini referans gösterir ve çalışır.
    } 
    
};
movie.thisInArrow(); // output : Movie name is
movie.thisInRegular(); // output : Movie name is La la land