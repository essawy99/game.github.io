class Cannon {
    constructor(xLoc, yLoc) {
        this.velocity = 3 * wUnit;
        this.cannon = new Path.Circle({
            center: new paper.Point(xLoc, yLoc),
            radius: 3* wUnit,
            fillColor: 'black'
        });
        this.x_vel = 0;
        this.y_vel = 5* wUnit;
    }

    update(user,array,array2) {
        this.check(user,array,array2)
        this.velocity += .005
        this.cannon.position.x += this.x_vel;
        this.cannon.position.y += this.y_vel;
    }
    collision(ang){ //collision method input degrees
        //Method 2 - Takes in angle as argument
        var angle = (ang*Math.PI) / 180;
        
        var n = { //Vector based off of angle 
            x: Math.sin(angle),
            y: -Math.cos(angle)
        }
        var v = { //Ball vector
            x: this.x_vel,
            y: this.y_vel
        }

        var d = 2 * this.dot(v, n); //formula for distance
        this.x_vel -= d * n.x; //Formula to get x velocity
        this.y_vel -= d * n.y; //Formula to get y velocity
     
    }

    dot(v1, v2) { //Dot multiply function
        return v1.x * v2.x + v1.y * v2.y
    }
    // array = ship_array and array2 = planeArray
    check(user,array,array2){
        //An array of all intersections between ball and forcefield

        // new x and y positions to determine where ball would be on next frame
        var x_pos = this.cannon.position.x + this.x_vel; 
        var y_pos = this.cannon.position.y + this.y_vel;
    

        //create a line going from current cannonball
        var line = new Path.Line(new Point(this.cannon.position.x,this.cannon.position.y), new Point(x_pos,y_pos));
        
        
        line.strokeColor = 'black';
        if(this.cannon.position.x <= 0){
            this.collision(90);
        }
        if(this.cannon.position.x >= w){
            this.collision(270);
        }
        if(this.cannon.position.y <= 0){
            this.collision(360);
        }
        if(this.cannon.position.y >= h){
            // Remove cannon ball when it hits bottom of screen 
            this.cannon.remove();
        }
        if(line.intersects(user.arc)){ //Check if ball and arc touch
            //If ball and arc touch get intersections and use
            var intersections =  line.getIntersections(user.arc);
            
            // Get point of intersection
            var point = intersections[0].point;
            
            // Calculate offset
            var offset = user.arc.getOffsetOf(point);
            // Get normal
            var normal = user.arc.getNormalAt(offset);
           
            // Set x and y
            this.x_vel = normal.x * this.velocity;
            this.y_vel = normal.y * this.velocity;
            
        }
        //Check ship and plane array
        this.check_ship_array(array,user,line);
        this.check_plane_array(array2,user,line);
        
        line.remove(); // Remove line to save memory
    }      
    check_ship_array(array1,user,line){
        //search through ship array
        var array = array1.shipArray;
        
       
        for(var i=0; i<array.length; i++){
            if(array[i] != null) {
            if(line.intersects(array[i].ship.path0)){
                
                //If ball and arc touch get intersections and use
                var intersections =  line.getIntersections(array[i].ship.path0);

                
                
                var tangent = intersections[0].point;

                var offset = array[i].ship.path0.getOffsetOf(tangent);
                var tanPoint = array[i].ship.path0.getTangentAt(offset)
            
    
               this.collision(tanPoint.angle);

                //Deal damage and check if hp of item
                // is 0 if so, remove from array
                array[i].hp -= 100;
                
                if(array[i].hp <= 0){
                    array[i].ship.remove();
                    
                    user.scoreUpdate(400);
            }
            }
        }
        }
    }
    // Check plane array
    check_plane_array(array1,user,line){
    //An array of all intersections between ball and forcefield

     
    var array = array1.planeArray
         //Handle ship array
        //Handle plane array 
        for(var i=0;i<array.length;i++) {
            if(array[i] != null) {

            
            if(line.intersects(array[i].body.path0)){
                //If ball and arc touch get intersections and use
                var intersections =  line.getIntersections(array[i].body.path0);

                
                
                var tangent = intersections[0].point;

                var offset = array[i].body.path0.getOffsetOf(tangent);
                var tanPoint = array[i].body.path0.getTangentAt(offset)
            
    
               this.collision(tanPoint.angle);
                //Deal damage and check if hp of item
                // is 0 if so, remove from array
                array[i].hp -= 100;
                if(array[i].hp <= 0){
                    array[i].body.remove();
                    array = array.splice(i,1);
                    user.scoreUpdate(100)
                }
            }
        }
        }
    }      
}