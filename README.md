# Flipgrid Coding Challenge
### Juliette Chirol Hill

Implemented a simple sign up form in React for an imaginary service.  Performs validation on all fields:
* Username: at least two non-whitespace characters
* Email: `<non-whitespace-character>@<non-whitespace-character>.<non-whitespace-character>`
* Password: 
    * At least 6 characters
    * At least 1 uppercase letter
    * At least 1 lowercase letter
    * At least 1 special character

Once all fields have valid entries, clicking the Sign Up button redirects to a welcome page displaying the user's name and email with further instructions.  

#### Note on choosing to use React and Bootstrap

Though page load times could have been significantly improved by using minimal Javascript and CSS instead of using the thousands of lines of packaged code from both React and Bootstrap, I chose to use these frameworks for the following reasons: React appears to be the preferred Javascript framework for this role on the Flipgrid team, and the styling in the screenshots seemed to very closely match Bootstrap's (in the effort of making the final result match the screenshots as closely as possible). 

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
