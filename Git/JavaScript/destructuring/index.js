
let settings = {
    userName: "loremIpsum",
    password: "BadPassword",
    isActive: false,
    ip: "127.0.0.1",
    servernName: "kodluyoruz.org"
}

// obje içindeki bilgilerin tek seferde çıkarılması
// let userName = settings.userName
// console.log(userName)

let { userName: user, password: pass, isActive: active, ip, serverName: server} = settings

console.log(user, pass, active, ip, server)

// obje içindeki bazı bilgilerin çıkarılması
let {userName:user2, password:pass2, isActive:active2, ...newSettings} = settings
console.log(user2, pass2, active2)
console.log(newSettings)

// objenin destructuring ile kopyalanması

/**Hatalı  */
// let settings2 = settings
// settings2.userName = "Degisen Bilgi"
// console.log("settings", settings)
// console.log("settings2", settings2)

// Güzel, sardı...W sarıyor
let settings2 = {...settings}
settings2.userName = "Degisen Bilgi"
console.log("settings", settings)
console.log("settings2", settings2)

let score = [100, 200, 300, 400]

let [score1, score2, ...otherScore] = score
console.log(score1, score2, otherScore)

let copyOfScore = [...score]
console.log(copyOfScore)