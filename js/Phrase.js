/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase(); 
    }    

    /** 
     * Adds phrase characters to HTML document as invididual LI elements
     */
    addPhraseToDisplay(){
        const phraseContainer = document.querySelector('#phrase ul');
        //convert phrase into an array of individual characters
        const characters = [...this.phrase];

        //create an LI element for each character and append to UL
        characters.forEach(character => {

            const element = document.createElement('li');

            if(character !== " "){ //if current character is a letter
                element.classList.add('hide', 'letter', character);
                element.textContent = character;
            }else{ //if current character is a space
                element.classList.add('space');
            }

            phraseContainer.appendChild(element);
        });
    }

    /** 
     * Determines if a given letter exists within the phrase 
     * @param  {letter}         letter to be evaluated
     * @return {boolean}        returns true if letter exists, false otherwise
     */
    checkLetter(letter){
        //convert phrase into an array of individual characters
        const characters = [...this.phrase];
        //return true if the character exists within the phrase
        return characters.findIndex(character => character === letter) !== -1;
    }

    
    /** 
     * Displays associated LI element(s) for all occurences of a given letter within the phrase
     * @param  {letter}         letter to be displayed
     */
    showMatchedLetter(letter){
        //retrieve all LI elements with a class of letter
        const elements = document.querySelectorAll(`li.${letter}`);
        //show matched LI elements
        elements.forEach(element => {
            element.classList.remove('hide');
            element.classList.add('show');
        });
    }

 }