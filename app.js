const log = value => {
    console.log(value)
    return value
}

const write = value => {
    document.body.innerHTML += `<div>${value}</div>`
    return value
}

const c3po = value => fetch('http://swapi.co/api/people/2/')
    .then(res => res.json())
    .then(body => `${value}, ${body.name}`)

const wait = value => {
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(value)
        },1000)
    })
}

fetch('http://swapi.co/api/people/1/')
    .then(res => res.json())
    .then(body => body.name)
    .then(log)
    .then(wait)
    .then(write)
    .then(wait)
    .then(c3po)
    .then(log)
    .then(wait)
    .then(write)
