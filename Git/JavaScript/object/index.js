// console.log("Nerde lan beynin")

// let arrayObj = [1, 2, 3]
// let object1 = { obj: 1 }

// console.log("arrayObj", typeof (arrayObj))
// console.log("object1", typeof (object1))

// let item1 = new Object()
// let item2 = {}
// console.log("item1", typeof (item1))
// console.log("item2", typeof (item2))

// // obje oluşturmak
// let item3 = {}
// let item4 = new Object()

// //console.log(object1)

// //let object1_1 = Object.create(object1)
// //console.log(object1_1.obj)

let laptop1 = {
  brand: "Apple",
  model: "Değmesin ellerimiz",
  "2kg": 2,
  modelName: "MacBook Pro",
};

console.log(laptop1);
// Dogru anahtar bilgisini oluşturmak

console.log(laptop1.brand, laptop1["brand"]);
console.log(laptop1.model, laptop1["model"]);
console.log(laptop1["2kg"]); // anca böyle ulaşabiliriz.

// Anahtar bilgisine değer eklemek
laptop1.brand = "Mac";
laptop1["brand"] = "PC";
console.log(laptop1);

// Yeni bilgi eklemek
laptop1.version = "10.15.12";
console.log(laptop1);

//  Anahrar bilgilerine ulaşmak
keys = Object.keys(laptop1);
console.log(keys);
console.log(Object.keys(laptop1));

keys.forEach((keyInfo) => {
  console.log(keyInfo);  // key
  console.log(laptop1[keyInfo]) //value
});

// Değer bilgilerine ulaşmak (values)
console.log(
    Object.values(laptop1)
)

let values = Object.values(laptop1)

values.forEach((valueInfo) => {
    console.log("value:", valueInfo); 
  });

/************** */
let setting = {
    password: 1234,
    userName: 'deadburn'
}



let user1 = {
    firstName: "Bilgin",
    lastName: "Uzman",
    score: [1, 2, 3, 4],
    isActive: true,
    shortName: function(){
        return `${this.firstName[0].toUpperCase()}.${this.lastName}`
    }
}

console.log(user1.shortName())

const fonksiyonAdi = () => {console.log("Merhaba Kodluyoruz")}
console.log(fonksiyonAdi.name);
// "fonksiyonAdi"



function Insan(isim,yas) {
    this.isim = isim;
    this.yas = yas;
  }
// Sınıfa prototype yardımıyla fonksiyon eklemek
Insan.prototype.yeniFonksiyon = () => {console.log("Merhaba Kodluyoruz")}
const ayse = new Insan("ayşe",22);
ayse.yeniFonksiyon();
// Output : "Merhaba Kodluyoruz"s

// Objeye prototype yardımıyla fonksiyon eklemek :
ayse.__proto__.enYeniFonksiyon = () => {
    console.log("Tekrardan Merhaba!")
}
ayse.enYeniFonksiyon()