//class that handles the creation of an enemy ship
class Enemy_Ships {
    constructor(numShips) {
        this.shipArray = [];
        this.shipSpacing = w / (numShips + 1);
        this.numShips = numShips
        for(var i =0; i < numShips; i++) {
            this.shipArray.push(new Enemy_Ship(i * this.shipSpacing)); 
        }
    }
    update(enemy) {
        for(var i =0; i < this.numShips; i++) {
           if(this.shipArray[i] != null) {
            this.shipArray[i].spawnPlane(enemy); 
           }
        }
    }
    remove(index){
        this.shipArray[index].shipBody.remove();
        this.shipArray[index] = null
    }

}

class Enemy_Ship {
    constructor(shipSpacing) {
        

        // y location of ship on screen
        this.userYLoc = 100 * hUnit;

        // x location of ship on screen
        this.shipX  = shipSpacing +30 * wUnit;

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
        
        this.shipBody = new Path()
        //hp default is 400
        this.hp = 400;
        /* Ship points written in terms of properties */
        //left bound
        this.shipBody.add(new Point
            (center - this.shipWidth, this.shipTop)); 
        //top left corner
        this.shipBody.add(new Point
            (center - this.shipCorner, this.shipTop - this.shipHeight)); 
        //top right corner
        this.shipBody.add(new Point
            (center + this.shipCorner, this.shipTop - this.shipHeight)); 
        //right bound
        this.shipBody.add(new Point
            (center + this.shipWidth, this.shipTop)); 
        // bottom right corner
            this.shipBody.add(new Point
            (center + this.shipCorner, this.shipTop + this.shipHeight)); 
        // bottom left corner
        this.shipBody.add(new Point
            (center - this.shipCorner, this.shipTop + this.shipHeight)); 
        //rotate ship 90 degrees
        this.shipBody.rotate(90);
        //change x location
        this.shipBody.position.x = this.shipX; 
        //this.shipBody.position.x += this.xLoc[row_counter];
        // style the ship body
        this.shipBody.closed = true;
        this.shipBody.fillColor = 'red';
        
        
        /*
        row_counter += 1
        if(row_counter > 3){
            row_counter = 0;
        }
        */
        }
        spawnPlane(enemy) {
            var chance = Math.random();
            if(chance > .9995) {
                enemy.spawnPlane(this.shipBody.position.x,this.shipBody.position.y);
            }

        }
    }



//Credit: https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
//Random integer selection used in picking what ship to spawn plane from
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
class Enemy_Planes {
    constructor() {
        this.planeArray =[];
    }
    update(health) {
        for(var i=0; i<this.planeArray.length; i++) {
            if(this.planeArray[i] != null) {
                if (this.planeArray[i].planeBody.position.y > 1000*hUnit) {
                    this.planeArray[i].planeBody.remove();
                    this.planeArray[i] = null;
                }
                else if(this.planeArray[i].planeBody.position.y >= (7 * h / 8)){
                    if(this.planeArray[i].planeBody.bombed == false){
                        new Crater(new Point(this.planeArray[i].planeBody.position.x,this.planeArray[i].planeBody.position.y));
                        health.takeDamage(5)
                        console.log("Took damage: " + health._health)
                        this.planeArray[i].planeBody.bombed = true;
                        this.planeArray[i].planeBody.position.y += 1 * hUnit
                    }
                    this.planeArray[i].planeBody.position.y += 1 * hUnit
                }
                else {
                    this.planeArray[i].planeBody.position.y += 1 * hUnit;
                }
            }
        }
    }
    spawnPlane(xLoc, yLoc) {
        this.planeArray.push(new Enemy_Plane(xLoc,yLoc));
    }
}

  //Class to handle enemy planes
class Enemy_Plane {
    constructor(xLoc, yLoc){
        // Array to store enemy plane
        var plane_array = [];

        this.planeBody = new paper.Path()
        this.planeBody.hp = 100; // Health
        this.planeBody.bombed = false; // true if plane bombed beach false otherwise
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
        
        this.planeBody.position.x = xLoc
        this.planeBody.position.y = yLoc 
        this.planeBody.closed = true;
        this.planeBody.fillColor = 'blue';
        plane_array.push(this.planeBody)
    }
    update(){
        this.planeBody.position.y += 1*hUnit;

        if(this.planeBody.position.y >= (7 * h / 8)){
            new Crater(new Point(this.planeBody.position.x,this.planeBody.position.y));
        }else if(this.planeBody.position.y >= h){
            this.planeBody.remove();
            return true;
        }
        return false;
    }

}



