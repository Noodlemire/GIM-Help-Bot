//Credit: Catscalla

module.exports = (g) =>
{
	const {register_role} = g;

	register_role(["maiden", "701"], "Neutral", "Maiden", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 701");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- (Day Ability): Choose a player to serve during day 1, you will gain this players win condition and gain a night chat with them, if your target is a factional member, you will gain their night chat.\n- (Night Ability): you may choose twice per game to use your skills and serve all players visiting your target, turning away all visits back onto themselves.");

		e.addField("Attributes:", "- You cannot die at night until your target is dead.\n- When your target dies, you will become 702: Hopeless.");
		
		e.addField("Goal:", "See your master win the game.");
	});
	
	    register_role(["hopeless", "702"], "Neutral", "Hopeless", {subCat: "Killing"}, (e) =>
    {
        e.setDescription("Post 702");

        e.addField("Alignment", "Neutral Killing", true);
        e.addField("Attack", "Powerful", true);
        e.addField("Defense", "None", true);

        e.addField("Abilities:", "Choose to kill a target, all visitors to your target, and who your target visits.");

        e.addField("Attributes:", "You bypass redirection and role block, killing all role blockers against you.");

        e.addField("Goal:", "Kill all who would oppose you.");
    });

    register_role(["ninja_baker", "ninjabaker", "703"], "Town", "Ninja Baker", {subCat: "Support"}, (e) =>
    {
        e.setDescription("Post 703");

        e.addField("Alignment", "Town Support", true);
        e.addField("Attack", "None", true);
        e.addField("Defense", "None", true);

        e.addField("Abilities:", "- Choose a player to bake bread of each night.\n- Choose a player to feed bread to each night.");

        e.addField("Attributes:", "- You may not bake and feed in the same night.\n- The player you feed bread to will become the role of the player you baked that bread of, sans win conditions, in addition to their other roles.\n- You can have multiple breads. You can choose which bread to feed to your target, but you may only feed them one bread at once.\n- You may self-target with either of your abilities.");

        e.addField("Goal:", "Lynch every criminal and evildoer.");
    });

    register_role(["wayward", "704"], "Town", "Wayward", {subCat: "Protective"}, (e) =>
    {
        e.setDescription("Post 704");

        e.addField("Alignment", "Unique Town Protective", true);
        e.addField("Attack", "Powerful", true);
        e.addField("Defense", "None", true);

        e.addField("Abilities:", "- Establish a connection between two players during the day.\n- Intercept all players targeting one connected player and kill those players.");

        e.addField("Attributes:", "- Control Immune\n- Astral\n- Connections do nothing.\n- When you intercept, you will redirect all abilities targeting your target to the person they're connected to, and then deal a Powerful attack to everyone you redirected.\n- When you intercept, your connection will be destroyed.\n- You cannot intercept two nights in a row.\n- You may establish connections between yourself. You cannot be killed by intercepting yourself.\n- You can have up to three connections established at once.");

        e.addField("Goal:", "Lynch every criminal and evildoer.");
    });

    register_role(["official", "705"], "Town", "Official", {subCat: "Power"}, (e) =>
    {
        e.setDescription("Post 705");

        e.addField("Alignment", "Town Power", true);
        e.addField("Attack", "None", true);
        e.addField("Defense", "None", true);

        e.addField("Abilities:", "- Invite a player into a private channel with you and other invited players during the day. 3 Uses.\n- Vote on who to use the Official's extra votes on.");

        e.addField("Attributes:", "- Invited players will be given frame immunity.\n- You have 2 extra, private 'organization' votes. During the night, all invited players may vote for who these extra votes should be used on. Whoever gets the most votes will be voted by these 2 extra votes.");

        e.addField("Goal:", "Lynch every criminal and evildoer.");
    });

    register_role(["firefighter_is_a_good_role", "ffiagr", "706"], "Neutral", "Firefighter Is a Good Role", {subCat: "Benign"}, (e) =>
    {
        e.setDescription("Post 706");

        e.addField("Alignment", "Neutral Benign", true);
        e.addField("Attack", "None", true);
        e.addField("Defense", "None", true);

        e.addField("Abilities:", "- Send a message of your choice to a player once per day whilst dead.");

        e.addField("Attributes:", "- The streak of actual serious roles has ended.\n- You die at the start of the game for being an annoying channel I muted");

        e.addField("Goal:", "Be revived.");
    });

    register_role(["treestump", "707a", "707"], "Town", "Treestump", {subCat: "Casual"}, (e) =>
    {
        e.setDescription("Post 707");

        e.addField("Alignment", "Unique Town Casual", true);
        e.addField("Attack", "None", true);
        e.addField("Defense", "Basic", true);

        e.addField("Abilities:", "- Choose to grow into a Tree at night. (=tree)");

        e.addField("Attributes:", "- Roleblock and control immune.\n- You will gain a single charge of every ability used against you as the ability was when it was used (aka you can gain a Necronomicon-boosted Poison charge if the Poisoner had the Necronomicon). You do not gain immunities.\n- Evil roles who target you and fail to kill you (including ones that can't kill) will learn that you are the Treestump.\n- You cannot use your gained abilities as a Treestump.");

        e.addField("Goal:", "Lynch every criminal and evildoer.");
    });

    register_role(["tree", "707b"], "Town", "Tree", {subCat: "Casual"}, (e) =>
    {
        e.setDescription("Post 707");

        e.addField("Alignment", "Unique Town Casual", true);
        e.addField("Attack", "Varies", true);
        e.addField("Defense", "None", true);

        e.addField("Abilities:", "- Utilize the abilities you gained as a Treestump.");

        e.addField("Attributes:", "- Attacks you use will be attributed to the original killer, and you will appear to visit the victim as normal.\n- Tree does not roll naturally. You must upgrade from the Treestump");

        e.addField("Goal:", "Lynch every criminal and evildoer.");
    });

    register_role(["blacksmith", "708"], "Town", "Blacksmith", {subCat: "Protective"}, (e) =>
    {
        e.setDescription("Post 708");

        e.addField("Alignment", "Town Protective", true);
        e.addField("Attack", "None", true);
        e.addField("Defense", "None", true);

        e.addField("Abilities:", "- Choose to craft a bulletproof vest at night.\n- Choose to give any number of players a bulletproof vest at night.");

        e.addField("Attributes:", "- A player that you give a bulletproof vest to may choose to don their vest during the night. This gives them Basic Defense for that night only.\n- If a player dies without using their vest, you will come back into possession of it the following night and may give it out to another player.\n- You may craft as many bulletproof vests as you like.\n- You may give out as many bulletproof vests are you like in one night, but you may only give out as many vests as you have crafted.\n- You may not craft and give out a vest in the same night.\n- You have no limit on how many vests you can give yourself.");

        e.addField("Goal:", "Lynch every criminal and evildoer.");
    });

    register_role(["sleepwalker", "709"], "Town", "Sleepwalker", {subCat: "Support"}, (e) =>
    {
        e.setDescription("Post 709");

        e.addField("Alignment", "Unique Town Support", true);
        e.addField("Attack", "None", true);
        e.addField("Defense", "None", true);

        e.addField("Abilities:", "- Guide a player to their destination at night, allowing them to perform their actions peacefully.");

        e.addField("Attributes:", "- You will cancel all abilities that would interfere or prevent your target's action from succeeding exactly the way it should. You will not know what you canceled, only how many abilities you did cancel.\n- All forms of deception will simply not take effect.\n- You will visit your target's target instead of your target.\n- Your target will not be notified that you guided them.");

        e.addField("Goal:", "Lynch every criminal and evildoer.");
    });

    register_role(["scapegoat", "710"], "Town", "Scapegoat", {subCat: "Support"}, (e) =>
    {
        e.setDescription("Post 710");

        e.addField("Alignment", "Town Support", true);
        e.addField("Attack", "None", true);
        e.addField("Defense", "None", true);

        e.addField("Abilities:", "- Choose someone to take the fall for each night.\n- Choose to roleblock all of your visitors at night.");

        e.addField("Attributes:", "- Roleblock and redirection immune.\n- When you choose to take the fall for someone, all of their visitors will be redirected to you through any roleblock immunities.\n- You may roleblock all of your visitors twice per game. You may only do this on nights that you decide to take the fall for someone. Players that you successfully roleblock will only be given the roleblock message and not the redirection message.");

        e.addField("Goal:", "Lynch every criminal and evildoer.");
    });

    register_role(["notorious_scoundrel", "notoriousscoundrel", "scoundrel", "711"], "Neutral", "Notorious Scoundrel", {subCat: "Chaos"}, (e) =>
    {
        e.setDescription("Post 711");

        e.addField("Alignment", "Neutral Chaos", true);
        e.addField("Attack", "Basic", true);
        e.addField("Defense", "Basic", true);

        e.addField("Abilities:", "- Attack a player during the night. 1 Use, +1 use every 3 nights.");

        e.addField("Attributes:", "- There must be at exactly 4 Notorious Scoundrels at the start of the game. Cannot roll if having exactly 4 slots for Notorious Scoundrels are not possible. Otherwise, upon rolling this immediately rerolls 3 other role slots into also being a Notorious Scoundrel. If they reroll that, also reroll another player into being a Notorious Scoundrel, preferably one who also rerolled. If not enough people are willing to be a Notorious Scoundrel and reroll it, reroll the role list entirely, refresh rerolls, and give all who kept the Notorious Scoundrel role an honorary victory.");

        e.addField("Goal:", "Eliminate all who oppose the Notorious Scoundrels.");
    });

    register_role(["incinerator", "712"], "Underworld", "Incinerator", {subCat: "Offensive"}, (e) =>
    {
        e.setDescription("Post 712");

        e.addField("Alignment", "Underworld Offensive", true);
        e.addField("Attack", "None", true);
        e.addField("Defense", "None", true);

        e.addField("Abilities:", "-- Trap your house at night.\n- Choose to incinerate all who burn at night.");

        e.addField("Attributes:", "- When you trap your house, all players who visit you will become doused. You will also blind all of your visitors through the sheer power of your flames causing them to be roleblocked for two nights after they visit you. This will not give any special notification to your visitors. You will not blind any Underworld members that visit you.\n- When you incinerate, all players killed by the Underworld's ignition will be shown as 'Incinerated' in the graveyard. No wills may be found.\n- You may trap your house three times and incinerate once.\n- If the Apocalypse dies, you will be promoted to Apocalypse.");

        e.addField("Goal:", "Kill all who oppose the Underworld sect.");
    });

    register_role(["joker_of_all_trades", "jokerofalltrades", "joat", "713"], "Town", "Joker of All Trades", {subCat: "Support"}, (e) =>
    {
        e.setDescription("Post 713");

        e.addField("Alignment", "Town Support", true);
        e.addField("Attack", "None", true);
        e.addField("Defense", "None", true);

        e.addField("Abilities:", "- N/A.");

        e.addField("Attributes:", "- If this role is rolled, it's randomly chosen to be one of the five: Jack, Queen, King, Ace or Joker. (=jack =queen =king =ace =joker).");

        e.addField("Goal:", "Lynch every criminal and evildoer.");
    });

    register_role(["jack"], "Town", "Jack", {subCat: "Support"}, (e) =>
    {
        e.setDescription("Post 713");

        e.addField("Alignment", "Town Support", true);
        e.addField("Attack", "None", true);
        e.addField("Defense", "None", true);

        e.addField("Abilities:", "- Choose a player each night. If they die, gain all their abilities and attributes for the rest of the game along with your other abilities and attributes.");

        e.addField("Attributes:", "- You may use multiple abilities each night as long as the abilities come from different sources.");

        e.addField("Goal:", "Lynch every criminal and evildoer.");
    });

    register_role(["queen"], "Town", "Queen", {subCat: "Support"}, (e) =>
    {
        e.setDescription("Post 713");

        e.addField("Alignment", "Town Support", true);
        e.addField("Attack", "None", true);
        e.addField("Defense", "None", true);

        e.addField("Abilities:", "- Choose two players, A and B, each night.");

        e.addField("Attributes:", "- Any Town visits that happen to A will also happen to B. Those visiting players will be notified that they also visited B.\n- You may choose yourself as either A or B.");

        e.addField("Goal:", "Lynch every criminal and evildoer.");
    });

    register_role(["king"], "Town", "King", {subCat: "Support"}, (e) =>
    {
        e.setDescription("Post 713");

        e.addField("Alignment", "Town Support", true);
        e.addField("Attack", "None", true);
        e.addField("Defense", "None", true);

        e.addField("Abilities:", "- Choose to reveal yourself as the King at any point during the night. This takes effect immediately.");

        e.addField("Attributes:", "- Revealing grants you the ability to give another player Invincible defense each night as well as two votes during the day and immunity to being lynched.");

        e.addField("Goal:", "Lynch every criminal and evildoer.");
    });

    register_role(["ace"], "Town", "Ace", {subCat: "Support"}, (e) =>
    {
        e.setDescription("Post 713");

        e.addField("Alignment", "Town Support", true);
        e.addField("Attack", "None", true);
        e.addField("Defense", "None", true);

        e.addField("Abilities:", "- Choose a player each night and give them a Mark.");

        e.addField("Attributes:", "- After giving a Mark, if all living non-Town players have Marks, the Town wins the game and all factions opposing the Town lose the game.\n- Non-Town players are notified when they're given Marks.\n- If you're the only Town player left, you'll be notified, and you can choose two targets each night.");

        e.addField("Goal:", "Lynch every criminal and evildoer.");
    });

    register_role(["joker"], "Town", "Joker", {subCat: "Support"}, (e) =>
    {
        e.setDescription("Post 713");

        e.addField("Alignment", "Town Support", true);
        e.addField("Attack", "None", true);
        e.addField("Defense", "None", true);

        e.addField("Abilities:", "- Each day, choose five Town roles from the Grand Idea Mafia roles thread.");

        e.addField("Attributes:", "- For the duration of the next night, you'll be one of those roles chosen at random.");

        e.addField("Goal:", "Lynch every criminal and evildoer.");
    });

    register_role(["amanojaku", "714"], "Neutral", "Amanojaku", {subCat: "Chaos"}, (e) =>
    {
        e.setDescription("Post 714");

        e.addField("Alignment", "Neutral Chaos", true);
        e.addField("Attack", "None", true);
        e.addField("Defense", "None", true);

        e.addField("Abilities:", "- During the day, you may arm a player with the ability to perform a Basic attack at night. They may only use this given ability once. Unless stated otherwise by their own role, they may not use this ability and another ability in the same night. You may not use this ability on yourself.\n- During the night, you may choose to completely turn the levels of Attack and Defense around. Attacks that would normally fail to a kill a target due to their defense will instead kill them, and attacks that would normally be sufficient enough to kill a target due to their lower defense will instead fail. (3 uses.)");

        e.addField("Attributes:", "- None. (This counts as an attribute.)");

        e.addField("Goal:", "Ensure that all players with any Defense are dead by the end of the game. You may win while dead.");
    });

    register_role(["arcane_bombardment", "arcanebombardment", "arcane_bomb", "715"], "Neutral", "Arcane Bombardment", {subCat: "Killing"}, (e) =>
    {
        e.setDescription("Post 715");

        e.addField("Alignment", "Neutral Killing", true);
        e.addField("Attack", "Basic", true);
        e.addField("Defense", "Basic", true);

        e.addField("Abilities:", "- Attack someone each night.");

        e.addField("Attributes:", "- Whenever you attack someone, copy an ability that's been used at any point in the game previously at random. Then, you may use any number of the abilities that you've copied with this attribute. You can't use those abilities normally.");

        e.addField("Goal:", "Kill all who would oppose you.");
    });

    register_role(["bomb", "716"], "Town", "Bomb", {subCat: "Casual"}, (e) =>
    {
        e.setDescription("Post 716");

        e.addField("Alignment", "Unique Town Casual", true);
        e.addField("Attack", "Unstoppable", true);
        e.addField("Defense", "None", true);

        e.addField("Abilities:", "- Pass around your bomb at night.");

        e.addField("Attributes:", "- If the person holding your bomb dies, everyone visiting them and the target themselves are dealt an Unstoppable attack.\n- If the target dies the night they get the bomb, you will also die.\n- The player holding your bomb will return unfavorable results to Investigatives regardless of their role.\n- When your bomb goes off, you must spend 2 nights building another one.\n- You may target yourself to hold your bomb for the night.");

        e.addField("Goal:", "Lynch every criminal and evildoer.");
    });

    register_role(["turncoat", "717"], "Mafia", "Turncoat", {subCat: "Espionage"}, (e) =>
    {
        e.setDescription("Post 717");

        e.addField("Alignment", "Mafia Espionage", true);
        e.addField("Attack", "Basic", true);
        e.addField("Defense", "None", true);

        e.addField("Abilities:", "- Make a list of three players to plan to attack. You will attack once per night, moving down the list. Make a new list once you have gone through all three players.\n- Twice per game, you can publicly announce a faction to change to at the end of a day. Your role stays the same, except for the win goal.");

        e.addField("Attributes:", "- If a target is already dead, your next attack will be upgraded to powerful.\n- Your attack is independent of the Factional Mafia Kill.");

        e.addField("Goal:", "Kill anyone that will not submit to the Mafia (Can be changed).");
    });

    register_role(["electromancer", "electro", "718"], "Neutral", "Electromancer", {subCat: "Killing"}, (e) =>
    {
        e.setDescription("Post 718");

        e.addField("Alignment", "Neutral Killing", true);
        e.addField("Attack", "Basic", true);
        e.addField("Defense", "Basic", true);

        e.addField("Abilities:", "- Attack someone at instant speed at any time, but only once each day and each night.");

        e.addField("Attributes:", "- This attack resolves immediately.");

        e.addField("Goal:", "Kill all who would oppose you.");
    });

    register_role(["aufeis", "719"], "Everfrost", "Aufeis", {subCat: "Support"}, (e) =>
    {
        e.setDescription("Post 719");

        e.addField("Alignment", "Everfrost Support", true);
        e.addField("Attack", "None", true);
        e.addField("Defense", "None", true);

        e.addField("Abilities:", "- Each night, choose a player. If they are targeted by two or more players, for the two following nights you'll learn their action immediately when they choose it.\nCryosphere Lash ??? Roleblock all players who you've learned the action of and their targets for tonight. Then, coldsnap. You may only use this ability once each game.");

        e.addField("Attributes:", "- Roleblock immune.\n- Whenever a player is roleblocked by anything, you learn who their target and any messages the target would have received from the visit.");

        e.addField("Goal:", "Eliminate all who don't submit to the endless winter.");
    });

    register_role(["machiavellian", "720"], "Town", "Machiavellian", {subCat: "Killing"}, (e) =>
    {
        e.setDescription("Post 720");

        e.addField("Alignment", "Town Killing", true);
        e.addField("Attack", "Powerful", true);
        e.addField("Defense", "None", true);

        e.addField("Abilities:", "- Guess a player's exact role during the night.");

        e.addField("Attributes:", "- If you are correct in your guess, you will attack your target with a Powerful attack. If you are incorrect, you will instead attack yourself.");

        e.addField("Goal:", "Lynch every criminal and evildoer.");
    });

    register_role(["asura", "721"], "FallenAngel", "Asura", {subCat: "Killing"}, (e) =>
    {
        e.setDescription("Post 721");

        e.addField("Alignment", "Unique Fallen Angel Killing", true);
        e.addField("Attack", "Piercing", true);
        e.addField("Defense", "Aura", true);

        e.addField("Abilities:", "- Annihilate two players each full moon.");

        e.addField("Attributes:", "- If you annihilate a Fallen Angel, you will permanently be able to annihilate an extra player each full moon for the rest of the game.\n- If you annihilate a non-Fallen Angel, you will be able to an additional time the next night, even if it's not a full moon.\n**Sin of Wrath** ??? If you're the last Fallen Angel remaining, your attacks rampage and rampage again. (You attack all your target's visitors and all your target's visitors' visitors.)");

        e.addField("Goal:", "Live to crush all who would oppose the Fallen Angels.");
    });

    register_role(["incarnation", "incarnate", "722"], "Town", "Incarnation", {subCat: "Support"}, (e) =>
    {
        e.setDescription("Post 722");

        e.addField("Alignment", "Town Support", true);
        e.addField("Attack", "None", true);
        e.addField("Defense", "None", true);

        e.addField("Abilities:", "- Pick two players and merge their spirits.");

        e.addField("Attributes:", "- If the first player dies, their spirit will enter the second player, allowing them to perform the dead player's ability alongside their own.\n- If both your targets die, you will attempt to heal the second player, then merge the first player with them.");

        e.addField("Goal:", "Lynch every criminal and evildoer.");
    });

    register_role(["jester", "mafia_jester", "jester_mafia", "723"], "Mafia", "Jester", {subCat: "Support"}, (e) =>
    {
        e.setDescription("Post 723");

        e.addField("Alignment", "Mafia Support", true);
        e.addField("Attack", "Unstoppable", true);
        e.addField("Defense", "None", true);

        e.addField("Abilities:", "- None.");

        e.addField("Attributes:", "- If you are lynched, you may choose a player to deliver an Unstoppable attack to the following night.");

        e.addField("Goal:", "Kill anyone that will not submit to the Mafia.");
    });

    register_role(["shadow_of_descent", "shadowofdescent", "shadow_descent", "724"], "Neutral", "Shadow of Descent", {subCat: "Killing"}, (e) =>
    {
        e.setDescription("Post 724");

        e.addField("Alignment", "Neutral Killing", true);
        e.addField("Attack", "Basic", true);
        e.addField("Defense", "None", true);

        e.addField("Abilities:", "- Attack a player.\n- Attack a player.\n- Roleblock a player.\n- Change your defense to Basic for the night.\n- Hide a player's role and will if they die tonight.\n- Commit suicide.");

        e.addField("Attributes:", "- Each day, you must choose one of your abilities. You lose that ability.\- You may use any number of different abilities each night. ");

        e.addField("Goal:", "Kill all who would oppose you.");
    });

    register_role(["light_of_ascent", "lightofascent", "light_ascent", "725"], "Neutral", "Light of Ascent", {subCat: "Killing"}, (e) =>
    {
        e.setDescription("Post 725");

        e.addField("Alignment", "Neutral Killing", true);
        e.addField("Attack", "Basic", true);
        e.addField("Defense", "None", true);

        e.addField("Abilities:", "- None.");

        e.addField("Attributes:", "- Each day, choose one of the following abilities that you haven't chosen yet. You gain that ability.\n    - Attack a player.\n    - Attack a player.\n    - Roleblock a player.\n    - Change your defense to Basic for the night.\n    - Hide a player's role and will if they die tonight.\n    - Commit suicide.\n- You may use any number of different abilities each night.");

        e.addField("Goal:", "Kill all who would oppose you.");
    });

    register_role(["party_game_host", "partygamehost", "pgh", "726"], "Neutral", "Party Game Host", {subCat: "Chaos"}, (e) =>
    {
        e.setDescription("Post 726");

        e.addField("Alignment", "Neutral Chaos", true);
        e.addField("Attack", "Variable", true);
        e.addField("Defense", "Basic", true);

        e.addField("Abilities:", "- Select four players to participate in a party game during the day. You may not host multiple party games at once.\n- Determine a prize for the winner(s) of the game OR a punishment for the loser(s) of the game.");

        e.addField("Attributes:", "- Party Games DO NOT hold up the night phase; once all players have done their actions, the game continues. However, this does not end the party game.\n- During the following night, all four chosen players will be roleblocked, and be put in a public channel with each other. A random game of the pool in the below thread will be announced\n- The players must organize the chosen game (Jackbox Party Pack, Town of Salem, and Hypixel Minigame may be rerolled by players any amount of times) amongst each other. They will not be able to participate in day chats, vote, or whisper, and will continue being roleblocked into the following nights until the game is resolved and the winners/losers are determined.\n- Game pool: https://discord.com/channels/970041597590929519/975246847289458698");

        e.addField("Goal:", "Completely fucking roflstomp as many long-lasting friendships as you can possibly manage (Complete 3 Party Games).");
    });

    register_role(["light_of_accent", "lightofaccent", "light_accent", "727"], "Neutral", "Light of Accent", {subCat: "Killing"}, (e) =>
    {
        e.setDescription("Post 727");

        e.addField("Alignment", "Neutral Killing", true);
        e.addField("Attack", "None", true);
        e.addField("Defense", "None", true);

        e.addField("Attributes:", "- Each day, choose one of the following abilities that you haven't chosen yet. You gain that ability.\n> - Be mean to someone, making them deal a Basic attack, or their attack value if it's higher, to themselves.\n> - Stab someone in the aorta, dealing 37 Basic attacks to them.\n> - Roleplay as Aiko, granting yourself Powerful defense for the night.\n> - Speak French, confusing someone and redirecting them to a random target other than you.\n> - Engage in incestuous polycule activities, getting investigative results (see post 35) for up to 3 other players as well as receiving any night messages they get tonight.\n> - Be antisocial, causing all non-attack visits against you to fail for the night.\n> - Catch a Pokemon, increasing the number of votes you have by one.\n> - Eat excessive amounts of sugar, allowing you to perform another one of your abilities an additional time.\n- You may use any number of different abilities each night.");

        e.addField("Goal:", "Kill all who would oppose you.");
    });

    register_role(["monokuma", "728"], "Neutral", "Monokuma", {subCat: "Other"}, (e) =>
    {
        e.setDescription("Post 728");

        e.addField("Alignment", "Neutral Other", true);
        e.addField("Attack", "Overkill", true);
        e.addField("Defense", "None", true);

        e.addField("Abilities:", "- Abduct four players, they will be placed into their own channel for the public to see. This will be titled #killing-game");

        e.addField("Attributes:", "- If there are no kill-capable roles inside of the four players, one will become kill-capable for the remainder of the killing game. Their kill will be \"killed by [real role].\" This cannot be changed.\n- If there is only one kill-capable role inside of the four players, they will automatically be chosen to kill, kill-capable is defined as any role with the ability to directly kill.\n- Your attributes may not be stolen, edited, or otherwise removed.\n- If there are multiple kill-capable roles inside of the four players, one player at random will be able to kill.\n- To win the killing game, the remaining three players must find the killer. If a non-killer is voted, then all players in the game besides the killer is dealt an overkill attack.");

        e.addField("Goal:", "See your killing game successful. (the blackened wins).");
    });

    register_role(["lambence", "lamb", "729"], "Town", "Lambence", {subCat: "Investigative"}, (e) =>
    {
        e.setDescription("Post 729");

        e.addField("Alignment", "Unique Town Investigative", true);
        e.addField("Attack", "None", true);
        e.addField("Defense", "None", true);

        e.addField("Abilities:", "- During the day, choose to illuminate the streets the following night, letting all players see who visited them.");

        e.addField("Attributes:", "- Players who visited multiple players will only show up as having visited their first target (or a random one, if not applicable).\n- You will learn the roles of all players who visit you instead of their names.\n- You may only use your ability four times.");

        e.addField("Goal:", "Town Goal");
    });

    register_role(["plague_doctor", "plaguedoctor", "730"], "Neutral", "Plague Doctor", {subCat: "Killing"}, (e) =>
    {
        e.setDescription("Post 730");

        e.addField("Alignment", "Neutral Killing", true);
        e.addField("Attack", "Powerful", true);
        e.addField("Defense", "Basic", true);

        e.addField("Abilities:", "- Each night, select two players to infect them with a disease.");

        e.addField("Attributes:", "- They will both be given a disease stage of 0. If they are already infected, their disease stage will increase by 1.\n- At the end of each night, players with a disease will have their disease stage increased by 1.\n- Players who reach disease stage 3 will be dealt a Powerful Attack.\n- Players with a disease will have their disease stage reset if they are healed.\n- If you die, all diseases will be removed.");

        e.addField("Goal:", "Kill all who would oppose you.");
    });

    register_role(["gargoyle", "731"], "Neutral", "Gargoyle", {subCat: "Killing"}, (e) =>
    {
        e.setDescription("Post 731");

        e.addField("Alignment", "Neutral Killing", true);
        e.addField("Attack", "Basic", true);
        e.addField("Defense", "Basic", true);

        e.addField("Abilities:", "- Select a player at night to stone.");

        e.addField("Attributes:", "- TStoned players will be revealed at the beginning of the day and cannot do anything at all.\n- Once a stoned player is visited three times, they will be unstoned.\n- You may turn yourself to stone by selecting yourself. You will still be able to use your abilities though.\n- You may select yourself at night to unstone yourself and all stoned players.\n- Once you turn yourself to stone, you may secretly kill a player that has been stoned for two nights during the day.\n- They will not be revealed as dead until they are unstoned and they???ll still count towards the voting majority. If you were the one who unstoned them, they will be cleaned.");

        e.addField("Goal:", "Kill all who would oppose you.");
    });

    register_role(["mass_murderer", "massmurderer", "732"], "Neutral", "Gargoyle", {subCat: "Killing"}, (e) =>
    {
        e.setDescription("Post 732");

        e.addField("Alignment", "Neutral Killing", true);
        e.addField("Attack", "Basic", true);
        e.addField("Defense", "Basic", true);

        e.addField("Abilities:", "- Select a player at night to kill.");

        e.addField("Attributes:", "- You will deal a Basic Attack to them.\n- If all of the players you attacked tonight die, you have to kill another player each night.\n- If any of your victims survive, you cannot attack for two nights and your attacks per night resets to one.\n- You ignore abilities that stop attacks or stop visits or grant defense that come from one of your targets.");

        e.addField("Goal:", "Kill all who would oppose you.");
    });

    register_role(["paripapparapappapparappa", "paripappa", "motherfucker", "733"], "Neutral", "Paripapparapappapparappa", {subCat: "Killing"}, (e) =>
    {
        e.setDescription("Post 733");

        e.addField("Alignment", "Neutral Killing", true);
        e.addField("Attack", "Parippaparapappapparappowerful", true);
        e.addField("Defense", "Basic", true);

        e.addField("Abilities:", "- Choose a player to paripapparapappapparappa each night. You'll deal a Parippaparapappapparappowerful attack to them.");

        e.addField("Attributes:", "- When you die, you don't die. Instead, choose a letter in your role's name. All instances of that letter is removed from every role's name and rules text.\n- If you don't have any letters left in your name, you die when you die. (You're dead.)\n- As long as this role is in the game, even if you're dead, anyone who misspells this role's name or refers to it by something other than its name anywhere, including in private or ooc channels, is removed from the game and banned from the server. (If letters have been removed, that's the new spelling of the name.)\n- Post 752's attributes don't exist and can't affect this role. This is true even if this role isn't in the game.");

        e.addField("Goal:", "Kill all who would oppose you.");
    });

    register_role(["flavour_judge", "flavourjudge", "734"], "Town", "Flavour Judge", {subCat: "Support"}, (e) =>
    {
        e.setDescription("Post 734");

        e.addField("Alignment", "Town Support", true);
        e.addField("Attack", "None", true);
        e.addField("Defense", "None", true);

        e.addField("Abilities:", "- Whenever something happens, you may ask someone outside the game whether the thing that happened made sense.");

        e.addField("Attributes:", "- If they say it doesn't, the thing that happened is reversed.\n- If the thing never happened in the first place, you're modkilled for being stupid.\n- You may only use this once per day/night, regardless of whether it's successful. ");

        e.addField("Goal:", "Lynch every criminal and evildoer.");
    });

    register_role(["bootlegger", "735"], "Mafia", "Bootlegger", {subCat: "Support"}, (e) =>
    {
        e.setDescription("Post 735");

        e.addField("Alignment", "Mafia Support", true);
        e.addField("Attack", "None", true);
        e.addField("Defense", "None", true);

        e.addField("Abilities:", "- Choose to bootleg two players around the Town tonight.");

        e.addField("Attributes:", "- Anyone targeting your first target will be redirected to target the second, and anyone targeting the second will be forced to target the first.\n- Roleblock Immune");

        e.addField("Goal:", "Kill anyone that will not submit to the Mafia.");
    });

    register_role(["slayer_of_those_whomst_reside_in_afro-eurasia(or_australia(or_antartica))", "slayerofthosewhomstresideinafroeurasia(oraustralia(orantartica))", "sotwriaeoaoa", "ping_test", "736"], "Neutral", "Slayer of Those Whomst Reside In Afro-Eurasia (Or Australia (Or Antartica))", {subCat: "Killing"}, (e) =>
    {
        e.setDescription("Post 736");

        e.addField("Alignment", "Neutral Killing", true);
        e.addField("Attack", "Unstoppable", true);
        e.addField("Defense", "Basic", true);

        e.addField("Abilities:", "- Pit two people against each other in a ping test during the day.");

        e.addField("Attributes:", "- The two players will be privately notified they were pitted against. The first person to type any message in their private channel survives, while you immediately attack the player who fails to respond.\n- In the case of a photo finish, both are slain.\n- If you are left against one other person, you will immediately attack that other person. You may attack them again during each night while only 2 people are alive.");

        e.addField("Goal:", "Kill all who would oppose you.");
    });

    register_role(["moonstone", "ms", "737"], "Rock", "Moonstone", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 737");

		e.addField("Alignment", "Rock Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Channel the power of the moon onto an ally, protecting them with Basic defense. On Full Moon nights, you'll instead embue your target with moonlight, protecting them with a Powerful heal. ");

		e.addField("Attributes:", "- While you're alive, the factional Rock kill is empowered on Full Moon nights, becoming Powerful and Astral.");

		e.addField("Goal:", "Rock goal.");
	});

    register_role(["legend", "738"], "Town", "Legend", {subCat: "Power"}, (e) =>
    {
        e.setDescription("Post 738");

        e.addField("Alignment", "Town Power", true);
        e.addField("Attack", "Unstoppable", true);
        e.addField("Defense", "None", true);

        e.addField("Abilities:", "- Smite a player during the night, attacking them.\n- Put on platemail during the night, giving you Basic Defense for that night.");

        e.addField("Attributes:", "- Roleblock and control immune.\n- Both of your abilities have three uses.\n- You can't use both your abilities on the same night.");

        e.addField("Goal:", "Lynch every criminal and evildoer.");
    });

    register_role(["real_estate_agent", "realestateagent", "rea", "739"], "Town", "Real Estate Agent", {subCat: "Support"}, (e) =>
    {
        e.setDescription("Post 739");

        e.addField("Alignment", "Town Support", true);
        e.addField("Attack", "None", true);
        e.addField("Defense", "None", true);

        e.addField("Abilities:", "- Swap two players' player list numbers during the night.\n- Shuffle all players' player list numbers during the day. (1 use.)");

        e.addField("Attributes:", "- Swapping player numbers does NOT swap visits towards them, only effects involving 'neighbor' mechanics.\n- After all roles are rolled/rerolled, check if there are any that involved 'neighbor' mechanics, or otherwise ones that rely on player numbers. If none are present, automatically reroll this role.");

        e.addField("Goal:", "Lynch every criminal and evildoer.");
    });

    register_role(["protector", "740"], "Neutral", "Protector", {subCat: "Benign"}, (e) =>
    {
        e.setDescription("Post 740");

        e.addField("Alignment", "Neutral Benign", true);
        e.addField("Attack", "None", true);
        e.addField("Defense", "None", true);

        e.addField("Abilities:", "- Protect a player with the power of a GIM role each night.");

        e.addField("Attributes:", "- Each night, you may choose a role in the GIM thread with the Protective subalignment. You will use be able to use this role's abilities for the night.\n- You may use any protective role on yourself, but any deaths that you prevent on yourself will not contribute towards your win condition.\n- If you choose a Protective role that would normally result in someone dying as a result of your target being protected, nobody will die in the process. Your target will just live.\n- You may not use a Protective role more than once.");

        e.addField("Goal:", "Prevent three deaths using your abilities.");
    });

    register_role(["tax_collector", "taxcollector", "741"], "Neutral", "Tax Collector", {subCat: "Chaos"}, (e) =>
    {
        e.setDescription("Post 741");

        e.addField("Alignment", "Unique Neutral Chaos", true);
        e.addField("Attack", "None", true);
        e.addField("Defense", "None", true);

        e.addField("Abilities:", "- Collect a player's Taxes during the day.");

        e.addField("Attributes:", "- When rolled, the IRS Agent (Role 742) is also autorolled. This may not roll in role lists where the Tax Collector and IRS Agent may not exist together.\n- When you collect a player's taxes during the day, they may choose to either accept or deny this. If accepted, the target's exact role will be sent to a random player of an opposing faction (in case of neutrals with no opponents, it will be a random player). If denied, though the IRS Agent won't be informed, the IRS Agent must kill them to win the game now.");

        e.addField("Goal:", "Attempt to collect the taxes of all living players.");
    });

    register_role(["irs_agent", "irsagent", "742"], "Neutral", "IRS Agent", {subCat: "Chaos"}, (e) =>
    {
        e.setDescription("Post 742");

        e.addField("Alignment", "Unique Neutral Chaos", true);
        e.addField("Attack", "Unstoppable", true);
        e.addField("Defense", "Basic", true);

        e.addField("Abilities:", "- Check a player for having paid their taxes.");

        e.addField("Attributes:", "- When rolled, the Tax Collector is also autorolled. This may not roll in role lists where the Tax Collector and IRS Agent may not exist together.\n- If your target refused to have their taxes collected by the Tax Collector, you will attack them.\n- You may not know the contents of whispers directed towards you, for they are lost in bureaucratic hell.");

        e.addField("Goal:", "Smite all who refuse to pay the Tax Collector's taxes.");
    });

    register_role(["personal_space", "personalspace", "743"], "Neutral", "Personal Space", {subCat: "Benign"}, (e) =>
    {
        e.setDescription("Post 743");

        e.addField("Alignment", "Neutral Benign", true);
        e.addField("Attack", "None", true);
        e.addField("Defense", "None", true);

        e.addField("Abilities:", "- Each night, invade someone's personal space and sneak into their home.");

        e.addField("Attributes:", "- You gain access to your target's private channel.\n- You may only have access to one private channel at a time. Meaning, you will lose access to the private channel you were previously occupying upon using your ability. This also means you'll lose access to your own private channel the first time you use this ability. \n- You cannot select the same person twice until you've invaded everyone's personal space at least once. You also can't self-target at all.\n- While invading another player's personal space, you will be targeted by everything that targets them, as if you were in their home. However, anything targeting you will fail, and those targeting you will just receive \"No one's home.\" as feedback.\n- You'll have access to the day chat, but won't be able to talk there. You can still talk in your target's private channel, though, if you want to.\n- You must use your ability every night.");

        e.addField("Goal:", "Smite all who refuse to pay the Tax Collector's taxes.");
    });

    register_role(["pebble", "744"], "Rock", "Pebble", {subCat: "Support"}, (e) =>
    {
        e.setDescription("Post 744");

        e.addField("Alignment", "Rock Support", true);
        e.addField("Attack", "None", true);
        e.addField("Defense", "None", true);

        e.addField("Abilities:", "- Choose to place a pebble in a player's shoe.\n- Choose to pelt the house of a Rock member's target with pebbles.");

        e.addField("Attributes:", "- If a player with a pebble in their shoe visits anyone the night that you placed the pebble in their shoe, they will be unable to visit any players for the next two nights due to foot injuries. Ouch.\n- Pelting a player's house will cause any non-Rock players who visit them to be roleblocked that night. You will also pelt your target with pebbles, which increases the Attack value of any Rock member that visits them to the next-highest Attack value.\n- You may pelt two houses with pebbles.");

        e.addField("Goal:", "Kill anyone that may oppose the Rocks.");
    });

    register_role(["werecat", "were_cat", "745"], "Were", "WereCat", {subCat: "Support"}, (e) =>
    {
        e.setDescription("Post 745");

        e.addField("Alignment", "Were Support", true);
        e.addField("Attack", "None", true);
        e.addField("Defense", "None", true);

        e.addField("Abilities:", "- Purr at someone's house each night.");

        e.addField("Attributes:", "- Purring roleblocks and blackmails someone.");

        e.addField("Goal:", "Kill all non-lycanthropes.");
    });

    register_role(["arbiter", "746"], "Insurgency", "Arbiter", {subCat: "Informant"}, (e) =>
    {
        e.setDescription("Post 746");

        e.addField("Alignment", "Unique Insurgency Informant", true);
        e.addField("Attack", "None", true);
        e.addField("Defense", "None", true);

        e.addField("Abilities:", "- Investigate a player to learn their exact faction during the night.\n- Read into the factions of a player's voters during the day. One use, refund if unsuccessful.\n- Post to Insurgents during the day. Only usable on odd days, excluding day one.");

        e.addField("Attributes:", "- When you read into a player's voters, if that player is successfully lynched, you will learn how many people of each faction voted for that person.\n- When you post to Insurgents, you may send a message, however long, to all other Insurgents. In this post, you may not reveal yourself or any other Insurgent.\n- Frame Immunity");

        e.addField("Goal:", "Eliminate all who oppose the Insurgency.");
    });

    register_role(["news_anchor", "newsanchor", "747"], "Insurgency", "News Anchor", {subCat: "Informant"}, (e) =>
    {
        e.setDescription("Post 747");

        e.addField("Alignment", "Unique Insurgency Informant", true);
        e.addField("Attack", "None", true);
        e.addField("Defense", "None", true);

        e.addField("Abilities:", "- Choose three players to dig the scoop up about them at night.\n- Interview one of your previous targets for an update on their story during the day.");

        e.addField("Attributes:", "- Between the three players, you may choose to determine one player's faction, one player's subalignment (Protective, Support, etc.), and one player's abilities.\n- The day after you dig up the scoop about players, you must choose one of the pieces of information that you received to publish to the Town publicly. They will be notified that the News Anchor has published a news report about a certain player. This notification will be given at the end of the day. If you do not choose a piece of information to give to the Town, it will be randomly decided which piece of information will be given.\n- Enacting an interview with a target will give your target a notification that the News Anchor has established an interview with them. You will be able to freely whisper your target with your identity concealed as \"News Anchor\" for the remainder of the day and the duration of the following night. You may choose to reveal your identity to your interviewee at any time during the interview, and they will receive a notification about the identity of the News Anchor.");

        e.addField("Goal:", "Eliminate all who oppose the Insurgency.");
    });

    register_role(["reserved", "748"], "Town", "Reserved", {subCat: "Support"}, (e) =>
    {
        e.setDescription("Post 748");

        e.addField("Alignment", "Town Support", true);
        e.addField("Attack", "None", true);
        e.addField("Defense", "None", true);

        e.addField("Abilities:", "- Reveal yourself as the Reserved during the day.");

        e.addField("Attributes:", "- Once you reveal yourself, it will be announced to the Town, and your vote will count as three.\n- You may only reveal yourself once.\n- Once revealed, you cannot send whispers and you will not hear whispers sent to you.\n- Once revealed, Town roles that grant defense without counterattacking will not be able to use those abilities on you.");

        e.addField("Goal:", "Lynch every criminal and evildoer.");
    });

    register_role(["wrong_evil_lair", "wrongevillair", "wel", "749"], "Any", "Wrong Evil Lair", {subCat: "Support", anyExCat: ["Town", "Neutral"]}, (e) =>
    {
        e.setDescription("Post 749");

        e.addField("Alignment", "Evil Support", true);
        e.addField("Attack", "N/A", true);
        e.addField("Defense", "N/A", true);

        e.addField("Attributes:", "Gain the ability and attributes of a random factional evil role, but become part of a faction that is not the one you gained the ability from.");

        e.addField("Goal:", "Goal of your new faction.");
    });

    register_role(["prankster", "750"], "Mafia", "Prankster", {subCat: "Espionage"}, (e) =>
    {
        e.setDescription("Post 750");

        e.addField("Alignment", "Mafia Espionage", true);
        e.addField("Attack", "None", true);
        e.addField("Defense", "None", true);

        e.addField("Abilities:", "- Disrupt a player at night.");

        e.addField("Attributes:", "- Disruption will lower the priority of an action to 6???their action will be the last to resolve:\n- Effects applied to visitors to their target will not affect them.\n- If they or their target die, their action will not resolve.\n- Any disruptive effects they apply to a player will not affect anyone visiting that night. (Arsonist douses, etc)\n- If your target activates a self-targeting ability, it will not affect their visitors. This cannot affect the Commuter.");

        e.addField("Goal:", "Kill anybody who doesn't submit to the Mafia.");
    });
};
