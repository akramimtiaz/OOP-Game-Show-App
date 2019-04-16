/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//central game variable
let game;

document.getElementById('btn__reset').addEventListener('click', () => {
    game = new Game();  
    game.reset();       
    game.startGame();   
});

document.getElementById('qwerty').addEventListener('click', (event) => {
    //if the event target is a key button
    if(event.target.className === "key"){
        game.handleInteraction(event.target);
    }
});

//event listener to listen for key presses
document.addEventListener('keyup', (event) => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase();
    //create an array of each letter within the alphabet
    const letters = [...alphabet];
    //obtain the string value of the key that was pressed
    const input = event.key || event.keyCode;

    //if the key pressed was a letter key
    if (letters.findIndex(letter => letter === input) !== -1){
        //retrieve all buttons within the qwerty DIV
        const buttons = document.querySelectorAll('#qwerty button');
        //find the button associated with the key that was pressed 
        buttons.forEach(button => {
            if(button.textContent === input){
               //call handleInteraction func passing the button element associated with the key pressed
               //if it has not already been clicked or pressed
               if(button.disabled === false){
                    game.handleInteraction(button);
               }
            }
        });
        
    }
});