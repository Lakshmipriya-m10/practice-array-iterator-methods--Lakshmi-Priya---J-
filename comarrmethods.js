//Task 1: Adding and Removing Elements
let fruits = ["apple", "banana", "cherry"];
let addFruits = fruits.push("orange");
let removeFistItem = fruits.shift();
let addFirstItem = fruits.unshift("grape");
console.log(fruits);

//Task 2: Query and Access

let colors = ["red", "blue", "green", "blue", "yellow"];
let includesResult = colors.includes("blue");
let firstIndex = colors.indexOf("blue");
let lastIndex = colors.lastIndexOf("blue");
console.log([includesResult,firstIndex,lastIndex]);

//Task 3: Combining Arrays

let teamA = ["Alice", "Bob"];
let teamB = ["Charlie", "Diana"];
let allTeams = teamA.concat(teamB);
let addName = allTeams.push("Eve");
console.log(allTeams);

//Task 4: Extracting and Splicing

let numbers = [10, 20, 30, 40, 50];
let middleNumbers = numbers.slice(1,3);
numbers.splice(3,2,60,70);
console.log("middleNumbers: ", middleNumbers);
console.log("numbers: ", numbers);

//Task 5: Sorting and Reversing

let scores = [85, 70, 95, 60, 75];
scores.sort((a,b) => a - b);
scores.reverse(scores);
console.log(scores);