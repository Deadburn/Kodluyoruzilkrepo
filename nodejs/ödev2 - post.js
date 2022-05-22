const posts = [
    {id: 1, name: "name1", post: "post1"},
    {id: 2, name: "name2", post: "post2"},
    {id: 3, name: "name3", post: "post3"},
]


const listPosts = () => {
    posts.map((post) => {
        console.log(post.name)
    })
}


const addPost = (newPost) => {
    const promise = new Promise((resolve, reject) => {
        posts.push(newPost)
        resolve(posts)
        reject("Bir hata oluştu")
    })

    return promise
}


async function showPosts() {
    try {
        await addPost({id: 4, name: "name4", post: "post4"})
        listPosts()
    } catch (error) {
        console.log(error)
    }
}


showPosts()