/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    /** 
     * Creates five phrase objects
     * @return  {array}     An array of five phrase objects.   
    */
    createPhrases(){
        const phrases = [
            "drop in the ocean",
            "diamond in the rough",
            "fish out of water",
            "foot in the door",
            "sight for sore eyes"
        ];
        //returns 5 phrase objects
        return phrases.map(phrase => new Phrase(phrase));
    }

    
    /** 
     * Hides the overlay and retrieves and displays a random phrase from the phrases array
     */
    startGame(){
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /** 
     * Returns a random phrase object from phrases
     * @return  {phrase}    A random phrase object from the phrases array 
    */
    getRandomPhrase(){
        const randomIndex = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomIndex];
    }

    /** 
     * Verifies if the button clicked by the player matches a letter in the phrase and proceeds accordingly
     * @param   {event.target}      the button that was clicked/pressed 
    */
    handleInteraction(key){

        const letter = key.textContent;
        key.disabled = true;

        if(this.activePhrase.checkLetter(letter) === true){//if the letter exists within the phrase
            key.classList.add('chosen');
            this.activePhrase.showMatchedLetter(letter);

            if(this.checkForWin() === true){ //if the phrase has been guessed in its entirety
                this.gameOver('win');
            }
        } else {
            key.classList.add('wrong');
            this.removeLife();
        }
    }

    /** 
     * Removes a life from the player and ends the game if 5 guesses have been made
    */
    removeLife(){

        this.missed += 1;

        if(this.missed >= 5){
            this.gameOver('lose');
        } else {
            const heart = document.querySelector('img[src="images/liveHeart.png"]');
            heart.src = "images/lostHeart.png";
        }
        
    }

    /**
     * Determines if the phrase has been solved
     * @return  {boolean}   true if all phrase LI elements are visible, false otherwise
     */
    checkForWin(){
        //if no phrase LI elements are hidden, we can assume the phrase has been solved
        return document.querySelectorAll('#phrase li.hide').length === 0;
    }

    /** 
     * Ends the current game by redisplaying the overlay and displays an appropriate
     * message dependent on whether the player won or lost. 
     * @param   {string}    string specifying the outcome of the current game, either 'win' or 'lose'
    */
    gameOver(outcome){

        const overlay = document.querySelector('#overlay');

        overlay.style.display = '';
        overlay.classList.remove('start');

        if(outcome === 'win'){
            document.querySelector('#overlay h1').textContent = 'You won';
            overlay.classList.add('win');
        } else {
            document.querySelector('#overlay h1').textContent = 'You lost';
            overlay.classList.add('lose');
        }
    }

    /**
     * Resets the page by resetting the overlay, images and buttons
     * and removes all LI elements within the phrase UL
     */
    reset(){

        //reset overlay
        const overlay = document.querySelector('#overlay');
        overlay.classList.remove('win', 'lose');

        //remove all li elements from within phrase ul
        const elements = document.querySelectorAll('#phrase ul > li');
        elements.forEach(element => element.parentNode.removeChild(element));

        //reset all buttons
        const buttons = document.querySelectorAll('#qwerty button');
        buttons.forEach(button => {
            button.classList.remove('chosen', 'wrong');
            button.disabled = false;
        });

        //reset all images
        const images = document.querySelectorAll('#scoreboard img');
        images.forEach(image => image.src='images/liveHeart.png');
    }

 }