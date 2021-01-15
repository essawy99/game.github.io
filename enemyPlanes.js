class EnemyPlanes {
    constructor() {
        this.array =[];
    }

    update(health) {
        for(var i=0; i<this.array.length; i++) {
            if(this.array[i] != null) {
                if (this.array[i].body.path0.position.y > 1000*hUnit) {
                    this.array[i].body.remove();
                    this.array[i] = null;
                }
                else if(this.array[i].body.path0.position.y >= (7 * h / 8)){
                    if(this.array[i].bombed == false){
                        new Crater(new Point(this.array[i].body.path0.position.x,this.array[i].body.path0.position.y));
						if(health != null) {
							health.takeDamage(5);
							console.log("Took damage: " + health._health)
						}
                        this.array[i].bombed = true;
                        this.array[i].body.update(0, 1*hUnit);                    }
                        this.array[i].body.update(0, 1*hUnit);                }
                else {
                    this.array[i].body.update(0, 1*hUnit);                }
            }
        }
    }

    takeDamage(damage, index, user) {
        //Deal damage and check if hp of item
        // is 0 if so, remove from array
        this.array[index].hp -= damage;
                
        if(this.array[index].hp <= 0){
            this.array[index].body.remove();
            this.array.splice(index,1);
            user.scoreUpdate(400);
        }
    }

    spawnPlane(xLoc, yLoc) {
        this.array.push(new EnemyPlane(xLoc,yLoc));
    }

    deleteAll(){
        var i;
        for(i = 0;i<this.array.length;i++){
            this.array[i].body.remove();
        }
        this.array = [];
    }
}

  //Class to handle enemy planes
class EnemyPlane {
    constructor(xLoc, yLoc){
        // Array to store enemy plane
        this.body = new plane(xLoc, yLoc)
        
        var plane_array = [];
        this.bombed = false;

        
        this.hp = 100; // Health
        
        plane_array.push(this.body)
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


