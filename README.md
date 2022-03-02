# Flipgrid Coding Challenge
### Juliette Chirol Hill

Implemented a simple sign up form in React for an imaginary service.  Performs validation on all fields:
* Username: at least two characters
* Email: `<non-whitespace-character>@<non-whitespace-character>.<non-whitespace-character>`
* Password: 
    * At least 6 characters
    * At least 1 uppercase letter
    * At least 1 lowercase letter
    * At least 1 special character

Once all fields have valid entries, clicking the Sign Up button redirects to a welcome page displaying the user's name and email with further instructions.  

#### How to run it

You can find the built React code hosted on:
https://flipgrid-coding-challenge-jchirolhill.surge.sh/

Or clone the repo and run locally with:
```
git clone https://github.com/JChirolHill/FlipgridCodingChallenge-React.git
cd FlipgridCodingChallenge-React
npm install
npm start
```
