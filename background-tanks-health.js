// IN ORDER TO IMPLEMENT, REPLACE BUILDING SCRIPT W THIS ONE
// REMOVE BUILDING DECLARATION IN ANIMATION AND DECLARE 
// BACKGROUND HEALTH AND TANKS(parameter: how many tanks desired) SEPERATELY

// NOTE, EITHER SHRINK OR MOVE BOAT UP SMALL PORTION

//-----------------------------------------------------------------------------





class Background { //DHEVAA TODO: Implement wave animation on shore
	constructor() {
		const rect = new Path.Rectangle(new Point(0, 0), new Size(w, h));
		rect.fillColor = new Color("#42adf5");
		
		const rect2 = new Path.Rectangle(new Point(0, 7 * h / 8), new Size(w, h));
		rect2.fillColor = new Color("#ebd8a0");
	}
}

class Tanks { //DHEVA TODO: Implement explosion animation on damage
	static tankArray = [];
	
	constructor(amount) {
		this._numTanks = amount;
		this.initDraw();
	}
	
	get numTanks() { return this._numTanks; }
	
	initDraw() {
		const tankSpacing = w / (this._numTanks + 1);
		const tankUnit = (2 * h / 64);
		for(let i = 1; tankSpacing * i < w; i++) {
			Tanks.tankArray.push(this.drawTank(new Point((tankSpacing*i)-(tankUnit/2), (57*h/64)), tankUnit));
		}
	}
	
	drawTank (point, unit) {
		let tank = new Path.Rectangle(point, new Size(unit, 2 * unit));
		console.log(point.x);
		console.log(point.y)
		tank.fillColor = new Color("#0b5703");
		tank.strokeColor = new Color("#074001");
		return tank
	}
}

class Health { //DHEVA TODO: Implement bar decrease animation on damage
	constructor() {
		this._health = 100;
		
		this._healthBar = new Path.Rectangle(new Point (w / 16, 31*h/32), new Size(w*7/8, h/64));
		this._healthBar.fillColor = new Color("#db2316");
	}
	
	get health() { return this._health; }
	
	takeDamage(damagePercent) {
		this._health -= damage;
	}
}