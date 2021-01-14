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
	planes = level.environment.enemy_planes;




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

			if(level.level_end(ships,planes)){
				startGame(level.lvl + 1);
			}

			user1.update2(point);
			// Cannonball collision checks
			var i;
			// Loop through static ball array from cannon class
			for(i = 0;i < ball_array.length; i++){
				// Check to see if ball is alive
				if(ball_array[i].alive == true){
					ball_array[i].update(user1,ships,planes);
				}
			}



			ships.update(planes);
			planes.update(health); // Pass in health in case plane passes user

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
