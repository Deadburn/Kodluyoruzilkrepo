const users = [
{
    name:"Mehmet",
    age: 18
},
{
    name:"Mehmet",
    age: 23
},
{
    name:"Sevilay",
    age: 40,
},
]
/*
push
map
filter
find
some
every
includes
reduce(çok gördük)

*/

// users.push("Ayşe")
// users.push("Fatma")
// console.log(users)

// map

// users.map((item) => {
//     console.log(item.name)
// })


// find

// const result = users.find((item) => item.name === "Mehmet" && item.age > 20)
// console.log(result)

// filter

// const filtered = users.filter(
//     ({age}) => age < 30
// )
// console.log(filtered)


// some - sadece bir eleman şarta uysa yeter
// const some = users.some(item => item.age === 23)
// console.log(some)


// every - tüm elemanlar şarta uymalı
// const every = users.every(item => item.age > 15)
// console.log(every)


// includes
// const meyveler = ['elma', 'armut','erik']

// const isIncluded = meyveler.includes('armut')
// console.log(isIncluded)

// reduce

const removeDuplicates = (arr) => {
    arr = arr.reduce((acc, cur) => {
        if (acc.indexOf(cur) === -1){
            acc.push(cur)
        }
        return acc
    }, [])
    return arr
}

removeDuplicateValues(["o","t","o","th","th","t"])

let arr = [1, 2, 3]

const map = (array, callback) => {
    return array.reduce((acc, value) => {
        return [...acc, callback(value)]
    })
}

console.log(map([1, 2, 3], (v) => v + 1))