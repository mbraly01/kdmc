import Monster from '/Users/matthewbraly/Documents/KDMC/kdmc/src/Monster/Monster.js';
import fileContent from '/Users/matthewbraly/Documents/KDMC/kdmc/src/Text_Assets/AI/White_Lion_AI.txt';


class White_Lion extends Monster{
    constructor(text = fileContent) {
        super(text);
        //All targets suffer Grab if true
        this.state = {
            is_Enraged: false
            // hit_location: new Hit_Location_Deck(text)

        }
    }

    check_dismembered_or_killed(has_d_or_k) {
        if (has_d_or_k) {
            if (this.state.is_Enraged) {
                this.dec_dmg(1);
            }
            this.state.is_Enraged = false;
        }
        return;

    }


}

export default White_Lion;