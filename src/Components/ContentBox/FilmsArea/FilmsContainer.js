import {connect} from "react-redux";
import FilmsBox from "./FilmsBox";
import {UpdateCurrentFilmId} from "../../../Redux/FilmsReducer";
import { getFilmsSelector} from "../../../Redux/filmsSelectors";


const mapStateToProps = (state) => {
    return {
        filmsData: getFilmsSelector(state),
        FilmsCount:state.Films.FilmsCount,
        currentFilmId:state.Films.currentFilmId,
        sorting:state.Films.sorting,
        filmSearch:state.Header.filmSearch
    }
}


export const FilmsContainer = connect(mapStateToProps,{UpdateCurrentFilmId})(FilmsBox)