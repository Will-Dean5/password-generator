// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// added variables that contain the letters, numbers, and special charcters for the password

var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = lowerCase.toUpperCase();
var numbers = '0123456789';
var specialChar = !'#$%&\'()*+,-./:;<=>?@[\]^_`{|}~'; 
var hasLower = confirm('Do you want lowercase');
var hasUpper = confirm('Do you want uppercase');
var hasNumbers = confirm('Do you want numbers');
var hasSpecial = confirm('Do you want special characters');
var characters = prompt ('How many characters do you want'); 
if(characters < 8 || characters > 128) {
    alert('You must have more than 7 characters and less than 129 characters');
} 
// 
possiblePassword = ''
currentPassword = ''
if(hasLower){
    possiblePassword += lowerCase
}if(hasUpper){
    possiblePassword += upperCase
}if(hasNumbers){
    possiblePassword += numbers
}if(hasSpecial){
    possiblePassword += specialChar
}

for (var i = 0; i < characters; i++) {
    var randomNumber = Math.floor(Math.random() * possiblePassword);
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
