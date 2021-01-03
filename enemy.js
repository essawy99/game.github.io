paper.install(window);
window.onload = function() {
// Get a reference to the canvas object
var canvas = document.getElementById('myCanvas');
// Create an empty project and a view for the canvas:
paper.setup(canvas);
var tool = new Tool();

var win = window,
doc = document,
docElem = doc.documentElement,
body = doc.getElementsByTagName('body')[0],
w = win.innerWidth || docElem.clientWidth || body.clientWidth,
h = win.innerHeight|| docElem.clientHeight|| body.clientHeight;


var height = h - (h/6);
var width = w/15;

var wUnit = w/1000;
var hUnit = h/1000;
var center =  w/2;

class Cannon {
    constructor(xLoc, yLoc) {
        this.velocity = 10 * wUnit;
        this.x = xLoc;
        this.y = yLoc;
        this.direction = Math.PI;
        this.cannon = new Path.Circle({
            center: new paper.Point(this.x, this.y),
            radius: 3* wUnit,
            fillColor: 'black'
        });
    }

    update() {
        var x_dir = this.velocity * Math.cos(this.direction);
        var y_dir = this.velocity * Math.sin(this.direction);
        console.log(x_dir);
        console.log(y_dir);
        this.x += x_dir;
        this.y += y_dir;
        this.cannon.position.x = this.x;
        this.cannon.position.y = this.y;
        if(this.x < 0 || this.x > w) {
            dir += Math.PI;
        }
    }
}

class User {
    constructor() {
        // points associated with forcefield
        this.from = new paper.Point(center - width, height);
        this.through = new paper.Point(center, height -  (30*wUnit) );
        this.to = new paper.Point(center + width, height);

        // forcefield path consisting of arc and connecting line
        this.arc = new paper.Path.Arc(this.from, this.through, this.to);
        this.connect = new paper.Path();
        this.connect.add(this.from);
        this.connect.add(this.to);

        // create path associated with the ship
        this.shipBody = new paper.Path()

        this.shipBody.add(new paper.Point
            (center - 50*wUnit, height + 80*hUnit)); //left bound
        this.shipBody.add(new paper.Point
            (center - 40*wUnit, height + 60*hUnit)); //top left corner
        this.shipBody.add(new paper.Point
            (center + 40*wUnit, height + 60*hUnit)); //top right corner
        this.shipBody.add(new paper.Point
            (center + 50*wUnit, height + 80*hUnit)); //right bound
        this.shipBody.add(new paper.Point
            (center + 40*wUnit, height + 100*hUnit)); //bottom right corner
        this.shipBody.add(new paper.Point
            (center - 40*wUnit, height + 100*hUnit)); //bottom left corner
        this.shipBody.closed = true;
        this.shipBody.fillColor = 'grey';


        // add styles to  forcefield
        this.arc.fullySelected = true;
        this.arc.strokeColor = 'blue';
        this.connect.strokeColor = 'blue';
        this.arc.strokeWidth = 3;
        this.connect.strokeWidth = 2;
        this.arc.fillColor = 'cyan';
    }

    update(direction) {
        if(direction == 1) {
            this.arc.position.x += (10 * wUnit);
            this.connect.position.x += (10 * wUnit);
            this.shipBody.position.x += (10 * wUnit);
            }
        if(direction == -1) {
            this.arc.position.x -= (10 * wUnit);
            this.connect.position.x -= (10 * wUnit);
            this.shipBody.position.x -= (10 * wUnit);
        }
    }
}

//class that handles the creation of an enemy ship
class Enemy_Ships {
    constructor(num_ships) {
        var i;
        // x and y location of ship on screen
        this.userYLoc = 100 * hUnit;
        // Array of x locations for each row of generated ships
        this.xLoc = [0,50,-50,-100]; 
        
        // size and speed attributes can be used to change ship size
        this.size = 40 * wUnit;
        this.speed = 20 * wUnit;
        
        
        //ship Body properties in terms of size
        this.shipTop = this.userYLoc + (this.size /4);
        this.shipHeight = this.size / 5;
        this.shipWidth = this.size * (4/5);
        this.shipCorner = this.size * (3/5);
        //row counter (to know spot in row)
        var row_counter = 0;
        for(i=0;i<num_ships;i++){
        console.log(String(i) + "th ship")
        if((i % 4) == 0 && i != 0){
            console.log(String(i) + ": " + i%4)
            this.userYLoc += 100; //increment y to change row
            this.shipTop = this.userYLoc + (this.size /4);
        }
        //start of new ship
        this.shipBody = new paper.Path()
                
        /* Ship points written in terms of properties */
        //left bound
        this.shipBody.add(new paper.Point
            (center - this.shipWidth, this.shipTop)); 
        //top left corner
        this.shipBody.add(new paper.Point
            (center - this.shipCorner, this.shipTop - this.shipHeight)); 
        //top right corner
        this.shipBody.add(new paper.Point
            (center + this.shipCorner, this.shipTop - this.shipHeight)); 
        //right bound
        this.shipBody.add(new paper.Point
            (center + this.shipWidth, this.shipTop)); 
        // bottom right corner
            this.shipBody.add(new paper.Point
            (center + this.shipCorner, this.shipTop + this.shipHeight)); 
        // bottom left corner
        this.shipBody.add(new paper.Point
            (center - this.shipCorner, this.shipTop + this.shipHeight)); 
        //rotate ship 90 degrees
        this.shipBody.rotate(90);
        //change x location
        console.log(String(row_counter) + "ith row")
        this.shipBody.position.x += this.xLoc[row_counter];
        // style the ship body
        this.shipBody.closed = true;
        this.shipBody.fillColor = 'red';
        ship_array.push(this.shipBody)
        row_counter += 1
        if(row_counter > 3){
            row_counter = 0;
        }
        }
    }
}


//Credit: https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
//Random integer selection used in picking what ship to spawn plane from
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
//Class to handle enemy planes
class Enemy_Plane {
    constructor(){
        // Array to store enemy plane
        var plane_array = [];

        this.planeBody = new paper.Path()

        this.planeBody.add(new paper.Point
            (center + 80*wUnit, height - 200*hUnit)); // bottom right of plane
        this.planeBody.add(new paper.Point
            (center + 80*wUnit, height - 200*hUnit)); // Point on the tail of the plane between bottom left and right
        this.planeBody.add(new paper.Point
            (center - 80*wUnit, height - 200*hUnit)); // bottom left of plane
        this.planeBody.add(new paper.Point
            (center - 60*wUnit, height - 175*hUnit)); // mid right point of plane
        this.planeBody.add(new paper.Point
            (center + 60*wUnit, height - 175*hUnit)); // mid left point of plane
        this.planeBody.add(new paper.Point
            (center - 90*wUnit, height - 175*hUnit)); // right wing of plane
        this.planeBody.add(new paper.Point
            (center - 90*wUnit, height - 175*hUnit)); // left wing of plane
        this.planeBody.add(new paper.Point
            (center - 50*wUnit, height - 150*hUnit)); // nose/cockpit of plane
        var spawn_from = randomIntFromInterval(0,ship_array.length-1);
        //set planes x and y to ships x and y
        this.planeBody.position.x = ship_array[spawn_from].position.x
        this.planeBody.position.y = ship_array[spawn_from].position.y
        this.planeBody.closed = true;
        this.planeBody.fillColor = 'blue';
        plane_array.push(this.planeBody)
    }
    update(){
        this.planeBody.position.y += 5;
    }

}

var dir = 0;
var ball = new User();
var cannon = new Cannon(200,200);
var ship_array = []; //array to store ships
var ship = new Enemy_Ships(8); //spawn 16 enemy ships
var planeArray = [];
var plane = new Enemy_Plane();
var total_distance = 0 //keeps track of total_distance previous plane passed
var dist_var = 2000 //Can be changed to change speed at which new planes come


view.onFrame = function(event) {
ball.update(dir);
cannon.update();
if(total_distance > dist_var){
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