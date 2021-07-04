function showName(){
    let name = prompt("isminiz?")

    let surname = prompt("soyisminiz")
    document.getElementById('myName').innerHTML = name + " " + surname

}
showName();

var days = [
    "pazar",
    "pazartesi",
    "salı",
    "carsamba",
    "persembe",
    "cuma",
    "cumartesi"
]

function showTime(){
    let date = new Date()
    console.log(date)
    document.getElementById('clock').textContent = date.toLocaleTimeString() + "            " + days[date.getDay()]
    setTimeout(showTime, 1000)
}

showTime()