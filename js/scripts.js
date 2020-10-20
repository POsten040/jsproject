

const userInput = prompt("write me a sentence");

let final = firstAndLast(userInput);
let reverse = flip(final)

function firstAndLast(something) {
  let first = (something).charAt(0)
  let last = (something).charAt(something.length-1)
  let final = first + last
  return final.toUpperCase();
}

function flip(reverse) {
  let splitString = reverse.split("").reverse().join("");
  return splitString;
}


alert(userInput);
alert(final);
alert(reverse)


