// next four lines initialize paper.js
paper.install(window);
window.onload = function() {
var canvas = document.getElementById('myCanvas');
paper.setup(canvas);

// create tool for animations
var tool = new Tool();

console.log(h);

class drawing {
    constructor() {
        this.shapes = [];                // array containing all shapes
        var originalShape = new shape();   
        this.shapes.push(originalShape)  // add first shape to drawing
        
        // this is the shape currently being edited
        this.shapeOfInterest = originalShape;
        // this is the point currently being edited and associated index
        this.pointOfInterest = null;
        this.index = 0;
        
    }

    // this method iterates throught shapes in drawing and edits
    // if the point is found in existing points it edits the properties
    // shapeOfInterest, pointOfInterest, and index 
    // otherwise it creates a new point on the current shape
    findPointBeingEdited(point) {
        for(var i = 0; i < this.shapes.length; i++) {
            var shape = this.shapes[i]
            var pointIndex = shape.findPoint(point);
            if (pointIndex >= 0) {
                this.shapeOfInterest = shape;
                this.pointOfInterest = shape.points[pointIndex];
                this.index = pointIndex;
                console.log('we made it');
                return;
            } 
        }
        this.shapeOfInterest.newPoint(point);
        this.index = this.shapeOfInterest.points.length - 1;
    }
    
    addNewShape() {
        var newShape = new shape();
        this.shapes.push(newShape);
        this.shapeOfInterest = newShape;
    }

    updateDrawing(point) {
        this.shapeOfInterest.updatePoint(point, this.index);
        this.pointOfInterest = this.shapeOfInterest.points[this.index];
    }

    closeCurrentShape() {
        this.shapeOfInterest.closeShape();
    }

    fillCurrentShape() {
        var x = prompt('What color do you want?');
        this.shapeOfInterest.path.fillColor = x;
        console.log(x);
        this.shapeOfInterest.fillColor= 'black';
        console.log(this.shapeOfInterest.fillColor);
    }
}

class shape {
    constructor() {
        this.points = []
        this.path = new Path();
        this.path.strokeColor = 'black';
    }

    findPoint(point) {
        for(var i = 0; i < this.points.length; i++) {
            if(point.x < (this.points[i].x + 10) && 
               point.x > (this.points[i].x - 10) &&
               point.y < (this.points[i].y + 10) && 
               point.y > (this.points[i].y - 10) ) {
                return i;
    
                
            }
            
        }
        return -1;
    }

    newPoint(point) {
        this.points.push(point);
        this.path.add(point);
        
    }
    
    updatePoint(point,index) {
        this.points[index].x = point.x;
        this.points[index].y = point.y;
        this.path.removeSegment(index);
        this.path.insert(index, point);
    }

    closeShape() {
        this.path.closed = !this.path.closed
    }

}

class vhLines {
    constructor() {
        /* horizontal line between equal x points */
        var from = new Point(200, -2000);
        var to = new Point(200, 2000);
        this.horizontal = new Path.Line(from, to);
        this.horizontal.strokeColor ='black';

        /* vertical line between equal y points */
        var from2 = new Point(-2000, 200);
        var to2 = new Point(2000, 200);
        this.vertical = new Path.Line(from2, to2);
        this.vertical.strokeColor ='black';
    }

    updateGrid(cursor, drawing) {
        this.horizontal.position.x = cursor.x;
        this.vertical.position.y = cursor.y;
        this.horizontal.strokeColor ='black';
        this.vertical.strokeColor ='black';
        for(var i = 0; i < drawing.shapes.length; i++) {
            var shape = drawing.shapes[i];
            for(var j = 0; j < shape.points.length; j++) {
                var point = shape.points[j];
                if (point != drawing.pointOfInterest) {

                }
                
                console.log(drawing.pointOfInterest)
                if(cursor.x == point.x && point != drawing.pointOfInterest) {
        
                    this.horizontal.strokeColor = 'orange';
                    
                }
                if(cursor.y == point.y && point != drawing.pointOfInterest) {
                    
                    this.vertical.strokeColor = 'orange';
                
                }
            }
        }
    }
}



/* 
//horizontal line between equal x points 
var from = new Point(200, -2000);
var to = new Point(200, 2000);
var horizontal = new Path.Line(from, to);
horizontal.strokeColor ='orange';

// vertical line between equal y points 
var from2 = new Point(-2000, 200);
var to2 = new Point(2000, 200);
var vertical = new Path.Line(from2, to2);
vertical.strokeColor ='orange';
 */



/* var array = [];

var newPoint = true;
var index;
var edit = null; */


var currentDrawing = new drawing();
var currentGrid = new vhLines();

tool.onMouseDown = function(event) {
    currentDrawing.findPointBeingEdited(event.point); 
}
          

tool.onMouseUp = function(event) {
    
}

tool.onMouseDrag = function(event) {
    currentDrawing.updateDrawing(event.point);
    currentGrid.updateGrid(event.point, currentDrawing);
}
       

tool.onKeyDown = function(event) {
    if(event.key == 'n') {
        currentDrawing.addNewShape();                     
    }
    if(event.key == 'c') {
        currentDrawing.closeCurrentShape();                   
    }
    if(event.key == 'f') {
        currentDrawing.fillCurrentShape();
    }
   
}


}