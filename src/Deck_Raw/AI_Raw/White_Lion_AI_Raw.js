function Basic_Attack(WL) {
    WL.attack(1);
    return;
}

function Sniff(WL) {
    WL.sniff();
    return;
}

function Smart_Cat(WL) {
    WL_revealed = WL.reveal(10);
    mood_count = 0;
    moods = [];
    for (let i = 0; i < WL_revealed.length && mood_count < 2; i++) {
        if (WL_revealed[i].type == "Mood") {
            moods.append(WL_revealed[i]);
            mood_count += 1;
        }
    }
    for (mood in moods) {
        execute(mood);
    }
    if (mood_count == 0) {
        WL.play_AI();
    }
    return;
}

function Vicious(WL) {
    Card_Vicious = ("S$Vicious$Trait$At the end of each monster turn, the monster gets low to the ground preparing to dash away. Target all adjacent survivors. Full move the monster (even if there are no targets) away from all other threats. All targets suffer Grab.");
    WL.AI_In_Play.append(Card_Vicious);

    return;
}

function Enraged(WL) {
    WL.inc_dmg(1);
    WL.is_Enraged = true;
    enraged = ("S$Enraged$Trait$If the monster is wounded while enraged, it suffers 1 brain damage.");
    WL.append_AI_In_Play(enraged);
    WL.play_AI();
}

function Grasp(WL) {
    print("Pick Target (1 - closest knocked down survivor, in range. 2 - closest survivor, in range. 3 - no target: sniff)");
    WL.attack([1,2,1]);
    print("The White Lion isolates its prey. Full move the White Lion away from all threats. Target suffers Grab.");
}

function Power_Squat(WL) {
    print("Pick Target (1 - closest threat, facing, in range. 2 - closest threat, in field of view. 3 - no target: sniff).");
    WL.attack([1,2,2]);
    print("After Damage (Knockback 6)");
}