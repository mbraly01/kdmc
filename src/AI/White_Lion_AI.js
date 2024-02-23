import { Card } from "../Deck/Card";
import fileContent from '/Users/matthewbraly/Documents/KDMC/kdmc/src/Text_Assets/AI/White_Lion_AI.txt';


class White_Lion_AI extends AI{
    constructor(level) {
        this.state = {
            AI: [],
            AI_Discard: [],
            AI_Wound: [],
            final_damage: false,
            AI_In_Play: []
        }

        const text = fileContent.split("\n");
        for (let i = 0; i < text.length; i++) {
            console.log("OOGaOOga", i);
            this.state.AI.append(new Card(text[i]));
        }
    }
}

export default White_Lion_AI;