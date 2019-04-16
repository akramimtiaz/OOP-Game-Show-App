/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {

    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }    

    addPhraseToDisplay(){
        const phraseContainer = document.querySelector('#phrase ul');
        const characters = [...this.phrase];

        characters.forEach(character => {

            const element = document.createElement('li');

            if(character !== " "){
                element.classList.add('hide', 'letter', character);
                element.textContent = character;
            }else{
                element.classList.add('space');
            }

            phraseContainer.appendChild(element);
        });
    }

    checkLetter(letter){
        const characters = [...this.phrase];
        return characters.findIndex(character => character === letter) !== -1;
    }

    showMatchedLetter(letter){
        const elements = document.querySelectorAll(`li.${letter}`);
        elements.forEach(element => {
            element.classList.remove('hide');
            element.classList.add('show');
        });
    }

    

 }