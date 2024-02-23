import M_Stats from './MStats';
import { Deck, AI_Deck } from '../Deck/Deck_Generator';


class Monster {
    constructor(name, level) {
        this.state = {
        name: name,
        stats: M_Stats(name, level),
        AI: [],
        AI_Discard: [],
        AI_Wound: [],
        final_damage: false,
        AI_In_Play: [],
        Deck: null
        }
    }

    wound() {
        this.state.AI_Wound.append(this.state.AI.pop());
        this.state.AI = this.state.AI.slice(1,this.state.AI.length);
    }

    heal() {
        this.state.AI_Discard = this.shuffle(this.state.AI_Discard);
        this.state.AI.append(this.state.AI_Discard.pop());
        return this.state.AI;
    }

    play_AI(archive = false) {
        this.temp_AI = this.state.AI[0];
        this.state.AI = this.state.AI.slice(1,this.state.AI.length);
        this.temp_AI.execute();
        if (archive) {
            return;
        }
        this.state.AI_Discard.append(this.temp_AI);
        return ;
    }

    reveal(num=0) {
        this.AI_revealed = this.state.AI.slice(0,num);
        this.state.AI = this.state.AI.slice(num,this.state.AI.length);
        return this.AI_revealed;
    }

    shuffle(to_be_shuffled, to_shuffle_into = []) {
        this.to_be_shuffled = this.to_be_shuffled.concat(this.to_shuffle_into);
        this.temp_shuffled = Array.apply(null, this.to_be_shuffled.length + this.to_be_shuffled.length);
        this.temp_shuffling_index = Array.from({ length: this.to_be_shuffled.length + this.to_shuffle_into.length }, (v, k) => k);
        for ( let i = 0; i < this.temp_shuffling_index.length; i++) {
            let poss_shuffle = Math.floor(Math.random() * this.temp_shuffling_index.length);
            while (this.temp_shuffling_index[poss_shuffle] == null) {
                poss_shuffle = Math.floor(Math.random() * this.temp_shuffling_index.length);
            }
            this.temp_shuffled[i] = this.to_be_shuffled[this.temp_shuffling_index[this.poss_shuffle]];
            this.temp_shuffling_index[poss_shuffle] = null;
            }
            return this.temp_shuffled;
        }

    inc_dmg(inc) {
        this.state.stats[3] += inc;
        return;
    }

    dec_dmg(dec) {
        this.state.stats[3] -= dec;
        return;
    }

    Basic_Attack(attack_matrix) {
        let x = 0;
        while (x < this.attack_matrix[0]) {
            if (Math.random() * 10 >= this.attack_matrix[1]) {
                this.do_dmg(1);
            }
            x += 1;
        }
        return;
    }

    do_dmg(dmg) {
        return dmg + this.state.stats[3];
    }

    append_AI_In_Play(card) {
        this.state.AI_In_Play.append(card);
        return;
    }

    build_Deck(file_type) {
        const showFile = (e) => {
            const file = e.target.files[0];
            e.preventDefault();
            const reader = new FileReader();
            reader.onload = function(e) {
                const text = reader.result;
                const Deck = new Deck(this.text);
            }
            reader.readAsText(file);
        }
        this.state.Deck = this.Deck.shuffle();
        return this.state.text;
    }

}

export default Monster;