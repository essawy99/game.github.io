paper.install(window);
window.onload = function() {
// Get a reference to the canvas object
var canvas = document.getElementById('myCanvas');
// Create an empty project and a view for the canvas:
paper.setup(canvas);
var tool = new Tool();


var ball = new User();
var cannon = new Cannon(200,200);
var ship_array = [];
var ship = new Enemy_Ships(4);
        


var plane = new Enemy_Plane();
 var planeArray = [plane];

var total_distance = 0;
var build = new Buildings();
        
var dir = 0;
    view.onFrame = function(event) {
    ball.update(dir);
    dir = 0;
    cannon.update();
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
       

tool.onKeyDown = function(event) {
    if(event.key == 'a' || event.key == 'left') {
        dir = -1;
                          
    }

    if(event.key == 'd' || event.key == 'right') {
        dir = 1;           
    }       
}
}
