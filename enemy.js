//class that handles the creation of an enemy ship
class Enemy_Ships {
    constructor(numShips) {
        this.shipArray = [];
        this.shipSpacing = w / (numShips + 1);
        this.numShips = numShips
        for(var i =0; i < numShips; i++) {
            this.shipArray.push(new Enemy_Ship(i * this.shipSpacing)); 
            console.log('built');
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
    takeDamage(damage, index, user) {
        //Deal damage and check if hp of item
        // is 0 if so, remove from array
        this.shipArray[index].hp -= 100;
                
        if(this.shipArray[index].hp <= 0){
            this.remove(index);
            user.scoreUpdate(400);
        }
    }

    move_ships(){
        // Variable that shows where ships should stop moving
        var goal = 100 * hUnit;

        // while loop to show ship animations
        var start = -100 * hUnit; // where ships should start
        var length = this.shipArray.length; // Length of ship array
        while(start != goal){
            var i;
            // For loop to update all ships location
            for(i = 0; i< length;i++){
                this.shipArray[i].ship.path0.position.y += hUnit*10;
                this.shipArray[i].userYloc += hUnit*10;
            }
            start += hUnit*10;
        }
    }

}

class Enemy_Ship {
    constructor(shipSpacing) {
        

        // y location of ship on screen
        this.userYLoc = 100 * hUnit; //Starts off screen so ships can move up

        // x location of ship on screen
        this.shipX  = shipSpacing +30 * wUnit;
        
        // size and speed attributes can be used to change ship size
        this.size = 40 * wUnit;
        this.speed = 20 * wUnit;
        
        this.ship = new enemyShip(this.shipX, this.userYLoc);
        
        this.hp = 400;

        
        
       
        }
        
        
        spawnPlane(enemy) {
            var chance = Math.random();
            if(chance > .9995 && this.hp > 0) {
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

    update(health) {
        for(var i=0; i<this.planeArray.length; i++) {
            if(this.planeArray[i] != null) {
                if (this.planeArray[i].body.path0.position.y > 1000*hUnit) {
                    this.planeArray[i].body.remove();
                    this.planeArray[i] = null;
                }
                else if(this.planeArray[i].body.path0.position.y >= (7 * h / 8)){
                    if(this.planeArray[i].bombed == false){
                        new Crater(new Point(this.planeArray[i].body.path0.position.x,this.planeArray[i].body.path0.position.y));
                        health.takeDamage(5);
                        console.log("Took damage: " + health._health)
                        this.planeArray[i].bombed = true;
                        this.planeArray[i].body.update(0, 1*hUnit);                    }
                        this.planeArray[i].body.update(0, 1*hUnit);                }
                else {
                    this.planeArray[i].body.update(0, 1*hUnit);                }
            }
        }
    }

    takeDamage(damage, index, user) {
        //Deal damage and check if hp of item
        // is 0 if so, remove from array
        this.planeArray[index].hp -= 100;
                
        if(this.planeArray[index].hp <= 0){
            this.planeArray[index].body.remove();
            this.planeArray = this.planeArray.splice(index,1);
            user.scoreUpdate(400);
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
        this.bombed = false;

        
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



