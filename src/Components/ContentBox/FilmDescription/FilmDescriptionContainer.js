import {connect} from "react-redux";
import FilmDescription from "./FilmDescription";
import {getSortedFilms} from "../../../Redux/filmsSelectors";

const mapStateToProps = (state) => {
    return {
        filmsData:state.Films.filmsData
    }
}


export const FilmDescriptionContainer = connect(mapStateToProps,)(FilmDescription)