# Create Calories Tracker Website

## Context and Problem Statement
How to implement the read feature (view the food log)? 

## Considered Options

* If we decide to store food information in a local JSON file, we can create a javascript object that takes all the information and use keys(food names) to access the corresponding calorie info.
* If we decide to use an online api, all of them should have methods allowing us to access the data easily.
* For viewing user's food history, we can write a method that take the user's local storage as a parameter and output the history in a formatted view utilizing data visualization libraries ([Tableau](https://www.tableau.com/)).

## Decision Outcome

Chosen option: Option 3. Utilizing the local storage and tying it with a data visualization tool like Tableau is a good idea to make it more visually appealing. Tableau might work but we're not sure how we can tie it into the app directly. But outputting history in a formatted view is the best for the user since it is easier to understand, as long as we output it in an easy to understand way. 
