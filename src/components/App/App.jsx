import './App.css';
import {Route, Routes, useNavigate} from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';
import {useEffect, useState} from "react";
import NavPopup from "../NavPopup/NavPopup";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import Footer from "../Footer/Footer";
import {CurrentUserContext} from '../../contexts/CurrentUserContext'
import {AuthUserContext} from '../../contexts/AuthUserContext'
import Preloader from "../Preloader/Preloader";
import {mainApi} from "../../utils/MainApi";
import {authConfig} from "../../utils/config";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import {moviesApi} from "../../utils/MoviesApi";
import {convertMovieData} from "../../utils/movies";

function App() {
    const navigate = useNavigate();

    const [isLoggedIn, setIsLoggedIn] = useState(() => getInitLoginState());
    const [isNavPopupOpened, setIsNavPopupOpened] = useState(false);
    const [isShowPreloader, setIsShowPreloader] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [apiError, setApiError] = useState('');

    const [isShortFilms, setIsShortFilms] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const [allMovies, setAllMovies] = useState([]);
    const [savedMovies, setSavedMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);

    function getInitLoginState() {
        const token = localStorage.getItem(authConfig.tokenStorageName);
        if (token) {
            return mainApi
                .setToken(token)
                .getUser()
                .then((data) => {
                    setCurrentUser({
                        id: data._id,
                        name: data.name,
                        email: data.email,
                    })
                    return true;
                })
                .catch(() => {
                    localStorage.removeItem(authConfig.tokenStorageName);
                    return false
                })
        } else {
            return false
        }
    }

    function resetApiError() {
        setApiError('')
    }

    function handleBurgerMenuClick() {
        setIsNavPopupOpened(true)
    }

    function handleNavPopupClose() {
        setIsNavPopupOpened(false)
    }

    function handleRegister({email, password, name}) {
        resetApiError();
        setIsShowPreloader(true);
        mainApi
            .register({email, password, name})
            .then(() => {
                handleLogin({email, password});
            })
            .catch((error) => {
                setApiError(error.message);
            })
            .finally(() => {
                setIsShowPreloader(false);
            });
    }

    function handleLogin({email, password}) {
        resetApiError();
        setIsShowPreloader(true);
        mainApi
            .login({email, password})
            .then((data) => {
                localStorage.setItem(authConfig.tokenStorageName, data.token);
                mainApi.setToken(data.token);
                setIsLoggedIn(true);
                setCurrentUser({
                    email: data.email,
                    name: data.name,
                });
                navigate(authConfig.endpoints.successLogin);
            })
            .catch((error) => {
                setApiError(error.message)
            })
            .finally(() => {
                setIsShowPreloader(false);
            });
    }

    function handleLogout() {
        localStorage.removeItem(authConfig.tokenStorageName);
        setIsLoggedIn(false);
        setCurrentUser({});
        navigate('/', {replace: true});
    }

    function handleEditProfile({email, name}) {
        setIsShowPreloader(true);
        resetApiError();
        mainApi
            .editProfile({email, name})
            .then(() => {
                setCurrentUser({email, name});
            })
            .catch((error) => {
                setApiError(error.message)
            })
            .finally(() => {
                setIsShowPreloader(false);
            });
    }

    function handleSaveMovie(movie) {
        setIsShowPreloader(true);
        mainApi
            .saveMovie(movie)
            .then((movie) => {
                setSavedMovies([movie, ...savedMovies]);
            })
            .catch((error) => console.log(error))
            .finally(() => {
                setIsShowPreloader(false);
            });
    }

    function handleDeleteMovie({movieId}) {
        setIsShowPreloader(true);
        const removeMovie = savedMovies.find((el) => el.movieId === movieId)
        mainApi
            .deleteMovie(removeMovie._id)
            .then(() => {
                setSavedMovies(savedMovies.filter((movie) => movie !== removeMovie));
            })
            .catch((error) => console.log(error))
            .finally(() => {
                setIsShowPreloader(false);
            });
    }

    function handleSearch(query) {
        setSearchQuery(query)
    }

    function handleCheckBox(checked) {
        setIsShortFilms(checked)
    }

    function fetchSavedMovies() {
        return mainApi
            .getSavedMovies()
            .then((movies) => {
                setSavedMovies(movies)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function fetchAllMovies() {
        return moviesApi
            .getMovies()
            .then((movies) => {
                const convertedMovies = movies.map((movie) => convertMovieData(movie))
                setAllMovies(convertedMovies)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        if (isLoggedIn) {
            setIsShowPreloader(true)
            Promise.all(
                [fetchAllMovies(), fetchSavedMovies()]
            ).finally(() => setIsShowPreloader(false))
        }
    }, [isLoggedIn])

    useEffect(() => {
        const filter = (arr) => arr.filter((movie) => {
            let keep = movie.nameRU.toLowerCase().includes(searchQuery);
            if (isShortFilms) {
                keep = keep && movie.duration <= 40
            }
            return keep
        })

        setFilteredMovies(filter(allMovies))
    }, [searchQuery, isShortFilms])

    return (
        <div className='app'>
            <AuthUserContext.Provider value={{isLoggedIn}}>
                <CurrentUserContext.Provider value={currentUser}>
                    <Routes>
                        <Route path='/signup'
                               element={<Register apiError={apiError} onRegisterSubmit={handleRegister}/>}/>
                        <Route path='/signin' element={<Login apiError={apiError} onLoginSubmit={handleLogin}/>}/>
                        <Route path='/profile' element={
                            <ProtectedRoute
                                element={Profile}
                                onBurgerMenuClick={handleBurgerMenuClick}
                                onEditSubmit={handleEditProfile}
                                onSignOutClick={handleLogout}
                                apiError={apiError}
                            />
                        }/>
                        <Route path='/' element={
                            <>
                                <Header color='green'/>
                                <Promo/>
                                <Main/>
                                <Footer/>
                            </>
                        }/>
                        <Route path='/movies' element={
                            <ProtectedRoute
                                element={Movies}
                                searchQuery={searchQuery}
                                isShortFilms={isShortFilms}
                                onBurgerMenuClick={handleBurgerMenuClick}
                                movies={filteredMovies}
                                savedMovies={savedMovies}
                                onCheckbox={handleCheckBox}
                                onSearch={handleSearch}
                                onDelete={handleDeleteMovie}
                                onSave={handleSaveMovie}
                            />
                        }/>
                        <Route path='/saved-movies' element={
                            <ProtectedRoute
                                element={SavedMovies}
                                searchQuery={searchQuery}
                                isShortFilms={isShortFilms}
                                onBurgerMenuClick={handleBurgerMenuClick}
                                movies={filteredMovies}
                                savedMovies={savedMovies}
                                onCheckbox={handleCheckBox}
                                onSearch={handleSearch}
                                onDelete={handleDeleteMovie}
                                onSave={handleSaveMovie}
                            />
                        }/>
                        <Route path='*' element={<NotFound/>}/>
                    </Routes>
                    <NavPopup isPopupOpened={isNavPopupOpened} onPopupCloseClick={handleNavPopupClose}/>
                    {isShowPreloader && <Preloader/>}
                </CurrentUserContext.Provider>
            </AuthUserContext.Provider>
        </div>
    );
}

export default App;
