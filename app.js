import {Observable} from 'rxjs'

const peopleIds = [4, 7, 9, 10]

const writePersonWithFilms =
    person =>
        document.body.innerHTML += `
        <h2>${person.name}</h2>
        <ul>
            ${person.titles.map(title =>
            `<li>${title}</li>`).join('')
            }
        </ul>
    `

const api =
    url =>
        type =>
            id =>
                Observable.ajax(`${url}/${type}/${id}/`)
                    .map(ajaxResponse => ajaxResponse.response)

const starWars = api(`https://starwars.egghead.training`)
const peopleApi = starWars('people')
const filmsApi = starWars('films')


const loadIds =
    api =>
        ids =>
            Observable.from(ids)
                .mergeMap(api)

const groupTitlesWithPersonName =
    groupObs =>
        groupObs.reduce((acc, {name, title}) => (
            {
                name,
                titles: [title, ...acc.titles]
            }
        ), {name: '', titles: []})


const selectFilm =
    person =>
        film =>
            ({name: person.name, title: film.title})

const groupFilmByPersonName =
    ({name}) => name

const loadFilmsFromPerson =
    person =>
        loadIds(filmsApi)
        (person.films)
            .map(selectFilm(person))

loadIds(peopleApi)(peopleIds)
    .mergeMap(loadFilmsFromPerson)
    .groupBy(groupFilmByPersonName)
    .mergeMap(groupTitlesWithPersonName)
    .subscribe(writePersonWithFilms)
