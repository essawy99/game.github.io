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
    constructor() {
        //Array to store all enemy ships
        var ship_array = [];
        //currently makes only one enemy ship will expand to multiple based off
        // of a number put into the constructer
        this.shipBody = new paper.Path()

        this.shipBody.add(new paper.Point
            (center + 50*wUnit, height - 80*hUnit)); //left bound
        this.shipBody.add(new paper.Point
            (center + 40*wUnit, height - 60*hUnit)); //top left corner
        this.shipBody.add(new paper.Point
            (center - 40*wUnit, height - 60*hUnit)); //top right corner
        this.shipBody.add(new paper.Point
            (center - 50*wUnit, height - 80*hUnit)); //right bound
        this.shipBody.add(new paper.Point
            (center - 40*wUnit, height - 100*hUnit)); //bottom right corner
        this.shipBody.add(new paper.Point
            (center + 40*wUnit, height - 100*hUnit)); //bottom left corner
        this.shipBody.rotate(90)
        this.shipBody.position.y -= 500;
        this.shipBody.closed = true;
        this.shipBody.fillColor = 'red';
        ship_array.push(this.shipBody)
    }
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
        this.planeBody.position.y -= 400;
        this.planeBody.closed = true;
        this.planeBody.fillColor = 'blue';
        plane_array.push(this.planeBody)
    }
    update(){
        this.planeBody.position.y += 20;
    }

}

var ball = new User();
var cannon = new Cannon(200,200);
var ship = new Enemy_Ships();
var plane = new Enemy_Plane();
var planeArray = [plane];
var total_distance = 0;


var dir = 0;






}
