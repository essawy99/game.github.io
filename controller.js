/* A set of functions called by buttons in the UI 
   to build new levels and move between different
   areas in the UI */

// set of functions required to set up paper.js
paper.install(window);
var canvas = document.getElementById('myCanvas');
paper.setup(canvas);

//---------------Save game functions----------------// 

// A function that stores game data in local storage
function store(lvl){
   // Delete most recent level to update it to new one
   localStorage.removeItem('recent_lvl');
   // Store latest level
   localStorage.setItem('recent_lvl',lvl);
}
// A function that loads and returns game's local storage
function load_local(){
   // Load local storage
   var storage = localStorage.getItem('recent_lvl'); 
	return storage;
}

// A function that deletes all game data
function delete_all(){
   localStorage.clear();
}

//----------------------------------------------// 

// required for mouse/keyboard interaction
var tools = new Tool();

/*
   TODO (DHEVA): Function should call your function
   to show the campaign home.
   Level is passed in as the highest level user has
   completed */
   
var game;

function start_home(){
  game = new Game("home", 6);
  
}
//-------------------------------------------
function endHome() {

  game.endGame();
  document.getElementById("homeMenu").style.display = "none";
  document.getElementById("campaignLevelSelector").style.display = "none";
  document.getElementById("survivalDifSelector").style.display = "none";
  document.getElementById('scoreDisplay').innerHTML = "Score: ";
  document.getElementById('moneyDisplay').textContent = "Money: ";
}	

//---------------Campaign Menu functions----------------//
let lvlSelect = 1;
let unlocked = load_local();
if(unlocked == null) { unlocked = 1; } //TEMP FIX- REMOVE LATER
function campaignMenu() {
	document.getElementById("homeMenu").style.display = 'none';
	document.getElementById("campaignLevelSelector").style.display = 'block';
}

function left() {
	if(lvlSelect > 1) {
		document.getElementById("lvl").innerHTML = 'Level '+(--lvlSelect)+"<br><br>NUM ships";
		
		if(lvlSelect <= unlocked && document.getElementById("campaignStart").disabled) {
			document.getElementById("campaignStart").disabled = false;
			document.getElementById("campaignStart").style.backgroundColor = "#d63d22";
		}
	}
}

function right() {
	document.getElementById("lvl").innerHTML = 'Level '+(++lvlSelect)+"<br><br>NUM ships";
	
	if(lvlSelect > unlocked && !document.getElementById("campaignStart").disabled) {
		document.getElementById("campaignStart").disabled = true;
		document.getElementById("campaignStart").style.backgroundColor = "grey";
	}
}
//------------------------------------------------------
function backMenu() {
	document.getElementById("campaignLevelSelector").style.display = 'none';
	document.getElementById("survivalDifSelector").style.display = 'none';
	document.getElementById("homeMenu").style.display = 'block';
}
//---------------Survival Menu functions----------------// 
function survivalMenu() {
	document.getElementById("homeMenu").style.display = 'none';
	document.getElementById("survivalDifSelector").style.display = 'block';
}

function leftS() {
	let txt = document.getElementById("dif").innerHTML;
	console.log(txt);
	if(txt == 'easy') {
		document.getElementById("dif").innerHTML = 'hard';
	} else if(txt == 'medium') {
		document.getElementById("dif").innerHTML = 'easy';
	} else {
		document.getElementById("dif").innerHTML = 'medium';
	}
	dif = document.getElementById("dif").innerHTML;
}

function rightS() {
	let txt = document.getElementById("dif").innerHTML;
	if(txt == 'easy') {
		document.getElementById("dif").innerHTML = 'medium';
	} else if(txt == 'medium') {
		document.getElementById("dif").innerHTML = 'hard';
	} else {
		document.getElementById("dif").innerHTML = 'easy';
	}
}
//------------------------------------------------------

function campaign(level){
   // Remove home first
   endHome();

   console.log('made it');

   //Setup game screen
   game_screen();

   difficulty = load_local();

   //Start Game
   if(difficulty != null){
      game = new Game("campaign",difficulty)
   }else{
      game = new Game("campaign",1)
   }

}

/*
   TODO (DHEVA): Function should call your function
   to show the survival home */


function survival(diff){
   // Remove home first
    endHome();
   
   //Setup game screen
   game_screen();


   difficulty = "easy";
   //Start Game
   
   game = new Game("survival",diff); //changed "medium" to variable diff for input difficulty
}






// Function that sets up game screen
function game_screen(){
	document.getElementById("start").style.display = 'none';
	document.getElementById("option").style.display = 'none';
	document.getElementById("help1").style.display = 'none';
	
	document.getElementById("help").style.display = 'block';
	document.getElementById("pause").style.display = 'block';
	document.getElementById("buy").style.display = 'block';
	
	document.getElementById("scoreDisplay").style.display = 'block';
	document.getElementById("moneyDisplay").style.display = 'block';
}



// function starts up entire program
start_home();

var mouseLoc = new Point(center);
view.onFrame = function(event) { //Actual animation loop
   var gameStatus = game.update(mouseLoc);		

   //Handle depending on if game is finished
   // Store +1 lvl
 }

// Add mouse for control of user
tool.onMouseMove = function(event) {
mouseLoc = event.point    
}
