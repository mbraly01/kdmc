import React from 'react';
import {Card, AI_Card, draw} from './Card.js';
import fileContent from '/Users/matthewbraly/Documents/KDMC/kdmc/src/Text_Assets/AI/White_Lion_AI.txt'


class Deck{
    constructor(text = fileContent) {
        this.state = {
            proto_deck: this.text.split("\n"),
            cards: []
        }
    }
}

// class Resource_Deck extends Deck {
//     constructor(text) {
//         super(text);
//         this.cards = text.split("\n");
//         for (let i = 0; i < this.cards.length; i++){
//             this.cards[i] = new Resources(this.cards[i]);
//         }
//     }
// }

// class Hit_Location_Deck extends Deck {
//     constructor(text) {
//         super(text);
//         this.state.cards = text.split("\n");
        // for (let i = 0; i < this.cards.length; i++){
            // this.cards[i] = new Hit_Location(this.cards[i]);
        // }
//     }

// }

class AI_Deck extends Deck {
    constructor(text) {
        super(text);
        let i = 0;
        while (this.i < this.state.proto_deck.length){
            this.super.state.cards.append(new AI_Card(this.super.state.proto_deck[i]));
            this.i = 1+ this.i;
            return;
        }
        return;
    }
        
}

export {Deck, Hit_Location_Deck, AI_Deck} from './Deck_Generator.js';
