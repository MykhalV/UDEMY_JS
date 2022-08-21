"use strict";

const numberOfFilms = +prompt("How many movies you watched?", "");



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


let a = prompt("Name of the last movie that you saw", ""),
    b = +prompt("Make a rating from 1 to 10", ""),
    c = prompt("Name of the last movie that you saw", ""),
    d = +prompt("Make a rating from 1 to 10", ""); 

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

// Test commit 1