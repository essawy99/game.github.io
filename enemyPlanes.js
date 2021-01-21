/* Object to store a game's planes */
class EnemyPlanes {
    constructor() {
        this.array =[];
    }

    //-----------------------------------------------------------------
    /* Updates plane position */
    update(health) {
        // iterate through each non-null object in plan's array
        for(var i=0; i<this.array.length; i++) {
            var plane = this.array[i];
            //removes plane if offScreen
            if (plane.body.path0.position.y > 1100*hUnit) {
                this.remove(i);
            }
            // if plane reaches homeBase launch airstrikes
            else if(plane.body.path0.position.y >= (15 * h / 16)){
                if(plane.bombed == false){
                    var bombPoint = new Point(
                        plane.body.path0.position.x, 
                        plane.body.path0.position.y)
                    new Explosion(bombPoint);
					if(health != null) {
						health.takeDamage(5);
					}
                    plane.bombed = true;                   
                }
                plane.body.update(0, 1*hUnit);                
            }
            // move position 1 unit forward
            else{
                plane.body.update(0, 1*hUnit); 
            }    
        }
    }
    
    //-----------------------------------------------------------------
    /* removes plane from screen and array */
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
    /* generates plane at location xLoc,yLoc */
    spawnPlane(xLoc, yLoc) {
        this.array.push(new EnemyPlane(xLoc,yLoc));
    }

    //-----------------------------------------------------------------
    /* removes all plane paths from screen*/
    deleteAll(){
        for(var i = 0;i<this.array.length;i++){
            this.array[i].body.remove();
        }
        this.array = [];
    }
    //-----------------------------------------------------------------
    /* Checks if any planes are alive */
    planesDead(){
        for(var i = 0; i < this.array.length; i++){
            if(this.array[i] != null){
                return false;
            }
        }
        return true;
    }
}

/* enemy plane object  with associated attributes*/
class EnemyPlane {
    constructor(xLoc, yLoc){
        this.body = new plane(xLoc, yLoc)
        this.bombed = false; // whether or not plane dropped bomb
        this.hp = 100; // Health
    }
}


