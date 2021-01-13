let gameStatus = 0; //1-> Game is running, 0-> Game is paused

//----------------------------------------------------------------- paper.js set up
paper.install(window);
var canvas = document.getElementById('myCanvas');
paper.setup(canvas);
//-----------------------------------------------------------------

var ball_array = []; // Keeps track of balls
//----------------------------------------------------------------- Start button triggers this function to begin animation
function startGame(lvl=1) {
	endHome();
//------------------------------------------- Initialize all required objects
	var back = new Background(); //Beach
	var tanks = new Tanks(10); //Friendly tanks


	//TO DO - ADD IN A WAY TO CHECK IF LEVEL OR SURVIVAL MODE

	var level = new Level(lvl); //Level var now contains environment variables
	var health = level.environment.health; //Player health bar

	var cannonball = level.environment.cannonball;  // cannonball
	ball_array.push(cannonball);
	/*
	var c1 = new Cannon(400 *wUnit,400 *hUnit);
	var c2 = new Cannon(300 *wUnit,300 *hUnit);
	var c3 = new Cannon(200 *wUnit,200 *hUnit);
	var c4 = new Cannon(350 *wUnit,350 *hUnit);
	var c5 = new Cannon(500 *wUnit,500 *hUnit);
	*/
	var user1 = level.environment.user;            // user
	var ships = level.environment.ships;

	//ships.move_ships(); // Move ships to position
	/* var plane = new Enemy_Plane();     // plane
	var planeArray = [plane];          // plane storage */
	enemyPlanes = level.environment.enemy_planes;



	var total_distance = 0;            // ????
	var point = new paper.Point(200,200);
//-------------------------------------------
	
	gameStatus = 1; //Game running state
	
	var tool = new Tool();
	
	document.getElementById("start").style.display = 'none';
	document.getElementById("option").style.display = 'none';
	document.getElementById("help1").style.display = 'none';
	
	document.getElementById("help").style.display = 'block';
	document.getElementById("pause").style.display = 'block';
	document.getElementById("buy").style.display = 'block';
	
	document.getElementById("scoreDisplay").style.display = 'block';
	document.getElementById("moneyDisplay").style.display = 'block';
	
	view.onFrame = function(event) { //Actual animation loop
		if (gameStatus) { //Will check if gameState is 0 (triggers pause) or 1 (keeps running)
			//Check game state (if no more balls or health is 0)
			if(gameState(ball_array,health,user1)){
				// Game Over 
				endGame(user1);
			}

			if(level.level_end(ships,enemyPlanes)){
				startGame(level.lvl + 1);
			}

			user1.update2(point);
			// Cannonball collision checks
			var i;
			// Loop through static ball array from cannon class
			for(i = 0;i < ball_array.length; i++){
				// Check to see if ball is alive
				if(ball_array[i].alive == true){
					ball_array[i].update(user1,ships,enemyPlanes);
				}
			}


			/*
			c1.update(user1,ships,enemyPlanes);
			c2.update(user1,ships,enemyPlanes);
			c3.update(user1,ships,enemyPlanes);
			c4.update(user1,ships,enemyPlanes);
			c5.update(user1,ships,enemyPlanes);
			*/

			ships.update(enemyPlanes);
			enemyPlanes.update(health); // Pass in health in case plane passes user

			//Implement top bottom and sided as walls for ball to bounce off
			 //function to check collisions

			/* a little messy could this functionality
			be moved to the class */
			/* if(total_distance > 2000){
				var plane_2 = new Enemy_Plane();
				planeArray.push(plane_2)
				total_distance = 0
			} else {
				var i;
				for (i = 0; i < planeArray.length; i++) {
					// If plane is destroyed 
					// A bool value should return true
					// Thus we should remove it from array
					planeArray[i].update();
					
				}
			} //Update all current planes
			total_distance += 10; //total distance goes up by 10 each time even after reset
		} */
	}

		tool.onMouseMove = function(event) {
			point = event.point    
		}

		tool.onKeyDown = function(event) {
			/*
			if(event.key == 'a' || event.key == 'left') {
			dir = -1;
			}
			if(event.key == 'd' || event.key == 'right') {
			dir = 1;           
			} */
			if(event.key == 'b') {
				cannonball.collision(90);
			}
			if (event.key == 'p') {
				pauseGame();
			}
			if (event.key == 'h') {
				helpGame();
			}
			if (event.key == 'e') {
				health.takeDamage(100);
			}
			if (event.key == 'f') { //Create new cannon ball on f
				console.log("balls left: " + user1.get_balls())
				console.log("ball array size: " + ball_array.length)
				if(user1.num_balls > 0){
					var new_cannon = new Cannon(user1.arc.position.x,(user1.arc.position.y-50));
					// Add new cannon to cannonball array
					new_cannon.add_ball(new_cannon,ball_array,user1);
				}
			}
		}
	}
}
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