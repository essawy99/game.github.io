/* Object that stores background and its attributes */
class Background { 
	constructor() {
		// Water portion
		this.water = new Path.Rectangle(new Point(0, 0), new Size(w, h)); 
		this.water.fillColor = new Color("#42adf5");
		
		// Beach/Sand portion
		this.beach = new Path.Rectangle(new Point(0, 7 * h / 8), new Size(w, h)); 
		this.beach.fillColor = new Color("#ebd8a0");

		//Friendly forces
		this.tankTents = new TanksTents(10); 

	}

	deleteAll() {
		this.water.remove();
		this.beach.remove();
		this.tankTents.deleteAll()
	}
}

//-----------------------------------------------------------------
/* Object that stores tanks and their attributes */
class TanksTents { //TODO(Dheva): REPLACE WITH NEW DESIGN
	
	
	constructor(amount) { //Calculates spacing and generates scaled tanks 
		this.tankArray = [];
		this._numTanks = amount;
		
		
		
		const tankSpacing = w / (this._numTanks + 1);
		const tankUnit = (2 * h / 64);

		this.tankArray.push(new tank3(0 + 30*wUnit, (15 * h / 16)));
		this.tankArray.push(new tank3(center, (15 * h / 16)));
		this.tankArray.push(new tank3(w - 30*wUnit, (15 * h / 16)));

		for(var i = 1; tankSpacing * i < w; i++) {
			this.tankArray.push(new tent((tankSpacing*i)-(tankUnit/2) + 10 * wUnit, (15 * h / 16)));

			
		}
	}

	deleteAll() {
		for(var i = 0; i < this.tankArray.length; i++) {
			this.tankArray[i].remove();
		}
	}
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
		this._healthBar.remove();
		this._healthBar = new Path.Rectangle(new Point (0, 63*h/64), new Size(((w/100)*this._health), h/64));
		this._healthBar.fillColor = new Color("#db2316");
	}

	//-----------------------------------------------------------------
	/* Function that removes healthbar off of screen */
	deleteAll() {
		this._healthBar.remove();
	}
}