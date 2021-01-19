/* Object that stores background and its attributes */
class Background { //TODO(Dheva): Implement wave animation on shore
	constructor() {
		this.water = new Path.Rectangle(new Point(0, 0), new Size(w, h)); // Water portion
		this.water.fillColor = new Color("#42adf5");
		
		this.beach = new Path.Rectangle(new Point(0, 7 * h / 8), new Size(w, h)); // Beach/Sand portion
		this.beach.fillColor = new Color("#ebd8a0");


	}
}

//-----------------------------------------------------------------
/* Object that stores tanks and their attributes */
class Tanks { //TODO(Dheva): REPLACE WITH NEW DESIGN
	static tankArray = []; //Static array holding all generated tank objects
	
	constructor(amount) { //Calculates spacing and generates scaled tanks 
		this._numTanks = amount;
		
		const tankSpacing = w / (this._numTanks + 1);
		const tankUnit = (2 * h / 64);
		for(let i = 1; tankSpacing * i < w; i++) {
			Tanks.tankArray.push(new TankDraft((tankSpacing*i)-(tankUnit/2), (59*h/64), tankUnit)); //Pushes to static array
		}
	}
	//-----------------------------------------------------------------
	/* Function that draws tanks */
	drawTank (point, unit) { //Draws individual tanks
		let tank = new Path.Rectangle(point, new Size(unit, 2 * unit));
		tank.fillColor = new Color("#0b5703");
		tank.strokeColor = new Color("#074001");
		return tank
	}
	
	get numTanks() { return this._numTanks; }
}

//-----------------------------------------------------------------
/* Object to store health and its attributes */
class Health {
	constructor() {
		this._health = 100;
		
		this._healthBar = new Path.Rectangle(new Point (0, 63*h/64), new Size(w, h/64));
		this._healthBar.fillColor = new Color("#db2316");
	}
	//-----------------------------------------------------------------
	/* Function that applies damage to health */
	takeDamage(damagePercent) {
		this._health -= damagePercent;
		this._healthBar.tween({ //Tween animation to reduce the size of the healthbar based on damage taken
		'segments[3].point': ['-=', {x: damagePercent*w/100, y: 0}],
			'segments[2].point': ['-=', {x: damagePercent*w/100, y: 0}]
		}, 500);
	}
	
	get health() { return this._health; }

	//-----------------------------------------------------------------
	/* Function that removes healthbar off of screen */
	deleteAll() {
		this._healthBar.remove();
	}
}