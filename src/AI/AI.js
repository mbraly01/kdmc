import React from 'react';

class AI {
    constructor() {
        this.state = {
            AI_Deck: [],
            AI_Discard: [],
            AI_Wound: [],
            Final_Damage: false,
            AI_In_Play: []
        }
    }

    draw(){
        let temp_AI_card = this.state.AI_Deck.pop();
        if (is_this_in_play(temp_AI_card)){
            this.state.AI_In_Play.append(temp_AI_card);
        }
        else {
            this.state.AI_Discard.append(temp_AI_card);
        }
        return temp_AI_card;
    }
}

function execute(card, monster){
    window[card.name](monster);
    return; 
}

function is_this_in_play(card){
    if (card.state.type == "AI") {
        return true;
    }
    else {
        return false;
    }
}

export { AI, execute, is_this_in_play} from './AI';