/* controls the movement between different UI areas
   and builds new levels / survival objects. updates those
   objects every frame */


//----------------------------------------------------------------- 

/* 

               HELPER FUNCTIONS

*/

// A function that stores game data in local storage
function store(lvl){
   // Delete most recent level to update it to new one
   localStorage.removeItem('recent_lvl');
   // Store latest level
   localStorage.setItem('recent_lvl',lvl);
}
// A function that loads and returns game's local storage
function load_local(){
   // Load local storage
   var storage = localStorage.getItem('recent_lvl'); 

}

// A function that deletes all game data
function delete_all(){
   localStorage.clear();
}

/*
   TODO (DHEVA): Function should call your function
   to show the campaign home.
   Level is passed in as the highest level user has
   completed */
function campaign_home(level){
   // Remove home first
   endHome();
}

/*
   TODO (DHEVA): Function should call your function
   to show the survival home */
function survival_home(){
   // Remove home first
   endHome(); 
}

//----------------------------------------------------------------- 

/* 

               GAME LOOP

*/
let gameStatus = 0; //1-> Game is running, 0-> Game is paused

//----------------------------------------------------------------- paper.js set up
paper.install(window);
var canvas = document.getElementById('myCanvas');
paper.setup(canvas);

//Start home
start_home();

// Variable that stores game_mode
var game_mode = null;

// Environemnt variable
var environment;

/*
   Upon button click on home page either
   campaign_home() or survival_home() should be called */


/*
   Two event listeners that check if either survival is chosen 
   or if campaign is chosen
*/
document.getElementById("survival").addEventListener('click',(event) =>{
   game_mode = "survival";
   // Get users last level completed if they have storage
   var level = load_local();
   if(level != null){
      campaign_home(level);
   }else{
      campaign_home(0);
   }
});
document.getElementById("campaign").addEventListener('click',(event) =>{
   game_mode = "campaign"
   survival_home();
});


