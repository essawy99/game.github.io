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