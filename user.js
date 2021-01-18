/* Object to store a user and it's necessary attributes */
class User {
    constructor() {
       //Initialize user score and coins
       this.score = 0;
       this.coins = 0;
    
       // y location of user on screen
       this.userYLoc = 814 * hUnit;
    
    
       // Previous Move
    
       this.previousMove;
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
       /* this.connect.strokeColor = 'blue'; */
       this.arc.strokeWidth = 3;
       /* this.connect.strokeWidth = 2;
       this.arc.fillColor = 'cyan'; */
       this.sp = -1;
    
       this.generateElectricity();
    }
    //-----------------------------------------------------------------
    /* Generates electricity between ship and arc */
    generateElectricity(xPos) {
       this.sp++;
       if(this.sp % 2 == 0) {
    
       // lUnit contains 10 different points of the arc
       var lUnit = this.arc.length /10
    
       // Create 2 sources of electricity and 2 paths
       this.sourceLeft = {x : this.shipBody.position.x + 5 * wUnit, y: this.shipBody.position.y};
       this.sourceRight = {x : this.shipBody.position.x - 5 * wUnit, y: this.shipBody.position.y};
       this.elecLeft = new Path();
       //this.elec.add(new Point(this.through.x, this.through.y));
       this.elecRight = new Path();
       this.elecLeft.add(new Point(this.sourceLeft.x,this.sourceLeft.y));
       this.elecRight.add(new Point(this.sourceRight.x,this.sourceRight.y));

       this.elecLeft.strokeColor = 'blue';
       this.elecRight.strokeColor = 'blue';
       this.elecLeft.strokeWidth = 2;
       this.elecRight.strokeWidth = 2;
       this.sp = 0;
       this.arc.strokeWidth = 2;
    
    
       for(var i = 0; i < 10; i++) {
           // Get offset of arc based on i value
           var offset = this.arc.getPointAt(i*lUnit)
           // For left elec source
           if(i > 4){

            // Divide into 5 points
            var distanceX = (offset.x - this.sourceLeft.x)/5;
            var distanceY = (offset.y - this.sourceLeft.y)/5;

            //Store previous x and y
            var previousX = this.sourceLeft.x;
            var previousY = this.sourceLeft.y;

            for(var j = 0;j<5;j++){
                //Random movement to create lightning effect
                var random = (Math.random() * 10 * wUnit) - 5 * wUnit;
                //Calculate current x and y point
                var pointX = previousX + distanceX;
                var pointY = previousY + distanceY;

                //Add points to lightning path
                this.elecLeft.add(new Point(pointX + random,pointY));

                //Set previous points to points just added
                previousX = pointX;
                previousY = pointY;
            }
           }
           // For right elec source
           else{
            // Divide into 5 points
            var distanceX = (offset.x - this.sourceRight.x)/5;
            var distanceY = (offset.y - this.sourceRight.y)/5;

            //Store previous x and y
            var previousX = this.sourceRight.x;
            var previousY = this.sourceRight.y;

            for(var j = 0;j<5;j++){
                //Random movement to create lightning effect
                var random = (Math.random() * 10 * wUnit) - 5 * wUnit;
                //Calculate current x and y point
                var pointX = previousX + distanceX;
                var pointY = previousY + distanceY;

                //Add points to lightning path
                this.elecLeft.add(new Point(pointX + random,pointY));

                //Set previous points to points just added
                previousX = pointX;
                previousY = pointY;
            }
           }
        }
    }
    }
    //-----------------------------------------------------------------
    /* Updates user position (ship,arc, and electricity) */
    update(point) {
       //Store previous move
       this.previousMove = this.arc.position.x - point.x; //Double check!
       this.elecLeft.remove();
       this.elecRight.remove();
       this.arc.strokeWidth = 0;
       this.generateElectricity(point.x);
       this.arc.position.x = point.x;
       this.connect.position.x = point.x;
       this.shipBody.position.x = point.x;
    
    }
    //-----------------------------------------------------------------
    /* Function to update coins upon spending */
    spend_coins(cost){ // decrease coins upon spending
       this.coins -= cost;
    }
    //-----------------------------------------------------------------
    /* Function to update score */
    scoreUpdate(points){ // Update score and coins
       this.score += points;
       this.coins += points;
       document.getElementById("scoreDisplay").innerHTML = "Score: " + this.score;
        document.getElementById("moneyDisplay").innerHTML = "Money: " + this.coins;
        
        if(this.coins >= 400) {
        document.getElementById("buy").style.color = "#d63d22";
        document.getElementById("buy").style.borderColor = "#d63d22";
        } else if(this.coins < 400) {
        document.getElementById("buy").style.borderColor = "grey";
        document.getElementById("buy").style.color = "grey";
        }
    }
    //-----------------------------------------------------------------
    /* Update number of balls */
    update_balls(num){
       this.num_balls += num;
    }
    //-----------------------------------------------------------------
    /* Return number of balls */
    get_balls(){ 
       return this.num_balls;
    }
    //-----------------------------------------------------------------
    /* Function to remove user object and attributes off screen  */
    deleteAll() { 
        this.shipBody.remove();
        this.arc.remove();
        this.connect.remove();
        this.elecLeft.remove();
        this.elecRight.remove();
    }
}
    