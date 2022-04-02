// Assignment Code
var generateBtn = document.querySelector("#generate");

//all possible character types
let passwordArr = [
  ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
  ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
  ['1','2','3','4','5','6','7','8','9','10'],
  ['!','@','#','$','%','^','&','*','(',')','/','|','\\','?','<','>']
];



// Write password to the #password input
function writePassword() {
  var password = generatePassword() ;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//function that will generate the password
function generatePassword() {
  let crit= []; //will push all character types into this array if if user selects it
  let passwordLength = prompt('Enter value between 8-128 for length of desired password:')
  if (passwordLength < 8 || passwordLength > 128) {
    return alert('Please enter a value between 8-128');
  }
  let useLower = confirm('Do you want your password to contain lowercase character?');
  if (useLower) {
    crit.push(passwordArr[0]);
  }
  let useUpper = confirm('Do you want your password to contain uppercase character?');
  if (useUpper) {
    crit.push(passwordArr[1]);
  }
  let useNum = confirm('Do you want your password to contain numbers?');
  if (useNum) {
    crit.push(passwordArr[2]);
  }
  let useSpecial = confirm('Do you want your password to contain special character?');
  if (useSpecial) {
    crit.push(passwordArr[3]);
  }
  
  let s = []; //each loop will push one randomly selected character from our crit array into this array
  //creates password with given user input 
  for (let i=0; i < passwordLength; i++) {
    let rand1 = Math.floor(Math.random()*crit.length); 
    let rand2 = Math.floor(Math.random()*crit[rand1].length);
    s.push(crit[rand1][rand2]) 
  }
  return s.join(''); //return a string of all randomly selected character that got pushed into s array
}





