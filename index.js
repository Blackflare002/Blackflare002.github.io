// global variables initial values
let playing = false;
let hp = 100;
let points = 0;
let room = 1;

// getElementById
let HPtext = document.getElementById("hp");
let pointsText =
	document.getElementById("points");
let choiceButton1 =
	document.getElementById("choice1");
let choiceButton2 =
	document.getElementById("choice2");
let choiceButton3 =
	document.getElementById("choice3");
let choiceButton4 =
	document.getElementById("choice4");
let startButton =
	document.getElementById("start");
let output = document.getElementById("output");
let output2 = document.getElementById("output2");
let output3 = document.getElementById("output3");
let output4 = document.getElementById("output4");
let hpBox = document.getElementById(
	"hp-border-box"
);
let outputBox =
	document.getElementById("outputs");
let special = document.getElementById("special");
let specialBox = document.getElementById(
	"special-box"
);

// initial style.display
HPtext.style.display = "none";
pointsText.style.display = "none";
choiceButton1.style.display = "none";
choiceButton2.style.display = "none";
choiceButton3.style.display = "none";
choiceButton4.style.display = "none";
hpBox.style.display = "none";
outputBox.style.display = "none";
special.style.display = "none";
specialBox.style.display = "none";
choiceButton1.style.margin = 0;

// room functions
const room1 = (hp_el, points_el) => {
	hp = hp_el;
	points = points_el;
	console.log("Room 1.");
	console.log("HP: ", hp);
	console.log("Points: ", points);
	choiceButton1.style.display = "block";
	choiceButton2.style.display = "block";
	choiceButton3.style.display = "block";
	choiceButton4.style.display = "none";
	hpBox.style.display = "block";
	outputBox.style.display = "block";
	special.style.display = "none";
	specialBox.style.display = "none";
	document.body.classList.toggle("image1");
	output.innerText =
		"You have entered the Doom Fortress, and the entrance has sealed shut behind you. There is nothing in this room but dust and a few scattered bones.";
	output2.innerText =
		"Three passages spread out before you. You must choose one.";
	output3.innerText = null;
	output4.innerText = null;
	choiceButton1.innerText =
		"A.  Take the North passage.";
	choiceButton2.innerText =
		"B.  Take the East passage.";
	choiceButton3.innerText =
		"C.  Take the West passage.";
	choiceButton1.onclick = () => {
		room = 5;
		document.body.classList.toggle("image1");
		room5(hp, points);
	};
	choiceButton2.onclick = () => {
		document.body.classList.toggle("image1");
		room = 3;
		room3(hp, points);
	};
	choiceButton3.onclick = () => {
		document.body.classList.toggle("image1");
		room = 2;
		room2(hp, points);
	};
};

const room2 = (hp_el, points_el) => {
	hp = hp_el;
	points = points_el;
	console.log("Room 2.");
	console.log("HP: ", hp);
	console.log("Points: ", points);
	choiceButton3.style.display = "none";
	choiceButton4.style.display = "none";
	document.body.classList.toggle("image2");
	output.innerText =
		"Rats and bugs scurry back to their hiding places as you enter. The floor of this room is covered in bones, and smells of blood.";
	output2.innerText =
		"There is only the North passage available, otherwise you may return to the first room.";
	output3.innerText = null;
	output4.innerText = null;
	choiceButton1.innerText =
		"A.  Take the North passage.";
	choiceButton2.innerText =
		"B.  Return to the entrance (East).";
	choiceButton1.onclick = () => {
		room = 4;
		document.body.classList.toggle("image2");
		room4(hp, points);
	};
	choiceButton2.onclick = () => {
		room = 1;
		document.body.classList.toggle("image2");
		room1(hp, points);
	};
};

const room3 = (hp_el, points_el) => {
	hp = hp_el;
	points = points_el;
	console.log("Room 3");
	console.log("HP: ", hp);
	console.log("Points: ", points);
	document.body.classList.toggle("image3");
	output.innerText =
		"This room is unusually quiet. The dust stirs mysteriously.";
	output2.innerText =
		"There is only the North passage available, otherwise you may return to the first room.";
	output3.innerText = null;
	output4.innerText = null;
	choiceButton1.innerText =
		"A.  Take the North passage.";
	choiceButton2.innerText =
		"B.  Return to the entrance (West).";
	choiceButton1.onclick = () => {
		room6(hp, points);
		document.body.classList.toggle("image3");
	};
	choiceButton2.onclick = () => {
		room1(hp, points);
		document.body.classList.toggle("image3");
	};
};

