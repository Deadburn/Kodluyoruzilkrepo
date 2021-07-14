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

