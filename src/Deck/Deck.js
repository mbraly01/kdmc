import React from 'react';
import {Card} from './Card';

class Deck {
    constructor(text) {
        this.cards = [];
        this.cards_temp = split(text, "\n");
        for (i in cards_temp){
            this.cards.append(new Card(cards_temp[i]));
        }
    }

    shuffle() {
        
    }
    
    add_card(card) {
        this.cards.push(card);
    }
    
    draw_card() {
        return this.cards.pop();
    }
}

export { Deck } from './Deck';