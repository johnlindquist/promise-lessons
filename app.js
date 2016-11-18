const log = value => {
    console.log(value)
    return value
}

const write = value => {
    document.body.innerHTML += `<div>${value}</div>`
    return value
}

const run = async function(){
    const ids = [1,5,3,4,2]

    const people = []
    for (let i = 0; i < ids.length; i++) {
        const id = ids[i];
        const person = await fetch(`https://starwars.egghead.training/people/${id}/`)
            .then(res => res.json())
        people.push(person)
        write(person.name)
    }

    // people.map(p => p.name).forEach(write)

}
run()
