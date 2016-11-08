const log = value => {
    console.log(value)
    return value
}

const write = value => {
    document.body.innerHTML += `<div>${value}</div>`
    return value
}

const wait = value => {
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(value)
        },1000)
    })
}

const waitRandom = value => {
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(value)
        },Math.random() * 2000)
    })
}

const run = async function(){
    const people = await [3,1,2,4,5].reduce(async (promise, num)=>{
        const acc = await promise

        const person = await fetch(`http://swapi.co/api/people/${num}/`)
            .then(res => res.json())

        return await Promise.resolve([...acc, person])
    }, Promise.resolve([]))

    const names = people.map(person => person.name)

    console.log(names)
}
run()
