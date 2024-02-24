import { Monster, monster_name } from '/Users/matthewbraly/Documents/KDMC/kdmc/src/Monster/Monster.js';
import fileContent from '/Users/matthewbraly/Documents/KDMC/kdmc/src/Text_Assets/AI/White_Lion_AI.txt';
import {Card} from '/Users/matthewbraly/Documents/KDMC/kdmc/src/Deck/Card.js';
import { AI, execute } from '/Users/matthewbraly/Documents/KDMC/kdmc/src/AI/AI.js';

class White_Lion extends Monster{
    constructor(level) {
        super("White Lion", level);
        //All targets suffer Grab if true
        this.state = {
            is_Enraged: false
            // hit_location: new Hit_Location_Deck(text)

        }
    }

}

 function check_dismembered_or_killed(White_Lion, has_d_or_k) {
    if (has_d_or_k) {
        if (this.state.is_Enraged) {
            this.dec_dmg(1);
        }
        this.state.is_Enraged = false;
    }
    return;

}

function Basic_Attack(WL) {
    WL.attack(1);
    return;
}

function Sniff(WL) {
    WL.sniff();
    return;
}

function Smart_Cat(WL) {
    let WL_revealed = WL.reveal(10);
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
    let Card_Vicious = new Card("S$Vicious$Trait$At the end of each monster turn, the monster gets low to the ground preparing to dash away. Target all adjacent survivors. Full move the monster (even if there are no targets) away from all other threats. All targets suffer Grab.");
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

export {White_Lion, check_dismembered_or_killed, Basic_Attack, Sniff, Smart_Cat, Vicious, Enraged, Grasp, Power_Squat};
