class CannonBalls {
    constructor() {
        this.cannonBallArray = [];
        this.cannonBallArray.push(new CannonBall(500 *wUnit,500 *hUnit));
    }
    
    update(user,ships,planes) {
        // iterates through each cannonball
        for(var i = 0; i < this.cannonBallArray.length; i++) {
            var cannonBall = this.cannonBallArray[i]
            // make sure a ball exists in that location
            if(cannonBall != null) {
                // update the ball using update function
                // if the ball is destroyed it will return true
                // triggering code to nullify that array position
                if(cannonBall.update(user,ships,planes)) {
                    this.shipArray[i] = null
                }
            }
        }
    }
   
    /* iterates through ship array and adds new
    cannon to a null location. if there are no null 
    locations it pushes a cannonBall to a new location 
    Function constructs cannonBall at the location of the 
    cannon*/
    addBall(user) {
        for(var i = 0; i < this.shipArray.length; i++) {
            if(this.shipArray[i] == null) {
                this.shipArray[i] = 
                new Cannon(user.arc.position.x, user.arc.position.y);
                return;
            }
        }
        new Cannon(user.arc.position.x, user.arc.position.y);
    }

}

class CannonBall {
    constructor(xLoc, yLoc) {
		this.home = 0; // Used for home screen
        this.velocity = 3 * wUnit;
        //If ball is above beach
        this.alive = true;
        this.cannon = new Path.Circle({
            center: new paper.Point(xLoc, yLoc),
            radius: 3* wUnit,
            fillColor: 'black'
        });
        this.x_vel = 0;
        this.y_vel = 3* wUnit;
    }

    /* only function to be used outside of class (public)
    checks for colisions then updates cannonBall position */
    update(user,ships,planes) {
        // slightly accelerates ball each frame
        this.velocity += .005;
        // checks for colisions that would change direction  
        this.check(user,ships,planes);
        // update location of ball based on x and y velocity
        this.cannon.position.x += this.x_vel;
        this.cannon.position.y += this.y_vel;
    }
    
    /* Method bounces the ball off the angle inputted into the function 
       using vector multiplication */
    collision(ang){ 
        var angle = (ang*Math.PI) / 180; // calculates angle in radians
        
        
        var n = {                        // Vector based off of angle 
            x: Math.sin(angle),
            y: -Math.cos(angle)
        }
        var v = {                        //Ball vector
            x: this.x_vel,
            y: this.y_vel
        }

        var d = 2 * this.dot(v, n);      //formula for distance
        this.x_vel -= d * n.x;           //Formula to get x velocity
        this.y_vel -= d * n.y;           //Formula to get y velocity
    }

    dot(v1, v2) {                        //Dot multiply function
        return v1.x * v2.x + v1.y * v2.y
    }
    
    /* function checks for colisons between ball and user/ships/planes/walls
        function automatically updates accordingly */
    check(user,ships,planes){
        //An array of all intersections between ball and forcefield

        // new x and y positions to determine where ball would be on next frame
        var xFuture = this.cannon.position.x + this.x_vel; 
        var yFuture = this.cannon.position.y + this.y_vel;
    
        //create a line going from current cannonball to future cannonball
        var line = new Path.Line(new Point(this.cannon.position.x,this.cannon.position.y), 
                                 new Point(xFuture, yFuture));
                                 
        
        
        //Check ship and plane array
        this.enemyCollisions(ships, line, user);
        this.enemyCollisions(planes, line, user);
        
        
        
        line.remove(); // Remove line to save memory

        // checks for wall collisions and returns false
        // if the ball is out of bounds
        return this.checkWallCollisions();
    }      
    
    /* Checks fo wall collisons returns false if the ball 
    falls through bottom of screen. In home screen ball 
    bounces off of bottom */
    checkWallCollisions() {
        // series of if statements for bounces of walls 
        if(this.cannon.position.x <= 0){
            this.collision(90);
        }
        if(this.cannon.position.x >= w){
            this.collision(270);
        }
        if(this.cannon.position.y <= 0){
            this.collision(360);
        }
        // if home screen ball bounces off bottom
        if(this.cannon.position.y >= h && this.home) {
			this.collision(180);
        } 
        // in this situation we kill the ball
        else if(this.cannon.position.y >= h){
            // Remove cannon ball when it hits bottom of screen 
            this.cannon.remove();
            // Set ball to 'dead'
            this.alive = false;
            return false;
        }
    }
    
    /* if not in home screen we bounce ball off of arc. If the ball
        and arc makes contact the ball direction changes to the normal
        vector of the point of intersection between the two */
    checkArcCollisons(user, line) {
        if(!this.home) {
			if(line.intersects(user.arc)){ //Check if ball and arc touch
				
				// Get first intersection between line and arc
				var point = line.getIntersections(user.arc)[0].point;
				
				// Calculate offset from arc
				var offset = user.arc.getOffsetOf(point);
				// Use offset to Get normal
				var normal = user.arc.getNormalAt(offset);
		
				// Set x and y velocity according to new angle
				this.x_vel = normal.x * this.velocity;
				this.y_vel = normal.y * this.velocity;
			}
		}
    }
    
    
    enemyCollisions(container, line, user) {

        // array containin ships/planes
        var array = container.array;
        // iterate through each ship/plane
        for(var i = 0; i<array.length; i++){
            if(array[i] != null) {
                // get ship/plane
                var object = array[i].body
                // check for intersection between outside of ship/plane and line
                if(line.intersects(object.path0)){
					
                    // get first point of intersection
                    var point = line.getIntersections(object.path0)[0].point;

                    // Calculate offset from ship/plane
                    var offset = object.path0.getOffsetOf(point);
                    // Use offset to Get tangent
                    var tanPoint = object.path0.getTangentAt(offset)
                    
                    // colide ball with tangent angle
                    this.collision(tanPoint.angle);

                    // damage ship/plane i
                    if(!this.home) {
                        container.takeDamage(100, i, user);
                    }
                    
                }
            }
        }

    }
    
    
   
    
}