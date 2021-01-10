//class that handles the creation of an enemy ship
class Enemy_Ships {
    constructor(num_ships) {
        var i;
        // x and y location of ship on screen
        this.userYLoc = 100 * hUnit;
        // Array of x locations for each row of generated ships
        this.xLoc = [0,50,-50,-100]; 
        
        // size and speed attributes can be used to change ship size
        this.size = 40 * wUnit;
        this.speed = 20 * wUnit;
        
        
        //ship Body properties in terms of size
        this.shipTop = this.userYLoc + (this.size /4);
        this.shipHeight = this.size / 5;
        this.shipWidth = this.size * (4/5);
        this.shipCorner = this.size * (3/5);
        //row counter (to know spot in row)
        var row_counter = 0;
        for(i=0;i<num_ships;i++){
        console.log(String(i) + "th ship")
        if((i % 4) == 0 && i != 0){
            console.log(String(i) + ": " + i%4)
            this.userYLoc += 100; //increment y to change row
            this.shipTop = this.userYLoc + (this.size /4);
        }
        //start of new ship
        this.shipBody = new paper.Path()
        this.shipBody.hp = 400;
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
        //rotate ship 90 degrees
        this.shipBody.rotate(90);
        //change x location
        console.log(String(row_counter) + "ith row")
        this.shipBody.position.x += this.xLoc[row_counter];
        // style the ship body
        this.shipBody.closed = true;
        this.shipBody.fillColor = 'red';
        ship_array.push(this.shipBody)
        row_counter += 1
        if(row_counter > 3){
            row_counter = 0;
        }
        }
    }
}


//Credit: https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
//Random integer selection used in picking what ship to spawn plane from
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
//Class to handle enemy planes
class Enemy_Plane {
    constructor(){
        // Array to store enemy plane
        var plane_array = [];

        this.planeBody = new paper.Path()
        this.planeBody.hp = 100; // Health
        this.planeBody.add(new paper.Point
            (center + 80*wUnit, height - 200*hUnit)); // bottom right of plane
        this.planeBody.add(new paper.Point
            (center + 80*wUnit, height - 200*hUnit)); // Point on the tail of the plane between bottom left and right
        this.planeBody.add(new paper.Point
            (center - 80*wUnit, height - 200*hUnit)); // bottom left of plane
        this.planeBody.add(new paper.Point
            (center - 60*wUnit, height - 175*hUnit)); // mid right point of plane
        this.planeBody.add(new paper.Point
            (center + 60*wUnit, height - 175*hUnit)); // mid left point of plane
        this.planeBody.add(new paper.Point
            (center - 90*wUnit, height - 175*hUnit)); // right wing of plane
        this.planeBody.add(new paper.Point
            (center - 90*wUnit, height - 175*hUnit)); // left wing of plane
        this.planeBody.add(new paper.Point
            (center - 50*wUnit, height - 150*hUnit)); // nose/cockpit of plane
        var spawn_from = randomIntFromInterval(0,ship_array.length-1);
        //set planes x and y to ships x and y
        this.planeBody.position.x = ship_array[spawn_from].position.x
        this.planeBody.position.y = ship_array[spawn_from].position.y
        this.planeBody.closed = true;
        this.planeBody.fillColor = 'blue';
        plane_array.push(this.planeBody)
    }
    update(){
        this.planeBody.position.y += 5;

        if(this.planeBody.position.y >= (7 * h / 8)){
            new Crater(new Point(this.planeBody.position.x,this.planeBody.position.y));
        }else if(this.planeBody.position.y >= h){
            this.planeBody.remove();
            return true;
        }
        return false;
    }

}
var ship_array = []; //array to store ships


