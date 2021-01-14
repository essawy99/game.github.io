class Game{
    
    constructor(type,difficulty){
        //Create background
        var back = new Background(); //Beach
        var tanks = new Tanks(10); //Friendly tanks
        this.type = type;
        
        
        // Based on input create environment
        var level;
        if(type == "campaign"){
            this.environment = {
                health : new Health(),
                user : new User(),
                ships : new EnemyShips(difficulty*2), //A new ship per level
                planes : new EnemyPlanes,
                cannonBalls : new CannonBalls
            }
        }
        else if(type == "home") {
            this.environment = {
                health : null,
                user : null,
                ships : new EnemyShips(difficulty*2), //A new ship per level
                planes : new EnemyPlanes,
                cannonBalls : new CannonBalls
            }
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
                enemyPlanes : new EnemyPlanes,
                cannonBalls : new CannonBalls()
            }
        }
        
    }

    update(mouseLoc) {
		if(this.type != "home") {
			this.environment.cannonBalls.update(this.environment.user, this.environment.ships, this.environment.planes);
        	this.environment.user.update(mouseLoc);
        }
        this.environment.ships.update(this.environment.planes);
        this.environment.planes.update(this.environment.health);
    }
    endGame() { //returns true if level is done else if not
        if(this.type != "home") {
			this.environment.health.deleteAll();
        	this.environment.user.deleteAll();
        }
        this.environment.cannonBalls.deleteAll();
        this.environment.ships.deleteAll();
        this.environment.enemy_planes.deleteAll();
        
    }

}

