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

var wUnit = w/1000;
var hUnit = h/1000;
var center =  w/2;

/* class  */


/* horizontal line between equal x points */
var from = new Point(200, -2000);
var to = new Point(200, 2000);
var horizontal = new Path.Line(from, to);
horizontal.strokeColor ='orange';

/* vertical line between equal y points */
var from2 = new Point(-2000, 200);
var to2 = new Point(2000, 200);
var vertical = new Path.Line(from2, to2);
vertical.strokeColor ='orange';

path = new Path();
path.strokeColor = 'blue';
path.srokeWidth = 100;

var array = [];

var newPoint = true;
var index;
var edit = null;


tool.onMouseDown = function(event) {
    // iterate through each point and
    // check if clicking on already existant point 
    for(var i = 0; i < array.length; i++) {
        if(event.point.x < (array[i].x + 10) && 
           event.point.x > (array[i].x - 10) &&
           event.point.y < (array[i].y + 10) && 
           event.point.y > (array[i].y - 10) ) {
            // 

            newPoint = false;
            edit = array[i];
            index = i;
        }
    }
    if(newPoint) {
        var point = event.point;
        path.add(point);
        array.push(point);
        edit = array[array.length -1];
        index = array.length -1;
    }
}
          
          

tool.onMouseUp = function(event) {
    newPoint = true;
}

tool.onMouseDrag = function(event) {
    edit.x = event.point.x;
    edit.y = event.point.y;
    path.removeSegment(index);
    path.insert(index, edit);


    horizontal.strokeColor = 'black';
    vertical.strokeColor = 'black';
    horizontal.position.x = edit.x;
    vertical.position.y = edit.y;
    for(var i = 0; i < array.length; i++) {
        if(edit.x == array[i].x && i != index) {
            horizontal.strokeColor = 'yellow';
            
        }
        if(edit.y == array[i].y && i != index) {
            vertical.strokeColor = 'yellow';
            
        }
    }
}
       

tool.onKeyDown = function(event) {
    if(event.key == 'd') {
        path.remove();
                          
    }
    if(event.key == 'c') {
        path.closed = !path.closed;
    }
}

}