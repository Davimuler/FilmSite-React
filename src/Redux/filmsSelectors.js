import {createSelector} from "reselect";

const searchedFilms=(Films,filmSearch)=>{
    let searched=Films.filter(film=>{
        return film.name.toLowerCase().includes(filmSearch.toLowerCase())
    })
    return searched
}

const getFilms = (state) => {
    return  getSortedFilms(state.Films.filmsData,state.Films.sorting)
}
export const getSortedFilms=(Films,sorting)=>{
    switch (sorting)
    {
        case 'По популярности' :{
            return Films.sort((a,b)=>{
                if(a.rate>b.rate) return -1
                if(a.rate<b.rate) return 1
                if(a.rate=b.rate) return 0
            })
        }
        case 'По новизне':{
            return Films.sort((a,b)=>{
                if(a.year>b.year) return -1
                if(a.year<b.year) return 1
                if(a.year=b.year) return 0
            })
        }
    }

}
const getSorting = (state) => {
    return state.Films.sorting;
}
const getFilters = (state) => {
    const filters = {
        genre: state.Films.genre,
        country: state.Films.country,
        year: state.Films.year,
        filmSearch:state.Header.filmSearch
    }
    return filters
}
const getYearFiltered = (Films, filters) => {
    switch (filters) {
        case '2022':
        case '2021':
        case '2020': {
            return Films.filter(f => f.year == filters)
        }
        case '2015-2019': {
            return Films.filter(f => f.year > 2014 && f.year < 2020)
        }
        case '2010-2014': {
            return Films.filter(f => f.year > 2009 && f.year < 2015)
        }
        case '2000-е и ранее': {
            return Films.filter(f => f.year < 2010)
        }
        default : {
            return Films
        }
    }
}
const getGenreFiltered = (Films, filters) => {
    if (filters != 'Жанр') {
        return Films.filter(f => f.genre == filters)
    } else {
        return Films
    }
}
const getCountryFiltered = (Films, filters) => {
    if (filters != 'Страна') {
        return Films.filter(f => f.country == filters)

    } else {
        return Films
    }
}

export let getFilmsSelector = createSelector(getFilms, getFilters, (Films, filters) => {


    let yearFiltered = getYearFiltered(Films, filters.year)
    let genreFiltered = getGenreFiltered(yearFiltered, filters.genre)
    let countryFiltered = getCountryFiltered(genreFiltered, filters.country)
    let searched=searchedFilms(countryFiltered,filters.filmSearch)
    return searched
})
