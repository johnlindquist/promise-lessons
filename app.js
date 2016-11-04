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
    const peoplePromises = [1,2,3,4,5].map(num =>
        fetch(`http://swapi.co/api/people/${num}/`)
            .then(res => res.json())
            .then(waitRandom)
    )

    const person = await Promise.race(peoplePromises)

    log(person.name)
}
run()
