import M_Stats from './M_Stats';
import { Basic_Attack, Power_Squat, Grasp, Enraged,
    Vicious, Smart_Cat, Sniff} 
    from '/Users/matthewbraly/Documents/KDMC/kdmc/src/AI/White_Lion_AI.js';
import {White_Lion } from '/Users/matthewbraly/Documents/KDMC/kdmc/src/Monster/White_Lion.js';
import { execute } from '/Users/matthewbraly/Documents/KDMC/kdmc/src/AI/AI.js';

class Monster {
    constructor(name, level) {
        this.state = {
            name: name,
            level: level,
            AI: null,
            Resource: null,
            HL: null
        }
        switch (this.name) {
            case "White Lion":
                this.state.stats = M_Stats(name, level);
                this.state.AI = White_Lion(level);
                return;
            default:
                return;
        }
        return;
    }
}

    function monster_name(Monster) {
        return Monster.state.name;
    }

    function draw_AI(Monster) {
        return execute(Monster.state.AI.draw(), Monster);
    }

    function reveal(num_to_reveal) {
        return this.state.AI.slice([0,this.num_to_reveal]);
    }

export { Monster, monster_name} from '/Users/matthewbraly/Documents/KDMC/kdmc/src/Monster/Monster.js';