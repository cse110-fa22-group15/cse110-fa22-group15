# Create Calories Tracker Website

## Context and Problem Statement
What is the process that will store the users data via local storage? 

## Considered Options

##### 1. If user is new, need to clear localStorage and then store their body info (username, sex, age, current weight, goal weight).  
```
localStorage.clear();
```
Do the following for all the inputs:
```
var input = document.getElementById("name");
localStorage.setItem("username", JSON.stringify(input.val()));
```

##### 2. Adding a food
If it’s the first food ever, initialize a food array that will store all foods:
```
var foodsArray = [];
```
If it's not the first food, the array should already exist so you need to load it in via localStorage.getItem:
```
var foodsArray = JSON.parse(localStorage.getItem(“foodsArray”));
```
User selects the item or adds manually. The data will be the date, meal time (breakfast, lunch, dinner, or snack), the food name, and the number of calories.
This info will be placed in an array:
``` 
const food = [“111922”, “breakfast”, “apple”, “200”];
```
The individual food array will be added to the foods array:
```
foodsArray.push(food);
```
The array will be stored in localStorage:
```
localStorage.setItem(‘foodsArray’, JSON.stringify(foodsArray));
```

##### 3. Filling the food log with previous entries if it’s a returning user
The home page will be the current date so we want to load in the stored foodsArray"
```
var foodsArray = JSON.parse(localStorage.getItem(“foodsArray”));
```
*TODO: Consider how to deal with the array being empty or not existing*
We need to parse throught the array and display the stored entries to the homepage:
```
TODO
```

##### 4. Deleting a Food
If the user clicks the delete button next to a food entry, it needs to be removed from local storage:
```
localStorage.removeItem(foodsArray[index]); 
```

## Decision Outcome

Above is the general process that we will implement for the localStorage.
