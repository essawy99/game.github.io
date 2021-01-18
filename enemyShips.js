//class that handles the creation of an enemy ship
class EnemyShips {
    constructor(numShips) {
        this.array = [];
        this.numShips = 5;
        var shipSpacing = ((w/2) - 50 * wUnit) / (this.numShips);
        this.array.push(new EnemyShip(center)); 
        for(var i =1; i <= this.numShips; i++) {
            console.log("yo");
            this.array.push(new EnemyShip(center - i * shipSpacing)); 
            this.array.push(new EnemyShip(center + i * shipSpacing)); 
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
        console.log("if")
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
        for(j = 0;j < this.array.length;j++){
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
    constructor(xLoc) {
        
        this.yLoc = 50 * wUnit; //Starts off screen so ships can move up
        this.xLoc = xLoc
        this.body = new shipBody3(this.xLoc, this.yLoc);  
       
        this.hp = 400;
     
        }
        
        
        spawnPlane(enemy) {
            console.log('1');
            var chance = Math.random();
            if(chance > .9995) {
                console.log('2');
                enemy.spawnPlane(this.xLoc,this.yLoc);
            }

        }
    }