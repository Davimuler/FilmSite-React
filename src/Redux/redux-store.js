import {combineReducers, legacy_createStore} from "redux";
import HeaderReducer from './HeaderReducer'
import FilmsReducer from "./FilmsReducer";

let reducers = combineReducers({
 Header:HeaderReducer,
 Films:FilmsReducer
});
export let store = legacy_createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

