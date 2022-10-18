

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

const WORDS = [
  'strawberry',
  'orange',
  'apple',
  'banana',
  'pineapple',
  'kiwi',
  'peach',
  'pecan',
  'eggplant',
  'durian',
  'peanut',
  'chocolate',
];

const numWrong = 0;


const createDivsForChars = (word) => {

  const container = document.querySelector("#word-container");
  for (const letter of word){
    container.insertAdjacentHTML('beforeend', 
    `<div class="letter-box ${letter}"></div>`);
  }
};

// Loop over each letter in the alphabet and generate a button for each letter
// The buttons should be appended to the section with id="letter-buttons"
const generateLetterButtons = () => {

  const container = document.querySelector("#letter-buttons");
  for (letter of ALPHABET){
    container.insertAdjacentHTML('beforeend', `<button>${letter}</button>`);
  }
};


const disableLetterButton = (buttonEl) => {
   const button = buttonEl;
   console.log(button);
   button.disabled = true;
};



const isLetterInWord = (letter) => {
  const letterDiv = document.querySelector(`.letter-box.${letter}`);
  if (letterDiv === null){
      console.log(false)
      return false
  } 
  else {
    console.log(true)
    return true;
  }
};

// This is like if __name__ == '__main__' in Python
// It will be called when the file is run (because
// we call the function on line 66)
(function startGame() {
  // For now, we'll hardcode the word that the user has to guess
  // You can change this to choose a random word from WORDS once you
  // finish this lab but we hard code it so we know what the word is
  // and can tell if things look correct for this word
  const word = WORDS[Math.floor((Math.random() * WORDS.length))];
  console.log(word)
  createDivsForChars(word);
  // call the function that makes an empty line for each letter in the word
  // Replace this line with the function call
  generateLetterButtons();
  // call the function that makes a button for each letter in the alphabet
  // Replace this line with the function call
  
  // in the next lab, you will be adding functionality to handle when
  // someone clicks on a letter
})();
