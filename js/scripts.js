

const userInput = prompt("write me a sentence");

let final = firstAndLast(userInput);

function firstAndLast(something) {
  let first = (something).charAt(0)
  let last = (something).charAt(something.length-1)
  let final = first + last
  return final.toUpperCase();
}


alert(userInput);
alert(final);


