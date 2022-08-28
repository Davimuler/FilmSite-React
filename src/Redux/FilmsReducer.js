const UPDATE_CURRENT_FILM_ID = "UPDATE-CURRENT-FILM-ID";
const UPDATE_GENRE="UPDATE-GENRE"
const UPDATE_COUNTRY="UPDATE-COUNTRY"
const UPDATE_YEAR="UPDATE-YEAR"
const UPDATE_SORTING="UPDATE-SORTING"



let InitialState = {
    sorting:'По популярности',
    FilmsCount: 20,
    genre: 'Жанр',
    country: 'Страна',
    year: 'Год',
    currentPage: 1,
    currentFilmId:null,
    filmsData: [
        {name: 'Удача', year: 2022, genre: 'мультфильм', country: 'Испания', rate: 9.6, id:1},
        {name: 'Пеле', year: 2021, genre: 'биография', country: 'Великобритания', rate: 8.9, id:2},
        {name: 'Грейхаунд', year: 2020, genre: 'военный', country: 'США', rate: 8.8, id:3},
        {name: 'Великий', year: 2020, genre: 'драма', country: 'США', rate: 7.9, id: 4},
        {name: 'Мавританец', year: 2021, genre: 'трилер', country: 'США', rate: 8.7, id:5},
        {name: 'Стажер', year: 2015, genre: 'драма', country: 'США', rate: 9.1, id: 6},
        {name: 'Век Адалин', year: 2015, genre: 'драма', country: 'США', rate: 8.8, id:7},
        {name: 'Семь жизней', year: 2008, genre: 'драма', country: 'США', rate: 9.2, id: 8},
        {name: 'Начало', year: 2010, genre: 'трилер', country: 'Великобритания', rate: 9.9, id: 9},
        {name: 'Джон Картер', year: 2012, genre: 'боевик', country: 'США', rate: 8.5, id: 10},
        {name: 'Защитник', year: 2012, genre: 'боевик', country: 'США', rate: 8.2, id: 11},
        {name: 'Назад в будущее', year: 1985, genre: 'приключения', country: 'Испания', rate: 9.3, id: 12},
        {name: 'Побег из Шоушэнка', year: 1994, genre: 'драма', country: 'США', rate: 9.9, id: 13},
        {name: 'Троя', year: 2004, genre: 'боевик', country: 'США', rate: 9.4, id: 14},
        {name: 'Джентельмены', year: 2019, genre: 'боевик', country: 'США', rate: 8.7, id: 15},
        {name: 'Форд против Феррари', year: 2019, genre: 'драма', country: 'Испания', rate: 8.6, id: 16},
        {name: 'Форсаж', year: 2001, genre: 'боевик', country: 'США', rate: 9.2, id: 17},
        {name: '1+1', year: 2011, genre: 'драма', country: 'Испания', rate: 9.5, id: 18},
        {name: 'Крепкий орешек', year: 1988, genre: 'боевик', country: 'США', rate: 8.9, id: 19},
        {name: 'Титаник', year: 1997, genre: 'драма', country: 'США', rate: 9.9, id: 20}
    ],

}

const HeaderReducer = (state = InitialState, action) => {
    switch (action.type) {
        case UPDATE_CURRENT_FILM_ID: {
            return {...state,currentFilmId:action.id}
        }
        case UPDATE_GENRE: {
            return {...state,genre:action.genre}
        }
        case UPDATE_COUNTRY: {
            return {...state,country:action.country}
        }
        case UPDATE_YEAR: {
            return {...state,year:action.year}
        }
        case UPDATE_SORTING: {
            return {...state,sorting:action.sorting}
        }

        default:
            return state;
    }
};
export const UpdateCurrentFilmId = (id) => ({type: UPDATE_CURRENT_FILM_ID, id});
export const UpdateGenre = (genre) => ({type: UPDATE_GENRE, genre});
export const UpdateCountry = (country) => ({type: UPDATE_COUNTRY, country});
export const UpdateYear = (year) => ({type: UPDATE_YEAR, year});
export const UpdateSorting = (sorting) => ({type: UPDATE_SORTING, sorting});


export default HeaderReducer