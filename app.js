(async function(){
    const result = await Promise.resolve(10)
    document.body.innerHTML += `<h1>You waited for ${result}!</h1>`
})()