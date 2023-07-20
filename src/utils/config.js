const moviesApiCConfig = {
    url: 'https://api.nomoreparties.co'
}

const mainApiCConfig = {
    url: 'https://api.egerix.nomoredomains.monster'
}

const authConfig = {
    endpoints: {
        login: '/signin',
        register: '/signup',
        successLogin: '/movies',
    }
}

const localStorageNames = {
    token: 'jwt',
    isShortFilms: 'isShortFilms',
    searchQuery: 'searchQuery',
    allMovies: 'allMovies',
    savedMovies: 'savedMovies',
    filteredMovies: 'filteredMovies',
}

export {
    moviesApiCConfig,
    mainApiCConfig,
    authConfig,
    localStorageNames,
}
