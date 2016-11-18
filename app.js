import {Observable} from 'rxjs'

const ids = [4, 7, 9, 10]
const api =
    end =>
    type =>
    id =>
        Observable.ajax(`${end}/${type}/${id}/`)
            .map(ajaxResponse => ajaxResponse.response)

const starWars = api(`https://starwars.egghead.training`)
const peopleApi = starWars('people')
const filmsApi = starWars('films')

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
        .concatMap(filmsApi)
        .map(film => ({name: person.name, title: film.title}))


const formatGroup = group => group.reduce((acc, {name, title}) => (
    {
        name,
        titles: [title, ...acc.titles]
    }
), {name: '', titles: []})


Observable.from(ids)
    .concatMap(peopleApi)
    .concatMap(loadFilms)
    .groupBy(({name}) => name)
    .mergeMap(formatGroup)
    .subscribe(writePerson)
