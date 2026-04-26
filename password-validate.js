const readline = require('readline-sync');

//Ask for a password with the rules
//Success: "Password has been set"
//Failure: "Password does not meet the requirements."
//end with else complete === null
let password = "";
let complete = false;

while (!complete){
    password = readline.question("Please set a password to enter.")

    let passUpper = false;
    let passNumber = false;

    for (let i = 0; i < password.length; i++){ //runs code through each character checking if...
        const char = password[i];

        if (char >= 'A' && char <= 'Z'){ //uppercase letter check
            passUpper = true;
        }
        if (char >= '0' && char <= '9'){ //number check
            passNumber = true;
        }
    }
//Checking for requirements:
if (password.length >= 8 && passUpper && passNumber){
    console.log("Your password has been set and meets requirements.");
    complete = true;
}
else{
    console.log("Password doesn't meet requirements, please try again.")
}

        
}
