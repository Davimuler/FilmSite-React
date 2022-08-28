import React from "react";
import S from './FilmsBox.module.css'
import FilmItem from "./FilmItem/Film";
import {NavLink} from "react-router-dom";

const NoResult=(props)=>{
    return<div className={S.noResult}>
      Ничего не найдено из запроса "{props.filmSearch}"
    </div>
}


class FilmsBox extends React.Component {




    render() {
        // console.log(this.searchedFilms(this.props.filmsData))
        return <div className={S.BoxArea}>
            {!this.props.filmsData.length?<NoResult filmSearch={this.props.filmSearch} />:this.props.filmsData.map(f=> <NavLink  className={S.film} to={'/film/'+f.id}><FilmItem id={f.id} name={f.name} year={f.year} genre={f.genre} /></NavLink>)}
        </div>
    }
}
export default FilmsBox
