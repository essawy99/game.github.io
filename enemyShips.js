/* Object to store a game's ships */
class EnemyShips {
    constructor(numShips) {
        this.array = []; //Array to store enemy ships
        this.numShips = numShips;
        var shipSpacing = ((w/2) - 50 * wUnit) / (this.numShips); //Spacing of ships
        this.array.push(new EnemyShip(center));

        //Add ships to array
        for(var i =1; i <= this.numShips; i++) {
            this.array.push(new EnemyShip(center - i * shipSpacing));
            this.array.push(new EnemyShip(center + i * shipSpacing));
        }
    }
    //-----------------------------------------------------------------
    /* Updates ship position */
    update(enemy) {
        for(var i =0; i < this.array.length; i++) {
            // Spawn a plane based off of randomness
            var chance = Math.random();
            if(chance > .997) {
                enemy.spawnPlane(this.array[i].xLoc,this.array[i].yLoc);
            }
           
        }
    }
    //-----------------------------------------------------------------
    /* removes ship from creen and array */
    remove(index){
        this.array[index].body.remove();
        this.array.splice(index,1);
    }
    //-----------------------------------------------------------------
    /* Deal damage and check if hp of item is 0 if so, remove from array */
    takeDamage(damage, index, user) {
        //Deal damage and check if hp of item
        // is 0 if so, remove from array
        this.array[index].hp -= damage;
        if(this.array[index].hp <= 0){
            this.remove(index);
            user.scoreUpdate(400);
        }
    }
    //-----------------------------------------------------------------
    /* Remove all ship paths and set array to empty */
    deleteAll(){
        for(var i = 0;i<this.array.length;i++){
            this.array[i].body.remove()
        }
        this.array = [];
    }

    //-----------------------------------------------------------------
    /* Checks if all ships are dead. If true return true otherwise return false */
    shipsDead(){
        for(var i = 0; i < this.array.length; i++){
            if(this.array[i] != null){
                return false;
            }
        }
        return true;
    }
}
//-----------------------------------------------------------------
/* Object to store a ship and it's relevant data */
class EnemyShip {
    constructor(xLoc) {

        this.yLoc = 100 * hUnit; //Starts off screen so ships can move up
        this.xLoc = xLoc;
        this.body = new shipBody3(this.xLoc, this.yLoc);
        this.hp = 400;

    }
}
