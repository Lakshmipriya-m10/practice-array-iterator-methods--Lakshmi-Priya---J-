//Task 1: Using forEach()
let favCities = ["Whitehouse","Dallas", "Destin", "Austin", "Callifonia"];
favCities.forEach(num =>  {
console.log(num.toUpperCase());
});

//Task 2: Transforming with map()
numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(num => num * num);
console.log ("Squared No's:",squares);

//Task 3: Filtering with fi lter()
let scores = [85, 42, 90, 75, 30, 100];
let highScores = scores.filter(num => num >= 80);{
console.log ("High Scores are:", highScores);
}
//Task 4: Finding with find() and fi ndIndex()
let favoriteFood = ["Pizza", "Briyani", "ChickenSandwich", "Roti", "Quesadilla", "Curd Rice"];
let longChar = favoriteFood.find(food => favoriteFood.length > 4 );
console.log("Food have more than 4 characters:", longChar);

//Use findIndex( ) to find the index of that food.
let foodindex = favoriteFood.findIndex(food => favoriteFood.length > 4);
console.log("There are "+ foodindex +" Food have more than 4 characters:");