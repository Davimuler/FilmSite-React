const UPDATE_USD = "UPDATE-USD";
const UPDATE_FILM_SEARCH="UPDATE-FILM-SEARCH"

let InitialState = {
apd:123,
    filmSearch:'',
}

const HeaderReducer = (state = InitialState, action) => {
    switch (action.type) {
        case UPDATE_USD: {

            return {...state, usd: action.usd}

        }
        case UPDATE_FILM_SEARCH:{
            return {...state,filmSearch:action.filmSearch}
        }

        default:
            return state;
    }
};
export const UpdateUSD = (usd) => ({type: UPDATE_USD, usd});
export const UpdateFilmSearch = (filmSearch) => ({type: UPDATE_FILM_SEARCH, filmSearch});

export default HeaderReducer