const room4 = (hp_el, points_el) => {
	hp = hp_el;
	points = points_el;
	console.log("Room 4");
	console.log("HP: ", hp);
	console.log("Points: ", points);
	hp -= 50;
	points = +25;
	console.log("HP now: ", hp);
	console.log("Points now: ", points);
	HPtext.innerText = "HP: " + hp;
	pointsText.innerText = "Points: " + points;
	document.body.classList.toggle("image4");
	if (hp === 0) {
		playing = false;
		output.innerText =
			"A bloodthirsty minotaur inhabits this room! It ambushes you, and you are quickly slain.";
		output2.innerText = "YOU DIED. GAME OVER.";
		output3.innerText =
			"Thanks for playing! Points: " + points;
		output4.innerText = null;
		choiceButton1.style.display = "none";
		choiceButton2.style.display = "none";
		choiceButton3.style.display = "none";
		choiceButton4.style.display = "none";
	} else {
		output.innerText =
			"A bloodthirsty minotaur inhabits this room! After a brutal battle, you manage to escape with your life...";
		output2.innerText =
			"You may go North, East or South.";
		output3.innerText =
			"Be warned: should you return to this room, the minotaur will be waiting for you.";
		output4.innerText = null;
		choiceButton1.style.display = "block";
		choiceButton2.style.display = "block";
		choiceButton3.style.display = "block";
		choiceButton4.style.display = "none";
		choiceButton1.innerText =
			"A.  Take the North passage.";
		choiceButton2.innerText =
			"B.  Take the East passage.";
		choiceButton3.innerText =
			"C.  Take the South passage.";
		choiceButton1.onclick = () => {
			room7(hp, points);
			document.body.classList.toggle("image4");
		};
		choiceButton2.onclick = () => {
			room5(hp, points);
			document.body.classList.toggle("image4");
		};
		choiceButton3.onclick = () => {
			room2(hp, points);
			document.body.classList.toggle("image4");
		};
	}
};
const room5 = (hp_el, points_el) => {
	hp = hp_el;
	points = points_el;
	console.log("Room 5");
	console.log("HP: ", hp);
	console.log("Points: ", points);
	document.body.classList.toggle("image5");
	output.innerText =
		"This room is wide, open and circular in shape. Statues of ancient gods are arrayed around the perimeter.";
	output2.innerText =
		"This is the central chamber. There are passages to the North, South, East and West.";
	output3.innerText = null;
	output4.innerText = null;
	choiceButton1.style.display = "block";
	choiceButton2.style.display = "block";
	choiceButton3.style.display = "block";
	choiceButton4.style.display = "block";
	choiceButton1.innerText =
		"A.  Take the North passage.";
	choiceButton2.innerText =
		"B.  Take the East passage.";
	choiceButton3.innerText =
		"C.  Take the West passage.";
	choiceButton4.innerText =
		"D.  Return to the entrance (South).";
	choiceButton1.onclick = () => {
		room8(hp, points);
		document.body.classList.toggle("image5");
	};
	choiceButton2.onclick = () => {
		room6(hp, points);
		document.body.classList.toggle("image5");
	};
	choiceButton3.onclick = () => {
		room4(hp, points);
		document.body.classList.toggle("image5");
	};
	choiceButton4.onclick = () => {
		room1(hp, points);
		document.body.classList.toggle("image5");
	};
};

const room6 = (hp_el, points_el) => {
	hp = hp_el;
	points = points_el;
	console.log("Room 6");
	console.log("HP: ", hp);
	console.log("Points: ", points);
	hp += 30;
	points += 25;
	console.log("HP now: ", hp);
	console.log("Points now: ", points);
	HPtext.innerText = "HP: " + hp;
	pointsText.innerText = "Points: " + points;
	document.body.classList.toggle("image6");
	output.innerText =
		"This room is inhabited by a colony of friendly fairies. They offer to heal some of your wounds, and tell you that you are close to the exit.";
	output2.innerText =
		"The fairies also warn you that the exit is guarded by an evil spirit that can drain the life from its foes. Be on your guard!";
	output3.innerText =
		"The Northern passage has collapsed and is inaccessible. You may take the West passage or the South passage.";
	output4.innerText = null;
	choiceButton1.style.display = "block";
	choiceButton2.style.display = "block";
	choiceButton3.style.display = "none";
	choiceButton4.style.display = "none";
	choiceButton1.innerText =
		"A.  Take the West passage.";
	choiceButton2.innerText =
		"B.  Take the South passage.";
	choiceButton1.onclick = () => {
		room5(hp, points);
		document.body.classList.toggle("image6");
	};
	choiceButton2.onclick = () => {
		room3(hp, points);
		document.body.classList.toggle("image6");
	};
};

const room7 = (hp_el, points_el) => {
	hp = hp_el;
	points = points_el;
	console.log("Room 7");
	console.log("HP: ", hp);
	console.log("Points: ", points);
	points += 10;
	console.log("Points now: ", points);
	HPtext.innerText = "HP: " + hp;
	pointsText.innerText = "Points: " + points;
	document.body.classList.toggle("image7");
	output.innerText =
		"This room is littered with the skeletal remains of others who had tried to conquer the Doom Fortress before you. Clutched in the hand of one of these skeletons is a tattered note.";
	output2.innerText =
		"'My party and I managed to weaken the evil spirit that guards the exit, though I fear it has cost us our lives. Now, instead of instantly killing anyone who crosses its path, it deals 75 damage instead! There is hope for a healthy adventurer!'";
	output2.style.fontStyle = "italic";
	output3.innerText = null;
	output4.innerText = null;
	choiceButton1.style.display = "block";
	choiceButton2.style.display = "block";
	choiceButton3.style.display = "none";
	choiceButton4.style.display = "none";
	choiceButton1.innerText =
		"A.  Take the East passage.";
	choiceButton2.innerText =
		"B.  Take the South passage.";
	choiceButton1.onclick = () => {
		room8(hp, points);
		output2.style.fontStyle = "normal";
		document.body.classList.toggle("image7");
	};
	choiceButton2.onclick = () => {
		room4(hp, points);
		output2.style.fontStyle = "normal";
		document.body.classList.toggle("image7");
	};
};

