import React from "react";
import S from './Films.module.css'

const FilmItem = (props) => {
    return <div className={S.film}>
        <img className={S.img}
             src={'https://us.123rf.com/450wm/jagcz/jagcz1602/jagcz160200050/52004664-retro-film-production-accessories-still-life-concept-of-filmmaking-smoke-effect-on-background.jpg?ver=6'}/>
        <div>{props.name}</div>
        <div className={S.charact}>{props.year}, {props.genre}</div>
    </div>
}
export default FilmItem
