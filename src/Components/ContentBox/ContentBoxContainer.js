import {connect} from "react-redux";
import ContentBox from "./ContentBox";
import {UpdateCountry, UpdateGenre, UpdateSorting, UpdateYear} from "../../Redux/FilmsReducer";

const mapStateToProps = (state) => {
    return {
       genre:state.Films.genre,
        country:state.Films.country,
        year:state.Films.year,
        sorting:state.Films.sorting
    }
}


export const ContentBoxContainer = connect(mapStateToProps,{UpdateSorting,UpdateCountry,UpdateGenre,UpdateYear})(ContentBox)