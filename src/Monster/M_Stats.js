class M_Stats{
    constructor(M_type, level) {
        this.state = {
            M_type: M_type,
            level: level,
            stats: []
        }

        //Stats: [movement, toughness, speed, damage, luck, accuracy, evasion]

        switch(this.M_type) {
            case "White Lion":
                this.state.stats = this.assign_level_WL(level);
                break;
            case "Screaming Antelope":
                this.state.stats = this.assign_level_SA(level);
                break;
            case "Phoenix":
                this.state.stats = this.assign_level_P(level);
                break;
            case "Butcher":
                this.stats = this.assign_level_B(level);
                break;
            case "King's Man":
                this.stats = this.assign_level_KM(level);
                break;
            case "Watcher":
                this.stats = this.assign_level_W(level);
                break;
            case "The Hand":
                this.stats = this.assign_level_TH(level);
                break;
            case "Gold Smoke Knight":
                this.stats = this.assign_level_GSK(level);
                break;
            case "Gigalion":
                this.stats = this.assign_level_G(level);
                break;
            default:
                return null;
        }
    }

    assign_level_WL(level) {
                //Stats: [movement, toughness, speed, damage, luck, accuracy, evasion]
        switch(level) {
            case 0:
                return [6,6,0,0,0,0,0];
            case 1:
                return [6,8,0,0,0,0,0];
            case 2:
                return [7,10,1,1,0,0,0];
            case 3:
                return [8,14,2,2,1,2,0];
            default:
                return null;
        }
    }

    inc_dmg(inc) {
        this.state.stats[3] += inc;
    }
}

export { M_Stats} from '/Users/matthewbraly/Documents/KDMC/kdmc/src/Monster/M_Stats.js';