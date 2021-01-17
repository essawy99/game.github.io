class shape {
    constructor() {
        this.points = []
        this.path = new Path();
        this.path.strokeColor = 'black';
        this.curve = false;
        
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
        
        this.path.fillColor = input;
        
    }

    selectedShape() {
        this.path.fullySelected = 
        !this.path.fullySelected;
    }
    
    curveLines() {
        this.curve = true
        this.path.smooth();
    }

    strokeColor(color) {
        this.path.strokeColor = color;
    }
    /* TODO: add strokeWidth  */
    loadShape(array, index) {
        this.path.strokeColor = array[index];
        
        if(array[index +1] != 'null') {
            this.path.fillColor = array[index + 1];
        }
        
        if(array[index + 2] == 'true') {
            this.path.closed = true;
        }
        
        var i = index + 3
        
        while(true) {
            if (array[i] == "p") {
                console.log("hi2");
                var point = new Point
                ((array[i+1] * wUnit), (array[i+2] * wUnit) );
                i+=3;
                this.newPoint(point);
            }
            else {
                break;
            }
        }
        if(array[i] == 'true') {
            this.curve = true;
            this.path.smooth();
        }

        return (i+1);
    }
    
    printShapeCode() {
        var output = "-s";
        
        output += "-" + this.path.strokeColor.toCSS()
        
        if(this.path.fillColor == null) {
            output += "-" + 'null';
        }
        else {
            output += "-" + this.path.fillColor.toCSS();
        }
        
        output += "-" + this.path.closed 
        
        for (var i = 0; i < this.points.length; i++){
            output += "-p";
            output += "-" + (this.points[i].x / wUnit);  
            output += "-" + (this.points[i].y / wUnit);

        }
        
        output += "-" + this.curve
        
        return output;
    }

    /* TODO: add strokeWidth  */
    printShapeConstr(shapeNumber,xCenter, yCenter) {
        var output = "\t\tthis.path" + shapeNumber + "= new Path();\n";
        
        output += "\t\tthis.path" + shapeNumber + ".strokeColor = " +
        this.path.strokeColor + ";\n"
        
        output += "\t\tthis.path" + shapeNumber + ".fillColor = " +
        this.path.fillColor + ";\n"
        
        output += "\t\tthis.path" + shapeNumber + ".closed = " +
        this.path.closed + ";\n"
        
        for (var i = 0; i < this.points.length; i++){
            output += "\t\tthis.path" + shapeNumber + ".add( new Point(" + 
            ((this.points[i].x - xCenter) / wUnit) + "* wUnit * this.size + this.xLoc, " 
            + ((this.points[i].y - yCenter) / wUnit) + " * wUnit * this.size + this.yLoc));\n";

        }
        if(this.curve) {
            output += "\t\tthis.path" + shapeNumber + ".smooth();\n"
        }
        return output;
    }
    printShapeUpdate(shapeNumber) {
        var output = "\t\tthis.path" + shapeNumber + ".position.x += xIncr\n";
        output += "\t\tthis.path" + shapeNumber + ".position.y += yIncr\n";
        return output;
    }

    printShaperemove(shapeNumber) {
        var output = "\t\tthis.path" + shapeNumber + ".remove()\n";
        return output;
    }

    /* TODO: place directly function  */
}