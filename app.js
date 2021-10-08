// import functions and grab DOM elements
const generateButton = document.getElementById('generate');
const randomNumberDisplay = document.getElementById('random-num');

// initialize global state
let randomNumber = '#';

// set event listeners 
generateButton.addEventListener('click', ()=> {
    let randomNumber = Math.floor(Math.random() * 100);
    randomNumberDisplay.textContent = randomNumber;
});

// get user input
// use user input to update state 
// update DOM to reflect the new state

