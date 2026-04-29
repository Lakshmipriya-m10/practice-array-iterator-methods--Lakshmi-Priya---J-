//Task 1: Using forEach()
let citiesList  = ["Destin","St.Louis","Whithouse","Houston","Tyler"];
citiesList.forEach(favCities =>{
    console.log("My Favorite Cities :",favCities.toUpperCase());

});

//Task 2: Transforming with map()
let numbers=[10,15,20,40,90];
let squares = numbers.map(num => num *num);
    console.log ("Map New Array",squares);

//Task 3: Filtering with filter()
let scores =[85,42,90,75,30,100];
let highScores = scores.filter(score => score > 80);
console.log("High score more than 80 are :",highScores);

//Task 4: Finding with find() and findIndex()
let favoriteFood = ["pizza","salad","Idly","quesadilla","briyani","friedrice"];
let longChar = favoriteFood.find(food => food.length > 4);
console.log("Food Character more than 4 :",longChar);
let findIndex = favoriteFood.findIndex(food => food.length > 4);
console.log("Food character more than 4 character index :",findIndex);

//Task 5: Checking conditions with some() and every()
let temperatures = [85,45,60,72,95];
let checkSome = temperatures.some(temp => temp > 90);
console.log("Checking some function- temperatures more than 90 degrees",[checkSome]);
let checkEvery =temperatures.every(temp => temp > 50);
console.log("Checking all teperatures are above 50 degree :",[checkEvery]);

//Task 6: Reducing with reduce()
let prices = [20,15,8,5,18];
let totalBudget = 70;
let remainingAmount=prices.reduce((budget,price)=>budget-price,totalBudget);
console.log(remainingAmount);
if (remainingAmount >= 0)
{ console.log("These gift items fits in your budget.");
}
    else
      console.log("These gift items not fits in your budget.");  
