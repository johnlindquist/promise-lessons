const log = value => {
    console.log(value)
    return value
}

const write = value => {
    document.body.innerHTML += `<div>${value}</div>`
    return value
}


Promise.resolve('Hello, world!')
    .then(log)
    .then(write)