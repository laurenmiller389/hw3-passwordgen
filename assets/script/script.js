// Assignment code here
//FUNCTIONS
function generatePassword() {
    //need a prompt for the user
    var passwordLength = prompt("please input a password length that is at least eight characters but no nore than 128 characters.");

    while(!((passwordLength > 8) && (passwordLength < 128))) {
        alert("password must be at least 8 characters and no more than 128 characters.");
        return generatePassword();
    }

    //DOCUMENTATION

    //prompts for password criteria
    var lowerCase = confirm("would you like to include lowercase letters?");
    var upperCase = confirm("would you like to include uppercase letters?");
    var numberChar = confirm("would you like to include numbers?");
    var specialChar = confirm("would you like to include special characters?");

    //strings for the arrays (all possible password criteria)
    var lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
    var upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numberCharString = "1234567890";
    var specialCharString = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

    //arrays to pass the strings into (use split method to break up string into list of strings and put into an array)
    var lowerCaseArray = lowerCaseString.split('');
    var upperCaseArray = upperCaseString.split('');
    var numberCharArray = numberCharString.split('');
    var specialCharArray = specialCharString.split('');

    //arrays to pass the arrays of strings into
    var generationComplete = [];
    var possibleValues = [];

    //we already have a function to display the password

    //USER ACTIONS
    //go thru the options and if true based off user choice then add to array

    //if statements (use push for these)
    if(lowerCase) {
        possibleValues.push(...lowerCaseArray);
    }

    if(upperCase) {
        possibleValues.push(...upperCaseArray);
    }

    if(numberChar) {
        possibleValues.push(...numberCharArray)
    }

    if(specialChar) {
        possibleValues.push(...specialCharArray)
    }

    //INITIALIZATIONS
    //create password with for loop
    for(var i = 0; i < passwordLength; i++) {
        generationComplete.push((possibleValues[Math.floor(Math.random() * possibleValues.length)]));
    }

    //return it
    return(generationComplete.join(''));
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);