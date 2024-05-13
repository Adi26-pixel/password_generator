const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let generatePwrd = document.getElementById("generate-pwrd");
let pwrdLength = document.getElementById("pwrd-length");
let passwordOne = document.getElementById("password-one");
let passwordTwo = document.getElementById("password-two");

let passwordLength = 12;

function getRandomCharacter() {
  let randomChar = Math.floor(Math.random() * characters.length);
  return characters[randomChar];
}

function generateRandomPassword() {
  passwordOne.textContent = "";
  passwordTwo.textContent = "";
  for (let i = 0; i < pwrdLength.value; i++) {
    passwordOne.textContent += getRandomCharacter();
    passwordTwo.textContent += getRandomCharacter();
  }
}

function copyPassword() {
  // Get the text field
  let copyText = document.getElementById("password-one");

  // Select the text field
  copyText.select();

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}

function copySecondPassword() {
  // Get the text field
  let copyText = document.getElementById("password-two");

  // Select the text field
  copyText.select();

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}
