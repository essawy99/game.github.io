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
                cannonball : new Cannon(500 *wUnit,500 *hUnit),
                user : new User(),
                ships : new Enemy_Ships(difficulty*2), //A new ship per level
                enemy_planes : new Enemy_Planes,
                CannonBalls : new CannonBalls
            }
        }
        else if(type == "home") {

        }
        else{
            this.environment = {
                health : new Health(),
                cannonball : new CannonBalls(),
                user : new User(),
                ships : new Enemy_Ships(difficulty*2), //A new ship per level
                enemy_planes : new Enemy_Planes,
                CannonBalls : new CannonBalls()
            }
            
        }
        
    }

    update() {
        
        console.log("poop");
        this.environment.ships.update(this.environment.enemy_planes);
        this.environment.enemy_planes.update(this.environment.health);
        this.environment.CannonBalls.update(this.environment.user, this.environment.ships, this.environment.enemy_planes);
    
    }
    endGame() { //returns true if level is done else if not
        this.environment.ships.deleteAll();
        this.environment.enemy_planes.deleteAll();
        
    }

}

