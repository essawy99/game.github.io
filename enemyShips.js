//class that handles the creation of an enemy ship
class EnemyShips {
    constructor(numShips) {
        this.array = [];
        this.shipSpacing = w / (numShips);
        this.numShips = numShips
        for(var i =0; i < numShips; i++) {
            this.array.push(new EnemyShip(i * this.shipSpacing)); 
        }
    }
    update(enemy) {
        for(var i =0; i < this.numShips; i++) {
           if(this.array[i] != null) {
            this.array[i].spawnPlane(enemy); 
           }
        }
    }
    remove(index){
        this.array[index].body.remove();
        this.array[index] = null;
    }
    takeDamage(damage, index, user) {
        //Deal damage and check if hp of item
        // is 0 if so, remove from array
        this.array[index].hp -= damage;
        if(this.array[index].hp <= 0){
            this.remove(index);
            user.scoreUpdate(400);
        }
    }
    deleteAll(){
        var i;
        for(i = 0;i<this.array.length;i++){
            this.array[i].body.remove()
        }
        this.array = [];
    }

    move_ships(){
        // Variable that shows where ships should stop moving
        var goal = 100 * hUnit;

        // while loop to show ship animations
        var start = -100 * hUnit; // where ships should start
        var length = this.array.length; // Length of ship array
        while(start != goal){
            var i;
            // For loop to update all ships location
            for(i = 0; i< length;i++){
                this.array[i].ship.path0.position.y += hUnit*10;
                this.array[i].userYloc += hUnit*10;
            }
            start += hUnit*10;
        }
    }
    // Checks if any ships are alive
    shipsDead(){
        var j;
        for(j = 0;this.array.length;j++){
            if(this.array[j] != null){
                if(this.array[j].hp > 0){
                    return false;
                }
            }
        }
        return true;
    }

}

class EnemyShip {
    constructor(shipSpacing) {
        

        // y location of ship on screen
        this.userYLoc = 100 * hUnit; //Starts off screen so ships can move up

        // x location of ship on screen
        this.shipX  = shipSpacing + 50 * wUnit;
        
        // size and speed attributes can be used to change ship size
        this.size = 40 * wUnit;
        this.speed = 20 * wUnit;
        
        this.body = new shipBody3(this.shipX, this.userYLoc);
        
        this.hp = 400;

        
        
       
        }
        
        
        spawnPlane(enemy) {
            var chance = Math.random();
            if(chance > .9995 && this.hp > 0) {
                enemy.spawnPlane(this.shipX,this.userYLoc);
            }

        }
    }