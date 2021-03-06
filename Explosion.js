/* Object to create crater (explosion) objects and store it's attributes */
class Explosion {
	constructor(point) {
		
		// Generates an explosion pattern where the convex points lie on a circle of 
		// radius h/20 and the concave points on a circle of radius h/40
		var explosion = this.generateExplosion(point, h/40, h/20); 
		
		//Tween animation, first expands from near zero size, the shinks to zero
		explosion.tween({scaling: 0.001}, {scaling: 1}, 100).then(function() { 
			explosion.tween({scaling: 1}, {scaling: 0}, 100);
		});
	}
	
	//-----------------------------------------------------------------
	/* Function uses the input values and basic trig to calculate the 
	   desired points on the circles  */
	generateExplosion(point, innerR, outerR) {
		const xVarOuter = Math.cos(Math.PI/4)*outerR;
		const yVarOuter = Math.sin(Math.PI/4)*outerR;
		
		const xVarInner1 = Math.cos(Math.PI*3/8)*innerR
		const yVarInner1 = Math.sin(Math.PI*3/8)*innerR
		const xVarInner2 = Math.cos(Math.PI/8)*innerR
		const yVarInner2 = Math.sin(Math.PI/8)*innerR
		
		var returnShape = new Path({strokeColor: new Color("#ff9900"), 
		fillColor: new Color("#ffea00"), strokeWidth: h/75, applyMatrix: false});
		
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