/* Object to store cannonball objects and other attributes */
class CannonBalls {
    constructor(home) {
        this.home = home;
        this.array = [];
        this.array.push(new CannonBall(500 *wUnit,500 *hUnit, this.home));
        this.timeAlive = 0;
    }
    //-----------------------------------------------------------------
    /* Function to update cannonballs */
    update(user,ships,planes) {
        /* Iterates through each live cannonball, checks for
        collisions and updates location */
        // iterates through each cannonball
        for(var i = 0; i < this.array.length; i++) {

            var cannonBall = this.array[i]
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
    //-----------------------------------------------------------------
    /* Function to check if any balls are alive - returns false if there are- else true */
    ballsDead(){
        var i;
        for(i = 0;i<this.array.length;i++){
            if(this.array[i] != null){
                if(this.array[i].alive == true){
                    return false;
                }
            }
        }
        return true;
    }

    //-----------------------------------------------------------------
    /* Function to add ball */
    addBall(user) {
        /* iterates through ship array and adds new
        cannon to a null location. if there are no null
        locations it pushes a cannonBall to a new location
        Function constructs cannonBall at the location of the
        cannon*/
        for(var i = 0; i < this.array.length; i++) {
            if(this.array[i] == null) {
                this.array[i] =
                new CannonBall(user.arc.position.x, user.arc.position.y, this.home);
                return;
            }
        }
        this.array.push(new CannonBall(user.arc.position.x, user.arc.position.y - 100, this.home));
    }

    //-----------------------------------------------------------------
    /* Function to destroy/delete all cannonballs */
    deleteAll() {
        for(var i = 0; i < this.array.length; i++) {
            if(this.array[i] == null) {
                this.array[i].remove()
            }
        }
    }
}

//-----------------------------------------------------------------
/* Object to store a cannonball and all of its attributes */
class CannonBall {
    constructor(xLoc, yLoc, home) {
		this.home = home; // Used for home screen
        this.velocity = 4 * hUnit;
        //If ball is above beach
        this.alive = true;
        this.cannon = new Path.Circle({
            center: new paper.Point(xLoc, yLoc),
            radius: 3 * hUnit,
            fillColor: 'black'
        });
        this.x_vel = 0 * hUnit;
        this.y_vel = -4 * hUnit;
        this.timeAlive = 0;
    }

    //-----------------------------------------------------------------
    /* Function to update a cannonball
    NOTE: only function to be used outside of class (public)
    checks for colisions then updates cannonBall position */
    update(user,ships,planes) {
        // if too much time has passed with no collision
        // with arc create a random collision
        this.timeAlive++;
        if(this.timeAlive > 1000) {
            this.collision(45);
        }
        // slightly accelerates ball each frame
        this.velocity += .001 * hUnit;
        // checks for colisions that would change direction
        this.check(user,ships,planes);
        // update location of ball based on x and y velocity
        this.cannon.position.x += this.x_vel;
        this.cannon.position.y += this.y_vel;
    }

    //-----------------------------------------------------------------
    /* Function bounces the ball off the angle inputted into the function
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
    //-----------------------------------------------------------------
    /* Function to calculate dot product */
    dot(v1, v2) {                        //Dot multiply function
        return v1.x * v2.x + v1.y * v2.y
    }
    
    //-----------------------------------------------------------------
    /* function checks for colisons between ball and user/ships/planes/walls
        function automatically updates accordingly */
    check(user,ships,planes){

        // x and y positions that determine where ball would be on next frame
        var xFuture = this.cannon.position.x + this.x_vel;
        var yFuture = this.cannon.position.y + this.y_vel;

        //create a line going from current cannonball to future cannonball
        var line = new Path.Line(new Point(this.cannon.position.x,this.cannon.position.y),
                                 new Point(xFuture, yFuture));

        // if were not in home screen check for arc collisions
        if(!this.home) {
            this.checkArcCollisons(user,line);
        }
        //Check for collisions with ships and planes
        // using general CheckEnemyCollisoins fucntion
        this.checkEnemyCollisions(ships, line, user);
        this.checkEnemyCollisions(planes, line, user);



        line.remove(); // Remove line to save memory

        // checks for wall collisions and returns false
        // if the ball is out of bounds
        return this.checkWallCollisions();
    }

    //-----------------------------------------------------------------
    /* Function checks for wall collisons returns false if the ball
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


    //-----------------------------------------------------------------
    /* Function to check collisions between user's arc and cannonball
    NOTE:if not in home screen we bounce ball off of arc. If the ball
        and arc makes contact the ball direction changes to the normal
        vector of the point of intersection between the two */
    checkArcCollisons(user, line) {
		if(line.intersects(user.arc)){ //Check if ball and arc touch
            this.timeAlive = 0;        // reset time since last collision	
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
        // check if moving user skipped over ball
        else { 
            //future ball position
            var xFuture = this.cannon.position.x + this.x_vel;
            var yFuture = this.cannon.position.y + this.y_vel;
            
            //Create new shape based off of line and line + user.previousMove
            var shape = new Path();

            //Add current cannon position
            shape.add(this.cannon.position.x,
                      this.cannon.position.y);
            //Add future cannon position
            shape.add(xFuture,yFuture);
            // Future cannon position + previousMove of user
            shape.add(xFuture-user.previousMove,yFuture);
            // Current cannon position + previousMove of user
            shape.add(this.cannon.position.x-user.previousMove,
                      this.cannon.position.y);
            //close path
            shape.closed = true;
            
            //Check if user.arc intersects with this shape or 
            // shape contains the arc
            if(shape.intersects(user.arc) || 
               shape.contains(new Point (user.arc.position.x, 
                                         user.arc.position.y))){
                
                // next set of lines generates new ball direction
                // based on whether arc hit it going left or right
                var offset;
                if(user.previousMove < 0){
                    // If left
                    offset = user.arc.length * (3/4);
                }else{
                    // If right
                    offset = user.arc.length * (1/4);
                }
                // Use offset to Get normal
                var normal = user.arc.getNormalAt(offset);

                // Set x and y velocity according to new angle
                this.x_vel = normal.x * this.velocity;
                this.y_vel = normal.y * this.velocity;

                //Remove shape for efficienct
                shape.remove();
            }
        }
	}

    //-----------------------------------------------------------------
    /* Function to check collisions between enemy objects and cannonball */
    checkEnemyCollisions(container, line, user) {

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

    //-----------------------------------------------------------------
    /* Function to remove a cannonball object */
    remove() {
        this.cannon.remove();
    }
}
