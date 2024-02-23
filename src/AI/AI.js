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
        temp_AI = this.state.AI_Deck.pop();
        if (is_this_in_play(temp_AI)){
            this.state.AI_In_Play.append(temp_AI);
        }
        else {
            this.state.AI_Discard.append(temp_AI);
        }
        return temp_AI;
    }
}

function is_this_in_play(card){
    if (card.state.type == "AI") {
        return true;
    }
    else {
        return false;
    }
}

