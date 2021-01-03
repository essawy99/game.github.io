

var win = window,
doc = document,
docElem = doc.documentElement,
body = doc.getElementsByTagName('body')[0],
w = win.innerWidth || docElem.clientWidth || body.clientWidth,
h = win.innerHeight|| docElem.clientHeight|| body.clientHeight;


var height = h - (h/6);
var width = w/15;

var wUnit = w/1000;
var hUnit = h/1000;
var center =  w/2;




class Buildings {
	constructor() {
		this._h = y;
		this._w = x;
		this._health = 100;
		
		this.initDraw();
	}
	
	initDraw() {
		let bHeight;
		let bWidth = this._w / 16;
		const bHeightMin = (this._h / 14);
		const bHeightDif = (this._h / bHeightMin);
		const bArray = [];
		for(let i = 0; i < 16; i++) {
			bHeight = Math.floor((Math.random() * bHeightDif) + bHeightMin);
			bArray.push(new Path.Rectangle(new Point(i * bWidth, this._h - bHeight), new Size(bWidth, bHeight)));
			bArray[i].fillColor = (new Color("#717480"));
		}
	}
	
	takeDamage(damagePercent) {
		this._health -= damage;
	}
	
	get health() {
		return this._health;
	}
}













