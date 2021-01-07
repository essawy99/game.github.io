class Crater {
	static craterArray = [];
	
	constructor(point) {
		let explosion = this._generateExplosion(point, h/20, h/10);
		
		explosion.tween({scaling: 0.001}, {scaling: 1}, 100).then(function() {
			Crater.craterArray.push(Path.Circle(
			{center: point,
			 strokeColor: new Color('#c4b399'),
			 strokeWidth: h/125,
			 fillColor: new Color('#998e7d'),
			 radius: h / 30})
			);
			
			project.activeLayer.addChild(explosion);
			explosion.tween({scaling: 1}, {scaling: 0}, 100);
		});
	}

	
	get center() { return this.crator.center; }
	get craterObjects() { return Crater.craterArray; }
	
	_generateExplosion(point, innerR, outerR) {
		const xVarOuter = Math.cos(Math.PI/4)*outerR;
		const yVarOuter = Math.sin(Math.PI/4)*outerR;
		
		const xVarInner1 = Math.cos(Math.PI*3/8)*innerR
		const yVarInner1 = Math.sin(Math.PI*3/8)*innerR
		const xVarInner2 = Math.cos(Math.PI/8)*innerR
		const yVarInner2 = Math.sin(Math.PI/8)*innerR
		
		let returnShape = new Path({strokeColor: new Color("#ff9900"), fillColor: new Color("#ffea00"), strokeWidth: h/75, applyMatrix: false});
		returnShape.add(new Point(point.x, point.y-outerR));
		returnShape.add(new Point(point.x+xVarInner1, point.y-yVarInner1));
		
		
		returnShape.add(new Point(point.x+xVarOuter, point.y-yVarOuter));
		returnShape.add(new Point(point.x+xVarInner2, point.y-yVarInner2));
		
		returnShape.add(new Point(point.x+outerR, point.y));
		returnShape.add(new Point(point.x+xVarInner2, point.y+yVarInner2));
		
		returnShape.add(new Point(point.x+xVarOuter, point.y+yVarOuter));
		returnShape.add(new Point(point.x+xVarInner1, point.y+yVarInner1));
		
		returnShape.add(new Point(point.x, point.y+outerR));
		returnShape.add(new Point(point.x-xVarInner1, point.y+yVarInner1));
		
		returnShape.add(new Point(point.x-xVarOuter, point.y+yVarOuter));
		returnShape.add(new Point(point.x-xVarInner2, point.y+yVarInner2));
		
		returnShape.add(new Point(point.x-outerR, point.y));
		returnShape.add(new Point(point.x-xVarInner2, point.y-yVarInner2));
		
		returnShape.add(new Point(point.x-xVarOuter, point.y-yVarOuter));
		returnShape.add(new Point(point.x-xVarInner1, point.y-yVarInner1));
		
		returnShape.closed = true;
		return returnShape;
	}
}