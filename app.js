import {Observable} from 'rxjs'

const ids = [4, 7, 9, 10]
const api = (type, id)=> Observable.ajax(`https://starwars.egghead.training/${type}/${id}/`)
    .map(ajaxResponse => ajaxResponse.response)

const writePerson = person =>
    document.body.innerHTML += `
        <h2>${person.name}</h2>
        <ul>
            ${person.titles.map(title =>
            `<li>${title}</li>`).join('')
            }
        </ul>
    `

const loadFilms = person =>
    Observable.from(person.films)
        .concatMap(id => api('films', id))
        .map(film => ({name: person.name, title: film.title}))


const formatGroup = group => group.reduce((acc, {name, title}) => (
    {
        name,
        titles: [title, ...acc.titles]
    }
), {name: '', titles: []})


Observable.from(ids)
    .concatMap(id => api('people', id))
    .concatMap(loadFilms)
    .groupBy(({name}) => name)
    .mergeMap(formatGroup)
    .subscribe(writePerson)
