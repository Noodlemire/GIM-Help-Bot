module.exports = (g) =>
{
	const {register_role, factions} = g;

	register_role(["truth_or_dare", "truthordare", "101"], "Neutral", "Truth Or Dare", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 101");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Play truth or dare with another player each day.");

		e.addField("Attributes:", "- When you play truth or dare with someone, you ask them a question they can reasonably truthfully answer, and name an action that they can reasonably perform in a way that could be proven.\n- They will be presented with the truth and the dare at the start of the next night.\n- If they don't truthfully answer the question or perform the action, you deal an Basic attack to them at the end of the night.\n- If they do, you're sent their answer to the question or the proof that they performed the action.");

		e.addField("Goal:", "Kill three players; or get three players to answer your questions; or get three players to perform your dares.");
	});

	register_role(["ringmaster", "102"], "PaleMoon", "Ringmaster", {subCat: "Head"}, (e) =>
	{
		e.setDescription("Post 102\n*Welcome to the Pale Moon Circus! Nye heh heh!*");

		e.addField("Alignment", "Unique Pale Moon Head", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Give someone a ticket for the Pale Moon Circus Show.\n- Sacrifice a Pale Moon member.");

		e.addField("Attributes:", "- Giving a ticket roleblocks them for the night, but does not give a special roleblock message.\n- Players with tickets will remove their ticket if they visit any Pale Moon Members. You will be notified of this.\n- Any players will immediately be dealt an Apocalyptic Attack if they have a ticket at the start of the PMCS.\n- If the Ringmaster Is killed, all tickets that were given out by the Ringmaster are instantly removed.\n- Sacrificing a Pale Moon member will deal an Apocalyptic Attack to them, and will let you deal an Unstoppable Attack to one player.\n- Players with tickets are notified they have tickets Day 3.\n- You will not kill anybody if the sacrificed Pale Moon does not die.");

		e.addField("Goal:", factions.PaleMoon.goal);
	});

	register_role(["guesser", "103"], "Neutral", "Guesser", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 103");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Each night, choose one player to learn two letters in their role name or guess the role numbers of up to three players.");

		e.addField("Attributes:", "- Correct guesses deal a Basic Attack to the target.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["effort_enforcer", "effortenforcer", "104"], "Neutral", "Effort Enforcer", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 104");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Check someone's house each night. If they are a role with less than 600 characters (as written in <#970046125065265202>), kill them immediately.");

		e.addField("Attributes:", "- You will die upon completing your goal.");

		e.addField("Goal:", "Goal: Kill three people.");
	});

	register_role(["super_sneaky_spy", "supersneakyspy", "sneaky", "spy", "sss", "105"], "Town", "Super Sneaky Spy", {subCat: "Espionage"}, (e) =>
	{
		e.setDescription("Post 105");

		e.addField("Alignment", "Town Espionage", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Tail someone each night, learning all external night feedback they get (not from their own role) and who they visit.");

		e.addField("Attributes:", "- You know what evil factions are in the game and how many members each has.\n- You start the game with five clues, which are completely random and almost entirely useless pieces of information about the game decided by the host (e.g. Player 13's role does not start with A or F).\n- Detection Immune");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["senator", "despot", "106"], "Neutral", "Senator", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 106");

		e.addField("Alignment", "Unique Neutral Benign", true);
		e.addField("Attack", "Ustoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Order the execution of one person every night, dealing an Unstoppable & Astral attack to them.");

		e.addField("Attributes:", "- You are publicly revealed to be the Despot at the start of the game\n- Your vote counts as 3\n- You are a menace to society");

		e.addField("Goal:", "Survive until the end of the game with no players dead. Unfortunately, even after instant losses were banned, Wolfi pulled a Grandfather Clause on this one.");
	});

	register_role(["sanity", "107"], "Neutral", "Sanity", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 107");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Check a player each night and restore their sanity, protecting them with Invincible defense for this night.");

		e.addField("Attributes:", "- Can only be rolled by people that are sane, as deemed by the host. In other words, Rasen decides whether or not you are a sane human being.\n- Once you win you get permission to post images of grapes in <#970059745807437876> until the start of the next game.");

		e.addField("Goal:", "Successfully protect three people and live until the end of the game.");
	});

	register_role(["unblast_magician", "unblastmagician", "unblast", "108"], "Neutral", "Unblast Magician", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 108");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Add a charge to your Unblast.\n- Unblast a player, as well as the amount of adjecent players equal to twice the amount of charges your Unblast has, 1 on each side. All Unblasted players will gain Invincible Defense.");

		e.addField("Attributes:", "- You may only carry up to 3 charges at once.\n- Dead/Missing players will not be skipped over when the Unblast is targeting adjacent players.\n- The player list wraps around, meaning that Player 1 is considered to be next to the highest numbered player.");

		e.addField("Goal:", "Prevent at least 8 deaths throughout the course of the game using your Unblasts. Saving the same person multiple times will count towards this goal.");
	});

	register_role(["forcefield", "109"], "Coven", "Forcefield", {subCat: "Protection"}, (e) =>
	{
		e.setDescription("Post 109");

		e.addField("Alignment", "Coven Protection", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Protect someone each night, making them immune to all non-Coven harmful effects.");

		e.addField("Attributes:", "- If you have the Necronomicon, you may instead choose to use all Coven roles' non-Necronomicon harmful effects on them. You must also choose all additional targets for those effects, like who you're redirecting them into.");

		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["beast_tamer", "beasttamer", "beast", "110"], "PaleMoon", "Beast Tamer", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 110\n*The gentle crack of the whip decides your fate.*");

		e.addField("Alignment", "Unique Pale Moon Killing", true);
		e.addField("Attack", "Powerful (Unstoppable)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "-Tame your beast to devour someone at night.");

		e.addField("Attributes:", "-Your beast will deal a powerful attack, and will clean your target's role, last will, etc.\n-After killing someone with your beast, the beast has to rest the following night. However, you may still decide to send It to devour someone. If you do, there Is a ⅓ chance of failing to tame the beast, resulting in It dealing a Powerful attack to one of your Pale Moon allies (May include yourself)\n-After killing twice, that is upped to a 80% chance \n-After killing thrice, the beast must rest.\n-Once the PMCS begins, your beast deals an Unstoppable Attack, and will not need to rest every night, nor will It accidentally kill one of your allies");

		e.addField("Goal:", factions.PaleMoon.goal);
	});

	register_role(["samurai", "111"], "Town", "Samurai", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 111\n*It's called sudoku, actually.*");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack a player at night.");

		e.addField("Attributes:", "- If you attack a Townie, you will immediately commit suicide, even if the Townie doesn't die.\n- If you are roleblocked, you will attack your roleblocker unless they're a member of the Everfrost.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["notice_me", "noticeme", "nm", "112"], "Neutral", "Notice Me", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 112");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Visit someone at night. They will be notified you visited them and nothing else.");

		e.addField("Attributes:", "- If someone says your full username or mentions you in a day chat, they will be dealt a Basic attack at the end of the following night.");

		e.addField("Goal:", "Have two people notice you by activating your attribute.");
	});

	register_role(["clown", "113"], "PaleMoon", "Clown", {subCat: "Protection"}, (e) =>
	{
		e.setDescription("Post 113\n*Want a candy?*");

		e.addField("Alignment", "Pale Moon Protection", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Powerful/Invincible)", true);

		e.addField("Abilities:", "- Once per game, fill every Pale Moon member's house with balloons, including yours.\n- Once per game, eat a candy.\n- Transport two players with balloons.");

		e.addField("Attributes:", "- Filling houses with balloons grants every Pale Moon including yourself Invincible Defense, but lowers their attack value to None\n- Eating a candy grants you Powerful defense.\n- Once the PMCS begins, you gain 2 uses of filling houses with balloons. If you fill houses with balloons, all visitors of the filled are dealt a Powerful attack. Additionally, the players whose houses have been filled Attack Values are upped to Powerful.");

		e.addField("Goal:", factions.PaleMoon.goal);
	});

	register_role(["tengu", "114"], "Neutral", "Tengu", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 114");
		e.author.iconURL = "https://media.discordapp.net/attachments/930956687580483584/930978937876647966/Tengu.png";

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Basic/Powerful", true);
		e.addField("Defense", "Basic (Powerful)", true);

		e.addField("Abilities:", "- **Attack:** Use Basic Attack on a player in the night.\n- **Fire Bomb:** In the night, use a Powerful Attack a player, clean their role if they die, and deal a Basic Attack to anyone else who visits your target.\n- **Shock Bomb:** In the night, use a Basic Attack on a player and roleblock them and their visitors.\n- **Smoke Bomb:** In the night, use a Basic Attack on a player and hide the feedback messages of them and their visitors. They will only be told \"There was too much smoke to see anything!\" and if they survived the night or not.");

		e.addField("Attributes:", "- At the start of the game, certain people will each gain 1 use of the Hire Tengu ability. Those people are the Town Power, every Head of an evil faction, and one random additional player other than them and Tengu. If any lacks a Power/Head, a random member will be given this ability instead.\n**Hire Tengu:** In the night, make the Tengu use a Unstoppable Attack against your target, without visiting Tengu.\n- When hired, you will gain Powerful Defense, Roleblock Immunity, and Control Immunity. Otherwise, you only have Basic Defense.\n- If you're hired, your chosen ability for that night will be cancelled without depleting limited charges. However, if you get hired multiple times, you will attack every target you were hired to kill.\n- Fire Bomb, Shock Bomb, and Smoke Bomb all start at 0 charges. However, each time you are hired, you will gain a charge for one at random, even if you fail to kill your target.");

		e.addField("Attributes (cont.):", "- When hired, only you will know the results of your attack. Your hirer won't be told anything, even if the attack fails for any reason.\n- You are notified of every person you are hired to kill.\n- If you are hired to kill yourself, your attack will always fail.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["ring", "115"], "Neutral", "Ring", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 115");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Invincible", true);

		e.addField("Abilities:", "- Choose a player and surround them with a ring, dealing a Basic Attack to all that visit them tonight.");

		e.addField("Attributes:", "You can put a ring on yourself.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["ultimate_mafioso", "ultimatemafioso", "ultimate", "mafioso", "um", "116"], "Mafia", "The Ultimate Mafioso", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 116");

		e.addField("Alignment", "Mafia Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Can perform an extra kill (besides the faction Mafia kill), from Mafioso.\n- Can find out a person’s exact role at night, from Consigliere.\n- Can disguise as someone’s role at night, from Disguiser.\n- Can see whispers and blackmail someone at night, from Blackmailer.\n- Can roleblock someone at night, from Consort.\n- Can frame someone at night, from Framer.\n- Can forge someone at night, from Forger.\n- Can clean someone at night, from Janitor.\n- Can hypnotize someone at night, from Hypnotist. (The message can be from any role in the GIM, probably.)\n- You can ambush someone, from Ambusher. Those who visit your target will not learn your name.");

		e.addField("Attributes:", "- As The Ultimate Mafioso, you’re great at all things Mafia related.\- However, you can only use one ability per night, and each ability only has 1 use.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["sword_master", "swordmaster", "117"], "PaleMoon", "Sword Master", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 117\n*5 seconds later, your body is sliced to pieces.*");

		e.addField("Alignment", "Pale Moon Killing", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Night one, you will spend all the night building a wooden sword.\n- At any night, you may decide to upgrade your sword, from wooden to iron to fiery.\n- Attack someone with your sword.");

		e.addField("Attributes:", "- Upgrading takes one day.\n- A wood sword deals a Basic Attack.\n- An iron sword deals a Powerful Attack.\n- A fiery sword deals an Unstoppable Attack.\n- When the PMCS begins, your sword Is instantly upgraded to fiery and you will now rampage.");

		e.addField("Goal:", factions.PaleMoon.goal);
	});

	register_role(["disgruntled_ghost", "disgruntledghost", "118"], "Neutral", "Disgruntled Ghost", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 118");

		e.addField("Alignment", "Unique Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Once per night, fucking kick a target out of your damn Graveyard and into the world of the living, reviving them.");

		e.addField("Attributes:", "- You can only use your ability while dead.\n- At the end of Night 1, you will automatically die. Your body will be cleaned.");

		e.addField("Goal:", "Make a faction win with at least 2/3 of its members alive. If only neutrals are alive when the game ends, you lose.");
	});

	register_role(["grand_executioner", "grandexecutioner", "119"], "Neutral", "Grand Executioner", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 119");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Every even night, attack a player, plus an additional one for every lynched Town role.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["corrupt_aid", "corruptaid", "120"], "Mafia", "Corrupt Aid", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 12");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "[[ - Lost Documents: Before the host reveals the rolelist used, the original one is shown to you first. You may replace the real rolelist with a fake one of your choosing. When 3 players have died, if you replaced the rolelist, it will be revealed that the rolelist was tampered by an Aide. The original rolelist will then be revealed.]] **The host may choose not to use this attribute.**\n- Corruption Within: Select one role before day 3 begins. During from day 3 onwards, you will appear to be this role and appear to win with all Town members.");

		e.addField("Abilities:", "- Leaked information: Select a player and predict what one of their next two targets will be. If your prediction is correct they will lose one use of one of their random abilities, and you will immediately gain a use of it. 2 uses.\n- Illicit Supply: Select a player and give them any ability that a role has. If they use the ability within the next two nights, they lose the ability to whisper for the rest of the game. 2 uses, 3 night cooldown.\n- Trade Secrets: When someone whispers to you, you may steal all of their abilities. They lose those abilities. 1 use.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["end_to_all_roles", "endtoallroles", "noodle_ruined", "noodleruined", "trwwbtetarbnhtri", "121"], "Neutral", "The Role Which Would've Been The End To All Roles But Noodle Had To Ruin It", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 119");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Varies", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Vary");

		e.addField("Attributes:", "- At the start of each day, you gain the abilities and attributes of a random role. This will cumulate. The role you copy does not need to exist in the game. The first role you copy will always have a killing ability of some kind.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["warning_call", "warningcall", "122"], "Neutral", "Warning Call", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 122");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Each night, choose a player that will be publicly announced at the beginning of the next day. If they are still alive in two days and nights, you will gain the ability to, along with your regular action, deal an Unstoppable Attack to someone per night. This can stack.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["meteor", "123"], "Rock", "Meteor", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 123");

		e.addField("Alignment", "Unique Rock Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Call down a meteor at night.");

		e.addField("Attributes:", "- Your rock will deal a Powerful attack to your target and all their visitors.\n- You may do this twice.\n- You may instead perform the factional Rock kill.");

		e.addField("Goal:", factions.Rock.goal);
	});

	register_role(["electrician", "124"], "Neutral", "Electrician", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 124");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- On nights 3, 6, 9, etc., shock a player, dealing a Basic Attack to them, whoeever they visit, whoever that person visits, and so on until either the final target is one that loops back into the cycle, visited no one, or visited you..");

		e.addField("Attributes:", "- If one of your victims is a role that grants protection, you will ignore the effect that they gave to their target.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["djinn", "125"], "Coven", "Djinn", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 125");

		e.addField("Alignment", "Coven Evil", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose up to one non-Coven player at night. They win the game immediately. You may only use this ability thrice.");

		e.addField("Attributes:", "- If you have the Necronomicon, you have infinite charges and may choose to remove your target from the game as well.\n- Redirect Immune");

		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["comet", "126"], "Rock", "Comet", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 126");

		e.addField("Alignment", "Unique Rock Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Distract two target players at night by calling a comet to drift across the night sky.");

		e.addField("Attributes:", "- Roleblock, Redirect, Control Immune\n- Your targets will be roleblocked, and you will fail all visits against them.\n- You may only act on odd-numbered nights.\n- You may instead perform the factional Rock kill.");

		e.addField("Goal:", factions.Rock.goal);
	});

	register_role(["mass_poisoner", "masspoisoner", "127"], "Neutral", "Mass Poisoner", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 127");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Poison a player each night along with whoever they visit and whoever visits them.");

		e.addField("Attributes:", "- This poison is immediately cured from a poisoned target if they get a visitor the next night that isn't poisoned.");

		e.addField("Goal:", factions.Rock.goal);
	});

	register_role(["ayase_hopes_glass_spear", "ayasehopesglassspear", "ayase", "hopes_glass_spear", "hopesglassspear", "ahgs", "128"], "Neutral", "Ayase, Hope's Glass Spear", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 128");

		e.addField("Alignment", "Unique Neutral Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose a player to try to kill each night. You will fail to kill them and instead attack two completely random players.");

		e.addField("Attributes:", "- Your attacks cannot be prevented by any means.");

		e.addField("Goal:", "Kill at least 7 players.");
	});

	register_role(["rock_with_ruler", "rockwithruler", "ruler", "129"], "Rock", "A Rock With a Ruler (very dangerous)", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 129");

		e.addField("Alignment", "Rock Support", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Measure someone. You will know how many letters the name of their role has.\n- Draw a straight line over two people adjacent to each other on the player list. If one dies, the other will be dealt a Basic attack. (2 uses)");

		e.addField("Attributes:", "- Can use multiple abilities, but may only use each ability once per night.");

		e.addField("Goal:", factions.Rock.goal);
	});

	register_role(["iceberg", "130"], "Rock", "Iceberg", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 130\n*Technically, Icebergs are not rocks.*");

		e.addField("Alignment", "Unique Rock Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Freeze someone each night.");

		e.addField("Attributes:", "- They may not perfom any night abilities for this night. You will then deal a Basic Attack to them the 2nd night.\n- Only one player may be frozen at all times.\n- If you exist in the game, Odd Keystone will be rerolled to another random rock role, because Stones are not rocks, and fuck you Rasen.");

		e.addField("Goal:", factions.Rock.goal);
	});

	register_role(["retiree", "131"], "Neutral", "Retiree", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 131");

		e.addField("Alignment", "Unique Neutral Benign", true);
		e.addField("Attack", "None (Basic)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- N/A-ish");

		e.addField("Attributes:", "- You will randomly acquire the abilities of one of the following roles, with the listed conditions:\n> Doctor\n> Vigilante (no guilt)\n> Consigliere (3 uses)\n- At the end of Night 1, your role will be publicly revealed");

		e.addField("Goal:", "Survive to the beginning of Day 2.");
	});

	register_role(["obnoxiously_complicated_executioner", "obnoxiouslycomplicatedexecutioner", "oce", "132"], "Neutral", "Obnoxiously Complicated Executioner", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 132");

		e.addField("Alignment", "Neutral Evil", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Choose a player to investigate each night. You will learn whether or not they are a member of the Town.\n- Choose a player to become your target at night. If they are lynched, you will win. You may only do this once.\n- Choose a player to execute at night. If they're a member of the Town, they will be dealt an Unstoppable attack. You may only do this after your target has been lynched, and once you successfully execute a member of the Town, you may no longer execute.");

		e.addField("Attributes:", "- If you choose someone that isn't a member of the Town as your target, you will commit suicide and lose.\n- If your target dies through any means other than lynching, you will commit suicide and lose.\n- You have a layer of Basic defense that can block one attack.");

		e.addField("Goal:", "Ensure that your Target gets lynched, and then successfully execute someone.");
	});

	register_role(["shrooms", "133"], "Neutral", "Shrooms", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 133");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Shroom a player each night, deleting 25% of the words in their abilities/attributes at random, leaving the role's function up to the host's interpretation based on the remaining words.");

		e.addField("Goal:", " Live to see every other living player be shroomed.");
	});

	register_role(["rockvestigator", "arsitfohmcyrhaahtbar", "134"], "Rock", "A Really Specific Investigator That Finds Out How Many Characters Your Role Has And Also Happens To Be A Rock", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 134");

		e.addField("Alignment", "Rock Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Check someone, and find out how many characters their role has (as written in <#970046125065265202>).");

		e.addField("Attributes:", "- You can use your ability in addition to the factional Rock kill.");

		e.addField("Goal:", factions.Rock.goal);
	});

	register_role(["court_wizard", "courtwizard", "cwizard", "135"], "Town", "Court Wizard", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 135");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Tornado: Target two players.");

		e.addField("Attributes:", "- Redirect players targeting one to the other.\n- Players targeting player a will visit player b.\n- Players not targeting player b will not visit player a.\n- Players targeting player b will visit player c.\n- Players targeting player a will not visit player b.\n- Players targeting player b will visit player a.\n- Players targeting a different player entirely will visit player a.\n- Players targeting player a will visit player a.\n- Players targeting player b will not visit player c.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["heavy", "136"], "Neutral", "Heavy", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 136\n*It is good day to be not dead!*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Check someone each night to discover if they killed you.\n- Shoot someone during the day.");

		e.addField("Attributes:", "- At the start of the game, the entire town will receive the message in the photo attached to this role card.\n- You are considered dead, but you function as if you are alive meaning that you can perform abilities and talk/whisper during the day. However, you cannot vote.\n- No players in the game may use their abilities or vote against you, but you can be whispered to.\n- A random player in the game killed you. They will be notified when they receive their role card. You will be notified if this player dies.\n- You may check three people and kill one person.");

		e.addField("Goal:", "Make sure the person that killed you is not alive at the end of the game.");

		e.setImage("https://media.discordapp.net/attachments/970046125065265202/970075692089896990/unknown.png");
	});

	register_role(["shree", "137"], "Neutral", "Shree Shree Shree Shree Shree Shree Shree Shreeeeeeeeeeee", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 137");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- The last person to say Shree every day will be dealt a Powerful Attack at the end of the night.");

		e.addField("Attributes:", "- If no one says Shree, you instead get to kill two players of your choice.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["moo", "138"], "Neutral", "Extremely Creative Cow", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 138");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- The last person to say Moo every day will be dealt a Powerful Attack at the end of the night.");

		e.addField("Attributes:", "- If no one says Moo, you instead get to kill two players of your choice.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["eoc_exams", "eocexams", "eoc", "139"], "Neutral", "EOC Exams", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 139");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- During the day, choose a player to test.");

		e.addField("Attributes:", "- Tested players will be roleblocked, bypassing roleblock immunity. Tested players will receive a random question based on day activity, which is decided by the host. Getting the question correct will do nothing, but getting the question wrong will have you kill them.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["ramp_up_ramper", "rampupramper", "ramper", "140"], "Neutral", "Ramp Up Ramper", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 140");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Every even night, attack a player. For the rest of the game, all visitors to that player (except you) must use their ability twice per night if they can and on different targets. Already affected players go to 3x and then 4x and if they reach 5x, they receive an Unstoppable Attack.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["emerald", "141"], "Rock", "Emerald", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 141\n*The light of the Emerald will protect you.*");

		e.addField("Alignment", "Rock Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Powerful)", true);

		e.addField("Abilities:", "- Protect your fellow rocks every night.");

		e.addField("Attributes:", "- Every Rock will gain Powerful defense. You start with 1 charge. You gain a charge for every dead Rock.\n- If you're the only rock alive, each night, pick 3 players. Target A will protect you with the value of their defense (Basic if None or lower). Target B will attack Target C with the value of their attack (Basic if None or lower)\n- If you exist in the game, Odd Keystone will be rerolled to another random rock role, because Stones are not rocks, and fuck you Rasen.");

		e.addField("Goal:", factions.Rock.goal);
	});

	register_role(["annoying_chess_youtuber", "annoyingchessyoutuber", "guess_the_elo", "guesstheelo", "elo", "142"], "Town", "Annoying Chess Youtuber In My Reccomended Section", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 142");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Challenge another player to a game of Guess the ELO.\n- Ask another player of a third party.\n- (Guess the ELO happens during the night, but you decide the target and the third party during the day)");

		e.addField("Attributes:", "- Players playing Guess the ELO will spectate a random chess game on chess.com of the third party's choosing. They must then guess the ELO of the side chosen by said third party. Then, the following shall happen:\n> If the Annoying Chess Youtuber In My Reccomended Section gets the ELO rating closer than the challenged player, they will learn said challenged player's exact role, bypassing any frame effect.\n> If the challenged player gets the ELO rating closer, they will deal an astral basic attack to the Annoying Chess Youtuber In My Reccomended Section.\n- The Host can potentially be the third party.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["builder", "143"], "Town", "Builder", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 143\n*Offenceive joke goes here.*");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Build either a wooden, stone, or iron fence.\n- Place you fence around a player's house.");

		e.addField("Attributes:", "- You must spend one night building your fence. This action can be roleblocked, and you will start building the night you decide which fence to build. You can only build one fence at a time.\n- If you build a wooden fence, your target will receive Basic defense for the current and next two nights.\n- If you build a stone fence, your target will receive Powerful defense for the current and next night.\n- If you build an iron fence, your target will receive Invincible defense for the night.\n- You can only have two fences out at a time, and you may not have more than one of the same fence out at a time.\n- A fence will break if the protected player is attacked.\n- You may not place a fence on yourself.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["death_inversion", "deathinversion", "144"], "Neutral", "Death Inversion", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 144");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Each day phase, choose whether or not to invert death the following night. All that would have died that night will instead just survive. If you would have survived the night, you instead die.");

		e.addField("Attributes:", "- If this somehow creates a paradox, then uh idk figure it out yourself nerd.");

		e.addField("Goal:", "Besides you yourself, save three people with your ability.");
	});

	register_role(["principality", "145"], "Town", "Principality", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 145");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- For every player that died last night, heal a player, granting them Unstoppable Defense for tonight and the next.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["bodyguard_boss", "bodyguardboss", "bgboss", "146"], "Town", "Bodyguard Boss", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 146\n*You don't want to hear from the chairman.*");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose one player to become a Bodyguard for the other at night.");

		e.addField("Attributes:", "- Each night you may select two targets. The first player will be protected by the second player. This will roleblock the second player through immunity.\n- If anyone attacks the first player, both the second player and the player attacking the first target will die. Once this happens, you may no longer use your ability.\n- You may only enforce each individual player to act as a Bodyguard one time.\n- You may not protect yourself");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["word_bomber", "wordbomber", "wb", "147"], "Neutral", "Word Bomber", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 147");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Choose a word with 4-6 letters each night. The next day, anyone who says that word will be attacked immediately.");

		e.addField("Attributes:", "- If you're redirected, you'll choose the name of the target you were redirect to as your word, even if it doesn't have 4-6 letters. You'll still know what you were forced to choose.\n- If no one says your word, you'll attack a random other player among those who sent the least messages that day.\n- If the host isn't available to kill the player immediately, the Town will be informed what the message that caused them to be attacked was, and subsequent players who used that word while the host wasn't available won't be attacked.");

		e.addField("Goal:", "Kill everyone who would oppose you.");
	});

	register_role(["doubling_doubler", "doublingdoubler", "doubler", "148"], "Neutral", "Doubling Doubler", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 148");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Double another player each day. Starting the next night, their role's rules text will be doubled (again).");

		e.addField("Attributes:", "- Every other role has its entire rules text twice. (Each of its abilities, attributes, etc. are doubled.)\n- Players can use any number of different abilities each night, even if the rules or their roles say they can't.");

		e.addField("Goal:", "Octuple a player, and have your doubling have a significant impact on the game.");
	});

	register_role(["daffodil", "149"], "Florae", "Daffodil", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 149");

		e.addField("Alignment", "Florae Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may search a player for a clue of their role.");

		e.addField("Attributes:", "- If your target is Doused/Framed/Disguised/Hexed you will instead be told you are unsure what your target is.\n- You will still see the Arsonist/Framer/Disguiser/Hex Master as their results if they aren't Doused/Framed/Disguised/Hexed.");

		e.addField("Goal:", factions.Florae.goal);
	});

	register_role(["hydrangea", "150"], "Florae", "Hydrangea", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 150");

		e.addField("Alignment", "Unique Florae Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- You may dance during the day to summon a rainstorm for the night.");

		e.addField("Attributes:", "- Mafia, Coven, and Neutrals will be notified that a storm is starting at the beginning of the night.\n- Players that visit will be drenched in water.\n- You will be told all of the players who are not drenched the following day.\n- You may only summon 3 rainstorms.\n- Doused players will always appear as drenched. If a player is purged the same night it rains, they will only be drenched if the player visited that night.\n- Framed players will appear as dry. Frames will be removed if a Framed player visits the night it rains.\n- The storm summoned will still happen, regardless if you are roleblocked, controlled, or jailed. It will not rain if you are lynched during the day.");

		e.addField("Goal:", factions.Florae.goal);
	});
};
