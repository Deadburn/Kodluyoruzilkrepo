let domain = "kodluyoruz";
let isActive = false;
let items = [1, 2, 3, isActive, domain];
console.log(items);

let emptyArray = []; // bos liste

console.log(items.length);

//document.querySelector('#info').innerHTML = items.length

// son eleman
console.log( items[items.length - 1])

// ortadaki elemanın çağırılması
console.log(
    "ortadaki :",
    items[Math.floor(items.length / 2)]
)

console.log(
    typeof(items) // object olarak çıktı verir
)

console.log( 
    Array.isArray(items)
)


console.log("[] :",Array.isArray([]))
console.log("1 :",Array.isArray(1))
console.log("true :",Array.isArray(true))


items =  [10, 20, 30, 40, ]
console.log("items - ilk hali :", items)

// Array: sona oge ekleme
items.push(50)
console.log("50", items)
// Basa öge ekleme
items.unshift(5)
console.log("5", items)
// sondan bilgiyi çıkarmak - pop
let lastItem = items.pop()
console.log("Last item: ", lastItem)
// bastaki ögeyi çıkarmak
let firstItem = items.shift()
console.log("first item: ", firstItem)

// Array içindeki bir ogenin bilgisini değiştirmek

items[0] = 5
console.log(items)

// son elemanın değiştirilmesi
items[items.length - 1] = "son eleman"
console.log(items)

items[10000] = 10000
console.log(items)


/*******Array Methodlarının kullanımı ve dizi içinde  Array */

items = [1, 2, 3, 4, 5]
let femaleUsers = ["Ayse", "Hulya", "Merve"]
let maleUsers = ["Ahmet", "Hasan", "Mehmet"] 

items.unshift(femaleUsers)
console.log(items)

items.push(maleUsers)
console.log(items)

console.log(items[0].length) 
console.log(items[0][0]) // femaleUsers ilk eleman

// Array icerisinden oge ayırmak -> splice(pos, item)
let newItems = items.splice(1, 5)
console.log("newItems: ",newItems)
console.log("items: ",items)

// Array icerisindeki ögenin index bilgisini bulmak - indexOf(value)
items.unshift("lorem")
items.push("ipsum")
console.log(items.indexOf("ipsum"))

// Array kopyalama -> slice, [...ES6]
let copyItems = items
console.log(items)

copyItems.pop() 
console.log("copyItems", copyItems)
console.log("items", items)

console.log("Slice işleminden sonra (kopyalandıktan sonra)")
copyItems = items.slice()
copyItems.pop() 
console.log("copyItems", copyItems)
console.log("items", items)


let es6Items = [...items] // slice yerine kullanılır ki react'ta çoğunlukla bu kullanılır.
console.log(es6Items)

let allUsers = [...femaleUsers, ...maleUsers] // es6 array birleştirmek
console.log(allUsers) 

// Tüm bilgileri stringe çevirmek
console.log(allUsers.toString())
console.log(allUsers.join(" --- ")) 

// istediğimiz index bilgisine göre öğe eklemek
allUsers.splice(allUsers.length - 1, 0, "Melissa")
allUsers.splice(Math.floor(allUsers.length / 2), 0, "Lorem")
console.log(allUsers) 












