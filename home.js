paper.install(window);
var canvas = document.getElementById('myCanvas');
paper.setup(canvas);

//------------------------------------------- Initialize all required objects
var screen;
var screenTanks;
var screenBall;;
var screenShips;
var screenEnemyPlanes;

function start_home(){
	screen = new Background(); //Beach
	screenTanks = new Tanks(10); //Friendly tanks
	
	screenBall = new Cannon(500 *wUnit,500 *hUnit);  // cannonball
	screenBall.home = 1;
	screenBall.x_vel = ((Math.random()*10)-5) * wUnit;
	
	screenShips = new Enemy_Ships(20);
	screenEnemyPlanes = new Enemy_Planes;

	view.onFrame = function(event) { //Actual animation loop
		screenBall.update(null, screenShips,screenEnemyPlanes);
	
		screenShips.update(screenEnemyPlanes);
		screenEnemyPlanes.update();		
	}
}
//-------------------------------------------
function endHome() {
	screen.water.remove();
	screen.beach.remove();
	Tanks.tankArray.forEach(function(item, index) {
		item.remove();
	});
	screenBall.cannon.remove();
	
	screenShips.shipArray.forEach(function(item, index) {
		item = null;
	});
	screenEnemyPlanes.planeArray.forEach(function(item, index) {
		item = null;
	});
	
	view.onFrame = null;
	screenShips.deleteAll();
	screenEnemyPlanes.deleteAll();
	document.getElementById('survival').style.display = "none";
	document.getElementById('campaign').style.display = "none";
	document.getElementById('scoreDisplay').textContent = "";
	document.getElementById('moneyDisplay').textContent = "";
}	