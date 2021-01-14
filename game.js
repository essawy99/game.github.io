class Game{
    
    constructor(type,difficulty){
        //Create background
        var back = new Background(); //Beach
        var tanks = new Tanks(10); //Friendly tanks
        
        
        // Based on input create environment
        var level;
        if(type == "campaign"){
            this.environment = {
                health : new Health(),
                user : new User(),
                ships : new EnemyShips(difficulty*2), //A new ship per level
                enemy_planes : new EnemyPlanes,
                CannonBalls : new CannonBalls
            }
        }
        else if(type == "home") {

        }
        else{
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
                user : new User(),
                ships : new EnemyShips(num_ships), //Depends on difficulty
                enemy_planes : new EnemyPlanes,
                CannonBalls : new CannonBalls()
            }
        }
        
    }

    update(mouseLoc) {
        this.environment.ships.update(this.environment.enemy_planes);
        this.environment.enemy_planes.update(this.environment.health);
        this.environment.CannonBalls.update(this.environment.user, this.environment.ships, this.environment.enemy_planes);
        this.environment.user.update(mouseLoc);
    }
    endGame() { //returns true if level is done else if not
        this.environment.ships.deleteAll();
        this.environment.enemy_planes.deleteAll();
        
    }

}

