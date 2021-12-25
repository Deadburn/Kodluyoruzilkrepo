/*
const seriesList = list => {
    list.forEach((series, index) => {
        console.log(`${index+1}. ${series}`)
    })
}

seriesList(["Firefly","The Mandalorian","Breaking Bad"])


const newArray = (nums) => {
    const newNums = nums.map(e => {
        if(e%2==0){
            return e*2
        } else if(e%2==1){
            return e*3
        }
    })
    return newNums
}

console.log(newArray([1,2,3,4,5]))
*/

/***************************************DOM EVENTS**********************************/

// const color = document.querySelector("#select")
// color.addEventListener('change', selectBox)

// function selectBox(event){
//     console.log("Etkinlik tipi : " + event.type)
//     console.log("deger : " + event.target.value)
// }

/*
const selectBox = document.querySelector("#selectColor")
const button = document.querySelector("#button")
const form = document.querySelector(".inputText")
const cerceve = document.querySelector(".container")

selectBox.addEventListener('click', function(){
    console.log("selectBox")    
})

form.addEventListener('click', function(){
    console.log("form")    
})

cerceve.addEventListener('click', function(){
    console.log("cerceve")    
})
*/

/**********************Function Bölüm Sonu Egzersizi******************/ 

let counter = localStorage.getItem('counter') ? Number(localStorage.getItem('counter')) : 0
let counterDOM = document.querySelector('#counter')
let increaseDOM = document.querySelector('#increase')
let decreaseDOM = document.querySelector('#decrease')

counterDOM.innerHTML = counter

 
function clickEvent(){
    
    this.id === "increase" ? counter+= 1 : counter-= 1
    localStorage.setItem('counter', parseInt(counter))
    counterDOM.innerHTML = counter 
}

decreaseDOM.addEventListener("click", clickEvent)
increaseDOM.addEventListener("click", clickEvent)

