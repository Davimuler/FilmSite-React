import React from "react";
import S from './SortSelector.module.css'


class SortSelector extends React.Component {
    state = {
        currentSort:'По популярности'
    }
    getSort=(e)=>{
        this.setState({currentGenre: e.target.value})
        this.props.UpdateSorting(e.target.value)
    }
    render() {
        return <div >
            <select onChange={(e)=>{this.getSort(e)}} className={S.selector} value={this.state.currentGenre}>
                <option className={S.selectorItem}>По популярности</option>
                <option className={S.selectorItem}>По новизне</option>
            </select>
        </div>

    }
}

export default SortSelector