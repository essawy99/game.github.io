

class Cannon {
    constructor(xLoc, yLoc) {
        this.velocity = 5 * wUnit;
        this.x = xLoc;
        this.y = yLoc;
        this.direction = (1/4)* Math.PI;
        this.cannon = new Path.Circle({
            center: new paper.Point(this.x, this.y),
            radius: 3* wUnit,
            fillColor: 'black'
        });
        this.x_vel = this.velocity * Math.cos(this.direction);
        this.y_vel = this.velocity * Math.sin(this.direction);
    }

    update() {
        
        this.x += this.x_vel;
        this.y += this.y_vel;
        this.cannon.position.x = this.x;
        this.cannon.position.y = this.y;
        /* if(this.x < 0 || this.x > w) {
            dir += Math.PI; 
        } */
    }
    collision(ang){ //collision method input degrees
        //Method 2 - Takes in angle as argument
        var angle = (ang*Math.PI) / 180;
        console.log(angle)
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
        //Change cannon positions
        this.x += this.x_vel;
        this.y += this.y_vel;
        this.cannon.position.x = this.x;
        this.cannon.position.y = this.y;
    }

    dot(v1, v2) { //Dot multiply function
        return v1.x * v2.x + v1.y * v2.y
    }
    // array = ship_array and array2 = planeArray
    check(user,array,array2){
        //An array of all intersections between ball and forcefield

        // new x and y positions to determine where ball would be on next frame
        var x_pos = this.x + this.x_vel; 
        var y_pos = this.y + this.y_vel;

        //create a line going from current cannonball
        var line = new Path.Line(new Point(this.x,this.y), new Point(x_pos,y_pos));
        line.strokeColor = 'black';
        if(this.x <= 0){
            this.collision(90);
        }else if(this.x >= w){
            this.collision(270);
        }else if(this.y <= 0){
            this.collision(360);
        }else if(this.y >= h){
            // Remove cannon ball when it hits bottom of screen 
            this.cannon.remove();
        }else if(line.intersects(user.arc)){ //Check if ball and arc touch
            //If ball and arc touch get intersections and use
            var intersections =  line.getIntersections(user.arc);
            console.log("intersections: " + intersections)
            console.log("length: " + intersections.length)
            // Get point of intersection
            var point = intersections[0].point;
            console.log("point: " + point)
            // Calculate offset
            var offset = user.arc.getOffsetOf(point);
            // Get normal
            var normal = user.arc.getNormalAt(offset);
            console.log("normal: " + normal);
            // Set x and y
            this.x_vel = normal.x * (1/2*this.velocity);
            this.y_vel = normal.y * (1/2*this.velocity);
            this.x += this.x_vel;
            this.y += this.y_vel;
            this.cannon.position.x = this.x;
            this.cannon.position.y = this.y;
        }else{
        }
    }      
    /* check_array(array,type){
        //An array of all intersections between ball and forcefield

        // new x and y positions to determine where ball would be on next frame
        var x_pos = this.x + this.x_vel + this.x_vel; 
        var y_pos = this.y + this.y_vel + this.y_vel;

        //create a line going from current cannonball
        var line = new Path.Line(new Point(this.x,this.y), new Point(x_pos,y_pos));
        line.strokeColor = 'black';
        var i;
        var length = array.length;
        var type_of;
        if(type == "ship"){ //Handle ship array
            for(i=0;i<length;i++){
                if(line.intersects(array[i].shipBody)){
                    //If ball and arc touch get intersections and use
                var intersections =  line.getIntersections(array[i].shipBody);
                console.log("intersections: " + intersections)
                console.log("length: " + intersections.length)
                var tangent = intersections[0].point;
                console.log("tangent: " + tangent)
                var angle = tangent.angle;
                console.log("angle: " + angle)
                this.collision(angle);
    
                //Deal damage and check if hp of item
                // is 0 if so, remove from array
                array[i].planeBody.hp -= 100;
                if(array[i].planeBody.hp <= 0){
                    array[i].shipBody.remove();
                    array = array.splice(i,1);
                }
                }
            }
        }else{ //Handle plane array 
            for(i=0;i<length;i++) {
                if(line.intersects(array[i].planeBody)){
                    //If ball and arc touch get intersections and use
                var intersections =  line.getIntersections(array[i].planeBody);
                console.log("intersections: " + intersections)
                console.log("length: " + intersections.length)
                var tangent = intersections[0].point;
                console.log("tangent: " + tangent)
                var angle = tangent.getDirectedAngle(tangent);
                console.log("angle: " + angle)
                this.collision(angle); 
                //Deal damage and check if hp of item
                // is 0 if so, remove from array
                array[i].planeBody.hp -= 100;
                if(array[i].planeBody.hp <= 0){
                    array[i].planeBody.remove();
                    array = array.splice(i,1);
                }
                }
            }
    }
    }*/
} 
        
