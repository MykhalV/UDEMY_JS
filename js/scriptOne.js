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


for (let i = 0; i < 2; i++) {
    const a = prompt("Name of the last movie that you saw", ""),
          b = +prompt("Make a rating from 1 to 10", "");

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}












console.log(personalMovieDB);



















///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// if(4 == 9){
//     console.log("ok!");
// }else{
//     console.log("Error");
// }

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
// const num = 50;
// switch(num){
//     case 49:
//         console.log("Wrong");
//         break;
//     case 100:
//         console.log("Wrong");
//         break;
//     case 50:
//         console.log("True");
//         break;
//     default:
//         console.log("vse ploho");
//         break;
// }   
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let result = '';
// const lengthh = 7;

// for (let i = 1; i < lengthh; i++){
//     for(let j = 0; j < i; j++){
//         result += '*';
//     }
//     result += '\n';
// }
// console.log(result);

/////////////////////////////////////

// // 1
// for(let i = 5; i <= 10; i++){
//     console.log(i);
// }


// //2
// first: for(let i = 20; i > 10; i--){
//     if (i == 13){
//         break first; 
//     }
//     console.log(i);
// }


// //3
// for(let i = 2; i <= 10; i++){
//     if( i % 2 == 0){
//         console.log(i);
//     }
// }


// //4
// let i = 2;
// while (i < 16){
//     i++;
//     if(i % 2 === 0){
//         continue;
//     }else{
//         console.log(i);
//     }
// }


// //5 
// let numb = [];
// for(let i = 5; i <= 10; i++){
//     numb[i - 5] = i;
//     console.log(numb);
// }

////////////////////////////////////////////////////////////////////////////

// 1
// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for(let i = 0; i < arr.length; i++){
//    result[i] = arr[i];
// }



// 2
// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for(let i = 0; i < data.length; i++){
//     if(typeof(data[i]) == 'number'){
//         data[i] = data[i]* 2;
//     }else if(typeof(data[i]) == 'string'){
//         data[i] = `${data[i]} - done`;
//     }
// }


//3
// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// for (let i = 1; i <= data.length; i++) {
//     result[i - 1] = data[data.length - i];
// }
// console.log(result);

/////////////////////////////////////////////////////////////////////////////////////////////////////
// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }
// console.log(result);

