import './App.css';
import {Navigate, Route, Routes, useNavigate} from 'react-router-dom';
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
import {authConfig, localStorageNames} from "../../utils/config";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import {moviesApi} from "../../utils/MoviesApi";
import {convertMovieData} from "../../utils/movies";

function App() {
    const navigate = useNavigate();

    const [isLoggedIn, setIsLoggedIn] = useState(() => getInitLoginState());
    const [isNavPopupOpened, setIsNavPopupOpened] = useState(false);
    const [isShowPreloader, setIsShowPreloader] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [responseInfo, setResponseInfo] = useState({isError: false, message: ''});

    const [searchQuery, setSearchQuery] = useState(() => localStorage.getItem(localStorageNames.searchQuery) || '');
    const [isShortFilms, setIsShortFilms] = useState(() => JSON.parse(localStorage.getItem(localStorageNames.isShortFilms) || false));
    const [allMovies, setAllMovies] = useState(() => JSON.parse(localStorage.getItem(localStorageNames.allMovies) || '[]'));
    const [savedMovies, setSavedMovies] = useState(() => JSON.parse(localStorage.getItem(localStorageNames.savedMovies) || '[]'));
    const [filteredMovies, setFilteredMovies] = useState(() => JSON.parse(localStorage.getItem(localStorageNames.filteredMovies) || '[]'));

    function getInitLoginState() {
        const token = localStorage.getItem(localStorageNames.token);
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
                    mainApi.removeToken();
                    localStorage.removeItem(localStorageNames.token);
                    return false
                })
        } else {
            return false
        }
    }

    function resetApiInfo() {
        setResponseInfo({isError: false, message: ''})
    }

    function setApiError(err) {
        setResponseInfo({isError: true, message: err})
    }

    function setApiMessage(msg){
        setResponseInfo({isError: false, message: msg})
    }

    function handleBurgerMenuClick() {
        setIsNavPopupOpened(true)
    }

    function handleNavPopupClose() {
        setIsNavPopupOpened(false)
    }

    function handleRegister({email, password, name}) {
        resetApiInfo();
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
        resetApiInfo();
        setIsShowPreloader(true);
        mainApi
            .login({email, password})
            .then((data) => {
                localStorage.setItem(localStorageNames.token, data.token);
                mainApi.setToken(data.token);
                setIsLoggedIn(true);
                navigate(authConfig.endpoints.successLogin, {replace: true});
            })
            .then(() => getInitLoginState())
            .catch((error) => {
                setApiError(error.message)
            })
            .finally(() => {
                setIsShowPreloader(false);
            });
    }

    function handleLogout() {
        setIsLoggedIn(false);
        setCurrentUser({});
        setSavedMovies([]);
        setAllMovies([]);
        setFilteredMovies([]);
        setIsShortFilms(false);
        setSearchQuery('');
        localStorage.clear();
        navigate('/', {replace: true});
    }

    function handleEditProfile({email, name}) {
        setIsShowPreloader(true);
        resetApiInfo();
        mainApi
            .editProfile({email, name})
            .then(() => {
                setCurrentUser({email, name});
                setApiMessage('Данные успешно изменены')
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
            .then((movies) => setSavedMovies(movies))
            .catch((err) => console.log(err))
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
        if (isLoggedIn && allMovies.length < 1) {
            setIsShowPreloader(true)
            Promise.all(
                [fetchAllMovies(), fetchSavedMovies()]
            )
                .finally(() => setIsShowPreloader(false))
        }
    }, [isLoggedIn])

    useEffect(() => {
        const filter = (arr) => arr.filter((movie) => {
            let keep = movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase());
            if (isShortFilms) {
                keep = keep && movie.duration <= 40
            }
            return keep
        })
        setFilteredMovies(filter(allMovies))
    }, [searchQuery, isShortFilms, allMovies])

    useEffect(() => {
            if (isShortFilms !== undefined) {
                localStorage.setItem(localStorageNames.isShortFilms, isShortFilms.toString())
            }
            if (searchQuery !== undefined) {
                localStorage.setItem(localStorageNames.searchQuery, searchQuery.toString())
            }
            if (allMovies !== undefined) {
                localStorage.setItem(localStorageNames.allMovies, JSON.stringify(allMovies))
            }
            if (savedMovies !== undefined) {
                localStorage.setItem(localStorageNames.savedMovies, JSON.stringify(savedMovies))
            }
            if (filteredMovies !== undefined) {
                localStorage.setItem(localStorageNames.filteredMovies, JSON.stringify(filteredMovies))
            }
        },
        [isShortFilms, searchQuery, allMovies, savedMovies, filteredMovies])

    return (
        <div className='app'>
            <AuthUserContext.Provider value={{isLoggedIn}}>
                <CurrentUserContext.Provider value={currentUser}>
                    <Routes>
                        {!isLoggedIn ?
                            (<>
                                <Route path='/signup'
                                       element={<Register responseInfo={responseInfo} onRegisterSubmit={handleRegister}/>}/>
                                <Route path='/signin'
                                       element={<Login responseInfo={responseInfo} onLoginSubmit={handleLogin}/>}/>
                            </>) :
                            (<>
                                <Route path='/signin' element={<Navigate to='/'/>}/>
                                <Route path='/signup' element={<Navigate to='/'/>}/>
                            </>)
                        }
                        <Route path='/profile' element={
                            <ProtectedRoute
                                element={Profile}
                                onBurgerMenuClick={handleBurgerMenuClick}
                                onEditSubmit={handleEditProfile}
                                onSignOutClick={handleLogout}
                                responseInfo={responseInfo}
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
