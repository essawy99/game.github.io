class Game{
    static environment;
    constructor(type,difficulty){
        //Create background
        var back = new Background(); //Beach
        var tanks = new Tanks(10); //Friendly tanks
        
        
        // Based on input create environment
        var level;
        if(type == "campaign"){
            level = new Level(difficulty);
        }else{
            level = new Survival(difficulty);
        }
        this.environment = level;
    }

}