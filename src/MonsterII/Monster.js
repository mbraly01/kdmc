import M_Stats from './M_Stats';
import White_Lion_AI from '../AI/White_Lion_AI';

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
                this.state.AI = White_Lion_AI(level);
        }
        return;
    }
}

    function monster_name(Monster) {
        return Monster.state.name;
    }

    function draw_AI(Monster) {
        return Monster.state.AI.draw();
    }

export { Monster, monster_name};