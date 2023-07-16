import {mainApiCConfig} from './config'

class MainApi {
    constructor({url}) {
        this._url = url
        this._headers = {
            "Content-Type": "application/json",
        }
    }

    _handleResponse(res) {
        const resJson = res.json()
        if (!res.ok) {
            return resJson.then((jsom) => {
                throw new Error(jsom.message);
            });
        }
        return resJson;
    }

    setToken(token) {
        this._headers = {
            ...this._headers,
            'Authorization': `Bearer ${token}`,
        }
        return this;
    }

    login({email, password}) {
        return fetch(`${this._url}/signin`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({password, email}),
        }).then(this._handleResponse)
    }

    register({name, email, password}) {
        return fetch(`${this._url}/signup`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({name, password, email}),
        }).then(this._handleResponse)
    }

    getUser() {
        return fetch(`${this._url}/users/me`, {
            method: "GET",
            headers: this._headers,
        }).then(this._handleResponse)
    }

    editProfile({name, email}) {
        return fetch(`${this._url}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({email, name}),
        }).then(this._handleResponse)
    }

    getSavedMovies() {
        return fetch(`${this._url}/movies`, {
            method: "GET",
            headers: this._headers,
        }).then(this._handleResponse)
    }

    saveMovie(movie) {
        return fetch(`${this._url}/movies`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify(movie),
        }).then(this._handleResponse)
    }

    deleteMovie(movieId) {
        return fetch(`${this._url}/movies/${movieId}`, {
            method: "DELETE",
            headers: this._headers,
        }).then(this._handleResponse)
    }
}

export const mainApi = new MainApi(mainApiCConfig)
