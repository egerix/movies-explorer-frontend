const moviesApiCConfig = {
    url: 'https://api.nomoreparties.co'
}

const mainApiCConfig = {
    url: 'https://api.egerix.nomoredomains.monster'
}

const authConfig = {
    tokenStorageName: 'jwt',
    endpoints: {
        login: '/signin',
        register: '/signup',
        successLogin: '/movies',
    }
}

export {
    moviesApiCConfig,
    mainApiCConfig,
    authConfig,
}
