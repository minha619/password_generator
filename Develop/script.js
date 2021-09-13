// Assignment code here

var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1)) + min;

  return value;
};

function generatePassword(charLength, addNum, addLower, addUpper, addSchar){
    var str = "abcdefghijklmnopqrstuvwxyz"
    var num = "1234567890"
    var sChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
    var pw = ""
    var pwtypes = []
    
    if(addNum === true){
      pwtypes.push("number")
    }
    if(addLower === true){
      pwtypes.push("lower")
    }
    if(addUpper === true){
      pwtypes.push("upper")
    }
    if(addSchar === true){
      pwtypes.push("special")
    }
  }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); 

// Write password to the #password input
function writePassword() {
  var charLength = window.prompt("How many characters would you like your password to contain?");
  if (charLength < 8){
    window.alert ("Choose more than 8 characters");
    return
  }  else if (charLength > 128) {
    window.alert("Choose less than 128 characters");
    return
  }
  var addNum = window.confirm("Click OK to confirm including numeric characters.");
  var addLower = window.confirm("Click OK to confirm including lowercase characters.");
  var addUpper = window.confirm("Click OK to confirm including uppercase characters.");
  var addSchar = window.confirm("Click OK to confirm including special characters.");

  if (addNum === false, addLower === false, addUpper === false, addSchar === false){
    window.alert("You need to choose at least one option.")
    return
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
