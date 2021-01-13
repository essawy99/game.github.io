//-----------------------------------------------------------------

let instructions = document.getElementById("helpText");
//----------------------------------------------------------------- Switches game state, which is checked at the beginning of each
function pauseGame() {//											animation loop- will trigger pause
	if (gameStatus) {
		gameStatus = 0;
		return;
	} else {
		instructions.style.display = "none"
		document.getElementById("help").innerHTML = "Help";
		document.getElementById("help1").innerHTML = "Help";
		gameStatus = 1;
		return;
	}
}
//-----------------------------------------------------------------


//----------------------------------------------------------------- Pauses game and displays help text- TODO: Currently dummy text,

function helpGame() {//												NEED TO PUT IN ACTUAL INSTRUCTIONS

	if (gameStatus || (!gameStatus && instructions.style.display == "none")) {
		gameStatus = 0;
		instructions.style.display = "block";
		document.getElementById("help").innerHTML = "Close";
		document.getElementById("help1").innerHTML = "Close";
		return;
	} else {
		document.getElementById("helpText").style.display = "none";
		document.getElementById("help").innerHTML = "Help";
		document.getElementById("help1").innerHTML = "Help";
		gameStatus = 1;
		return;
	}
}
//-----------------------------------------------------------------
function buyCannon() {
	if(money >= 400) {
		money-=400;
		document.getElementById("moneyDisplay").innerHTML = "Money: " + money;
		
		ball_array.push(new Cannon(500 *wUnit,500 *hUnit));  // cannonball
	}
}


function endGame(user) {
	view.onFrame = null;
	
	// Change inner html to real score before display
	document.getElementById("endText").innerHTML = "GAME OVER" + "<br>" + "SCORE: " + user.score; 
	document.getElementById("endText").style.display = "block";
}

//-----------------------------------------------------------------

 // Function to check if all balls are dead
 function dead_balls(array){
	// For loop to loop and check array[i].alive value
	var i;
	for(i = 0;i<array.length;i++){
		if(array[i].alive == true){
			// If there is an alive ball return false
			return false;
		}
	}
	return true;
}



//-----------------------------------------------------------------
// Check if there are any more balls or health
function gameState(ball_array,health,user1){
	// If health is 0 return true
	if(health._health <= 0){
		console.log("No health: " + health._health)
		return true;
	}
	// If there are no more balls
	// And ball_array has no alive balls
	// Then return true
	if(user1.get_balls() <= 0 && dead_balls(ball_array)){
		return true;
	}
	//Otherwise return false
	return false;
}