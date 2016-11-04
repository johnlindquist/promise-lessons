const log = value => {
    console.log(value)
    return value
}

const write = value => {
    document.body.innerHTML += `<div>${value}</div>`
    return value
}

const john = value => `${value}, John`

const wait = value => {
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(value)
        },1000)
    })
}

Promise.resolve('Hello')
    .then(log)
    .then(wait)
    .then(write)
    .then(wait)
    .then(john)
    .then(log)
    .then(wait)
    .then(write)