class User {
    constructor() {
        
        // y location of user on screen
        this.userYLoc = 814 * hUnit;
        
        // size and speed attributes can be used to change entire User
        this.size = 40 * wUnit;
        
        this.speed = 20 * wUnit;

        //Can be changed once implementation of collision works
        this.x_vel = 0;
        this.y_vel = 0;

        //forcefield properties in terms of size
        this.forcefieldWidth = this.size;
        this.forcefieldHeight = this.forcefieldWidth / 2;
        
        //ship Body properties in terms of size
        this.shipTop = this.userYLoc + (this.size /2);
        this.shipHeight = this.size / 5;
        this.shipWidth = this.size * (4/5);
        this.shipCorner = this.size * (3/5);

        // points associated with forcefield
        this.from = new paper.Point
            (center - this.forcefieldWidth, this.userYLoc);   // left
        this.through = new paper.Point
            (center, this.userYLoc - this.forcefieldHeight ); // top
        this.to = new paper.Point
            (center + this.forcefieldWidth, this.userYLoc);   //right
                
        // forcefield path consisting of arc and connecting line
        this.arc = new paper.Path.Arc(this.from, this.through, this.to);
        this.connect = new paper.Path();
        this.connect.add(this.from);
        this.connect.add(this.to);

        // create path associated with the ship
        this.shipBody = new paper.Path()
                
        /* Ship points written in terms of properties */
        //left bound
        this.shipBody.add(new paper.Point
            (center - this.shipWidth, this.shipTop)); 
        //top left corner
        this.shipBody.add(new paper.Point
            (center - this.shipCorner, this.shipTop - this.shipHeight)); 
        //top right corner
        this.shipBody.add(new paper.Point
            (center + this.shipCorner, this.shipTop - this.shipHeight)); 
        //right bound
        this.shipBody.add(new paper.Point
            (center + this.shipWidth, this.shipTop)); 
        // bottom right corner
            this.shipBody.add(new paper.Point
            (center + this.shipCorner, this.shipTop + this.shipHeight)); 
        // bottom left corner
        this.shipBody.add(new paper.Point
            (center - this.shipCorner, this.shipTop + this.shipHeight)); 
        
        // style the ship body
        this.shipBody.closed = true;
        this.shipBody.fillColor = 'grey';
      
        // style the forcefield
        /* this.arc.fullySelected = true; */
        this.arc.strokeColor = 'blue';
        this.connect.strokeColor = 'blue';
        this.arc.strokeWidth = 3;
        this.connect.strokeWidth = 2;
        this.arc.fillColor = 'cyan';
    }

    update(direction) {
        if(direction == 1) {
            this.arc.position.x += this.speed;
            this.connect.position.x += this.speed;
            this.shipBody.position.x += this.speed;
            console.log('h');
            }
        if(direction == -1) {
            this.arc.position.x -= this.speed;
            this.connect.position.x -= this.speed;
            this.shipBody.position.x -= this.speed;
            console.log('h');
        }
    }
    update2(point) {
        this.arc.position.x = point.x;
        this.connect.position.x = point.x;
        this.shipBody.position.x = point.x;
    }
}