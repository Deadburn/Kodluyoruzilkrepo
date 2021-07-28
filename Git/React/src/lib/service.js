import axios from 'axios'

async function getData(id){
   const user = await  axios(`https://jsonplaceholder.typicode.com/users/${id}`)

   const post = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${id}`) 

   console.log(user)
   console.log(post)
}

//getData(1)

export default getData