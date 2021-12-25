console.log("hello")

let users = ["Lorem", "Ipsum", "Dolor"]
 
// for( let index = 0; index < 10; index++){
//     console.log(index)
// }

// let index = 0 
// for (; index < 0; index++){
//     console.log(index)
// }

// const userListDOM = document.querySelector('#userList')
// let index = 0
// for(index= 0; index < users.length; index++){
//     const liDOM = document.createElement('li')
//     liDOM.innerHTML = users[index]
//     userListDOM.appendChild(liDOM)
// }

// let stringDizi = "javasriptloops"

// const sesli = ["a","e","i","o","u"]
// const arr = stringDizi.split("")
// let yakalananSesliler = []
// let sessizler = []

// for(let i in arr){
//     if(sesli.includes(arr[i])){
//         yakalananSesliler.push(arr[i])
//     } else {
//         sessizler.push(arr[i])
//     }
// }

// console.log(yakalananSesliler.join('\n') + '\n' + sessizler.join('\n'))

 const LOREM_LIST = [
    'lorem', 'ipsum', 'dolor', 'amet', 'consectetur', 'adipisicing', 'elit'
 ]

//let counter = 0

// for(; counter < 10; counter++){
//     if(counter === 5) {break}
//     console.log(counter)
// }

// for(; counter < 10; counter++){
//     if(counter === 5) {continue}
//     console.log(counter)
// }


//const UL_DOM = document.querySelector('#userList')

// let index = 0
// for(; index < LOREM_LIST.length; index++){
//     if(LOREM_LIST[index] == "dolor") {break}
//     let LI_DOM = document.createElement('li')
//     LI_DOM.innerHTML = LOREM_LIST[index]
//     UL_DOM.appendChild(LI_DOM)
// }

// let index = 0
// for(; index < LOREM_LIST.length; index++){
//     if(LOREM_LIST[index] == "dolor") {continue}
//     let LI_DOM = document.createElement('li')
//     LI_DOM.innerHTML = LOREM_LIST[index]
//     UL_DOM.appendChild(LI_DOM)
// }

// let counter = 0
// while(counter < 10){
//     console.log(counter)
//     counter++
// }

// let userName

// while(!userName){
//     userName = prompt("Kullanıcı adını giriniz: ")
//     console.log(userName)
// }


// const PRODUCTS = ["Laptop", "Phone", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"]
// //PRODUCTS.forEach((product, index, array) => array[index] = product + " 111" )
// PRODUCTS.forEach((product, index, array) => array[index] = `${product.toUpperCase()}` )

// console.log(PRODUCTS)


// const userListDOM = document.querySelector('#userList')
// PRODUCTS.forEach((item) => {
//     const liDOM = document.createElement('li')
//     liDOM.innerHTML = item
//     userListDOM.append(liDOM)
// })

/************Filter (5 ve daha büyük olan itemler)*/
// const PRODUCTS = ["Mic", "Cable", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"]

// const NEW_PRODUCTS = PRODUCTS.filter(item => item.length > 5)
// console.log(NEW_PRODUCTS)

// // aktif kullanıcılar
// const USERS = [
//     {fullName: "Ayse Sumer", isActive: false},
//     {fullName: "Ahmet Urgan", isActive: true},
//     {fullName: "Asya Basar", isActive: true},
//     {fullName: "Aksel Durmaz", isActive: false},
// ]

// // aktif kullanıcılar
// const ACTIVE_USERS = USERS.filter(user => user.isActive)
// console.log(ACTIVE_USERS)

// const person = [{
//     name: "Adem",
//     age: 25,
//     languages: ["JavaScript", "CSS"],
//   },
//   {
//     name: "Oğuz",
//     age: 33,
//     languages: ["Java", "HTML"],
//     }
//   ];

// const Yasli = person.filter(kisi => kisi.age > 30)
// console.log(Yasli)

// const JS = person.filter(kisi => kisi.languages.includes("JavaScript"))
// console.log(JS)

const USERS = ["AYSE", "MehMet", "TugCE", "AkSEL"]

const NEW_USERS = USERS.map( user => user.toLocaleLowerCase())
console.log(NEW_USERS)

// const USERS_OBJ = USERS.map( item =>  
//     {
//         return {
//             userName: item, shortName: `${item[0]}.`, newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
//         }
//     }
// )

//  Return'un doğuşu
const USERS_OBJ = USERS.map( item =>  (
    {
      userName: item, shortName: `${item[0]}.`, newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
 
    })
)

console.log(USERS_OBJ)