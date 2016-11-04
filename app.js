const log = value => {
    console.log(value)
    return value
}

const write = value => {
    document.body.innerHTML += `<div>${value}</div>`
    return value
}

const c3po = value => fetch('23ataw3taw3t')
    .then(res => res.json())
    .then(body => `${value}, ${body.name}`)

const wait = value => {
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(value)
        },1000)
    })
}

const run = async function(){
    const {name:luke} = await fetch('http://swapi.co/api/people/1/')
        .then(res => res.json())

    log(luke)

    await wait()

    write(luke)

    const {name:c3po} = await fetch('http://swapi.co/api/people/2/')
        .then(res => res.json())

    const names = `${luke}, ${c3po}`

    log(names)

    await wait()

    write(names)

}
run()
