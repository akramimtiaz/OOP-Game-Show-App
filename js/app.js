/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const game = new Game();


document.getElementById('btn__reset').addEventListener('click', () => {

    
    game.startGame();

});

document.getElementById('qwerty').addEventListener('click', (event) => {

    if(event.target.className === "key"){
        game.handleInteraction(event.target);
    }

});
