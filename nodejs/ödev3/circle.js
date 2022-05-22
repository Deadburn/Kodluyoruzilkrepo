const circleArea = (r) => {
    const area = Math.floor(Math.PI * r * r)
    console.log(`Area: ${area}`)
}


const circleCircumference = (r) => {
    const circumference = Math.floor(2 * Math.PI * r)
    console.log(`Circumference: ${circumference} `)
}

module.exports = {
    circleArea,
    circleCircumference
}