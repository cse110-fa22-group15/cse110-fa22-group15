# Create Calories Tracker Website

## Context and Problem Statement
How to implement the delete feature (remove an entry in the food log)? 

## Considered Options

* Each food entry will have a checkbox. At the bottom of the page is a "delete marked" button that removes all the checked entries.
* This is done by iterating through each foodDiary and checking which entries are marked. Those that are get removed from the diary so when it is saved to localStorage again, it no longer contains the removed entries.

## Decision Outcome

The above was implemented in the website.
