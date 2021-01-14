paper.install(window);
var canvas = document.getElementById('myCanvas');
paper.setup(canvas);

//------------------------------------------- Initialize all required objects
var screen;
var screenTanks;
var screenBall;;
var screenShips;
var screenEnemyPlanes;
var game;

function start_home(){
	game = new Game("home", 2);
	
	/* screen = new Background(); //Beach
	screenTanks = new Tanks(10); //Friendly tanks
	
	screenBall = new CannonBalls();
	
	var ball = new User();
	screenBall.addBall(ball);

	

	screenBall.home = 1;
	screenBall.x_vel = ((Math.random()*10)-5) * wUnit;
	
	screenShips = new EnemyShips(20);
	screenEnemyPlanes = new EnemyPlanes;
 */
	view.onFrame = function(event) { //Actual animation loop
		/* screenBall.update(null, screenShips,screenEnemyPlanes);
	
		screenShips.update(screenEnemyPlanes);
		screenEnemyPlanes.update(); */
		game.update();		
	}
}
//-------------------------------------------
function endHome() {
	/* screen.water.remove();
	screen.beach.remove();
	Tanks.tankArray.forEach(function(item, index) {
		item.remove();
	});
	screenBall.cannon.remove();
	
	screenShips.array.forEach(function(item, index) {
		item = null;
	});
	screenEnemyPlanes.array.forEach(function(item, index) {
		item = null;
	});
	
	view.onFrame = null;
	screenShips.deleteAll();
	screenEnemyPlanes.deleteAll(); */

	game.endGame();
	document.getElementById("homeMenu").style.display = "none";
	document.getElementById("campaignLevelSelector").style.display = "none";
	document.getElementById("survivalDifSelector").style.display = "none";
	document.getElementById('scoreDisplay').innerHTML = "Score: ";
	document.getElementById('moneyDisplay').textContent = "Money: ";
}	