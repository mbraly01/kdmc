class Deck{
    constructor(text) {
        this.text = text;
    }
}

class Resource_Deck extends Deck {
    constructor(text) {
        super(text);
        this.cards = text.split("\n");
        for (let i = 0; i < this.cards.length; i++){
            this.cards[i] = new Resources(this.cards[i]);
        }
    }

    draw(){
        return this.cards[randInt(0, this.cards.length)];
    }
}
