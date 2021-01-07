// this class contains all the shapes on the screen
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

    // this method iterates throught shapes in drawing and 
    // if the point is found in existing points it edits the properties
    // shapeOfInterest, pointOfInterest, and index 
    // otherwise it creates a new point on the current shape
    findPointBeingEdited(point) {
        for(var i = 0; i < this.shapes.length; i++) { //iterate through shapes
            var shape = this.shapes[i]
            var pointIndex = shape.findPoint(point);  //call findPoint function 
            //if a point in close proximity select that point and associated shape
            if (pointIndex >= 0) {                    
                this.shapeOfInterest = shape;
                this.pointOfInterest = shape.points[pointIndex];
                this.index = pointIndex;
                return;
            } 
        }
        // if no shape is found create a new point on current shape
        this.shapeOfInterest.newPoint(point);
        this.index = this.shapeOfInterest.points.length - 1;
    }
    
    // this method adds a new shape to the drawing and selects it
    addNewShape() {
        var newShape = new shape();
        this.shapes.push(newShape);
        this.shapeOfInterest = newShape;
    }

    // this method changes the location of a point in the drawing
    updateDrawing(point) {
        this.shapeOfInterest.updatePoint(point, this.index);
        this.pointOfInterest = this.shapeOfInterest.points[this.index];
    }

    // this method closes the currently selected shape
    closeCurrentShape() {
        this.shapeOfInterest.closeShape();
    }

    // this method prompts the user to fill the current shape
    fillCurrentShape() {
        var input = prompt('What color do you want?');
        this.shapeOfInterest.path.fillColor = input;
        this.shapeOfInterest.path.strokeColor = input;
    }

    selectedCurrentShape() {
        this.shapeOfInterest.path.fullySelected = 
        !this.shapeOfInterest.path.fullySelected;
    }
    
    curveCurrentShape() {
        this.shapeOfInterest.curveLines();
    }
    
    printCode() {
        var name = prompt('What do you want to name your class?');
        var output = 
        "class " + name + " {\n" +
        "\tconstructor() {\n" +
        "\t\tthis.xLoc = 0;\n" +
        "\t\tthis.yLoc = 0;\n" +
        "\t\tthis.size = 1;\n";
        
        for(var i = 0; i < this.shapes.length; i++){
            output += (this.shapes[i].printShape(i));
        }
        output += "\t}\n}"
        
        console.log(output);
        
    } 
    
}