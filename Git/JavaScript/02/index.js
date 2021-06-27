// ***************Template Literals**********************

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

console.log(info)


/*************String Veri Türü İşlemleri*/
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






