// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// function generatePassword() { 
 // var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
 // var string_length = 3;
 // var randomstring = '';
 // for (var i=0; i<string_length; i++) {
     // var rnum = Math.floor(Math.random() * chars.length);
    //  randomstring += chars.substring(rnum,rnum+1);
 // }

var confirmUppercase = confirm("Would you like to add Uppercase characters in the password?");
var confirmLowercase = confirm("Would you like to add Lowercase characters in the password?");
var confirmCharacters = confirm("Would you like to add Special Characters in the password?");
var confirmNumerics = confirm("Would you like to add Numeric characters in the password?");
var totalLength = parseInt(prompt("What is the length of your password?"))




      // If the user likes Uppercase (confirmUppercase === true), we run the following block of code.
       function generatePassword() { 
        var randomstring = '';
        if (confirmUppercase) {
          var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; {
          (confirmUppercase || confirmLowercase); 
          }
          var string_length = 8;
          for (var i=0; i<string_length; i++) {
              var rnum = Math.floor(Math.random() * chars.length);
               randomstring += chars.substring(rnum,rnum+1);
      }
    }
      // If the user likes Lowercase (confirmLowercase === true), we run the following block of code.
      else if (confirmLowercase) { 
        var chars = "abcdefghijklmnopqrstuvwxyz"; {
          (confirmLowercase || confirmCharacters); 
          }
        var string_length = 8;
        for (var i=0; i<string_length; i++) {
            var rnum = Math.floor(Math.random() * chars.length);
             randomstring += chars.substring(rnum,rnum+1);
      
      }
    }
      // If the user likes Characters (confirmCharacters === true), we run the following block of code.
      else if (confirmCharacters) { 
        var chars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"; {
          (confirmCharacters || confirmNumerics); 
          }
        var string_length = 8;
        for (var i=0; i<string_length; i++) {
            var rnum = Math.floor(Math.random() * chars.length);
             randomstring += chars.substring(rnum,rnum+1);
        
      }
    }
      // If the user likes Numerics (confirmNumeric === true), we run the following block of code.
      else if (confirmNumerics) { 
        var chars = "0123456789"; {
          (confirmNumerics || confirmUppercase); 
          }
        var string_length = 8;
        for (var i=0; i<string_length; i++) {
            var rnum = Math.floor(Math.random() * chars.length);
             randomstring += chars.substring(rnum,rnum+1);
        
      }
      
    }
      // If neither of the previous condition were true, we run the following block of code.
      else {
        alert("Can not generate password at this time");
      }
      return randomstring
    }


// Add questionaire part
// var Uppercase = confirm("Would you like to add Uppercase characters in the password?");
// var Lowercase = confirm("Would you like to add Lowercase characters in the password?");
// var Characters = confirm("Would you like to add Special Characters in the password?");
// var Numeric = confirm("Would you like to add Numeric characters in the password?");