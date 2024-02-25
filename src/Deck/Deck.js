import React from 'react';
import {Card} from './Card';

class Deck {
    constructor(text) {
        this.cards = split(text, "\n");
    }
    
    add_card(card) {
        this.cards.push(card);
    }
    
    draw_card() {
        return this.cards.pop();
    }
}

export { Deck } from './Deck';