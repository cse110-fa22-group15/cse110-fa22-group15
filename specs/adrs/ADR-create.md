# Create Calories Tracker Website

## Context and Problem Statement
How to implement the create feature (add-a-food to the food log)? 

## Considered Options

* Manually input the common food information (name, calories/g) to a JSON file.
* Utilize food database api ([Suggestic](https://suggestic.com/api.html), [Nutritionix](https://www.nutritionix.com/business/api), [Fatsecret](https://platform.fatsecret.com/api/)) to import food information.
* Download a csv file for food database ([CORGIS Dataset Project](https://corgis-edu.github.io/corgis/csv/food/)), and use python/java/... to store the needed data in a local JSON file.
* For user's food history, we can prompt the user to input their food taken in a form and then store the form data in local storage or a separate JSON file when submitting the form.
* We are going to use array to store user's data. 

## Decision Outcome

Chosen option: Option 3, utilize the csv file for the food database instead of using the food database api just to make sure that we can keep it local. We can just search for the food and it will find the appropriate food in the list. 
