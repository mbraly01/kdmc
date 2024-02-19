class Card {
    constructor(text) {
        this.text = text;
    }

    read_off(){
        console.log(text);
    }
}

class Hit_Location extends Card {
    constructor(text) {
        super(text);
        const rules = text.split("$");
    }
}

class Resources extends Card {
    constructor(text) {
        super(text);
        const rules = text.split("$");
        this.name = rules[0];
        this.materials = rules[1].split(",");
        this.bottom = rules[2];
        this.consumable;
        if (this.materials.includes("consumable")){
            this.consumable = true;
        } else {
            this.consumable = false;
        }
    }
}



