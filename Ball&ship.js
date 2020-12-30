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

var ball = new User();
var cannon = new Cannon(200,200);
        
var dir = 0;
    view.onFrame = function(event) {
    ball.update(dir);
    dir = 0;
    cannon.update();
}
       

tool.onKeyDown = function(event) {
    if(event.key == 'a' || event.key == 'left') {
        dir = -1;
        console.log('h');                      
    }

    if(event.key == 'd' || event.key == 'right') {
        dir = 1;           
    }       
}



        
       
}