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

const run = async function(){
    const peoplePromises = [1,2,3,4,5].map(num =>
        fetch(`http://swapi.co/api/people/${num}/`)
            .then(res => res.json())
    )

    const people = await Promise.all(peoplePromises)

    const names = people.map(person => person.name)

    log(names)
}
run()