const room8 = (hp_el, points_el) => {
	hp = hp_el;
	points = points_el;
	console.log("Room 8");
	console.log("HP: ", hp);
	console.log("Points: ", points);
	document.body.classList.toggle("image8");
	output.innerText =
		"This room is freezing cold, and filled with an ominous black mist. You sense an evil presence to the East, one that fills you with dread!";
	output2.innerText = null;
	output3.innerText = null;
	output4.innerText = null;
	choiceButton1.style.display = "block";
	choiceButton2.style.display = "block";
	choiceButton3.style.display = "block";
	choiceButton4.style.display = "none";
	choiceButton1.innerText =
		"A.  Advance! Gather your courage and take the East passage!";
	choiceButton2.innerText =
		"B.  Take the West passage.";
	choiceButton3.innerText =
		"C.  Take the South passage.";
	choiceButton1.onclick = () => {
		finalChoice();
	};
	choiceButton2.onclick = () => {
		room7(hp, points);
		document.body.classList.toggle("image8");
	};
	choiceButton3.onclick = () => {
		room5(hp, points);
		document.body.classList.toggle("image8");
	};
};

const finalChoice = () => {
	output.innerText =
		"ARE YOU SURE YOU ARE READY FOR THIS?";
	output.style.fontWeight = "bold";
	output.style.color = "red";
	output2.innerText = null;
	output3.innerText = null;
	output4.innerText = null;
	choiceButton1.style.display = "block";
	choiceButton2.style.display = "block";
	choiceButton3.style.display = "none";
	choiceButton4.style.display = "none";
	choiceButton1.innerText = "YES";
	choiceButton2.innerText = "NO";
	choiceButton1.onclick = () => {
		room9(hp, points);
		output.style.fontWeight = "normal";
		output.style.color = "inherit";
		document.body.classList.toggle("image8");
	};
	choiceButton2.onclick = () => {
		room8(hp, points);
		output.style.fontWeight = "normal";
		output.style.color = "inherit";
	};
};

const room9 = (hp_el, points_el) => {
	hp = hp_el;
	points = points_el;
	console.log("Room 9");
	console.log("HP: ", hp);
	console.log("Points: ", points);
	hp -= 75;
	console.log("HP now: ", hp);
	HPtext.innerText = "HP: " + hp;
	pointsText.innerText = "Points: " + points;
	document.body.classList.toggle("image9");
	output.innerText =
		"This room is haunted by a powerful evil spirit! Before you can react, it has enveloped you in its cold, black mist and sunk its spectral fangs into your flesh!";
	if (hp > 0) {
		output2.innerText =
			"Although you are injured, you stand triumphant against the spirit, banishing it from this realm with the sheer force of your will! You climb through the exit and emerge into the sunlight, having conquered the dreaded Doom Fortress!";
		output3.innerText = null;
		output4.innerText = null;
		choiceButton1.style.display = "block";
		choiceButton2.style.display = "none";
		choiceButton3.style.display = "none";
		choiceButton4.style.display = "none";
		special.style.display = "block";
		special.innerText = `CONGRATULATIONS! YOU WIN! Points: ${points}.`;
		choiceButton1.innerText = "Restart";
		playing = false;
		choiceButton1.onclick = () => {
			room1((hp = 0), (points = 0));
			HPtext.innerText = "HP: " + hp;
			pointsText.innerText = "Points: " + points;
			document.body.classList.toggle("image9");
		};
	} else {
		output2.innerText =
			"You are too weak! You collapse to the ground as your vision fades, and you feel an unnatural cold seep into your bones! The spirit drains all of your life energy, and you die!";
		output3.innerText = "YOU DIED. GAME OVER.";
		output4.innerText = `Thanks for playing! Points: ${points}.`;
		choiceButton1.style.display = "block";
		choiceButton2.style.display = "none";
		choiceButton3.style.display = "none";
		choiceButton4.style.display = "none";
		choiceButton1.innerText = "Restart";
		choiceButton1.style.margin = 0;
		playing = false;
		choiceButton1.onclick = () => {
			room1((hp = 0), (points = 0));
			HPtext.innerText = "HP: " + hp;
			pointsText.innerText = "Points: " + points;
			document.body.classList.toggle("image9");
		};
	}
};

// Program start
startButton.onclick = () => {
	playing = true;
	HPtext.innerText = "HP: " + hp;
	pointsText.innerText = "Points: " + points;
	startButton.style.display = "none";
	HPtext.style.display = "block";
	pointsText.style.display = "block";
	room1(hp, points);
	console.log("Start button.");
};
