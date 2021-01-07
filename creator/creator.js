// next four lines initialize paper.js
paper.install(window);
window.onload = function() {
var canvas = document.getElementById('myCanvas');
paper.setup(canvas);

// create tool for animations
var tool = new Tool();

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
    if(event.key == 's') {
        currentDrawing.selectedCurrentShape();
    }
    if(event.key == 'w') {
        currentDrawing.curveCurrentShape();
    }
    if(event.key == 'p') {
        currentDrawing.printCode();
    }
   
}


}