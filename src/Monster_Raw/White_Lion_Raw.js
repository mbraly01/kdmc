class White_Lion extends Monster{
    constructor(text) {
        super(text);
        this.hit_location = new Hit_Location_Deck(text);
        //All targets suffer Grab if true
        is_Enraged = false;
    }

    check_dismembered_or_killed(has_d_or_k) {
        if (has_d_or_k) {
            if (is_Enraged) {
                this.dec_dmg(1);
            }
            is_Enraged = false;
        }
        return;

    }


}