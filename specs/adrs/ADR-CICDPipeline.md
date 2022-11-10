# Create Calories Tracker Website

## Context and Problem Statement
What to implement in the CI/CD pipeline? 
- Build -> Test -> Merge -> Relaease -> Deploy -> Repeat

### Context
- In the Calorie Tracker Project, we decide to adopt the practice of infrastructure as code, but we need to decide how we'll apply those code changes to the system.

## Considered Options/Sequences

* Using the pattern of **continuous integration and continuous delivery** to apply infrastructure changes. 
  - This will be a dedicated pipeline for infrastructure changes that will exist in addition to any CICD pipelines that we deploy for the website code. Using CICD allows us to apply good code based change practices to the infrastructure code.
 
* There will be 2 Testing within the cycle:
  1. After compile the code in local machine, there will be a series of testing for the developer to run and they can only push it after all tests are passed.
  2. After Push, there will be aseries of Github Action for cd script to test the code. The pushed branch can only merge if all the tests are passed.

* Once bothe tests are passed, then the developer should ask other people to perform an E2E test.

* After E2E test passed, the developer can start to work on the next function.

## Decision Outcome

Chosen option: TBD
