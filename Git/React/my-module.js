export default (name) => {
    console.log(`hello ${name}`)
}

const topla = (a,b) =>  a + b;
const cikar = (a,b) =>  a - b;

const text = 'Text';
const user = {
    name: "Cihan",
    surname: "Alıcı"
}

const users = [{
    name: 'Ahmet',
    surname: 'Tarık',
},
{
    name: "Tayfun",
    surname: "Hedef",
},
]

export {
    topla,
    cikar,
    text,
    user,
    users
}

