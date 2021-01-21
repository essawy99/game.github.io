/* Object that stores game and necessary attributes */
class Game{
    
    constructor(type,difficulty){
        // record game type and difficulty
        this.type = type;
        this.difficulty = difficulty;
        // figure out number of ships to generate
        // based on parameters
        this.numShips;
        if(type == "campaign") {
            this.numShips = difficulty -1;
        }
        else if(difficulty == "easy"){
            this.numShips = 1;
        }
        else if(difficulty == "medium"){
            this.numShips = 2;
        }
        else if(difficulty == "hard"){
            this.numShips = 3;
        }
        else {
            this.numShips = 3;
        }
        
        //Create background
        this.back = new Background(); //Beach
        this.ships = new EnemyShips(this.numShips); //A new ship per level
        this.planes = new EnemyPlanes();

        if(type == "home") {
            this.health = null;
            this.user = null;
            this.cannonBalls = new CannonBalls(true);
        }
        if(type != "home") {
            this.health = new Health();
            this.user = new User();
            this.cannonBalls = new CannonBalls(false);
        }
    }
    //-----------------------------------------------------------------
    /* Update game state */
    update(mouseLoc) {	
        
        this.cannonBalls.update(this.user, this.ships, this.planes);
        
        
        this.ships.update(this.planes);
       
        this.planes.update(this.health);
        
        if(this.type == "home") {
			return 0;
		}
       
        this.user.update(mouseLoc)
        //if game is over
        if(this.cannonBalls.ballsDead() || this.health <= 0){
            return -1;
        }
        // if you win
        if(this.ships.shipsDead()){
            if(this.type == "survival") {
                this.numShips *= 2;
                this.ships = new EnemyShips(this.numShips)
            }
            else if(this.planes.planesDead()){
                return 1;
            }
        }
        return 0; // If game is still continuing 
    }

    //-----------------------------------------------------------------
    /* Purchase cannon function */
    buyCannon() {
        this.cannonBalls.addBall(this.user);
        this.user.spendCoins(400);
    }
    //-----------------------------------------------------------------
    /* Removes all objects on screen when called */
    endGame() {
        if(this.type != "home") {
			this.health.deleteAll();
        	this.user.deleteAll();
        }
        this.cannonBalls.deleteAll();
        this.ships.deleteAll();
        this.planes.deleteAll();
    }

}