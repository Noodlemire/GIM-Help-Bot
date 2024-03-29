//Credit: Vik

module.exports = (g) =>
{
	const {register_role, factions} = g;

	register_role(["visual_learner", "visuallearner", "visual", "learner", "vl", "251"], "Town", "Visual Learner", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 251\n*Business Fraud Investigation Using Magnifying Glass. Finance And Tax*");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Investigate a player. This will return a stock photo that represents their role.");

		e.addField("Attributes:", "- The host puts the role name into https://www.shutterstock.com/ and selects one of the images, which is then shown to you.\n- If there is no result for the search, you are informed of such.");
		
		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["coward", "252"], "Town", "Coward", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 252\n*Take them, not me!*");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Run at someone's house every night.");

		e.addField("Attributes:", "- If you are attacked, redirect the attack to the player you ran to.\n- If a Town/Florae member Is killed by your redirection, you will deal yourself an Unstoppable attack at the end of the next night. This cant be stopped by your redirection.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["planet", "253"], "Rock", "Planet", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 253");

		e.addField("Alignment", "Unique Rock Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Blot out the moon at night.\n- Obscure one player's vision at night.");

		e.addField("Attributes:", "- Blotting out the moon will cause all non-Rock players to, without their knowledge, visit a random non-Rock player.\n- Obscuring one player's vision will cause them to visit a player at random without knowing, or fail to act if they are a killer.\n- You may blot out the moon once during the game.");

		e.addField("Goal:", factions.Rock.goal);
	});

	register_role(["therapist", "254"], "Town", "Therapist", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 254\n*So, what is troubling you today?*");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Pick a player every night to have a therapy session with.");

		e.addField("Attributes:", "- You will discover if they're a Killing, Support, Investigative or Protection role, but will not know their faction.\n- All roles that do not enter into any of those categories, such as Mafia Deception, are assumed to be into the Support category unless stated otherwise.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["fuc_king", "fucking", "fking", "255"], "Other", "Fuc King", (e) =>
	{
		e.setDescription("Post 255");

		e.addField("Alignment", "Fuc King", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Middle Finger: Your next nomination will eat shit and die.\n- The Council Will Decide Your Fate: Either end the trial or send it to the execution phase immediately. (1 use)\n- Guards!: Become death immune for the night. (2 uses)\n- Fuc Kyou I Nparticular: Roleblock a player for the night, and prevent them from speaking or voting during the following day. This ability is astral.");

		e.addField("Attributes:", "- You should've attempted to format this in a TOS-style format, smh.");

		e.addField("Goal:", "Survive to see the end of the game.");
	});

	register_role(["corrupt_justice", "corruptjustice", "cj", "256"], "Neutral", "THE Corrupt Justice", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 256\n*Once a pillar of justice, the embodiment of law and order. Those days were so long ago.*");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None/Invincible", true);

		e.addField("Abilities:", "- Observe two players. If any attackers visit either of them, they will instead be redirected to attack you.\n- Empower a player. If they make an attack tonight, they also make a second one with an  attack value one higher on the same target.");

		e.addField("Attributes:", "- You have invincible defence against attacks from evil roles, but none against attacks from good roles.\n- Every time you are attacked, the attacker will gain an extra anonymous vote for the following day. The majority required will also change.\n- You will know the roles of all players who attack you.\n- You may only use one ability per night.");

		e.addField("Goal:", "Live to see the town lose.");
	});

	register_role(["tsuku", "tsukuyomi", "257"], "Neutral", "Tsukuyomi", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 257\n*Souls who have fallen to darkness... return to heaven! Moon Shadow Magatama!!*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Kill a player every night.");

		e.addField("Attributes:", "- You start in your New Moon Form, with Basic Attack and Defense.\n- The First Full Moon, you transform to Crescent Moon Form. You now deal Powerful Attack and have Powerful Defense.\n- The second Full Moon, enter your Half Moon Form. You will now rampage at your targets house, and gain access to your Hawk Ichibyoshi. You may send It to deal a Basic Attack at another player.\n- The third Full Moon, gain Unstoppable Attack and Invincible Defense. Anyone that may survive your attack Is cursed and will be dealt an Overkill damage 2 days later.");

		e.addField("Goal:", "Kill everyone who may oppose you.");
	});

	register_role(["hades", "258"], "FallenAngel", "Hades", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 258");

		e.addField("Alignment", "Unique Fallen Angel Killing", true);
		e.addField("Attack", "Piercing", true);
		e.addField("Defense", "Aura", true);

		e.addField("Abilities:", "- Judge someone each night. You'll learn their role, and attack them if they're capable of killing.\n- Use the ability of a dead player at night. Their attack, if applicable, will be changed to Piercing.");

		e.addField("Attributes:", "- If you judge a Fallen Angel, you can't be roleblocked or redirected while doing so, and they'll be cleaned but you'll still be able to use their ability.\n- If you judge a non-Fallen Angel and fail to kill them, your attack against them will be upgraded to Unstoppable.\n**Sin of Greed** — If you're the last Fallen Angel remaining, you can use the ability of any number of different dead players and judge someone and steal all of someone's abilities and use any number of your stolen abilities each night.");

		e.addField("Goal:", factions.FallenAngel.goal);
	});

	register_role(["poli", "politician", "259"], "Town", "Politician", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 259\n*Stop performing tax evasion.*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Tax someone every night.\n- Pay taxes to a player every night.");

		e.addField("Attributes:", "- Taxing players will roleblock them, and steal 1 charge of their night abilities, if they have any. You will know if you stole a charge.\n- Paying taxes gives one charge of an ability to a given player. Ex: \"I'll give the charge I stole from Player Name A to Player Name F.\"\n- You appear evil to TIs.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["god", "260"], "Neutral", "God", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 260");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- During the night, you can choose to Smite everyone, dealing a Basic attack to the entire town. You may only smite once, at the beginning of the game.");

		e.addField("Attributes:", "- Each full moon, your attack level rises by 1.\n- You get another smite at round 7.");

		e.addField("Goal:", "Live to see everyone burn.");
	});

	register_role(["confuser", "261"], "Neutral", "Confuser", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 261");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Every day and every night, you will attempt to confuse a player. Give something for the host to say, and they will post it in your target's private channel (to appear like an OOC message, without quotes or indicators or anything).");

		e.addField("Attributes:", "- If the target responds with \"what\", \"?\", or a similar expression of confusion, they get attacked immediately.");

		e.addField("Goal:", "Kill two people.");
	});

	register_role(["phantom", "262"], "Neutral", "Phantom", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 262\n*Is it just me or...the light turned on on its own?*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic/Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Possess someone into someone else every night.");

		e.addField("Attributes:", "- The possessed Is redirected and deals a Basic Attack to the other target.\n- The night after you possess someone, they're dealt a Powerful Attack. You may still use your possession the same night.\n- The first time you are attacked, immediately revive yourself at the end of the night.");

		e.addField("Goal:", "Kill everyone who may oppose you.");
	});

	register_role(["necroban", "necro", "263"], "Neutral", "NecroBAN", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 263");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Ban a player from the game each night.");

		e.addField("Attributes:", "- Players are banned from the game when they die.");

		e.addField("Goal:", "Ban all who would oppose you.");
	});

	register_role(["fisherman", "fm", "264"], "Town", "Fisherman", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 264");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Cast your fishing rod onto a player's house at night, marking them.\n- Reel in your fishing rod to kill a marked player's visitors.");

		e.addField("Attributes:", "- When you reel in your fishing rod, you will deal a Powerful attack to all of their visitors.\n- You can have fishing rod cast at up to three players at once.\n- If you attack a Townie, all of the other visitors to the visited player will live.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["ghostenthusiast", "ghost_enthusiast", "ge", "265"], "Neutral", "Ghost Enthusiast", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 265");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Choose a dead player each night. They will now be able to talk in the day chat, use their abilities and like vote.");

		e.addField("Attributes:", "- Ghosts gain another ability, allowing them to encourage and support you at night. If used, the following night, you can use your ability twice. This can stack!");

		e.addField("Goal:", "Have there be more ghost frens than inanimate corpses (have the majority of dead people be ghosts by the end of the game).");
	});

	register_role(["dontpressthebutton", "dont_press_the_button", "dptb", "266"], "Neutral", "Don't Press The Button", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 266");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Irrelevant", true);
		e.addField("Defense", "Irrelevant", true);

		e.addField("Abilities:", "- Kill everything at once. This is usable at night and at day.");

		e.addField("Attributes:", "- Killing everything will also kill you. Your attack ignores defense of any kind. You cannot be killed by anything besides Assassin (697), and you cannot be controlled into using your ability, but you can be roleblocked.");

		e.addField("Goal:", "Avoid the temptation of automatically ending the game by using your ability.");
	});

	register_role(["igu", "267"], "Neutral", "Igu", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 267");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- You're Igu and you're not you. (She's you.)\n- When you're Igu, she gets five roles to choose from and can pick any of them.\n- If you're not Igu, your role is Diamond.");

		e.addField("Goal:", "Successfully cause Igu to be you and you to be Igu.");
	});

	register_role(["stargazer", "sg", "268"], "Neutral", "Stargazer", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 268\n*Sorry, I couldn't help committing identity thief to several innocent people! It's just a Scorpio thing!*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attempt to match two people based on their horoscopes.");

		e.addField("Attributes:", "- Each player in the game will have a star sign assigned to them. Every star sign will be present among all players in the game. (if this is not possible, this role is rerolled)\n- If you match two players whose star signs are compatible, they will learn each other's roles, and they may now win with each other. Players with the same sign star sign are **not** compatible with each other\n- You may not match players that are already matched.\n- You may match yourself with another player as long as your star signs are compatible.\n- You lose the ability to match players once you achieve your win condition.\n- Refer to the following image to see which signs are compatible with each other.");

		e.setImage("https://cdn.discordapp.com/attachments/970046125065265202/970107395273527336/unknown.png");

		e.addField("Goal:", "Match three pairs of players.");
	});

	register_role(["moody", "269"], "Neutral", "Moody", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 269\n*I dont need sleep! I NEED TEA!!*");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Throw a tantrum every night.\n- Drink your cup of tea.\n- Refill your cup of tea.");

		e.addField("Attributes:", "- Throwing a tantrum grants you Invincible Defense and deals an Astral Basic Attack to all of your visitors.\n- Drinking your cup of tea lowers your defense value to None and invalidates all protection for tonight.\n- You cannot drink your cup of tea more than once per game.\n- Refilling your cup of tea gives you 1 charge of drinking your cup of tea. Every player visiting you will know you are the Moody if you refill your cup.\n- If you go 2 nights in a row without throwing a tantrum, you will deal yourself an Unstoppable Attack at the end of the 3rd night.\n- Once you die, deal an Unstoppable Attack to your killer. If there are multiple, only one, chosen at random, will be dealt an Unstoppable Attack.\n- You have roleblock immunity.");

		e.addField("Goal:", "Die at night by a role other than yourself. ");
	});

	register_role(["snailsgambler", "snails_gambler", "snailgambler", "snail_gambler", "sg", "270"], "Neutral", "Snail's Gambler", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 270");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "FUCKIN' INVINCIBLE", true);

		e.addField("Abilities:", "- Visit a person every night.\n- Use your wished wealth to hire a hitman on someone.");

		e.addField("Attributes:", "- When rolled, a random other player will be rerolled into being the Gambit Snail.\n- You cannot be killed by anyone besides the Gambit Snail.\n- Visiting is mandatory; you also may only visit a person once. \n- Hitman deals an Astral Basic Attack. You may only hire a hitman twice.");

		e.addField("Goal:", "Survive until the end of the game.");
	});

	register_role(["gambitsnail", "gambit_snail", "gs", "271"], "Neutral", "Gambit Snail", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 271");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "FUCKIN' INVINCIBLE", true);

		e.addField("Abilities:", "- Check a person each night for being the Snail Gambler.");

		e.addField("Attributes:", "- When rolled, a random other player will be rerolled into being the Snail Gambler.\n- You cannot be killed by anyone besides yourself.\n- If you visit the Snail Gambler or vice versa, both you and the Snail Gambler will be killed.");

		e.addField("Goal:", "Kill a Snail Gambler.");
	});

	register_role(["diamond", "dia", "272"], "Rock", "Diamond", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 272");

		e.addField("Alignment", "Rock Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Shine bright like a diamond at someone. Your target and their neighbours' roles will be given to you, though you won't know which role belongs to which person.\n- Once per game, you may shine bright like a diamond at everyone, roleblocking everyone in the game besides the rocks that night.");

		e.addField("Attributes:", "- You may be Igu.");

		e.addField("Goal:", "Kill all that would oppose the Rocks. ");
	});

	register_role(["conway", "273"], "Neutral", "Conway", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 273\n*This is a matter of life and death.*");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Iterate your target through one iteration of Conway's Game of Life.");

		e.addField("Attributes:", "- If you target an alive player, and at least one of their neighbors is dead, they will die.\n- If you target a dead player, and both of their neighbors are alive, they will be revived.\n- You may not kill once you have killed three players nor may you revive after you have revived a player.\n- You have Basic Defense until you are attacked for the first time.\n- You may not kill yourself, but you may revive yourself.");

		e.addField("Goal:", "Kill three players and revive one player.");
	});

	register_role(["cloner", "274"], "Neutral", "Cloner", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 274");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Choose another player to clone each night. A new player is added with their name and role. You control the clone. The clone wins wih you.");

		e.addField("Goal:", "Kill all non-clones.");
	});

	register_role(["manipulator", "275"], "Town", "Manipulator", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 275\n*:pleading_face\\:*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Manipulate your target into targeting someone else.");

		e.addField("Attributes:", "-- Select two targets at night. The first target will be controlled into the second.\n- You may not select the same player as both of your targets.\n- You may not manipulate yourself.\n- You are roleblock and control immune.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["fortifier", "276"], "Town", "Fortifier", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 276\n*You might say \"Fortifier sounds more of a Town Protective name\". Err, cope.*");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Build a fort at someone's house every night.");

		e.addField("Attributes:", "- Building takes 1 day.\n- You may have as many forts as you would like.\n- You will learn how many of each faction (Town and Neutral included) visit people with forts in them.\n- If an evil faction or a NK visits a target with a fort, the fort Is destroyed at the end of the night.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["villainteamleader", "villain_team_leader", "villain", "vtl", "277"], "Other", "Villain Team Leader", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 277");

		e.addField("Alignment", "Villain Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- Evil faction roles aren't part of those factions and are Villains, even if you're dead or removed from the game. See <#1007412413949280368> for how this works.\n- This role can only spawn if there are two or more other evil factions in the game.");

		e.addField("Goal:", "Eliminate all who oppose the Villains. ");
	});

	register_role(["deliveryboy", "delivery_boy", "db", "278"], "Town", "Delivery Boy", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 278\n*If you don't get your pizza in 30 minutes or less, it's not my problem.*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Deliver your target a surprise.");

		e.addField("Attributes:", "- Your target will be redirected to themselves.\n- Your ability will fail on redirect immune players.\n- You are redirection immune.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["asbspotem", "significant", "entire_mafia", "entiremafia", "279"], "Mafia", "A Small But Significant Portion Of The Entire Mafia", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 279");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- You have three other random Mafia roles in addition to this one.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["based_psychiatrist", "basedpsychiatrist", "bp", "280"], "Neutral", "Based Psychiatrist", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 280");

		e.addField("Alignment", "Unique Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Abduct the whole ass town into your lab for a day (night ability).");

		e.addField("Attributes:", "- The following day after abducting the Town, before any messages are processed, they will be sent to you. You may edit these messages to your pleasing before posting them to the town. You may similarly decide votes and whispers.\n- You will be removed from the town during this day, and while you may still interact otherwise, you may not be lynched nor vote/message.");

		e.addField("Goal:", "Gaslight a shit ton of people and/or conduct a social experiment. The host defines whether or not you succeed in this.");
	});

	register_role(["dyna", "dynamite", "281"], "Town", "Dynamite", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 281\n*So ima light it up like Dynamite, woah oh oh*");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Plant a Bomb at someone's house.\n- Defuse a Bomb.\n- Detonate a Bomb.");

		e.addField("Attributes:", "- Defusing a Bomb deactivates the Bomb.\n- You may only have one active Bomb at all time.\n- Detonating a Bomb deals a powerful rampage attack.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["difference", "282"], "Town", "Difference", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 282\n*What's the difference between forgiveness your opinion? I am asking for forgiveness.*");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select two players to discover the positive difference between the post numbers of their roles.");

		e.addField("Attributes:", "- You may not target yourself.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["caino_lite", "cainoarukatlite", "caino_arukat_lite", "lite", "283"], "Neutral", "Caino Arukat (Lite!)", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 283");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- You have a 3x3 cube dimension that you may virtually maintain each night.");

		e.addField("Attributes:", "- Target an alive player. They will be planted within a spot of your choice in the cube. They will be notified of this, but won't know where they are in the cube. Every day/night, along with their ability, they must choose a direction—up, down, left, right, forwards or backwards. Their ability will be redirected to a different sector in respects to their current position and the direction they chose. If the ability were to escape the cube, it would affect everyone not currently in Caino's dimension. If the direction chosen leads to an empty square, the target is essentially roleblocked.\n- Caino is also forced inside the cube, in a sector which he himself may choose on Day 1.");

		e.addField("Goal:", "Survive, but make sure at least three people are inside your cube when the game ends.");
	});

	register_role(["apprentice", "284"], "Mafia", "Apprentice", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 284\n*I will get to the top.*");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- You have one charge of every single ability of the other mafia roles in the game.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["fuckcaino", "fuck_caino", "285"], "Other", "Fuck Caino", (e) =>
	{
		e.setDescription("Post 285");

		e.addField("Alignment", "Fuck Caino", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- Reroll this and any Caino Arukat roles immediately. Additionally, prevent Caino Arukat from being rolled in the future.");

		e.addField("Goal:", "Win as whatever role you reroll to.");
	});

	register_role(["genius", "286"], "Neutral", "Genius", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 286\n*Congratulations. You have been invited to The Genius Game.*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Choose a player during the day to challenge them to a match of the 1, 2, 3 Game tonight.");

		e.addField("Attributes:", "- You will override your target's night ability similarly to a Jailor or Pirate.\n- If you win, you will gain one of your three wins and Basic Defense for the night..\n- If you lose, your target's defense will raise by one value for the night.\n- If there is a tie, nobody profits.\n- You may not challenge yourself you nincompoop.");

		e.addField("Goal:", "Win two matches of the 1, 2, 3 Game.");

		e.addField("How the 1, 2, 3 Game Works:", "- Both players receive a hand of nine cards: three 1s, three 2s, and three 3s.\n- The game has nine rounds in which each player plays either a 1, 2, 3.\n- The player who played the higher value card will receive a point. If both players played the same card, then neither of them receive a point.\n- The player who has the most points after the ninth round wins.\n- If the night ends before the match ends, the player with the higher number of points when the night ends will win, or neither if there is a tie.");
	});

	register_role(["leader", "287"], "Mafia", "Leader", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 287\n*Leading the Mafia isnt easy. Ask the Godfather.*");

		e.addField("Alignment", "Mafia Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Send your goon to deal a basic attack at someone.");

		e.addField("Attributes:", "- TIs will see your goon visiting.\n- Bodyguards will kill your goon, but wont die.\n- If your goon dies, you will attack instead.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["magikill", "288"], "Coven", "Magikill", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 288");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Summon a lethal wall of electricity.\n- Throw forth a toxic spray.\n- Cause a fiery explosion.");

		e.addField("Attributes:", "- The electric wall will prevent your target from visiting.\n- The toxic spray will poison your target. This is Astral.\n- The explosion will deal a Basic attack to your target and their visitors.\n- Your abilities have a three night cooldown.\n- With the Necronomicon, you have no cooldowns.");

		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["rioter", "accent's_worst_nightmare", "289"], "Neutral", "Rioter", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 289\n*I don't play by your goddamn rules.*");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- None.");

		e.addField("Attributes:", "- Once you are lynched, all of the roles of every alive player will be randomly reassigned to another player.\n- Nobody will receive the role they already had.");

		e.addField("Goal:", "Be lynched.");
	});

	register_role(["timelordjester", "timelord_jester", "tj", "290"], "Neutral", "Timelord Jester", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 290");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- If you're lynched, you win, but the entire game resets without you in it, beginning again from Day 1.");

		e.addField("Goal:", "Get lynched and cease to exist.");
	});

	register_role(["ritualist", "291"], "Coven", "Ritualist", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 291");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Sacrifice another Coven member at night.");

		e.addField("Attributes:", "- When you sacrifice another Coven member, you will deal an Astral Unstoppable attack to them.\n- After you sacrifice a player, they may haunt a player of their choice the following night, dealing an Astral Basic attack to their target.\n- With the Necronomicon, you may sacrifice any non-Coven member, dealing a Basic attack to them.\n- If a player were to haunt you after you sacrificed them, their ability will fail.\n- You cannot sacrifice yourself.\n- You cannot sacrifice someone if you had successfully sacrificed someone the night before.\n- <https://wikimafia.fandom.com/wiki/Ritualist>");

		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["scp-292", "scp_292", "scp292", "292"], "SCP", "SCP-292", {subCat: "Euclid"}, (e) =>
	{
		e.setDescription("Post 292");

		e.addField("Alignment", "SCP Euclid", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose any player at night. Any abilities used on them will secretly fail. However, when applicable, regular feedback will be provided to both the ability's target and user as if it had succeeded.\n- During a full moon, use the Factional Attack and the above ability at the same time, on the same target. Additionally, if the victim dies, they will appear to be alive to the public until someone tries to target them in a later night. 2 uses.");

		e.addField("Attributes:", "- Other SCP abilities will bypass yours.\n- I guess investigative abilities technically do too, since their only purpose is to provide feedback anyways.");

		e.addField("Goal:", factions.SCP.goal);
	});

	register_role(["jinx", "293"], "Coven", "Jinx", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 293");

		e.addField("Alignment", "Coven Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Curse someone each night.");

		e.addField("Attributes:", "- When you curse your target, they will have an Astral visit for the night that you curse them.\n- The night after you curse your target, they will roleblock their target for that night, along with performing their original ability.\n- With the Necronomicon, your target will no longer roleblock their target. Instead, they will deal a Basic attack to their target.\n- If any target you cursed does not visit anyone the night after you curse them, or they would roleblock or attack a Coven member when visiting, they will be roleblocked or attacked instead.\n- <https://wikimafia.fandom.com/wiki/Jinx>");

		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["magician", "294"], "Coven", "Magician", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 294\n*This ain't a fairy tale.*");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "None (Powerful)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- **(Necronomicon Required)** Choose a role in the game. Deal a Powerful attack to the player with that role.");

		e.addField("Attributes:", "- At the start of the game, you will receive a list of all of the roles that are in the game. You will not know who has which role.");

		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["familiar", "295"], "Coven", "Familiar", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 295\n*A familiar perched on its partners shoulder is said to greatly empower them.*");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Assist a Coven member in the day.\n- With the Necronomicon, deal a basic attack at your target.");

		e.addField("Attributes:", "- The next day, the Coven member will have their Necronomicon effect for the night.\n- You may not assist 2 days in a row.\n- When you kill someone, you will devour them until only a skeleton is left, obscuring their role and last will.\n- You may not devour twice in a row.");

		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["enchantress", "296"], "Coven", "Enchantress", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 296");

		e.addField("Alignment", "Coven Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Roleblock someone each night.");

		e.addField("Attributes:", "- With the Necronomicon, you will enchant each player you roleblock. The next time an enchanted player is visited by another player, they will be roleblocked and dealt a Basic attack.\n- If an enchanted player is visited by another player on a night after you enchant them, your effect will be Astral. If an enchanted player is visited by another player on the night that you enchant them, your effect will not be Astral.");

		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["morphologist", "morph", "297"], "Coven", "Morphologist", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 297\n*Who's a good boy?*");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Transform a player into a wild beast to kill another player on every even-numbered night.");

		e.addField("Attributes:", "- Transforming a player into a wild beast will force them to deal a Basic attack to your other target. This will replace the action of the player you transform into a beast (i.e. roleblocking bypassing immunities). The player you transform will be given a notification that they were transformed.\n- With the Necronomicon, you may transform a player every night. The transformation notification is also removed.\n- You may not transform other Coven members, but you may transform yourself (this will not roleblock you).");

		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["sunsfamiliar", "suns_familiar", "sunfamiliar", "sun_familiar", "sf", "298"], "Town", "Sun's Familiar", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 298");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- Night is day as well as night.\n- Players may vote for moonset at night instead of nightfall, which closes the night chat, but night still doesn't end until it normally would.\n- You have two votes at night.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["m63plamenartillerypiece", "m63", "m63_plamen_artillery_piece", "artillerypiece", "artillery_piece", "299"], "Coven", "M-63 Plamen Artillery Piece", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 299\n*You notice an M-63 Plamen Artillery piece aimed at you, dealing 80 scorch damage x10 and killing you instantly.*");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "80x10 (Unstoppable)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- M-63 Plamen Artillery Piece can attack a player at night. M-63 Plamen Artillery Piece cannot target its direct living neighbours.");

		e.addField("Attributes:", "- M-63 Plamen Artillery Piece can attack up to 10 times per night, however these 10 attacks can only target the same person. These kill messages will flood the target's chat log, causing them to be unable to receive any other messages that night.\n- With the Necronomicon, you can target two players per night.");

		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["thaumaturge", "thauma", "the_one_with_the_force_fields", "300"], "Coven", "Thaumaturge", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 300\n*There are negative auras radiating from this house. I'm an empath, I would know these things.*");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "None (Powerful)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Create a force field and place it on a player.");

		e.addField("Attributes:", "- When a force field is placed on a player, all players that attempt to visit the player with a force field will be redirected to visit themselves. The force field will stay active until the night that three people visit your target. \n- Force fields take one night to create.\n- With the Necronomicon, you may create and place a force field every night. Your force fields will also collapse and deal a Powerful attack to the player that the force field was on at the end of the night.\n- You may place a force field on yourself and other Coven members. Force fields placed on Coven members will not collapse if you have the Necronomicon.");

		e.addField("Goal:", factions.Coven.goal);
	});
};
