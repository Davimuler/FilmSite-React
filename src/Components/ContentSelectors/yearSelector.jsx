import React from "react";
import S from "./GenreSelector/genre.module.css"


class YearSelector extends React.Component {
    state = {
        isSelecting:false,
    }
    getYearInfo=(e)=>{
        this.setState({currentGenre: e.target.value})
        this.props.UpdateYear(e.target.value)
    }
    render() {
        return <div >
            <select onChange={(e)=>{this.getYearInfo(e)}} className={S.selector} value={this.state.currentGenre}>
                <option className={S.selectorItem}>Год</option>
                <option className={S.selectorItem}>2022</option>
                <option className={S.selectorItem}>2021</option>
                <option className={S.selectorItem}>2020</option>
                <option className={S.selectorItem}>2015-2019</option>
                <option className={S.selectorItem}>2010-2014</option>
                <option className={S.selectorItem}>2000-е и ранее </option>
            </select>

        </div>

    }
}

export default YearSelector