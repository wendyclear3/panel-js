'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?')

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

for (let i = 0; i < 2; i++) {
    const lastMovie = prompt('Один из последних просмотренных фильмов?', '')
    const ratingMovie = prompt('На сколько оцените его?', '');
    if (lastMovie != null && ratingMovie != null && lastMovie != '' && ratingMovie != '' && lastMovie.length < 50) {
        personalMovieDB.movies[lastMovie] = ratingMovie;
    } else {
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель")
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман")
} else {
    console.log('Произошла ошибка!')
}