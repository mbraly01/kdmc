class Monster {
    constructor(name, level) {
        this.name = name;
        this.stats = M_Stats.assign_level(level);
        this.AI = [];
        this.AI_Discard = [];
        this.AI_Wound = [];
        this.final_damage = false;
        this.AI_In_Play = [];

    }

    wound() {
        this.AI_Wound.append(this.AI.pop());
        this.AI = this.AI.slice(1,length(this.AI));
    }

    heal() {
        this.AI_Discard = shuffle(this.AI_Discard);
        this.AI.append(this.AI_Discard.pop());
        return this.AI
    }

    play_AI(archive = false) {
        AI_Card = this.AI[0];
        this.AI = this.AI.slice(1,length(this.AI));
        AI_Card.execute();
        if (archive) {
            return
        }
        this.AI_Discard.append(AI_Card);
        return 
    }

    reveal(num=0) {
        AI_revealed = [];
        for (let i = 0; i < num; i++) {
            AI_revealed.append(this.AI[0]);
            this.AI = this.AI.slice(1,length(this.AI));
        }
    return AI_revealed;
    }

    shuffle(to_be_shuffled, to_shuffle_into = []) {
        to_be_shuffled = to_be_shuffled.concat(to_shuffle_into);
        temp_shuffled = Array.apply(null, Array(length(to_be_shuffled)+length(to_shuffle_into)));
        temp_shuffling_index = Array.from({ length: length(to_be_shuffled) + length(to_shuffle_into) }, (v, k) => k);
        for ( i = 0; i < temp_shuffling_index.length; i++) {
            poss_shuffle = Math.floor(Math.random() * temp_shuffling_index.length);
            while (temp_shuffling_index[poss_shuffle] == null) {
                poss_shuffle = Math.floor(Math.random() * temp_shuffling_index.length);
            }
            temp_shuffled[i] = to_be_shuffled[temp_shuffling_index[poss_shuffle]];
            temp_shuffling_index[poss_shuffle] = null;
            }
            return temp_shuffled;
        }
        
    inc_dmg(inc) {
        this.stats[3] += inc;
        return;
    }

    dec_dmg(dec) {
        this.stats[3] -= dec;
        return;
    }

    Basic_Attack(attack_matrix) {
        x = 0;
        while (x < attack_matrix[0]) {
            if (Math.random() * 10 >= attack_matrix[1]) {
                this.do_dmg(1);
            }
            x += 1;
        }
        return;
    }

    do_dmg(dmg) {
        return dmg + this.stats[3];
    }

    append_AI_In_Play(card) {
        this.AI_In_Play.append(card);
        return;
    }
}
