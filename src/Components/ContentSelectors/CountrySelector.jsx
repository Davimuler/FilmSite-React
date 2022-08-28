import React from "react";
import S from "./GenreSelector/genre.module.css"


class CountrySelector extends React.Component {
    state = {
        currentCountry:'Страна'
    }
    getCountry=(e)=>{
        this.setState({currentCountry: e.target.value})
        this.props.UpdateCountry(e.target.value)
    }
    render() {

        return <div>
            <select onChange={(e)=>{this.getCountry(e)}} className={S.selector} value={this.state.currentCountry}>
                <option className={S.selectorItem}>Страна</option>
                <option className={S.selectorItem}>США</option>
                <option className={S.selectorItem}>Франция</option>
                <option className={S.selectorItem}>Германия</option>
                <option className={S.selectorItem}>Испания</option>
            </select>

        </div>

    }
}

export default CountrySelector