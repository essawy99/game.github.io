class shape {
    constructor() {
        this.points = []
        this.path = new Path();
        this.path.strokeColor = 'black';
        this.curve = false;
        this.fillColor;
        this.closed;
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
        this.closed = !this.closed
    }

    fillShape() {
        var input = prompt('What color do you want?');
        this.fillColor = input
        this.path.fillColor = input;
        this.path.strokeColor = input;
    }

    selectedShape() {
        this.path.fullySelected = 
        !this.path.fullySelected;
    }
    
    curveLines() {
        this.curve = true
        this.path.smooth();
    }

    printShape(shapeNumber) {
        var output = "\t\tthis.path" + shapeNumber + "= new Path();\n";
        
        output += "\t\tthis.path" + shapeNumber + ".strokeColor = " +
        this.path.strokeColor + ";\n"
        
        output += "\t\tthis.path" + shapeNumber + ".fillColor = " +
        this.path.fillColor + ";\n"
        
        output += "\t\tthis.path" + shapeNumber + ".closed = " +
        this.path.closed + ";\n"
        
        for (var i = 0; i < this.points.length; i++){
            output += "\t\tthis.path" + shapeNumber + ".add( new Point(" + 
            (this.points[i].x / wUnit) + "* wUnit * this.size + this.xLoc, " 
            + (this.points[i].y / wUnit) + " * wUnit * this.size + this.yLoc));\n";

        }
        if(this.curve) {
            output += "\t\tthis.path" + shapeNumber + ".smooth();\n"
        }
        return output;
    }
}