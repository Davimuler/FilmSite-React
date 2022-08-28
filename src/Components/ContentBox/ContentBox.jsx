import React from "react";
import GenreSelector from "../ContentSelectors/GenreSelector/genre";
import S from './ContentBox.module.css'
import YearSelector from "../ContentSelectors/yearSelector";
import CountrySelector from "../ContentSelectors/CountrySelector";
import SortSelector from "../ContentSelectors/SortSelector";
import {FilmsContainer} from "./FilmsArea/FilmsContainer";


const ContentBox=(props)=>{
  return<div className={S.ContentBox}>

    <div className={S.selectors}>
      <span className={S.SelectorItem}><GenreSelector genre={props.genre} UpdateGenre={props.UpdateGenre}/></span>
      <span className={S.SelectorItem}> <YearSelector year={props.year} UpdateYear={props.UpdateYear}/></span>
      <span className={S.SelectorItem}><CountrySelector country={props.country} UpdateCountry={props.UpdateCountry}/>  </span>
      <span className={S.SortSelectorItem}><SortSelector sorting={props.sorting} UpdateSorting={props.UpdateSorting}/> </span>
  </div>
      <div className={S.films}>
    <FilmsContainer/>
      </div>

  </div>


}
export default ContentBox