// Level class
class Level{
    constructor(level){
        this.environment = {
            health : new Health(),
            cannonball : new Cannon(500 *wUnit,500 *hUnit),
            user : new User(),
            ships : new Enemy_Ships(level), //A new ship per level
            enemy_planes : new Enemy_Planes
        }
        this.lvl = level;
    }
    // Checks if level is complete by checking if there are any active 
    // Planes or Ships
    level_end(ships,planes){ //returns true if level is done else if not
        var i;
        // For loop to check if any ships are alive
        for(i = 0;i<ships.shipArray.length;i++){
            if(ships.shipArray[i] != null){
                if(ships.shipArray[0].hp > 0){
                    return false
                }
            }
        }

        // For loop to check if any planes are alive
        var j;
        for(j = 0;j<planes.planeArray.length;j++){
            if(ships[j] != null){
                if(planes.planeArray[j].bombed == false){
                    return false
                }
            }
        }
        return true;
    }
}

// Survival Class
class Survival{
    constructor(difficulty){
        var num_ships;
        if(difficulty == "easy"){
            num_ships = 10;
        }else if(difficulty == "medium"){
            num_ships = 20;
        }else{
            num_ships = 30;
        }
        this.environment = {
            health : new Health(),
            cannonball : new Cannon(500 *wUnit,500 *hUnit),
            user : new User(),
            ships : new Enemy_Ships(num_ships), //Depends on difficulty
            enemy_planes : new Enemy_Planes
        }
    }
}