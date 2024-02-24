class Card {
    constructor(text) {
        this.state = {
            rating: "",
            rules: [],
            name: "",
            type:"",
            text: text
        }
    }
}

    // class Hit_Location extends Card {
    //     constructor(text) {
    //         super(text);
    //         const rules = text.split("$");
    //     }
    // }

    // class Resources extends Card {
    //     constructor(text) {
    //         super(text);
    //         const rules = text.split("$");
    //         this.name = rules[0];
    //         this.materials = rules[1].split(",");
    //         this.bottom = rules[2];
    //         this.consumable;
    //         if (this.materials.includes("consumable")){
    //             this.consumable = true;
    //         } else {
    //             this.consumable = false;
    //         }
    //     }
    // }

class AI_Card extends Card {
    constructor(text) {
        super(text);
        this.state.rules = text.split("$");
        this.state.rating = this.state.rules[0];
        this.state.name = this.state.rules[1];
        this.state.type = this.state.rules[2];
        this.add_text = this.state.rules[3];
    }
}

function draw() {
    return (
        <div>
            <h1>{this.state.name}</h1>
            <p>{this.state.type}</p>
            <p>{this.state.text}</p>
        </div>
    )
}

function card_text() {
    return this.state.text;
}

export { AI_Card, Card, draw, card_text};


