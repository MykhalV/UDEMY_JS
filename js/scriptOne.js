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
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let result = '';
const lengthh = 7;

for (let i = 1; i < lengthh; i++){
    for(let j = 0; j < i; j++){
        result += '*';
    }
    result += '\n';
}
console.log(result);

/////////////////////////////////////

// 1
for(let i = 5; i <= 10; i++){
    console.log(i);
}


//2
first: for(let i = 20; i > 10; i--){
    if (i == 13){
        break first; 
    }
    console.log(i);
}


//3
for(let i = 2; i <= 10; i++){
    if( i % 2 == 0){
        console.log(i);
    }
}


//4
let i = 2;
while (i < 16){
    i++;
    if(i % 2 === 0){
        continue;
    }else{
        console.log(i);
    }
}


//5 
let numb = [];
for(let i = 5; i <= 10; i++){
    numb[i - 5] = i;
    console.log(numb);
}

