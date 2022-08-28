import './App.css';
import {HeaderContainer} from "./Components/Header/HeaderContainer";
import { Route, Routes } from "react-router";
import {ContentBoxContainer} from "./Components/ContentBox/ContentBoxContainer";
import {FilmDescriptionContainer} from "./Components/ContentBox/FilmDescription/FilmDescriptionContainer";

function App() {
    return (
        <div className={'Gap'}>
            <div className={'App'}>


                <HeaderContainer className={'Header'}/>


                <Routes>
                    <Route path="" element={ <ContentBoxContainer className={'MainArea'}/>} />
                    <Route path="/film/*" element={< FilmDescriptionContainer/>} />}
                </Routes>

            </div>
        </div>


    );
}

export default App;
