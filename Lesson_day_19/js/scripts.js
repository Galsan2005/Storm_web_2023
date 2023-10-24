console.log("Lesson Day 19 - JS Control structures exercises")

// variables
// number variables
let too = 10;
let too2 = 20;
let too3 = 30;

// string variables
let ner = 'Bold';
let ner2 = 'Tulga';
let ner3 = 'Naraa';

// boolen variable 
let unen = true;
let hudal = false;

let isMongolian = true;
let hasMongolianPassword = false;

// if statement
if (isMongolian) {
    console.log('You are mongolian');
} else if (isMongolian && hasMongolianPassword) {
    console.log('You are mongolian.');
} else {
    console.log('You are not mongolian.')
}

//loops
//for loop

for (let i = 0; i < 10; i++) {
    console.log(i);
}



//while loop
let i = 0;
while (i < 10) {
    console.log(i);
    i++
}


for (var j = 0; j < 10; j++) {
    console.log(j);
}

console.log('my variable is ' + j);

for (let k = 0; k < 10; k++){
    console.log(k);
}

console.log('error is ' + k);