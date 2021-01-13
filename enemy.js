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
        
        this.ship = new enemyShip(this.shipX, this.userYLoc);
        
        this.hp = 400;
        
        
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
                enemy.spawnPlane(this.shipX,this.userYLoc);
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
    update() {
        
        for(var i=0; i<this.planeArray.length; i++) {
            if(this.planeArray[i] != null) {
                
                this.planeArray[i].update()
                
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
        this.body = new plane(xLoc, yLoc)
        
        var plane_array = [];

        
        this.hp = 100; // Health
        
        plane_array.push(this.planeBody)
    }
    update(){
        this.body.update(0, 1*hUnit);
        
        
        if(this.body.path0.position.y >= (7 * h / 8)){
            new Crater(new Point(this.body.path0.position.x,this.body.path0.position.y));
        }else if(this.body.path0.position.y >= h){
            this.body.remove();
            return true;
        }
        return false;
    }

}



