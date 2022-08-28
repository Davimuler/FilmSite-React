import React from "react";
import S from "./Header.module.css"
import {NavLink} from "react-router-dom";
import SearchInput from "./FilmSearch/SearchInput";

const Header = (props) => {

    return <div className={S.Header}>
        <NavLink className={S.SiteName} to={''}>FilmSite</NavLink>
        <NavLink className={S.SiteName} to={''}>Главная</NavLink>
        <div className={S.Item}>ТОП-100</div>
        <div className={S.Item}>ТОП-50</div>
        <SearchInput filmSearch={props.filmSearch} UpdateFilmSearch={props.UpdateFilmSearch}/>
    </div>

}
export default Header