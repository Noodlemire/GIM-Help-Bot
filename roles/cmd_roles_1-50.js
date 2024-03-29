module.exports = (g) =>
{
	const {register_role, factions, GOOD} = g;

	register_role(["edge_of_existence", "edgeofexistence", "edge", "existence", "eoe", "1"], "Neutral", "The Edge of Existence", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 1");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic (None)", true);

		e.addField("Abilities:", "- Cause a player to fade into non-existence.\n- Cause all your visitors to fade into non-existence. Costs 2 life energy.\n- Send yourself into non-existence. Costs 2 life energy.");

		e.addField("Attributes:", "- Sending other players into non-existence will cause them to die without a cause of death, will, or role shown.\n- Sending yourself into non-existence will do the same, but automatically revive yourself after a full day of non-existence. \n- You start with 1 life energy. You gain 1 for each person you kill. You do not gain any for killing yourself.\n- If you are attacked with any life energy, consume 1 life energy to automatically block the attack, regardless of the attack's value. If this is from a limited use attack, you will cause the attacker to lose a charge.\n- If you have no life energy left and are attacked, you have a one-time use Basic defense auto-use shield. Once this is depleted, and you are attacked without life energy, you will die.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["nervous_sleeper", "nervoussleeper", "ns", "2"], "Town", "Nervous Sleeper", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 2");

		e.addField("Alignment", "Unique Town Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Follow a player at night. Your ability is mandatory.\n- Stay home at night.");

		e.addField("Attributes:", "- If your target visits someone who dies, deal an Unstoppable attack to them. If they visit you and you die, you will not attack them.\n- If you stay home, you will instead attack your visitors.\n- If you attack a Townie, you cannot act the next night. The first time you do this, degrade to Powerful attack.\n- You may only stay home twice.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["power_of_three", "powerofthree", "pot", "3"], "Town", "Power of Three", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 3");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Select a player, and choose a Town alignment. You will use the abilities of 3 random roles from that alignment on your target.");

		e.addField("Attributes:", "- You can target yourself.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["wadanohara_the_blue_sea_witch", "wadanoharatheblueseawitch", "wadanohara", "blue_sea_witch", "blueseawitch", "wtbsw", "wbsw", "4"], "Neutral", "Wadanohara, the Blue Sea Witch", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 4\n*My dear girl. Please remain who you are. Let nothing stain you, let nothing take you away. That is all I ask of you.*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Check to see if someone's house has a barrier. If they do, you will fix it.");

		e.addField("Attributes:", "- You may choose to make your visits Astral or not each night.\n- At the start of the game, the town is notified that \"The six barriers protect the pristine blue sea...\". Then, six random players in the game are selected to have a barrier at their house. If that player gets visited twice OR killed, the barrier is broken.\n- Once all six barriers are broken, you have two options:\n> Sacrifice yourself\n> Become Wadanohara the Blood Sea Witch.\n- If you sacrifice yourself, you will suicide out of guilt and if the game ends in a good faction Victory, then you will also win the game regardless of win condition fullfillment.");

		e.addField("Goal:", "Survive until the end of the game.");
	});

	register_role(["reaper", "5"], "Neutral", "Reaper", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 5");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Choose a player to stalk at night.");

		e.addField("Attributes:", "- At the end of the night you stalk them, as well as the night after, you will learn who they visited that night.\n- After two nights, you will deal a Powerful attack to the players they visited the last two nights.\n- If they did not visit, you will deal a Powerful attack to them.\n- You are Astral.\n- You can only be stalking two players at time.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["investicreator", "6"], "Town", "Investicreator", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 6");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Investigate someone specifically to spite Zage. You will find out the creator of their role. See it's an actual investigator. It works. Probably. *Spites Zage.*");

		e.addField("Attributes:", "- *Spites Zage*\n- Framed targets show Zage as the creator.");

		e.addField("Goal:", "Town Goal but spite Zage.");
	});

	register_role(["soldier_but_on_steroids", "soldierbutonsteroids", "soldier", "7"], "Neutral", "Soldier But On Steroids", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 7");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Powerful And A Half", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- Shoot a player with your shotgun at night.");

		e.addField("Attributes:", "- You will also shoot anyone who visits your target. This counts as using your main ability, which means that anyone who visits them will get shot, and anyone who visits them also gets shot, and so on.\n- Powerful and a Half is above Powerful defense.");

		e.addField("Goal:", "Shoot everyone. (NK Goal)");
	});

	register_role(["oct2", "8"], "Neutral", "Oct2", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 8\n*Me when i watch a funny cat video:*");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Target a player. You will deal an Unstoppable attack to them and gain 1 soul. You will leave behind a dead body that appears to be alive. It will only appear as dead the day after.\n- Place a bet on someone during the day. If they get lynched, gain 2 souls.\n- Gain powerful defense for the night. If you succesfully protect yourself from an Attack, gain 2 souls. Cost: 1 soul\n- Guess someone's role. If you're correct, gain 2 souls. If you're wrong, remove 2 souls. Cost: 1 soul\n- Deal an Unstoppable Rampage Attack to up to 3 players. Gain 4 souls if the amount of people you killed Is 3, 2 souls If It Is between 4 and 6, and 1 soul if its 7 or higher. Cost: 6 souls.");

		e.addField("Attributes:", "- You start with 3 souls.");

		e.addField("Goal:", "Kill the Town and anyone that may oppose you.");
	});

	register_role(["sleeper_agent", "sleeperagent", "9"], "Mafia", "Sleeper Agent", {spawnCat: GOOD, subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 9");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- Starts as a townie. Becomes a Random Mafia once one other Mafia remains. Cannot spawn as a conversion immune town.\n- You are aware you are an a sleeper agent when the game begins.\n- The Mafia know who you are and cannot perform actions that negatively affect you.\n- Spawns in a good slot.\n- May only spawn if another member of the Mafia is present.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["amnestic_wizard", "amnesticwizard", "amnestic", "10"], "Coven", "Amnestic Wizard", {spawnCat: GOOD, subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 10");

		e.addField("Alignment", "Coven Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- Starts as a townie. Becomes a Random Coven once one other Coven remains. Cannot spawn as a conversion immune town.\n- You are aware you are an amnestic wizard when the game begins.\n- The Coven know who you are and cannot perform actions that negatively affect you.\n- Spawns in a good slot.\n- May only spawn if another member of the Coven is present.\n- May not hold the Necronomicon.");

		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["tinkerer", "11"], "Town", "Tinkerer", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 11");

		e.addField("Alignment", "Unique Town Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Every night you aren't visited, craft a gun.");

		e.addField("Attributes:", "- You can attack a player with your gun, dealing a Powerful attack to them.\n- You may only hold one gun at a time.\n- If you attack a player with a gun, you cannot craft a gun that night.\n- Your gun is consumed even if your target does not die.\n- You can give guns to other players, which thry can use to deal a Basic attack in place of their normal ability. Each player can only recieve one gun.\n- If you are resurrected for any reason, you will not have a gun even if you had one when you died.\n- Control Immune");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["god", "12"], "Neutral", "God", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 12");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "Immortal", true);

		e.addField("Abilities:", "- Use the ability of any role in <#970046125065265202> at night. Any. Role.\n- Die someone. They die.");

		e.addField("Attributes:", "- You may use multiple different abilities at once.\n- You may use multiple of the same ability at a time.\n- You can always talk in any Day chat, regardless of the phase or what day it actually is. Even if it's Day 9, you can still talk in the Day 1 chat. You may also talk in all private chats (informed minority, dead, see jailor/wisteria, etc) but cannot see player chats.\n- Lynch immunity.\n- Death immunity.\n- Modkill immunity.\n- Kick immunity.\n- Ban immunity.\n- Mute/timeout immunity.\n- Conversion immunity.\n- Control immunity.\n- Redirect immunity.\n- Roleblock immunity.\n- Occupy immunity.\n- Your ability cannot fail.\n- None of your immunities or other attributes can be bypassed under any circumstance.\n- Your abilities and attributes cannot be removed. They can be copied, but only if it's actually allowed.\n- Your defense will always be set to Immortal.\n- You cannot be removed from the game.\n- The wording of this role can only be modified when a game is not running.");

		e.addField("Attributes (cont.):", "- If your role is removed, delay the removing. Automatically and secretly create a new role with a completely random name, which if ever is mentioned, immediately is changed to a new one. This new role has the exact same abilities and attributes as God.\n- An outside party cannot forcefully switch your role. Only you can switch your role.\n- If the game would only be blocked by you and a Survivor, the game will end and you will lose. So yes, you can technically lose.\n- If you somehow manage to die or exit the game in any way, immediately revive yourself and/or add yourself back into the game. If the game is closed, automatically reopen it. If something prevents revives, immediately attack whatever prevents it then try again. If you still can't, remove them from the game.");

		e.addField("Goal:", "Eliminate all Survivors.");
	});

	register_role(["gunman", "13"], "Neutral", "Gunman", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 13");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Shoot someone at night.- Hide yourself to gain Basic Defense, Control Immunity, Roleblock Immunity, and role-masking from Consiglieres and Potion Masters. 4 uses.");

		e.addField("Attributes:", "- Shooting a Non-Mafia or Non-Coven will result in you unable to attack or hide the next night.");

		e.addField("Goal:", "Live to see the Mafia/Coven Lose.");
	});

	register_role(["godfather", "14"], "Mafia", "Godfather", {subCat: "Killing", cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 14");

		e.addField("Alignment", "Unique Mafia Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Attributes:", "- Detection Immunity\n- This role cannot roll in the starting rolelist.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["mafia_traitor", "mafiatraitor", "15"], "Mafia", "Mafia Traitor", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 15");

		e.addField("Alignment", "Mafia Support", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Attributes:", "- Gain all abilities and attributes of a random Town role. You may use the Mafia chat. You may *not* perform the factional Mafia kill.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["coven_traitor", "coventraitor", "16"], "Coven", "Coven Traitor", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 16");

		e.addField("Alignment", "Coven Support", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Variable", true);

		e.addField("Attributes:", "- Gain all abilities and attributes of a random Town role. You may use the Coven chat. You may *not* inherit the Necronomicon.");

		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["n-escapable_killer", "nescapablekiller", "n-escapable", "17"], "Neutral", "N-escapable Killer", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 17");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Attack a player each night. You may not target players whose Discord usernames start with the letter \"n\", lowercase or uppercase.");

		e.addField("Attributes:", "- You instead deal an Overkill attack if you target a player whose Discord username starts with the letter \"a\", lowercase or uppercase.");

		e.addField("Goal:", "Eliminate all other roles whose names start with the letters \"N\" or \"A\".");
	});

	register_role(["prodigy", "18"], "Neutral", "Prodigy", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 18\n*I'm talented in almost everything! I just don't know whats my purpose yet...*");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Choose someone to get inspiration from every night.\n-Choose to mature.");

		e.addField("Attributes:", "- Getting inspiration means you will copy one of your targets ability.\n- Maturing transforms you into a copy of a role randomly chosen of players that you got inspiration from.");

		e.addField("Goal:", "Succesfully mature and complete your new goal.");
	});

	register_role(["nice_or_fight", "niceorfight", "19"], "Neutral", "Nice or Fight?", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 19");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- During the day, choose two players that are not yourself, and predict the outcome of your ability.");

		e.addField("Attributes:", "- Both players are given a prompt: Share, or Steal? If both players select Share, then you will choose to give one player a permanent attack increase (if the role does not have an attacking ability, they will gain one), and the other a permanent defense increase. If one player selects Share and the other chooses Steal, the player who chose Steal receives both a permanent attack and defense upgrade, and the person who chose Share gets nothing. If both player select Steal, neither gets any permanent upgrade, and both are dealt a Powerful attack.");

		e.addField("Goal:", "Correctly predict the outcome of your ability twice.");
	});

	register_role(["sheriff", "20"], "Town", "Sheriff", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 20");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/d/de/RoleIcon_Sheriff.png";

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Interrogate a player each night.");

		e.addField("Attributes:", "- If your target is a member of an evil faction or a Neutral Killing role, you will learn that they are suspicious. Otherwise, you will learn that they are innocent.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["nightwatch", "21"], "Town", "Nightwatch", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 21");

		e.addField("Alignment", "Unique Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Take a walk at night, observing all actions that occur to two select players.");

		e.addField("Attributes:", "- You will learn what happens to them, but not who did what. If the action is ambiguous, you will pick it out: if someone is roleblocked, you will learn what specific role the roleblocker is.\n- If you visit someone and they attack their visitors, you will survive and learn their role. They will be notified that they missed you.\n- Your ability is Astral.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["saboteur", "22"], "Neutral", "Saboteur", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 22");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Sabotage a person at night, or Sabotage voting in the day.");

		e.addField("Attributes:", "- You are able to sabotage a person at night to roleblock them and learn their role. You can also Sabotage voting anytime during the day to make votes anonymous, nullify Mayor's voting powers, and make your votes count for 2. This lasts until the day ends.");

		e.addField("Goal:", "Live to see the town lose.");
	});

	register_role(["bodyswapper", "23"], "Neutral", "Bodyswapper", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 23");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Swap: Choose a player. You become their role and force them to become a Bodyswapper.");

		e.addField("Attributes:", "- If you're still a Bodyswapper by the time the game ends, you lose.");

		e.addField("Goal:", "Swap with someone and follow your new role's goal.");
	});

	register_role(["metagician", "24"], "Neutral", "Metagician", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 24");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Work wonders on a player each night. This has a different effect based on how many times they rerolled their role:\n> - 0 times: They gain Powerful defense for the night.\n> - 1 time: They can't use abilities tonight or the following day.\n> - 2+ times: They're dealt an Unstoppable attack.\n- Peer into a player's thoughts each day. You will receive a full backlog of everything sent in their private channel during the current game, with all role names, rolecards, and things that would directly identify roles censored.");

		e.addField("Goal:", "Win with the faction whose members rerolled the least times on average. You will know what this faction is at the beginning of the game.");
	});

	register_role(["plumber", "25"], "Town", "Plumber", {subCat: "Support"}, (e) =>
	{
		e.setDescription("Post 25\n*It's a me! Mario!*");

		e.addField("Alignment", "Town Support", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Place a hydrant at someone house.");

		e.addField("Attributes:", "- If the Hydrant triggers, it will roleblock all visitors.\n- The Hydrant will trigger if a circumstance is met, chosen by the Plumber at the start of the night.\n- The next night, the Hydrant will desactivate and you can put a new one on another person's\n- You cannot place an hydrant on the same player's house two nights in a row.\n\nWhat Plumber can choose:\n1. If your target gets attacked, your Hydrant will activate.\n2. If your target gets roleblocked or controlled, your Hydrant will activate.\n3. If any active nighttimes abilities are used on your target, your Hydrant will activate\n4.  If your target gets visited by someone suspicious (based on sheriff results), your Hydrant will activate.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["knight", "26"], "Neutral", "Knight", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 26");

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Protect someone once per game.\n- Use your shield once to protect yourself.");

		e.addField("Attributes:", "- At night, choose someone to protect.\n- You cannot protect someone twice.\n- If you successfully protect someone once, your armor will break. This will make the next successful protection fatal.\n- If you cannot protect anyone anymore, you will commit suicide.\n- Protecting someone will grant them Powerful defense.\n- Your shield grants you Basic defense.");

		e.addField("Goal:", "Die protecting someone.");
	});

	register_role(["artificial_disease_developer", "artificialdiseasedeveloper", "artificial_disease", "artificialdisease", "add", "27"], "Neutral", "Artificial Disease Developer", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 27");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "None (Variable)", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Infect a player with your disease. Or, reduce your attack level by one, but nobody can be infected if you reduce your attack level.\n- Once per game, you may set your attack level to Unstoppable, but your disease will never be able to spread again. However, your kill chance will increase to 100%.");

		e.addField("Attributes:", "- Your disease spreads similarly to Plaguebearer's plague, but each person can only spread it to one other person per night, including you. Everyone will know when they are infected if you have a Basic (or higher) attack, and if they were infected by visiting a target, or by getting visited (activates at Powerful or higher attack). Each night that someone is infected, they have a 33% chance of being dealt an astral attack at the current attack level. Your attack level increases at the very end of all full moon nights.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["coven_leader", "covenleader", "cl", "28"], "Coven", "Coven Leader", {subCat: "Evil"}, (e) =>
	{
		e.setDescription("Post 28");

		e.addField("Alignment", "Unique Coven Evil", true);
		e.addField("Attack", "None (Basic)", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Control a player each night.");

		e.addField("Attributes:", "- As you control a player, you may force them to target a player of your choice.\n- You will learn your target’s role.\n- With the Necronomicon, you will deal a Basic attack to your target and you have Basic defense.\n- You have Necronomicon priority.");

		e.addField("Goal:", factions.Coven.goal);
	});

	register_role(["civilian", "29"], "Town", "Civilian", {subCat: "Power"}, (e) =>
	{
		e.setDescription("Post 29");

		e.addField("Alignment", "Town Power", true);
		e.addField("Attack", "Basic (Powerful)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Attack someone each night.");

		e.addField("Attributes:", "- You have all abilities and attributes of three different random Town roles from https://docs.google.com/document/d/1aXJu1yl1zWI4FLRhamAGCxxVxEFq2Gu5SOi_K6zgL-M/edit in addition to your other abilities.\n- Mayor and Jailor can't be among these roles.\n- If Vigilante is among these roles, instead, your base attack is upgraded to Powerful.\n- If Vampire Hunter is among these roles, you hunt and are immune to all conversion roles.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["day_vigilante", "dayvigilante", "day_vigi", "dayvigi", "30"], "Town", "Day Vigilante", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 30");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Shoot someone, except you can only do it during the day because you hate the dark. Also you just walk up to the person point blank and shoot them in the head so your attacks are powerful instead of basic.");

		e.addField("Attributes:", "- You can only use your ability thrice.\n- Shooting a town member disables your ability the following day.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["bloodthirsty", "31"], "Mafia", "Bloodthirsty", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 31\n*I NEED my 1 KPN.*");

		e.addField("Alignment", "Mafia Killing", true);
		e.addField("Attack", "Basic (Powerful)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Perform the Factional Mafia Kill.");

		e.addField("Attributes:", "- If, when you perform the factional mafia kill, the target will not end up dead the next day, you may choose to deal a Powerful Attack to 2 players in the game the next night. If you do, the mafia may not perform the FMK.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["no", "32"], "Other", "No", {cannotRoll: true}, (e) =>
	{
		e.setDescription("Post 32 cannot be rolled. F tier. Next.");
	});

	register_role(["indifference", "33"], "Neutral", "The Indifference", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 33");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- At the beginning of the game, gain the abilities of 1 random role from every faction in the game--your abilities do not have to be that of a living role. Your abilities will come with the restrictions and drawbacks the original role had, so long as that restriction does not somehow result in your death.");

		e.addField("Attributes:", "- You cannot gain the abilities of the Jailor, Martyr, Medium, Vampire Hunter, Hunter, Bodyguard, Godfather or Saint.\n- You cannot have abilities of two roles which are \"equivalents:\" If you gain the abilities of the Veteran, you will not be able to gain the abilities of the Damp Rock, Prince, Remnant, Medusa, etc. \n- You cannot perform a factional night kill, get the Necronomicon or see evil chats.\n- If you use the ability of a role who would normally be roleblock or control immune, you will gain that immunity.");

		e.addField("Goal:", "Be alive when the faction corresponding to your last used ability wins.");
	});

	register_role(["orchestrator_of_the_genocide_of_all_things_pertaining_to_the_role_firefighter", "ootgoatpttrf", "34"], "Neutral", "Orchestrator of The Genocide of All Things Pertaining To The Role 'Firefighter'", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 34");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Unstoppable", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Interrogate a player each night.");

		e.addField("Attributes:", "- If they are a Firefighter, Firefighter Hunter, Firefighter Hunter Hunter, Firefighter Hunter Hunter Hunter, Firefighter Hunter Hunter Hunter Hunter, etc, you will Mark them.\n- If all Firefighter-pertaining roles are Marked (except yourself), you will deal an Unstoppable attack to all of them. Afterwards, the Town is immediately occupied by the UN for crimes against humanity, leading to everyone except yourself losing all win conditions, making them effectively incapable of winning.");

		e.addField("Goal:", "Exterminate the Firefighter scum");
	});

	register_role(["inv", "invest", "investigator", "35"], "Town", "Investigator", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 35");
		e.author.iconURL = "https://static.wikia.nocookie.net/town-of-salem/images/6/6b/RoleIcon_Investigator.png";

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Investigate a player each night.");

		e.addField("Attributes:", "- You will learn five random roles, at least two of which will be Town roles, at least one of which will be a role that opposes the Town, and one of which will be your target’s role. Your results are not mutually exclusive and may only contain roles that could spawn in the current game.\n- If you investigate the same player again, you will learn the same result.\n- If your target is not a member of the Town, they will learn that they were investigated and the result you were given.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["effort_murderer", "effortmurderer", "36"], "Neutral", "Effort Murderer", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 36");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Powerful", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Check someone at night. If they are a role that has more than 750 characters, attack them.");

		e.addField("Attributes:", "- Imagine putting effort into a role lmaoooooo imagiiiiine\n- Will die upon their goal being completed.");

		e.addField("Goal:", "Kill three people.");
	});

	register_role(["investiletter", "37"], "Town", "Investiletter", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 37\n(pronounced investi-lay-ter)");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Investigate a player each night. You will learn what letter their role starts with.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["tenacious", "38"], "Mafia", "Tenacious", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 38\n*The silent blade of a killer watches over the town.*");

		e.addField("Alignment", "Mafia Killing", true);
		e.addField("Attack", "Basic (Unstoppable)", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Perform the Factional Mafia Kill.");

		e.addField("Attributes:", "- Once the rolelist has been rolled by the host, if Tenacious was rolled, before the roles are given out, 3 other roles must be rerolled into non mafia killing roles, UNLESS the rolelist already has guaranteed Evil Faction slots.\n- Once you are the last mafia standing, your Factional Mafia Kill Is an Unstoppable Rampaging attack.\n- Players will know at the start of the day when a Tenacious Is the last mafia standing.");

		e.addField("Goal:", factions.Mafia.goal);
	});

	register_role(["wordle", "39"], "Town", "Wordle", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 39");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Guess the first 5 letters of your target's role. You'll know which letters were correct and in the correct spots, you'll know which letters exist but are in the wrong spots, and you'll know which letters don't exist at all.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["locust", "40"], "Neutral", "Locust", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 40");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Convert someone into a Locust during the night. Every Night.");

		e.addField("Attributes:", "- Can talk with other Locusts during the night\n- No restrictions, unless stated otherwise, as to whom can be converted to a Locust. Additionally, each Locust player may convert during the night.\n- Cope, Seethe, and Mald");

		e.addField("Goal:", "Convert every living player into a Locust.");
	});

	register_role(["clock", "41"], "Neutral", "Clock", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 41");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Every even night, roleblock and attack a player.");

		e.addField("Attributes:", "- All players that do a night action after your target does theirs will also be roleblocked.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["nlove", "bazinga", "42"], "Neutral", "Nlove", {subCat: "Benign"}, (e) =>
	{
		e.setDescription("Post 42");
		e.author.iconURL = "https://cdn.discordapp.com/avatars/282820835318693889/9cf66288ac7e61b93e30893b25c247ac.png";

		e.addField("Alignment", "Neutral Benign", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Select one player at night. That person can only say 'bazinga' ever.");

		e.addField("Goal:", "Make everyone only say bazinga.");
	});

	register_role(["witch_doctor", "witchdoctor", "43"], "Neutral", "Witch Doctor", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 43");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Each night, heal two players. They will also be healed the next night.");

		e.addField("Attributes:", "- You will know whenever you save a target from death.\n- For every player that you’ve saved in the past, you may, instead, attack two players. Your attacks cannot be saved by your own heals.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});

	register_role(["attributor", "44"], "Neutral", "Attributor", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 44");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "Basic", true);

		e.addField("Abilities:", "- Select a player at night, and come up with an attribute. They will have that attribute starting tomorrow morning, as long as the host approves (host shouldn't approve if it's unfun or unbalanced).");

		e.addField("Attributes:", "- Can't self target.");

		e.addField("Goal:", "Give someone an attribute that makes a difference in the game, i.e. it actually changes something. They must die before the game ends, though, and not via your attributes. Also survive until the end of the game.");
	});

	register_role(["forest_spirit", "forestspirit", "45"], "Town", "Forest Spirit", {subCat: "Investigative"}, (e) =>
	{
		e.setDescription("Post 45");

		e.addField("Alignment", "Town Investigative", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Visit someone and chat with them, creating a memory.\n- Check the memories of a dead player.");

		e.addField("Attributes:", "- If your dead target was visited by someone you have a memory of, you will know.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["exterminator", "46"], "Town", "Exterminator", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 46");

		e.addField("Alignment", "Town Killing", true);
		e.addField("Attack", "Overkill", true);
		e.addField("Defense", "None (Basic)", true);

		e.addField("Abilities:", "- Spray DDT on two players' houses every night.");

		e.addField("Attributes:", "- Sprayed players will gain Conversion Immunity, until they are visited, upon which the Spray is removed.\n- Players capable of converting will be dealt an Unstoppable Attack if they visit a Sprayed player\n- Other players will be roleblocked upon visiting a Sprayed player.\n- Conversion immunity by default. Additionally, you will attack any players capable of converting whom visit you.\n- Basic Defense until no conversion capable players are alive. You will regain this if any are ressurected.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["stardust_angel", "stardustangel", "stardust", "47"], "Town", "Stardust Angel", {subCat: "Protective"}, (e) =>
	{
		e.setDescription("Post 47\n*\"Blow the trumpet! The time has come to fight!\"*");

		e.addField("Alignment", "Town Protective", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Abilities:", "- Cover someone in stardust each night.\n- Once per game, cover all of your visitors in stardust.");

		e.addField("Attributes:", "- If someone covered in stardust attacks a target, grant the target Powerful defense.\n- Stardust lasts only for the night (meaning the next night they're no longer covered in stardust unless you cover them again)\n- You will not know if you healed anybody.");

		e.addField("Goal:", factions.Town.goal);
	});

	register_role(["admin", "48"], "Neutral", "Admin", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 48");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "Variable", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities:", "- In the night, create a new rule, which must be based on one of the below templates. It will be announced once the next day starts.\n> 1. Do not say the following word: [word]\n> 2. Do not target [named person] with any ability during the [Day or Night].\n> 3. Do not ping or vote for [named person].");

		e.addField("Attributes:", "- All rules will accumulate and last until you die.\n- If you get revived, his previous rules are immediately reinstated.\n- If a player other than you breaks a rule, they are hit by an attack of a tier equal to the amount of times they have broken a rule.\n- If you break a rule, you are modkilled.");

		e.addField("Goal:", "Kill at least 3 rule-breakers, other than yourself.");
	});

	register_role(["host", "49"], "Neutral", "Host", {subCat: "Chaos"}, (e) =>
	{
		e.setDescription("Post 49");

		e.addField("Alignment", "Neutral Chaos", true);
		e.addField("Attack", "None", true);
		e.addField("Defense", "None", true);

		e.addField("Attributes:", "- You may choose to become the host as you get this role. If you do, the host takes your spot as a player and you give them a random role, then reroll all other roles. If you don't, you may choose a letter of the alphabet, and you will be assigned a random role starting with that letter.\n- The host may choose to reroll this role without letting you become the host.");

		e.addField("Goal:", "N/A");
	});

	register_role(["archangel", "50"], "Neutral", "Archangel", {subCat: "Killing"}, (e) =>
	{
		e.setDescription("Post 50");

		e.addField("Alignment", "Neutral Killing", true);
		e.addField("Attack", "Basic/Powerful", true);
		e.addField("Defense", "Powerful", true);

		e.addField("Abilities", "- Each night, choose 3 players to judge.");

		e.addField("Attributes:", "- During the day, your targets choose privately whether they want to be dealt a Basic Attack the following night or not.\n If none of them say yes, they will all be dealt a Powerful Attack the following night instead.");

		e.addField("Goal:", factions.Neutral.goalNK);
	});
};
