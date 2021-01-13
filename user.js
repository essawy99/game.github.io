     
class User {
    constructor() {
        //Initialize user score and coins
        this.score = 0;
        this.coins = 0;
        //Initialize number of balls
        this.num_balls = 5; 
        
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
    spend_coins(cost){ // decrease coins upon spending
        this.coins -= cost; 
    }
    scoreUpdate(points){ // Update score and coins
        this.score += points;
        this.coins += points;
    }
    update_balls(num){ // Update number of balls
        this.num_balls += num;
    }
    get_balls(){ //Return number of balls
        return this.num_balls;
    }
}
