//------------------------------------------- Initialize all required objects
var screen = new Background(); //Beach
var screenTanks = new Tanks(10); //Friendly tanks

var screenBall = new Cannon(500 *wUnit,500 *hUnit);  // cannonball
screenBall.home = 1;
screenBall.x_vel = ((Math.random()*10)-5) * wUnit;

var screenShips = new Enemy_Ships(20);
var screenEnemyPlanes = new Enemy_Planes;
//-------------------------------------------
	
	
view.onFrame = function(event) { //Actual animation loop
	screenBall.update(null, screenShips,screenEnemyPlanes);

	screenShips.update(screenEnemyPlanes);
	screenEnemyPlanes.update();		
}

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
}