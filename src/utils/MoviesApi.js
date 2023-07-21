import {moviesApiCConfig} from './config'

class MoviesApi {

    constructor({url}) {
        this._url = url
        this._headers = {
            "Content-Type": "application/json",
        }
    }

    _handleResponse(res) {
        if (res.ok) {
            return res.json()
        } else return Promise.reject(`Error: ${res.status}`)
    }

    getMovies() {
        return fetch(`${this._url}/beatfilm-movies`, {
            method: "GET",
            headers: this._headers
        }).then(this._handleResponse)
    }
}

export const moviesApi = new MoviesApi(moviesApiCConfig)
