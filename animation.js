/*
KNOWN BUGS
	-If help is pressed after pause or pause is pressed after help, text will remain on screen during gameplay- will fix soon
	-Help text is currently dummy text; need to replace and format for actual instructions soon
	
	PLEASE PLACE ANY OTHER BUGS NOTICED HERE
*/

let gameStatus = 0; //1-> Game is running, 0-> Game is paused

//----------------------------------------------------------------- paper.js set up
paper.install(window);
var canvas = document.getElementById('myCanvas');
paper.setup(canvas);
//-----------------------------------------------------------------

//----------------------------------------------------------------- Initialize all required objects
	var back = new Background(); //Beach
	var tanks = new Tanks(10); //Friendly tanks
	var health = new Health(); //Player health bar

	var cannonball = new Cannon(200,200);  // cannonball
	var user1 = new User();            // user
	var ship_array = [];               // ship storage
	var ship = new Enemy_Ships(7);     // ships
	var plane = new Enemy_Plane();     // plane
	var planeArray = [plane];          // plane storage


	var total_distance = 0;            // ????
	var point = new paper.Point(200,200);
//-----------------------------------------------------------------


//----------------------------------------------------------------- Start button triggers this function to begin animation
function startGame() {
	gameStatus = 1; //Game running state
	
	var tool = new Tool();
	
	document.getElementById("start").style.visibility = 'hidden'; //Block gets rid of start button
	document.getElementById("start").style.display = 'none';
	
	view.onFrame = function(event) { //Actual animation loop
		if (gameStatus) { //Will check if gameState is 0 (triggers pause) or 1 (keeps running)
			user1.update2(point);
			cannonball.update();

			//Implement top bottom and sided as walls for ball to bounce off
			cannonball.check(user1,ship_array,planeArray); //function to check collisions

			/* a little messy could this functionality
    be moved to the class */
    if(total_distance > 2000){
      var plane_2 = new Enemy_Plane();
      planeArray.push(plane_2)
      total_distance = 0
    }else{
      var i;
      for (i = 0; i < planeArray.length; i++) {
        // If plane is destroyed 
        // A bool value should return true
        // Thus we should remove it from array
        planeArray[i].update();
        /*
        if(bool){
          planeArray = planeArray.splice(i,1); //Remove element at index
        }
        */
      }
    } //Update all current planes
    total_distance += 10; //total distance goes up by 10 each time even after reset
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
			if(event.key == 'b'){
				cannonball.collision(90);
			}

		}
	}
}
//-----------------------------------------------------------------


//----------------------------------------------------------------- Switches game state, which is checked at the beginning of each
function pauseGame() {//											animation loop- will trigger pause
	if (gameStatus) {
		gameStatus = 0;
		return;
	} else {
		gameStatus = 1;
		return;
	}
}
//-----------------------------------------------------------------


//----------------------------------------------------------------- Pauses game and displays help text- TODO: Currently dummy text,
function helpGame() {//												NEED TO PUT IN ACTUAL INSTRUCTIONS
	pauseGame();

	if (gameStatus) {
		document.getElementById("helpText").style.display = "none";
		return;
	} else {
		document.getElementById("helpText").style.display = "block";
		return;
	}
}
//-----------------------------------------------------------------