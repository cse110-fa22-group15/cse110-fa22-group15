Stages through the CI/CD Pipeline:

1. Simple CI Build-Runs unit and e2e tests. If there is any errors in the tests, such as reference errors or the tests itself do not pass, the workflow erors.

2. SuperLinter: A simple combination of various linters, written in bash , to help validate your source code. It is pretty extensive and checks the syntax of our HTML, CSS, JS, Markdown etc. Pretty strict and I had to disable some errors, because we already had variable names defined when I installed it in our pipeline, and did not want to rename everything. Checks for any unused variables, makes things consts unless necessarily var/let, makes sure globals are assigned.

3. CodeQL: Checks for bugs, security leaks, and vulnerabilities.
