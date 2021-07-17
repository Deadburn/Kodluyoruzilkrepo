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

let userName

while(!userName){
    userName = prompt("Kullanıcı adını giriniz: ")
    console.log(userName)
}