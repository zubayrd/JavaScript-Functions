// TODO: Create a function called ‘multiply’ that will take in 3 parameter andmultiplyall 3 numbers together. Note: The argument passed must NOT be the same number.
function multiply(a,b,c) {
  if (a === b){
    return "Please enter different values"
  } else  if (a === c){
    return "Please enter different values"
  } else if (b === c){
    return "Please enter different values"
  } else {
    return a * b * c
  }
}

// TODO: Create a function expression called ‘convertToSeconds’ that takes in anumber of minutes as an argument and returns the amount in seconds. ***Donotuse a console.log() inside of the function***
function convertToSeconds(min) {
  return min * 60
}

// TODO: Create a function called fahrenheitToCelsius that takes the temperature as a parameter and returns the equivalent temperature in Celsius. ***Do not useaconsole.log() inside of the function***

function fahrenheitToCelsius(temp) {
  return (temp - 32) / (9/5)
}

// TODO: Create a function that takes a string as a parameter and returns the reverse of the string. ***Do not use a console.log() inside of the function ***

function reverse(string) {
    let reversed = ""
    for (let i = string.length - 1; i >= 0; i--)
    reversed += string[i]
    return reversed
}

// TODO: Create a function that takes in a string and returns the number of Vowels in 
// the sentence. E.g. countVowels(‘Javascript’) //output =3 ***Do not useaconsole.log() inside of the function***
function countVowels(string) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
  let count = 0
  for (let char of string){
    if(vowels.includes(char)){
      count++
    }
  }return count
}


// TODO: Create a “isPrime” function that takes a number as a parameter andreturnstrue if the number is prime, and false otherwise. Make sure to test your codewith4numbers

function isPrime(num) {
  if (num <= 1) {
    return false
  }
  
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  
  return true
}


console.log(multiply(4,2,7));
console.log(convertToSeconds(23));
console.log(fahrenheitToCelsius(82));
console.log(reverse("Hello"));
console.log(countVowels("Matthew"));
console.log(isPrime(97));
