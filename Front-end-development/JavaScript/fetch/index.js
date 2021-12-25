

// fetch
// let userListDOM = document.querySelector("#userList")
  
// fetch("./settings.json")
//     .then(res => res.json())
//     .then(json => {
//         console.log(json)
//         console.log(json.userName)
//     })

// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(res => res.json())
//     .then(json => {
//         json.map(item => {
//             let liDOM  = document.createElement('li')
//             liDOM.innerHTML = item.title
//             userListDOM.appendChild(liDOM)
//         })
//     })


// POST Isteği atma
let payload = {
    title: "Blog Title",
    body: "lorem ipsum",
    userId: 1
}
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {"Content-type": "application/json; charset=UTF-8"}
})
.then(res => res.json())
.then(json => console.log(json))
.catch(err => console.log(err))