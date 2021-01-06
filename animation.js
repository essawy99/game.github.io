// next four lines initialize paper.js
paper.install(window);
window.onload = function() {
var canvas = document.getElementById('myCanvas');
paper.setup(canvas);

// create tool for animations
var tool = new Tool();

// initialize all required objects
var back = new Background();
var tanks = new Tanks(10);       //buildings
var health = new Health();

var cannonball = new Cannon(200,200);  // cannonball
var user1 = new User();            // user
var ship_array = [];               // ship storage
var ship = new Enemy_Ships(7);     // ships
var plane = new Enemy_Plane();     // plane
var planeArray = [plane];          // plane storage


var total_distance = 0;            // ????
var point = new paper.Point(200,200);
        
view.onFrame = function(event) {
    user1.update2(point);
    cannonball.update();
    
    //Implement top bottom and sided as walls for ball to bounce off
    cannonball.check(); //function to check collisions

    /* a little messy could this functionality
    be moved to the class */
    if(total_distance > 2000){
        var plane_2 = new Enemy_Plane();
        planeArray.push(plane_2)
        total_distance = 0
      }else{
        var i;
        for (i = 0; i < planeArray.length; i++) {
          planeArray[i].update();
        }
      } //Update all current planes
      total_distance += 20; //total distance goes up by 20 each time even after reset
}
       
tool.onMouseMove = function(event) {
  point = event.point    
}

 tool.onKeyDown = function(event) {
   /*
    if(event.key == 'a' || event.key == 'left') {
        dir = -1;
                          
    }

    if(event.key == 'd' || event.key == 'right') {
        dir = 1;           
    } */
    if(event.key == 'b'){
      cannonball.collision(90)
    }
} 
}
