import React from 'react';
import {AI, execute, is_this_in_play} from '/Users/matthewbraly/Documents/KDMC/kdmc/src/AI/AI.js';
import { Card } from '../Deck/Card';
import { Monster, reveal } from '../Monster/Monster.js';

function Basic_Attack(WL) {
    WL.attack(1);
    return;
}

function Sniff(WL) {
    WL.sniff();
    return;
}

function Smart_Cat(WL) {
    let WL_revealed = this.WL.reveal(10);
    let mood_count = 0;
    let moods = [];
    for (let i = 0; i < WL_revealed.length && mood_count < 2; i++) {
        if (WL_revealed[i].type == "Mood") {
            moods.append(WL_revealed[i]);
            mood_count += 1;
        }
    }
    for (let mood in moods) {
        execute(mood, WL);
    }
    if (mood_count == 0) {
        WL.play_AI();
    }
    return;
}

function Vicious(WL) {
    const Card_Vicious = new Card("S$Vicious$Trait$At the end of each monster turn, the monster gets low to the ground preparing to dash away. Target all adjacent survivors. Full move the monster (even if there are no targets) away from all other threats. All targets suffer Grab.");
    WL.AI_In_Play.append(Card_Vicious);

    return;
}

function Enraged(WL) {
    WL.inc_dmg(1);
    WL.is_Enraged = true;
    let enraged = new Card("S$Enraged$Trait$If the monster is wounded while enraged, it suffers 1 brain damage.");
    WL.append_AI_In_Play(enraged);
    WL.play_AI();
}

function Grasp(WL) {
    console.log("Pick Target (1 - closest knocked down survivor, in range. 2 - closest survivor, in range. 3 - no target: sniff)");
    WL.attack([1,2,1]);
    console.log("The White Lion isolates its prey. Full move the White Lion away from all threats. Target suffers Grab.");
}

function Power_Squat(WL) {
    console.log("Pick Target (1 - closest threat, facing, in range. 2 - closest threat, in field of view. 3 - no target: sniff).");
    WL.attack([1,2,2]);
    console.log("After Damage (Knockback 6)");
}

export { Basic_Attack, Power_Squat, Grasp, Enraged,
Vicious, Smart_Cat, Sniff} from './White_Lion_AI';