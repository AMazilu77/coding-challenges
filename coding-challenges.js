// 1-) Looping a triangle.
// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######
// It may be useful to know that you can find the length of a string by writing .length after it.

// let abc = “abc”;
// console.log(abc.length);
// // → 3

// function triangleMaker() {
//   console.log("#");
//   let hashTag = "#";
//   for (let i = 0; i < 7; i++) {
//     console.log(hashTag += "#");
//     // console.log(i);
//   }
// }

// function triangleMaker1() {
//   let hashTag = "#";
//   for (let i = 0; hashTag.length <= 8; i++) {
//     console.log(hashTag, i);
//     hashTag += "#";
//   }
// }

// triangleMaker();
// triangleMaker1();

// 2-) FizzBuzz.
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, 
// print “Fizz” instead of the number, and for numbers divisible by 5 (and not 3), print “Buzz” instead.

// When you have that working, modify your program to print “FizzBuzz” for numbers that are divisible by both 3 and 5 
// (and still print “Fizz” or “Buzz” for numbers divisible by only one of those).

// (This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. 
// So if you solved it, your labor market value just went up.)

function fizzer() {
  for (i = 1; i < 101; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else {
      console.log(i);
    }
  }
}

function fizzer1() {
  for (let i = 1; i < 101; i++) {
    if (isDivisibleBy3(i) && isDivisibleBy5(i)) {
      console.log('fizzbuzz');
    } else if (isDivisibleBy3(i)) {
      console.log('fizz');
    } else if (isDivisibleBy5(i)) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

function isDivisibleBy3(n) {
  return n % 3 === 0;
}

function isDivisibleBy5(n) {
  return n % 5 === 0;
}

// fizzer();
// fizzer1();

// 3-) Chessboard
// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each 
// position of the grid there is either a space or a “#” character. The characters should form a chessboard.

// Passing this string to console.log should show something like this: 

// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #

// When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for 
// any size, outputting a grid of the given width and height

console.log(1, 2, 3)