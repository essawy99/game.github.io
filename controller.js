/* controls the movement between different UI areas
   and builds new levels / survival objects. updates those
   objects every frame */


//----------------------------------------------------------------- 

/* 

               HELPER FUNCTIONS

*/

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

}

// A function that deletes all game data
function delete_all(){
   localStorage.clear();
}
//Import tools
var tools = new Tool();

/*
   TODO (DHEVA): Function should call your function
   to show the campaign home.
   Level is passed in as the highest level user has
   completed */
   
function campaignMenu() {
	document.getElementById("campaignLevelSelector").style.display = 'block';
}

function left() {
	if(--lvlSelect <= 0) {
		
	} else {
		document.getElementById("lvl").innerHTML = 'Level '+lvlSelect+"<br><br>NUM ships";
		lvlSelect--;
	}
}

function right() {
	lvlSelect++;
	document.getElementById("lvl").innerHTML = 'Level '+lvlSelect+"<br><br>NUM ships";
}

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
   var mouseLoc = new Point(center);
   view.onFrame = function(event) {
      
      game.update(mouseLoc);
   }

   // Add mouse for control of user
   tool.onMouseMove = function(event) {
   mouseLoc = event.point    
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
   console.log('here') 
   var game = new Game("survival",diff); //changed "medium" to variable diff for input difficulty

   var mouseLoc = new Point(center);
   view.onFrame = function(event) {
      
      game.update(mouseLoc);
   }

   // Add mouse for control of user
   tool.onMouseMove = function(event) {
   mouseLoc = event.point    
}
}

function survivalMenu() {
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

//----------------------------------------------------------------- 

/* 

               GAME "LOOP"

*/


//----------------------------------------------------------------- paper.js set up


//Start home
start_home();

// Variable that stores game_mode
var game_mode = null;

//difficulty
var difficulty;

//game var
var game;

/*
   Upon button click on home page either
   campaign or survival should be called */


