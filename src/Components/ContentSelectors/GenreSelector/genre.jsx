import React from "react";
import S from './genre.module.css'
import {UpdateGenre} from "../../../Redux/FilmsReducer";

class GenreSelector extends React.Component {
    state = {
        currentGenre:'Жанр'
    }
    getGenre=(e)=>{
        this.setState({currentGenre: e.target.value})
        this.props.UpdateGenre(e.target.value)
    }
    render() {
        return <div >
            <select onChange={(e)=>{this.getGenre(e)}} className={S.selector} value={this.state.currentGenre}>
                <option  className={S.selectorItem}>Жанр</option>
                <option className={S.selectorItem}>драма</option>
                <option className={S.selectorItem}>приключения</option>
                <option className={S.selectorItem}>боевик</option>
                <option className={S.selectorItem}>военный</option>
                <option className={S.selectorItem}>мультфильм</option>
                <option className={S.selectorItem}>биография</option>
                <option className={S.selectorItem}>трилер</option>
            </select>
        </div>

    }
}

export default GenreSelector