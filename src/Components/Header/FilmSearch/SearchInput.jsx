import React from "react";
import S from './Search.module.css'

class SearchInput extends React.Component {
    updateInputValue=(e)=>{
        this.props.UpdateFilmSearch(e.target.value)
    }
    render() {
        return <div className={S.Search}>
            <input onChange={(e)=>{this.updateInputValue(e)}} value={this.props.filmSearch} placeholder={'Название фильма...'}></input>
        </div>

    }
}

export default SearchInput