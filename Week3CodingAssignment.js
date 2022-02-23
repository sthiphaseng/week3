// 1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
// a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.
// b.	Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
// c.	Use a loop to iterate through the array and calculate the average age. Print the result to the console.
 
 let ages = [3, 9, 23, 64, 2, 8, 28, 93];{
     function firstLast(array){
         let anArray = (array[array.length - 1] - array[0]);
         return anArray;
     }
     console.log(firstLast([3, 9, 23, 64, 2, 8, 28, 93]));
    } //console prints out to 90

 ages = [22, 3, 9, 23, 64, 2, 8, 28, 93, 69, 88];{
    function firstLast(array){
        let anArray = (array[array.length - 1] - array[0]);
        return anArray;
    }
    console.log(firstLast([22, 3, 9, 23, 64, 2, 8, 28, 93, 69, 88]));
 } //added ages 22, 69, 88. Console prints out 90, 66

 ages = [22, 3, 9, 23, 64, 2, 8, 28, 93, 69, 88, 20];{
    function firstLast(array){
        let anArray = (array[array.length - 1] - array[0]);
        return anArray;
    }
    console.log(firstLast([22, 3, 9, 23, 64, 2, 8, 28, 93, 69, 88, 20]));
 } //added another age to see if array runs again, age 20. Console prints out -2

 ages = [22, 3, 9, 23, 64, 2, 8, 28, 93, 69, 88, 20];{
    function averageA(ages){
        sum = 0;
        for (let i = 0; i < ages.length; i++) {
        sum += ages[i];
        } return (sum / ages.length);
    } console.log(averageA(ages));
 }//the printed result is an average age of 35.75

//  2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
// a.	Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
// b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];{
    function averageA(names){
        sum = 0;
        for (let i = 0; i < names.length; i++) {
        sum += names[i].length;
        } return (sum / names.length);
    } console.log(averageA(names));
}//prints out an average number of 3.833 letters per name

names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];{
for (let i = 0; i < names.length; i++){
    allNames = names.join(' ');
}
    console.log(allNames);
}//prints out the names together and is separeted by spaces

// 3.	How do you access the last element of any array? array[array.length – 1]


// 4.	How do you access the first element of any array? array[0]

// 5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example:

// namesArray = ["Kelly", "Sam", "Kate"] //given this array
// nameLengths = [5, 3, 4] //create this new array
names = ["Steven", "Christopher", "Austin", "Nick"];
let nameLength = [];{

for(let i = 0; i < names.length; i++){
    nameLength.push( names[i].length);
} console.log(nameLength);
}//array prints out the lenths of each name (4) [6, 11, 6, 4]

// 6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
let sumOfName = 0;
for(let i = 0; i < nameLength.length; i++){
    sumOfName += nameLength[i];
} console.log(sumOfName); //prints out the sum of all the elements (names listed) and that is 27.

// 7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
function twoParameters(word, n){
    let space = "";
    for(let i = 1; i <= n; i++){
        space += word;
    } return space;
} console.log(twoParameters("Steven", 3));//prints out StevenStevenSteven

// 8.	Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).
function fullName(firstName, lastName){
    return (firstName + " " + lastName);
}

console.log( fullName("Steven", "Thiphaseng"));//prints out my full name.


// 9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function nums(arrayX){
    let sum = 0;
    for (let i = 0; i < arrayX.length; i++){
        sum += arrayX[i];
    } if(sum > 100) {
        return true;
    } else
        return false;
}

console.log( nums([1, 2, 3, 4]));//prints out false as the sum of all numbers listed is not greater than 100
console.log( nums([25, 50, 75]));//prints out true as the sum of all numbers listed is greater than 100



// 10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
function avrg(x){
    let sum = 0;
    for (let i = 0; i < x.length; i++){
        sum += x[i];
    }
    return (sum/x.length);
}

console.log( avrg([1, 2, 3]));//prints out 2 as the average of all the elements in the array.
console.log( avrg( [10, 11, 12]));//prints out 11 as the average of all the elements in the array.


// 11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
function greaterThan(x,y){
    if(avrg(x) > avrg(y)){
        return true;
    }
    return false;
}

console.log( greaterThan( [1, 2, 3, 4, 5], [5, 4, 3, 2, 1]));//prints out false as the average of the first set of arrays is not greater than the second.
console.log( greaterThan( [9, 33, 52], [6, 16, 26]));// prints out true as the average of the first set of arrays is greater than the second.


// 12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket){
    if(isHotOutside === true && moneyInPocket > 10.50){
        return true;
    }
    return false;
}

console.log(willBuyDrink(false, 14.85));//prints out false
console.log(willBuyDrink(true, 18.01));//prints out true
console.log(willBuyDrink(false, 9.10));//prints out false


// 13.	Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

function willBuyCarParts(billsArePaid, checkingAccountBalance){
    if(billsArePaid === true && checkingAccountBalance >= 1500){
        return "Buy the car parts NOW!";
    }
    return "Slow your roll!";
}

console.log(willBuyCarParts(true, 1300.50));
console.log(willBuyCarParts(false, 3688));
console.log(willBuyCarParts(true, 2500));
//function shows if I can buy car parts if I make sure the bills are paid and if there is extra money in my checking account.