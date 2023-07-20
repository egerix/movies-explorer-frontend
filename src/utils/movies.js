export function convertMovieData(movie) {
    return {
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
    }
}

export function moviesHasMovie(movies, movieId) {
    return movies.some((el) => el.movieId === movieId)
}

export function getLoadMoreParam(width) {
    if (width >= 1151) {
        return {
            init: 12,
            more: 3,
        }
    } else if (width > 768) {
        return {
            init: 8,
            more: 2,
        }
    } else {
        return {
            init: 5,
            more: 2,
        }
    }
}
