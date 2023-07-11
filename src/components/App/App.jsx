import './App.css';
import {Route, Routes} from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';
import {useState} from "react";
import NavPopup from "../NavPopup/NavPopup";


function App() {
    const [isNavPopupOpened, setIsNavPopupOpened] = useState(false);

    const handleBurgerMenuClick = () => setIsNavPopupOpened(true);
    const handleNavPopupClose = () => {
        setIsNavPopupOpened(false);
    };

    return (
        <div className='app'>
            <Routes>
                <Route path='/signup' element={<Register/>}/>
                <Route path='/signin' element={<Login/>}/>
                <Route path='/profile' element={<Profile
                    onBurgerMenuClick={handleBurgerMenuClick}
                />}/>
                <Route path='/' element={<Main/>}/>
                <Route path='/movies' element={<Movies
                    onBurgerMenuClick={handleBurgerMenuClick}
                />}/>
                <Route path='/saved-movies' element={<SavedMovies
                    onBurgerMenuClick={handleBurgerMenuClick}
                />}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
            <NavPopup isPopupOpened={isNavPopupOpened} onPopupCloseClick={handleNavPopupClose}/>
        </div>
    );
}

export default App;
