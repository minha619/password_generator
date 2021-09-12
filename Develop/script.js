// Assignment code here

function generatePassword(){
    var str = 'abcdefghijklmnopqrstuvwxyz'
    var num = '1234567890'
    var sChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"


    };
  


// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); 

// Write password to the #password input
function writePassword() {
  var charLength = window.prompt("How many characters would you like your password to contain?");
  if (charLength < 8){
    window.alert ("You need to choose more than 8 characters");
    return
  }  else if (charLength > 128) {
    window.alert("You need to choose less than 128 characters");
    return
  }
  var addNum = window.confirm("Click OK to confirm including special characters.");
  var addLower = window.confirm("Click OK to confirm including numeric characters.");
  var addUpper = window.confirm("Click OK to confirm including lowercase characters.");
  var addSchar = window.confirm("Click OK to confirm including uppercase characters.");
  
  if (addNum === false, addLower === false, addUpper === false, addSchar === false){
    window.alert("You need to choose at least one special charater or numeric character or lowercase letter or uppercase letter.")
    return
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
