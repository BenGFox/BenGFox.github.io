let race = ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Halfling', 'Half-Orc', 'Human', 'Tiefling'];
let charClass = ['Barbarian', 'Bard', 'Blood Hunter', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'];
let background = ['Acolyte', 'Charlatan', 'Criminal', 'Entertainer', 'Folk Hero', 'Guild Artisan', 'Hermit', 'Noble', 'Outlander', 'Sage', 'Sailor', 'Soldier', 'Urchin'];


//Expansions & Switch Functions
let scagClasses = false;			//Sword Coast Adventuring Guide - Classes
let scagRaces = false; 			//Sword Coast Adventuring Guide - Races
let scagBackgrounds = false; 	//Sword Coast Adventuring Guide - Backgrounds
let eeRaces = false;				//Elemental Evil - Races
let eeBackgrounds = false;		//Elemental Evil - Backgrounds
let volos = false;				//Volo's Guide to Monsters
let ua = false;					//Unearthed Arcana
let mtof = false;				//Mordenkainen's Tome of Foes
let tortle = false;				//Tortle Package
let xgte = false;				//Xanathar's Guide to Everything
let toa = false;					//Tomb of Annihilation
let cos = false;					//Curse of Strahd
let oota = false;				//Out of the Abyss

function scagClassesSwitch() {
  if (scagClasses === false) {
  	scagClasses = true;
  } else {
   	scagClasses = false;
  }
}

function scagRacesSwitch() {
  if (scagRaces === false) {
    scagRaces = true;
    race.push('Feral Tiefling');
  } else {
    scagRaces = false;
    for (let scagRaceRemover = race.length-1; scagRaceRemover >= 0; scagRaceRemover--) {
    	if (race[scagRaceRemover] === 'Feral Tiefling') {
    		race.splice(scagRaceRemover, 1);
    	}
    }
  }
}

function scagBackgroundsSwitch() {
  if (scagBackgrounds === false) {
    scagBackgrounds = true;
    background.push('City Watch', 'Clan Crafter', 'Cloistered Scholar', 'Courtier', 'Faction Agent', 'Far Traveler', 'Knight of the Order', 'Mercenary Veteran', 'Urban Bounty Hunter', 'Uthgardt Tribe Member', 'Waterdhavian Noble');
  } else {
    scagBackgrounds = false;
    for (let scagBackgroundRemover = background.length-1; scagBackgroundRemover >= 0; scagBackgroundRemover--) {
    	if (background[scagBackgroundRemover] === 'City Watch') {
    		background.splice(scagBackgroundRemover, 1);
    	} else if (background[scagBackgroundRemover] === 'Clan Crafter') {
    		background.splice(scagBackgroundRemover, 1);
    	} else if (background[scagBackgroundRemover] === 'Cloistered Scholar') {
    		background.splice(scagBackgroundRemover, 1);
    	} else if (background[scagBackgroundRemover] === 'Courtier') {
    		background.splice(scagBackgroundRemover, 1);
    	} else if (background[scagBackgroundRemover] === 'Faction Agent') {
    		background.splice(scagBackgroundRemover, 1);
    	} else if (background[scagBackgroundRemover] === 'Far Traveler') {
    		background.splice(scagBackgroundRemover, 1);
    	} else if (background[scagBackgroundRemover] === 'Knight of the Order') {
    		background.splice(scagBackgroundRemover, 1);
    	} else if (background[scagBackgroundRemover] === 'Mercenary Veteran') {
    		background.splice(scagBackgroundRemover, 1);
    	} else if (background[scagBackgroundRemover] === 'Urban Bounty Hunter') {
    		background.splice(scagBackgroundRemover, 1);
    	} else if (background[scagBackgroundRemover] === 'Uthgardt Tribe Member') {
    		background.splice(scagBackgroundRemover, 1);
    	} else if (background[scagBackgroundRemover] === 'Waterdhavian Noble') {
    		background.splice(scagBackgroundRemover, 1);
    	} else {

    	}
    }
  }
}

function eeRacesSwitch() {
  if (eeRaces === false) {
   	eeRaces = true;
   	race.push('Aarakocra', 'Genasi', 'Goliath');
  } else {
   	eeRaces = false;
   	for (let eeRaceRemover = race.length-1; eeRaceRemover >= 0; eeRaceRemover--) {
    	if (race[eeRaceRemover] === 'Aarakocra') {
    		race.splice(eeRaceRemover, 1);
    	} else if (race[eeRaceRemover] === 'Genasi') {
    		race.splice(eeRaceRemover, 1);
    	} else if (race[eeRaceRemover] === 'Goliath') {
    		race.splice(eeRaceRemover, 1);
    	} else {

    	}
	}
  }
}

function eeBackgroundsSwitch() {
  if (eeBackgrounds === false) {
    eeBackgrounds = true;
    background.push('Caravan Specialist', 'Earthspur Miner', 'Harbourfolk', 'Inheritor', 'Mulmaster Aristocrat', 'Phlan Refugee');
  } else {
    eeBackgrounds = false;
    for (let eeBackgroundRemover = background.length-1; eeBackgroundRemover >= 0; eeBackgroundRemover--) {
    	if (background[eeBackgroundRemover] === 'Caravan Specialist') {
    		background.splice(eeBackgroundRemover, 1);
    	} else if (background[eeBackgroundRemover] === 'Earthspur Miner') {
    		background.splice(eeBackgroundRemover, 1);
    	} else if (background[eeBackgroundRemover] === 'Harbourfolk') {
    		background.splice(eeBackgroundRemover, 1);
    	} else if (background[eeBackgroundRemover] === 'Inheritor') {
    		background.splice(eeBackgroundRemover, 1);
    	} else if (background[eeBackgroundRemover] === 'Mulmaster Aristocrat') {
    		background.splice(eeBackgroundRemover, 1);
    	} else if (background[eeBackgroundRemover] === 'Phlan Refugee') {
    		background.splice(eeBackgroundRemover, 1);
    	} else {

    	}	
	}
  }
}

function volosSwitch() {
  if (volos === false) {
    volos = true;
    race.push('Aasimar', 'Bug Bear', 'Firbolg', 'Goblin', 'Hobgoblin', 'Kenku', 'Kobold', 'Lizardfolk', 'Orc', 'Tabaxi', 'Triton', 'Yuan-ti Pureblood');
  } else {
    volos = false;
    for (let volosRemover = race.length-1; volosRemover >= 0; volosRemover--) {
    	if (race[volosRemover] === 'Aasimar') {
    		race.splice(volosRemover, 1);
    	} else if (race[volosRemover] === 'Bug Bear') {
    		race.splice(volosRemover, 1);
    	} else if (race[volosRemover] === 'Firbolg') {
    		race.splice(volosRemover, 1);
    	} else if (race[volosRemover] === 'Goblin') {
    		race.splice(volosRemover, 1);
    	} else if (race[volosRemover] === 'Hobgoblin') {
    		race.splice(volosRemover, 1);
    	} else if (race[volosRemover] === 'Kenku') {
    		race.splice(volosRemover, 1);
    	} else if (race[volosRemover] === 'Kobold') {
    		race.splice(volosRemover, 1);
    	} else if (race[volosRemover] === 'Lizardfolk') {
    		race.splice(volosRemover, 1);
    	} else if (race[volosRemover] === 'Orc') {
    		race.splice(volosRemover, 1);
    	} else if (race[volosRemover] === 'Tabaxi') {
    		race.splice(volosRemover, 1);
    	} else if (race[volosRemover] === 'Triton') {
    		race.splice(volosRemover, 1);
    	} else if (race[volosRemover] === 'Yuan-ti Pureblood') {
    		race.splice(volosRemover, 1);
    	} else {

    	}
	}
  }
}

function uaSwitch() {
  if (ua === false) {
   	ua = true;
   	race.push('Centaur', 'Minotaur');
  } else {
   	ua = false;
   	for (let uaRaceRemover = race.length-1; uaRaceRemover >= 0; uaRaceRemover--) {
    	if (race[uaRaceRemover] === 'Centaur') {
    		race.splice(uaRaceRemover, 1);
    	} else if (race[uaRaceRemover] === 'Minotaur') {
    		race.splice(uaRaceRemover, 1);
    	} else {

    	}
	}
  }
}
	
function mtofSwitch() {
  if (mtof === false) {
    mtof = true;
    race.push('Gith');
  } else {
    mtof = false;
    for (let mtofRemover = race.length-1; mtofRemover >= 0; mtofRemover--) {
    	if (race[mtofRemover] === 'Gith') {
    		race.splice(mtofRemover, 1);
    	}
	}
  }
}

function tortleSwitch() {
  if (tortle === false) {
    tortle = true;
    race.push('Tortle');
  } else {
    tortle = false;
    for (let tortleRemover = race.length-1; tortleRemover >= 0; tortleRemover--) {
    	if (race[tortleRemover] === 'Tortle') {
    		race.splice(tortleRemover, 1);
    	}
	}
  }
}

function xgteSwitch() {
  if (xgte === false) {
    xgte = true;
  } else {
    xgte = false;
  }
}

function toaSwitch() {
  if (toa === false) {
    toa = true;
    background.push('Anthropologist', 'Archaeologist');
  } else {
    toa = false;
    for (let toaRemover = background.length-1; toaRemover >= 0; toaRemover--) {
    	if (background[toaRemover] === 'Anthropologist') {
    		background.splice(toaRemover, 1);
    	} else if (background[toaRemover] === 'Archaeologist') {
    		background.splice(toaRemover, 1);
    	} else {

    	}
	}
  }
}

function cosSwitch() {
  if (cos === false) {
    cos = true;
    background.push('Black Fist Double Agent', 'Dragon Casualty', 'Haunted One', 'Iron Route Bandit', 'Phlan Insurgent', 'Stojanow Prisoner', 'Ticklebelly Nomad');
  } else {
   	cos = false;
   	for (let cosRemover = background.length-1; cosRemover >= 0; cosRemover--) {
    	if (background[cosRemover] === 'Black Fist Double Agent') {
    		background.splice(cosRemover, 1);
    	} else if (background[cosRemover] === 'Dragon Casualty') {
    		background.splice(cosRemover, 1);
    	} else if (background[cosRemover] === 'Haunted One') {
    		background.splice(cosRemover, 1);
    	} else if (background[cosRemover] === 'Iron Route Bandit') {
    		background.splice(cosRemover, 1);
    	} else if (background[cosRemover] === 'Phlan Insurgent') {
    		background.splice(cosRemover, 1);
    	} else if (background[cosRemover] === 'Stojanow Prisoner') {
    		background.splice(cosRemover, 1);
    	} else if (background[cosRemover] === 'Ticklebelly Nomad') {
    		background.splice(cosRemover, 1);
    	} else {

    	}
	}
  }
}

function ootaSwitch() {
  if (oota === false) {
    oota = true;
    background.push('Cormathor Refugee', 'Gate Urchin', 'Hillsfar Merchant', 'Hillsfar Smuggler', 'Secret Identity', 'Shade Fanatic', 'Trade Sheriff');
  } else {
    oota = false;
    for (let ootaRemover = background.length-1; ootaRemover >= 0; ootaRemover--) {
    	if (background[ootaRemover] === 'Cormathor Refugee') {
    		background.splice(ootaRemover, 1);
    	} else if (background[ootaRemover] === 'Gate Urchin') {
    		background.splice(ootaRemover, 1);
    	} else if (background[ootaRemover] === 'Hillsfar Merchant') {
    		background.splice(ootaRemover, 1);
    	} else if (background[ootaRemover] === 'Hillsfar Smuggler') {
    		background.splice(ootaRemover, 1);
    	} else if (background[ootaRemover] === 'Secret Identity') {
    		background.splice(ootaRemover, 1);
    	} else if (background[ootaRemover] === 'Shade Fanatic') {
    		background.splice(ootaRemover, 1);
    	} else if (background[ootaRemover] === 'Trade Sheriff') {
    		background.splice(ootaRemover, 1);
    	} else {

    	}
	}
  }
}


// Race Randomiser
function randomRace() {
	let raceRandomiser = race[Math.floor(Math.random() * race.length)];

	if (raceRandomiser === 'Aarakocra') {
		raceResult = 'Aarakocra';
	} 

	else if (raceRandomiser === 'Aasimar') {
		const aasimarSubraces = ['Protector Aasimar', 'Scourge Aasimar', 'Fallen Aasimar'];
		let aasimarRandomiser = aasimarSubraces[Math.floor(Math.random() * aasimarSubraces.length)];
 		raceResult = (aasimarRandomiser);
	}

	else if (raceRandomiser === 'Bug Bear') {
		raceResult = 'Bug Bear';
	}

	else if (raceRandomiser === 'Centaur') {
		raceResult = 'Centaur';
	}

	else if (raceRandomiser === 'Dragonborn') {
		raceResult = 'Dragonborn';
	}

	else if (raceRandomiser === 'Dwarf') {
		const dwarfSubraces = ['Hill Dwarf', 'Mountain Dwarf'];
		if (scagRaces === true) {
			dwarfSubraces.push('Duergar');
		}
		let dwarfRandomiser = dwarfSubraces[Math.floor(Math.random() * dwarfSubraces.length)];
 		raceResult = (dwarfRandomiser);
	}

	else if (raceRandomiser === 'Elf') {
		const elfSubraces = ['High Elf', 'Wood Elf', 'Drow'];
		if (mtof === true) {
			elfSubraces.push('Eladrin', 'Sea Elf', 'Shadar-Kai');
		}
		let elfRandomiser = elfSubraces[Math.floor(Math.random() * elfSubraces.length)];
 		raceResult = (elfRandomiser);
	}

	else if (raceRandomiser === 'Feral Tiefling') {
		raceResult = 'Feral Tiefling';
	}

	else if (raceRandomiser === 'Firbolg') {
		raceResult = 'Firbolg';
	}

	else if (raceRandomiser === 'Genasi') {
		const genasiSubraces = ['Air Genasi', 'Earth Genasi', 'Fire Genasi', 'Water Genasi'];
		let genasiRandomiser = genasiSubraces[Math.floor(Math.random() * genasiSubraces.length)];
 		raceResult = (genasiRandomiser);
	}

	else if (raceRandomiser === 'Gith') {
		const githSubraces = ['Githyanki', 'Githzerai'];
		let githRandomiser = githSubraces[Math.floor(Math.random() * githSubraces.length)];
	 	raceResult = (githRandomiser);
	}

	else if (raceRandomiser === 'Gnome') {
		const gnomeSubraces = ['Forest Gnome', 'Rock Gnome'];
		if (eeRaces === true) {
			gnomeSubraces.push('Deep Gnome');
		}
		let gnomeRandomiser = gnomeSubraces[Math.floor(Math.random() * gnomeSubraces.length)];
 		raceResult = (gnomeRandomiser);
	}

	else if (raceRandomiser === 'Goblin') {
		raceResult = 'Goblin';
	}

	else if (raceRandomiser === 'Goliath') {
		raceResult = 'Goliath';
	}

	else if (raceRandomiser === 'Half-Elf') {
		raceResult = 'Half-Elf';
	}

	else if (raceRandomiser === 'Halfling') {
		const halflingSubraces = ['Lightfoot Halfling', 'Stout Halfling'];
		let halflingRandomiser = halflingSubraces[Math.floor(Math.random() * halflingSubraces.length)];
 		raceResult = (halflingRandomiser);
	}

	else if (raceRandomiser === 'Half-Orc') {
		raceResult = 'Half-Orc';
	}

	else if (raceRandomiser === 'Hobgoblin') {
		raceResult = 'Hobgoblin';
	}

	else if (raceRandomiser === 'Human') {
		raceResult = 'Human';
	}

	else if (raceRandomiser === 'Kenku') {
		raceResult = 'Kenku';
	}

	else if (raceRandomiser === 'Kobold') {
		raceResult = 'Kobold';
	}

	else if (raceRandomiser === 'Lizardfolk') {
		raceResult = 'Lizardfolk';
	}

	else if (raceRandomiser === 'Minotaur') {
		raceResult = 'Minotaur';
	}

	else if (raceRandomiser === 'Orc') {
		raceResult = 'Orc';
	}

	else if (raceRandomiser === 'Tabaxi') {
		raceResult = 'Tabaxi';
	}

	else if (raceRandomiser === 'Tiefling') {
		raceResult = 'Tiefling';
	}

	else if (raceRandomiser === 'Tortle') {
		raceResult = 'Tortle';
	}

	else if (raceRandomiser === 'Triton') {
		raceResult = 'Triton';
	}

	else if (raceRandomiser === 'Yuan-ti Pureblood') {
		raceResult = 'Yuan-ti Pureblood';
	}

	else {
		raceResult = 'Race: Error!';	
	}

	document.getElementById("raceResult").innerHTML = (raceResult);
}


//Class Randomiser
function randomClass() {
	let classRandomiser = charClass[Math.floor(Math.random() * charClass.length)];
	
	if (classRandomiser === 'Barbarian') {
		let barbarianSubclasses = ['Barbarian: Path of the Berserker','Barbarian: Path of the Totem Warrior'];
		if (scagClasses === true) {
			barbarianSubclasses.push('Barbarian: Path of the Battlerager');
		}
		if (xgte === true) {
			barbarianSubclasses.push('Barbarian: Path of the Ancestral Guardian', 'Barbarian: Path of the Storm Herald', 'Barbarian: Path of the Zealot');
		}
		let barbRandomiser = barbarianSubclasses[Math.floor(Math.random() * barbarianSubclasses.length)];
		classResult = (barbRandomiser);
	}

	else if (classRandomiser === 'Bard') {
		let bardSubclasses = ['Bard: College of Lore', 'Bard: College of Valor'];
		if (xgte === true) {
			bardSubclasses.push('Bard: College of Glamour', 'Bard: College of Swords', 'Bard: College of Whispers');
		}
		if (ua === true) {
			bardSubclasses.push('Bard: College of Satire');
		}
		let bardRandomiser = bardSubclasses[Math.floor(Math.random() * bardSubclasses.length)];
		classResult = (bardRandomiser);
	}

	else if (classRandomiser === 'Blood Hunter') {
		let bloodhunterSubclasses = ['Blood Hunter: Order of the Ghostslayer', 'Blood Hunter: Order of the Lycan', 'Blood Hunter: Order of the Mutant', 'Blood Hunter: Order of the Profane Soul'];
		let bloodhunterRandomiser = bloodhunterSubclasses[Math.floor(Math.random() * bloodhunterSubclasses.length)];
		classResult = (bloodhunterRandomiser);
	}

	else if (classRandomiser === 'Cleric') {
		let clericSubclasses = ['Cleric: Knowledge Domain', 'Cleric: Life Domain', 'Cleric: Light Domain', 'Cleric: Nature Domain', 'Cleric: Tempest Domain', 'Cleric: Trickery Domain', 'Cleric: War Domain'];
		if (scagClasses === true) {
			clericSubclasses.push('Cleric: Arcana Domain');
		}
		if (xgte === true) {
			clericSubclasses.push('Cleric: Forge Domain', 'Cleric: Grave Domain');
		}
		if (ua === true) {
			clericSubclasses.push('Cleric: City Domain', 'Cleric: Order Domain', 'Cleric: Protection Domain');
		}
		let clericRandomiser = clericSubclasses[Math.floor(Math.random() * clericSubclasses.length)];
		classResult = (clericRandomiser);
	}
	
	else if (classRandomiser === 'Druid') {
		let druidSubclasses = ['Druid: Circle of Land', 'Druid: Circle of the Moon'];
		if (xgte === true) {
			druidSubclasses.push('Druid: Circle of Dreams', 'Druid: Circle of the Shepherd');
		}
		if (ua === true) {
			druidSubclasses.push('Druid: Circle of Spores', 'Druid: Circle of Twilight');
		}
		let druidRandomiser = druidSubclasses[Math.floor(Math.random() * druidSubclasses.length)];
		classResult = (druidRandomiser);
	}

	else if (classRandomiser === 'Fighter') {
		let fighterSubclasses = ['Fighter: Battle Master', 'Fighter: Champion', 'Fighter: Eldritch Knight'];
		if (scagClasses === true) {
			fighterSubclasses.push('Fighter: Purple Dragon Knight');
		}
		if (xgte === true) {
			fighterSubclasses.push('Fighter: Arcane Archer', 'Fighter: Cavalier', 'Fighter: Samurai');
		}
		if (ua === true) {
			fighterSubclasses.push('Fighter: Brute', 'Fighter: Monster Hunter', 'Fighter: Scout', 'Fighter: Sharpshooter');
		}
		let fighterRandomiser = fighterSubclasses[Math.floor(Math.random() * fighterSubclasses.length)];
		classResult = (fighterRandomiser);
	}
	
	else if (classRandomiser === 'Monk') {
		let monkSubclasses = ['Monk: Way of the Four Elements', 'Monk: Way of the Open Hand', 'Monk: Way of Shadow'];
		if (scagClasses === true) {
			monkSubclasses.push('Monk: Way of the Long Death');
		}
		if (xgte === true) {
			monkSubclasses.push('Monk: Way of the Drunken Master', 'Monk: Way of the Kensei', 'Monk: Way of the Sun Soul');
		}
		if (ua === true) {
			monkSubclasses.push('Monk: Way of Tranquility');
		}
		let monkRandomiser = monkSubclasses[Math.floor(Math.random() * monkSubclasses.length)];
		classResult = (monkRandomiser);
	}
	
	else if (classRandomiser === 'Paladin') {
		let paladinSubclasses = ['Paladin: Oath of the Ancients', 'Paladin: Oath of Devotion', 'Paladin: Oath of Vengeance'];
		if (scagClasses === true) {
			paladinSubclasses.push('Paladin: Oath of the Crown');
		}
		if (xgte === true) {
			paladinSubclasses.push('Paladin: Oath of Conquest', 'Paladin: Oath of Redemption');
		}
		let paladinRandomiser = paladinSubclasses[Math.floor(Math.random() * paladinSubclasses.length)];
		classResult = (paladinRandomiser);
	}
	
	else if (classRandomiser === 'Ranger') {
		let rangerSubclasses = ['Ranger: Beast Master', 'Ranger: Hunter'];
		if (xgte === true) {
			rangerSubclasses.push('Ranger: Gloom Stalker', 'Ranger: Horizon Walker', 'Ranger: Monster Slayer');
		}
		if (ua === true) {
			rangerSubclasses.push('Ranger: Primeval Guardian');
		}
		let rangerRandomiser = rangerSubclasses[Math.floor(Math.random() * rangerSubclasses.length)];
		classResult = (rangerRandomiser);
	}
	
	else if (classRandomiser === 'Rogue') {
		let rogueSubclasses = ['Rogue: Arcane Trickster', 'Rogue: Assassin', 'Rogue: Thief'];
		if (xgte === true) {
			rogueSubclasses.push('Rogue: Mastermind', 'Rogue: Scout', 'Rogue: Swashbuckler');
		}
		if (ua === true) {
			rogueSubclasses.push('Rogue: Inquisitive');
		}
		let rogueRandomiser = rogueSubclasses[Math.floor(Math.random() * rogueSubclasses.length)];
		classResult = (rogueRandomiser);
	}
	
	else if (classRandomiser === 'Sorcerer') {
		let sorcererSubclasses = ['Sorcerer: Draconic Bloodline', 'Sorcerer: Wild Magic'];
		if (xgte === true) {
			sorcererSubclasses.push('Sorcerer: Divine Soul', 'Sorcerer: Shadow Magic', 'Sorcerer: Storm');
		}
		if (ua === true) {
			sorcererSubclasses.push('Sorcerer: Phoenix', 'Sorcerer: Sea', 'Sorcerer: Stone');
		}
		let sorcererRandomiser = sorcererSubclasses[Math.floor(Math.random() * sorcererSubclasses.length)];
		classResult = (sorcererRandomiser);
	}
	
	else if (classRandomiser === 'Warlock') {
		let warlockSubclasses = ['Warlock: The Archfey', 'Warlock: The Fiend', 'Warlock: The Great Old One'];
		if (scagClasses === true) {
			warlockSubclasses.push('Warlock: The Undying');
		}	
		if (xgte === true) {
			warlockSubclasses.push('Warlock: The Celestial', 'Warlock: The Hexblade');
		}
		if (ua === true) {
			warlockSubclasses.push('Warlock: The Ghost in the Machine', 'Warlock: The Raven Queen', 'Warlock: The Seeker');
		}
		let warlockRandomiser = warlockSubclasses[Math.floor(Math.random() * warlockSubclasses.length)];
		classResult = (warlockRandomiser);
	}
	
	else if (classRandomiser === 'Wizard') {
		let wizardSubclasses = ['Wizard: School of Abjuration', 'Wizard: School of Conjuration', 'Wizard: School of Divination', 'Wizard: School of Enchantment', 'Wizard: School of Evocation', 'Wizard: School of Illusion', 'Wizard: School of Necromancy', 'Wizard: School of Transmutation'];
		if (scagClasses === true) {
			wizardSubclasses.push('Wizard: Bladesinging');
		}
		if (xgte === true) {
			wizardSubclasses.push('Wizard: War Magic');
		}
		if (ua === true) {
			wizardSubclasses.push('Wizard: Artificer', 'Wizard: Lore Master', 'Wizard: School of Invention', 'Wizard: Technomancy', 'Wizard: Theurgy');
		}
		let wizardRandomiser = wizardSubclasses[Math.floor(Math.random() * wizardSubclasses.length)];
		classResult = (wizardRandomiser);
	}	
	
	else {
		classResult = 'Class: Error!';
	}

	document.getElementById("classResult").innerHTML = (classResult);
}


// Background
function randomBackground() {
	let backgroundRandomiser = background[Math.floor(Math.random() * background.length)];

	if (backgroundRandomiser === 'Acolyte') {
		backgroundResult = 'Acolyte';
	} 

	else if (backgroundRandomiser === 'Anthropologist') {
		backgroundResult = 'Anthropologist';
	} 

	else if (backgroundRandomiser === 'Archaeologist') {
		backgroundResult = 'Archaeologist';
	} 

	else if (backgroundRandomiser === 'Black Fist Double Agent') {
		backgroundResult = 'Black Fist Double Agent';
	}

	else if (backgroundRandomiser === 'Caravan Specialist') {
		backgroundResult = 'Caravan Specialist';
	}

	else if (backgroundRandomiser === 'Charlatan') {
		backgroundResult = 'Charlatan';
	}

	else if (backgroundRandomiser === 'City Watch') {
		const cwVariants = ['City Watch', 'Investigator'];
		let cwRandomiser = cwVariants[Math.floor(Math.random() * cwVariants.length)];
 		backgroundResult = (cwRandomiser);
	}

	else if (backgroundRandomiser === 'Clan Crafter') {
		backgroundResult = 'Clan Crafter';
	}

	else if (backgroundRandomiser === 'Cloistered Scholar') {
		backgroundResult = 'Cloistered Scholar';
	}

	else if (backgroundRandomiser === 'Cormathor Refugee') {
		backgroundResult = 'Cormathor Refugee';
	}

	else if (backgroundRandomiser === 'Courtier') {
		backgroundResult = 'Courtier';
	}

	else if (backgroundRandomiser === 'Criminal') {
		const criminalVariants = ['Criminal', 'Spy'];
		let criminalRandomiser = criminalVariants[Math.floor(Math.random() * criminalVariants.length)];
	 	backgroundResult = (criminalRandomiser);
	}

	else if (backgroundRandomiser === 'Dragon Casualty') {
		backgroundResult = 'Dragon Casualty';
	}

	else if (backgroundRandomiser === 'Earthspur Miner') {
		backgroundResult = 'Earthspur Miner';
	}

	else if (backgroundRandomiser === 'Entertainer') {
		const entertainerVariants = ['Entertainer', 'Gladiator'];
		let entertainerRandomiser = entertainerVariants[Math.floor(Math.random() * entertainerVariants.length)];
 		backgroundResult = (entertainerRandomiser);
	}

	else if (backgroundRandomiser === 'Faction Agent') {
		backgroundResult = 'Faction Agent';
	}

	else if (backgroundRandomiser === 'Far Traveler') {
		backgroundResult = 'Far Traveler';
	}

	else if (backgroundRandomiser === 'Folk Hero') {
		backgroundResult = 'Folk Hero';
	}

	else if (backgroundRandomiser === 'Gate Urchin') {
		backgroundResult = 'Gate Urchin';
	}

	else if (backgroundRandomiser === 'Guild Artisan') {
		const gaVariants = ['Guild Artisan', 'Guild Merchant'];
		let gaRandomiser = gaVariants[Math.floor(Math.random() * gaVariants.length)];
		 	backgroundResult = (gaRandomiser);
	}

	else if (backgroundRandomiser === 'Harbourfolk') {
		backgroundResult = 'Harbourfolk';
	}

	else if (backgroundRandomiser === 'Haunted One') {
		backgroundResult = 'Haunted One';
	}

	else if (backgroundRandomiser === 'Hermit') {
		backgroundResult = 'Hermit';
	}

	else if (backgroundRandomiser === 'Hillsfar Merchant') {
		backgroundResult = 'Hillsfar Merchant';
	}

	else if (backgroundRandomiser === 'Hillsfar Smuggler') {
		backgroundResult = 'Hillsfar Smuggler';
	}

	else if (backgroundRandomiser === 'Inheritor') {
		backgroundResult = 'Inheritor';
	}

	else if (backgroundRandomiser === 'Iron Route Bandit') {
		backgroundResult = 'Iron Route Bandit';
	}

	else if (backgroundRandomiser === 'Knight of the Order') {
		backgroundResult = 'Knight of the Order';
	}

	else if (backgroundRandomiser === 'Mercenary Veteran') {
		backgroundResult = 'Mercenary Veteran';
	}

	else if (backgroundRandomiser === 'Mulmaster Aristocrat') {
		backgroundResult = 'Mulmaster Aristocrat';
	}

	else if (backgroundRandomiser === 'Noble') {
		const nobleVariants = ['Noble', 'Knight'];
		let nobleRandomiser = nobleVariants[Math.floor(Math.random() * nobleVariants.length)];
	 	backgroundResult = (nobleRandomiser);
	}

	else if (backgroundRandomiser === 'Outlander') {
		backgroundResult = 'Outlander';
	}

	else if (backgroundRandomiser === 'Phlan Insurgent') {
		backgroundResult = 'Phlan Insurgent';
	}

	else if (backgroundRandomiser === 'Phlan Refugee') {
		backgroundResult = 'Phlan Refugee';
	}

	else if (backgroundRandomiser === 'Sage') {
		backgroundResult = 'Sage';
	}

	else if (backgroundRandomiser === 'Sailor') {
		const sailorVariants = ['Sailor', 'Pirate'];
		let sailorRandomiser = sailorVariants[Math.floor(Math.random() * sailorVariants.length)];
	 	backgroundResult = (sailorRandomiser);
	}

	else if (backgroundRandomiser === 'Secret Identity') {
		backgroundResult = 'Secret Identity';
	}

	else if (backgroundRandomiser === 'Shade Fanatic') {
		backgroundResult = 'Shade Fanatic';
	}

	else if (backgroundRandomiser === 'Soldier') {
		backgroundResult = 'Soldier';
	}

	else if (backgroundRandomiser === 'Stojanow Prisoner') {
		backgroundResult = 'Stojanow Prisoner';
	}

	else if (backgroundRandomiser === 'Ticklebelly Nomad') {
		backgroundResult = 'Ticklebelly Nomad';
	}

	else if (backgroundRandomiser === 'Trade Sheriff') {
		backgroundResult = 'Trade Sheriff';
	}

	else if (backgroundRandomiser === 'Urban Bounty Hunter') {
		backgroundResult = 'Urban Bounty Hunter';
	}

	else if (backgroundRandomiser === 'Urchin') {
		backgroundResult = 'Urchin';
	}

	else if (backgroundRandomiser === 'Uthgardt Tribe Member') {
		backgroundResult = 'Uthgardt Tribe Member';
	}
	
	else if (backgroundRandomiser === 'Waterdhavian Noble') {
		backgroundResult = 'Waterdhavian Noble';
	}

	else {
		backgroundResult = 'Background: Error!';
	}

	document.getElementById("backgroundResult").innerHTML = (backgroundResult);
}

let rowNumber = 1;

function gen() {
  let table = document.getElementById("prevResults");
  if (rowNumber < 34) {
  let row = table.insertRow(rowNumber);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  cell1.innerHTML = raceResult;
  cell2.innerHTML = classResult;
  cell3.innerHTML = backgroundResult;
  rowNumber++;
  }
}


/* Main Functions */
randomRace();
randomClass();
randomBackground();


/* Expansion Switches */
scagRacesSwitch();
scagClassesSwitch();
scagBackgroundsSwitch();
eeRacesSwitch();
eeBackgroundsSwitch();
volosSwitch();
uaSwitch();
mtofSwitch();
tortleSwitch();
xgteSwitch();
toaSwitch();
cosSwitch();
ootaSwitch();