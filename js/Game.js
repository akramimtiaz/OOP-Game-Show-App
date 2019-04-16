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

    startGame(){

        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();

    }

    /** 
     * Returns a random phrase object from phrases
     * @return  {phrase}    A random phrase object   
    */
    getRandomPhrase(){
        const randomIndex = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomIndex];
    }

    handleInteraction(key){

        const letter = key.textContent;
        key.disabled = true;

        if(this.activePhrase.checkLetter(letter) === true){
            key.classList.add('chosen');
            this.activePhrase.showMatchedLetter(letter);

            if(this.checkForWin() === true){
                this.gameOver('win');
            }
        } else {
            key.classList.add('wrong');
            this.removeLife();
        }
    }

    removeLife(){

        this.missed += 1;

        if(this.missed === 5){
            this.gameOver('lose');
        } else {
            const heart = document.querySelector('img[src="images/liveHeart.png"]');
            heart.src = "images/lostHeart.png";
        }
        
    }

    checkForWin(){
        return document.querySelectorAll('#phrase li.hide').length === 0;
    }

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

 }