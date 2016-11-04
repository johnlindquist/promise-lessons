const log = value => {
    console.log(value)
    return value
}

const write = value => {
    document.body.innerHTML += `<div>${value}</div>`
    return value
}

const john = value => `${value}, John`

Promise.resolve('Hello')
    .then(log)
    .then(write)
    .then(john)
    .then(log)
    .then(write)
