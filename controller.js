
/* A set of functions called by buttons in the UI 
   to build new levels and move between different
   areas in the UI */


//-----------------------------------------------------------------
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

//-------------------- Functions to handle creation and deletion of screen items --------------------------// 


/* Function that creates home page */
function startHome(){
  game = new Game("home", 6);
  
}

/* Function that ends the home screen to prepare for in-game */
function endHome() {

  game.endGame();
  document.getElementById("homeMenu").style.display = "none";
  document.getElementById("campaignLevelSelector").style.display = "none";
  document.getElementById("survivalDifSelector").style.display = "none";
  document.getElementById('scoreDisplay').innerHTML = "Score: ";
  document.getElementById('moneyDisplay').textContent = "Money: ";
}	


//---------------------------------------------------------------------------------------------------------
//---------------Campaign functions----------------//
let lvlSelect = 1;
let unlocked = load_local();
if(unlocked == null) { unlocked = 1; } //TEMP FIX- REMOVE LATER
function campaignMenu() {
	document.getElementById("homeMenu").style.display = 'none';
	document.getElementById("campaignLevelSelector").style.display = 'block';
}

/* Function that moves left on campaign selection menu */
function left() {
	if(lvlSelect > 1) {
		document.getElementById("lvl").innerHTML = 'Level '+(--lvlSelect)+"<br><br>NUM ships";
		
		if(lvlSelect <= unlocked && document.getElementById("campaignStart").disabled) {
			document.getElementById("campaignStart").disabled = false;
			document.getElementById("campaignStart").style.backgroundColor = "#d63d22";
		}
	}
}

/* Function that moves right on campaign selection menu */
function right() {
	document.getElementById("lvl").innerHTML = 'Level '+(++lvlSelect)+"<br><br>NUM ships";
	
	if(lvlSelect > unlocked && !document.getElementById("campaignStart").disabled) {
		document.getElementById("campaignStart").disabled = true;
		document.getElementById("campaignStart").style.backgroundColor = "grey";
	}
}

/* Function that handles creating campaign game object */
function campaign(level){
   // Remove home first
   endHome();

   console.log('made it');

   //Setup game screen
   game_screen();

   var difficulty = load_local();
   console.log(load_local())

   //Start Game
   if(difficulty != undefined){
      game = new Game("campaign",difficulty)
   }else{
	  difficulty = 1;
      game = new Game("campaign",1)
   }
}
//--------------------- Campaign and Survival functions---------------------------------
/* Function that goes back to previous selection */
function backMenu() { 
	document.getElementById("campaignLevelSelector").style.display = 'none';
	document.getElementById("survivalDifSelector").style.display = 'none';
	document.getElementById("homeMenu").style.display = 'block';
}
//---------------Survival functions----------------// 
/* Function that creates survival menu */
function survivalMenu() {
	document.getElementById("homeMenu").style.display = 'none';
	document.getElementById("survivalDifSelector").style.display = 'block';
}

/* Function that moves left on survival selection menu */
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

/* Function that moves right on survival selection menu */
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


/* Function that handles creating survival game object */
function survival(diff){
   // Remove home first
    endHome();
   
   //Setup game screen
   game_screen();


   //Start Game
   
   game = new Game("survival",diff); //changed "medium" to variable diff for input difficulty
}
//------------------------------------------------------

//---------------Help functions----------------//
/* Function that handles displaying of help menu */
function helpGame() {
	if (instructions.style.display == "none") {
		gameStatus = 0;
		document.getElementById("help1").style.display = "block";
		document.getElementById("homeMenu").style.display = "none";
		instructions.style.display = "block";
		document.getElementById("help").innerHTML = "Back";
		return;
	} else {
		instructions.style.display = "none";
		document.getElementById("help").innerHTML = "Help";
		if(document.getElementById("scoreDisplay").style.display == 'none') {
			document.getElementById("homeMenu").style.display = "block";
		} else {
			gameStatus = 1;
		}
		
		for (let i = 6; i > 1; i--) {
			if(document.getElementById("help"+i).style.display == "block") {
				document.getElementById("help"+i).style.display = "none";
			}
		}
		return;
	}
}

/* Function that handles moving right on help menu */
function helpRight() {
	let flag = 0;
	for (let i = 1; i < 6; i++) {
		if(document.getElementById("help"+i).style.display == "block" && !flag) {
			document.getElementById("help"+i).style.display = "none";
			document.getElementById("help"+(++i)).style.display = "block";
			flag = 1;
		}
	}
}

