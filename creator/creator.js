// next four lines initialize paper.js
paper.install(window);
window.onload = function() {
var canvas = document.getElementById('myCanvas');
paper.setup(canvas);

// create tool for animations
var tool = new Tool();

// create objects that define the program
var currentDrawing = new drawing();
var currentGrid = new vhLines();

// when you click down the program decides whether
// you are trying to move an existing point or create
// a new point
tool.onMouseDown = function(event) {
    currentDrawing.findPointBeingEdited(event.point); 
    currentGrid.updateGrid(event.point, currentDrawing);
}

// when you drag the mouse it updates the selected poiny
tool.onMouseDrag = function(event) {
    currentDrawing.updateDrawing(event.point);
    currentGrid.updateGrid(event.point, currentDrawing);
}
       

// A series of commands from the keyboard :

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
    if(event.key == 's') {
        currentDrawing.selectedCurrentShape();
    }
    if(event.key == 'o') {
        currentDrawing.curveCurrentShape();
    }
    if(event.key == 'shift') {
        currentDrawing.strokeColorCurrentShape();
    }
    if(event.key == 'p') {
        currentDrawing.printCode();
    }
    if(event.key == 'l') {
        currentDrawing.loadDrawing();
    }  
}

} // close bracket for paper.js