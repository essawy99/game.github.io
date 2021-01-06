

class Cannon {
    constructor(xLoc, yLoc) {
        this.velocity = 2 * wUnit;
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
        var d = 2 * this.dot(v, n);
        this.x_vel -= d * n.x;
        this.y_vel -= d * n.y;
        this.x += this.x_vel;
        this.y += this.y_vel;
        this.cannon.position.x = this.x;
        this.cannon.position.y = this.y;
    }
    dot(v1, v2) {
        return v1.x * v2.x + v1.y * v2.y
      }
    check(){ //function to check collision with top sides and bottom
        if(this.x <= 0){
            this.collision(90);
        }else if(this.x >= w){
            this.collision(270);
        }else if(this.y <= 0){
            this.collision(360);
        }else if(this.y >= h){
            this.collision(180);
        }
    }
}
        
class User {
    constructor() {
        
        // y location of user on screen
        this.userYLoc = 814 * hUnit;
        
        // size and speed attributes can be used to change entire User
        this.size = 40 * wUnit;
        
        this.speed = 20 * wUnit;
        
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