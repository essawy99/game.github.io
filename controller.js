/* A small script to throw error if the game is accessed by a mobile phone */

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	document.getElementById("noError").style.display = "none";
	document.getElementById("isMobile").style.display = "block";
} 

/* If not incompatible begin running the game */

/* This file containes a set of funtions that controll the start and
   end of the game, the User Interface, and updating of the game 
   screen. The rest of the files contribute classes that are used
   by the contoller. */

else {
	
	//-----------------------------------------------------------------
	// set of functions required to set up paper.js
	paper.install(window);
	var canvas = document.getElementById('myCanvas');
	paper.setup(canvas);

	//------------------- Functions to handle creation and deletion of home Screen items -------------------// 

	/* Function that creates home page */
	function startHome(){
		document.getElementById("toolHeader").style.display = 'none';
		document.getElementById("pause").style.display = 'none';
		document.getElementById("buy").style.display = 'none';
		game = new Game("home", 6);
	    view.play();
	  
	}

	/* Function that ends the home screen to prepare for in-game */
	function endHome() {

		game.endGame();
		document.getElementById("homeMenu").style.display = "none";
		document.getElementById("campaignLevelSelector").style.display = "none";
		document.getElementById("survivalDifSelector").style.display = "none";
		document.getElementById('scoreDisplay').innerHTML = "Score: ";
		document.getElementById('moneyDisplay').textContent = "Money: ";

		document.getElementById("help1").style.display = 'none';
			
		document.getElementById("toolHeader").style.display = 'block';
		document.getElementById("pause").style.display = 'block';
		document.getElementById("buy").style.display = 'block';
		
		document.getElementById("scoreDisplay").style.display = 'block';
		document.getElementById("moneyDisplay").style.display = 'block';
	}	


	//-------------------------------------Campaign functions------------------------------------------//

	// a number of global variables that determine the campaign evel
	var lvlSelect = 1;
	var campaignShips = 1;
	
	// sarts the campaign menu
	function campaignMenu() {
		document.getElementById("homeMenu").style.display = 'none';
		document.getElementById("campaignLevelSelector").style.display = 'block';
		document.getElementById("lvl").innerHTML = 'Level '+ lvlSelect +"<br><br>" + campaignShips +" ships";
	}

	// moves campaign menu left
	function left() {
		if(lvlSelect > 1) {
			lvlSelect--; 
			campaignShips -= 2;
			document.getElementById("lvl").innerHTML = 'Level '+ lvlSelect +"<br><br>" + campaignShips +" ships";
			
		}
	}

	// moves campaign menu right
	function right() {
		if(lvlSelect < 7) {
			lvlSelect++; 
			campaignShips += 2;
			document.getElementById("lvl").innerHTML = 'Level '+ lvlSelect +"<br><br>" + campaignShips +" ships";
		}
		
	}

	// function creates campaign game
	function campaign(level){
	   // Remove home first
	   endHome();
	   game = new Game("campaign", lvlSelect);
	   view.play();
	}
	//--------------------- Survival functions---------------------------------
	
	
	// creates survival menu
	function survivalMenu() {
		document.getElementById("homeMenu").style.display = 'none';
		document.getElementById("survivalDifSelector").style.display = 'block';
	}

	// Function that moves left on survival selection menu 
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

	// Function that moves right on survival selection menu 
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


	// function creates survival game
	function survival(){
	   // Remove home first
	   endHome();
	   game = new Game("survival",document.getElementById('dif').innerHTML); 
	   view.play();
	}
	//------------------Back button-------------------//

	function backMenu() { 
		document.getElementById("campaignLevelSelector").style.display = 'none';
		document.getElementById("survivalDifSelector").style.display = 'none';
		document.getElementById("survivalDifSelector").style.display = 'none';
		document.getElementById("help1").style.display = "none";
		document.getElementById("helpText").style.display = "none";
		document.getElementById("homeMenu").style.display = 'block';

	}

	//---------------Help functions----------------//
	
	// displays help menu
	function helpGame() {
			document.getElementById("help1").style.display = "block";
			document.getElementById("homeMenu").style.display = "none";
			document.getElementById("helpText").style.display = "block";
			return;
		
	}

	// moves help menu left
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

	// moves help menu right
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

	//---------------End of Game Menu/Screen Functions----------------//
	// replays current mission
	function replay() {
		game.endGame();
		game = new Game(game.type,game.difficulty);
		view.play();
		document.getElementById("endBlock").style.display = "none";
		document.getElementById("scoreDisplay").innerHTML = 'Score:';
		document.getElementById("moneyDisplay").innerHTML = 'Money:';
	}
	// moves to the next mission 
	function next() {
		game.endGame();
		game = new Game(game.type,game.difficulty+1);
		view.play();
		document.getElementById("endBlock").style.display = "none";
		document.getElementById("scoreDisplay").innerHTML = 'Score:';
		document.getElementById("moneyDisplay").innerHTML = 'Money:';
	}
	// returns player to menu */
	function goHome() {
		game.endGame();
		document.getElementById("endBlock").style.display = "none";
		document.getElementById("scoreDisplay").style.display = 'none';
		document.getElementById("moneyDisplay").style.display = 'none';
		startHome();
		document.getElementById("homeMenu").style.display = "block";
	}

	//------End Game Functions------------------------//

	// brings up gameOver menu
	function gameOver() {
		view.pause();
		document.getElementById("endText").innerHTML = "GAME OVER<br>SCORE: "+game.user.score;
		document.getElementById("cont").style.display = "none";
		document.getElementById("reDo").style.top = "17.5vh";
		document.getElementById("menuFromGame").style.top = "27.5vh";
		document.getElementById("endBlock").style.display = "block";
	}

	// brings up you win menu
	function youWin() {
		view.pause();
	   
		document.getElementById("endText").innerHTML = "Campaign Mission Completed!<br>SCORE: "+game.user.score;
		document.getElementById("reDo").style.top = "12.5vh";
		document.getElementById("cont").style.top = "22.5vh";
		document.getElementById("cont").style.display = "display";
		document.getElementById("menuFromGame").style.top = "32.5vh";
		document.getElementById("endBlock").style.display = "block";
	}


	//------------------- In Game Processes ----------------------------
	
	function pauseGame() {
		if(gamePaused) {
			gamePaused = false;
			view.play()
		}
		else {
			gamePaused = true;
			view.pause()
		}
	}
	
	
	// Variable that sets user cursor to center of game screen
	var mouseLoc = new Point(center);

	// required for mouse/keyboard interaction
	var tools = new Tool();
	var game;
	var gamePaused = false;
	
	// single function call that jumpstarts program
	startHome();

	//Actual animation loop
	view.onFrame = function(event) { 

		var gameReturn = game.update(mouseLoc);

	    // Game over
		
		if(gameReturn == -1){
			gameOver();
		}
		else if(gameReturn == 1){
			youWin();
		} 
	
	}


	// Add mouse for control of user
	tool.onMouseMove = function(event) {
		mouseLoc = event.point    
	}

	// key bindings
	tool.onKeyDown = function(event) {
		if (event.key == 'p') {
			pauseGame();
		}
		//Create new cannon ball on f
		if (event.key == 'f') { 
			if(game.user.coins >= 400) {
				game.buyCannon(game.user,game.cannonBalls);
			}
		}

		
	}
}