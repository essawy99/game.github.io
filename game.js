class Game{
    
    constructor(type,difficulty){
        // record game type
        this.type = type;

        // figure out number of ships to generate
        // based on parameters
        var numShips;
        if(type == campaign) {
            numShips = 2 * difficulty;
        }
        else if(difficulty == "easy"){
            numShips = 10;
        }
        else if(difficulty == "medium"){
            numShips = 20;
        }
        else if(difficulty == "hard"){
            numShips = 30;
        }
        else {
            numShips = 6;
        }
        
        //Create background
        this.back = new Background(); //Beach
        this.tanks = new Tanks(10); //Friendly tanks
        this.ships = new EnemyShips(numShips); //A new ship per level
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

    update(mouseLoc) {	
		this.cannonBalls.update(this.user, this.ships, this.planes);
        this.ships.update(this.planes);
        this.planes.update(this.health);
        if(this.type != "home") {
            this.user.update(mouseLoc)
        }    
    }

    endGame() { //returns true if level is done else if not
        if(this.type != "home") {
			this.health.deleteAll();
        	this.user.deleteAll();
        }
        this.cannonBalls.deleteAll();
        this.ships.deleteAll();
        this.planes.deleteAll();
        
    }

}

