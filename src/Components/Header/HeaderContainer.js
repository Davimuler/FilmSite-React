import Header from "./Header";
import {connect} from "react-redux";
import {UpdateFilmSearch} from "../../Redux/HeaderReducer";


const mapStateToProps = (state) => {
    return {
        apd:state.Header.apd,
        filmSearch:state.Header.filmSearch
    }
}


export const HeaderContainer = connect(mapStateToProps,{UpdateFilmSearch})(Header)