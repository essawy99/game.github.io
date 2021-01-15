     
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
        /* this.connect.strokeColor = 'blue'; */
        this.arc.strokeWidth = 3;
        /* this.connect.strokeWidth = 2;
        this.arc.fillColor = 'cyan'; */
        this.sp = -1;

        this.generateElectricity();
    }

    generateElectricity(xPos) {
        this.sp++;
        console.log('made');
        if(this.sp % 2 == 0) {

        var lUnit = this.arc.length /10
        var l = 0;
        
        
        this.elecSource = {x : this.shipBody.position.x - 5 * wUnit, y: this.shipBody.position.y};
        this.elec = new Path();
        this.elec.add(new Point(this.through.x, this.through.y));
        this.elec.strokeColor = 'blue';
        this.elec.strokeWidth = 2;
        this.sp = 0;
        this.arc.strokeWidth = 2;
        
        
        for(var i = 0; i < 4; i++) {
            var random = (Math.random() * 10 * wUnit) - 5 * wUnit;
            var off = (this.through.y - this.to.y) / 4
            this.elec.add(new Point(this.through.x + random, this.through.y - off * i));
        }
        this.elec.add(this.elecSource.x, this.elecSource.y);
    }
    }

    update(point) {
        this.elec.remove();
        this.arc.strokeWidth = 0;
        this.generateElectricity(point.x);
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
        document.getElementById("scoreDisplay").innerHTML = "Score: " + this.score;
		document.getElementById("moneyDisplay").innerHTML = "Money: " + this.coins;

    }
    update_balls(num){ // Update number of balls
        this.num_balls += num;
    }
    get_balls(){ //Return number of balls
        return this.num_balls;
    }
}
