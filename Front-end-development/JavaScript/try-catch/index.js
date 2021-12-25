let products;

// try {
//     products.forEach(item => console.log(item))
// } catch (error) {
//     console.log("error: " ,error)
//     products = [1, 2, 3]
//     products.forEach(item => console.log(item))
// }




// let info = "kodluyoruz"
// console.log(info)   

//let reverseStr = "1234"

function reverseStr(stringNum) {
    try {
      console.log(stringNum.split('').reverse().join(''))
    } catch (error) {
        console.log("error:", error)
        console.log(stringNum.toString().split('').reverse().join(''))
    }
}

reverseStr(Number(1234))