/* Function that handles moving left on help menu */
function helpLeft() {
	let flag = 0;
	for (let i = 6; i > 1; i--) {
		if(document.getElementById("help"+i).style.display == "block" && !flag) {
			document.getElementById("help"+i).style.display = "none";
			document.getElementById("help"+(--i)).style.display = "block";
			flag = 1;
		}
	}
}
//-----------------------------------------------

//---------------End of Game Menu/Screen Functions----------------//
/* Function that handles replaying the current mission */
function replay() {
	game = new Game(game.type,game.difficulty);
	document.getElementById("endBlock").style.display = "none";
	document.getElementById("scoreDisplay").innerHTML = '';
	document.getElementById("moneyDisplay").innerHTML = '';
}
/* Function that handles moving to the next mission */
function next() {
	game = new Game(game.type,game.difficulty+1);
	document.getElementById("endBlock").style.display = "none";
	document.getElementById("scoreDisplay").innerHTML = '';
	document.getElementById("moneyDisplay").innerHTML = '';
}
/* Function that returns player to menu */
function goHome() {
	document.getElementById("endBlock").style.display = "none";
	document.getElementById("scoreDisplay").style.display = 'none';
	document.getElementById("moneyDisplay").style.display = 'none';
	startHome();
	document.getElementById("start").style.display = 'block'; //Not sure why but these buttons dont display after the first return to menu unless called again for some reason
	document.getElementById("option").style.display = 'block';
	document.getElementById("homeMenu").style.display = "block";
}

//-----------------------------------------------

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



var mouseLoc = new Point(center);

//------End Game Functions------------------------//

function gameOver() {
	document.getElementById("endText").innerHTML = "GAME OVER<br>SCORE: "+game.user.score;
		   document.getElementById("cont").style.display = "none";
		   document.getElementById("reDo").style.top = "17.5vh";
		   document.getElementById("menuFromGame").style.top = "27.5vh";
		   document.getElementById("endBlock").style.display = "block";
		   game.endGame();
}

function youWin() {
	store(game.difficulty + 1);
	console.log("winner, CAMPAIGN");
	view.onFrame = null;
   
	document.getElementById("endText").innerHTML = "Campaign Mission Completed!<br>SCORE: "+game.user.score;
	document.getElementById("reDo").style.top = "12.5vh";
	document.getElementById("cont").style.top = "22.5vh";
	document.getElementById("cont").style.display = "display";
	document.getElementById("menuFromGame").style.top = "32.5vh";
	document.getElementById("endBlock").style.display = "block";
	game.endGame()
}

//------------------- Game Screen Setup Functions ----------------------------

/* Function that sets up game screen */
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




//------------------- In Game Processes ----------------------------
// Variable that sets user cursor to center of game screen
var mouseLoc = new Point(center);

// required for mouse/keyboard interaction
var tools = new Tool();
var game;
startHome();
/* var blah = 0; */
view.onFrame = function(event) { //Actual animation loop
	console.log('hi');
	var start = performance.now();
    
   var gameReturn = 0;
   
	gameReturn = game.update(mouseLoc);
	

   
   
   // Game over
   if(game.type != "home") {
		if(gameReturn == -1){
		   gameOver();
	   }
	   else if(gameReturn == 1){
		   if(game.type == "campaign"){
				youWin();
				console.log("KSDFJDLKSJF");
		   }
		   else{
			
		   }
	   }
   }
   //TODO: DHEVA implement menu
   var end = performance.now();
   var x = (end-start);
   var fps = (1000/ x);
   console.log('total:' + x);
	
	
	if(fps > 60) {
		console.log('fps:' + 60);
	}
	else {
		console.log( 'fps:' + fps);
	}
	console.log('hi2');

 }




// Add mouse for control of user
tool.onMouseMove = function(event) {
	mouseLoc = event.point    
}

tool.onKeyDown = function(event) {
	if (event.key == 'p') {
		pauseGame();
	}
	if (event.key == 'h') {
		helpGame();
	}
	if (event.key == 'f') { //Create new cannon ball on f
		game.buyCannon(game.user,game.cannonBalls);
	}
	//Give coins
	if (event.key == "c"){
		game.user.coins += 1000;
	}

	
	if (event.key == "space") {
		gameStatus = 1;
	}

	
} 