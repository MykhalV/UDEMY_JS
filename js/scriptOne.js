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


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if(4 == 9){
    console.log("ok!");
}else{
    console.log("Error");
}

////////////////////////////

// if(num < 49){
//     console.log("Error");
// }else if(num>100){
//     console.log("A lot");
// }else {
//     console.log("Ok!");
// }
// /////////////////////////////

// (num === 50) ? console.log("ok!") : console.log("Error!");
// /////////////////////////////
const num = 50;
switch(num){
    case 49:
        console.log("Wrong");
        break;
    case 100:
        console.log("Wrong");
        break;
    case 50:
        console.log("True");
        break;
    default:
        console.log("vse ploho");
        break;
}   