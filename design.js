/* This file will contain all the classes created by creator */

/* Code: {-s-rgb(128,128,128)-rgb(128,128,128)-true-p-70.83333333333334-250
.69444444444446-p-176.38888888888889-361.80555555555554-p-743.0555555555555
-361.80555555555554-p-831.9444444444445-250.69444444444446-p-743.0555555555
555-145.83333333333334-p-175.69444444444446-145.83333333333334-false-s-rgb(
0,0,0)-rgb(0,0,0)-true-p-180.55555555555557-234.0277777777778-p-212.5-234.0
277777777778-p-212.5-265.97222222222223-p-180.55555555555557-265.9722222222
2223-true-s-rgb(0,0,0)-rgb(0,0,0)-true-p-707.6388888888889-234.027777777777
8-p-740.2777777777778-234.0277777777778-p-739.5833333333334-267.36111111111
114-p-706.9444444444445-267.36111111111114-true-s-rgb(0,0,0)-null-false-p-1
51.38888888888889-211.80555555555557-p-111.80555555555556-250.6944444444444
6-p-151.38888888888889-294.44444444444446-false-s-rgb(0,0,0)-null-false-p-7
61.1111111111111-211.80555555555557-p-795.1388888888889-250.69444444444446-
p-756.25-294.44444444444446-false-s-rgb(0,0,0)-rgb(0,0,0)-true-p-387.5-227.
7777777777778-p-387.5-277.77777777777777-p-401.3888888888889-304.1666666666
667-p-520.8333333333334-304.1666666666667-p-540.2777777777778-277.777777777
77777-p-540.2777777777778-227.7777777777778-p-521.5277777777778-200-p-403.4
7222222222223-200-false-s-rgb(0,0,0)-rgb(0,0,0)-true-p-451.3888888888889-82
.63888888888889-p-478.47222222222223-82.63888888888889-p-478.47222222222223
-200-p-451.3888888888889-200-false}*/
class shipBody {
	constructor(x,y) {
		this.xLoc = x;
		this.yLoc = y;
		this.size = .09;
		this.path0= new Path();
		this.path0.strokeColor = { red: 0.50196, green: 0.50196, blue: 0.50196 };
		this.path0.fillColor = { red: 0.50196, green: 0.50196, blue: 0.50196 };
		this.path0.closed = true;
		this.path0.add( new Point(-380.55555555555554* wUnit * this.size + this.xLoc, 28.472222222222225 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(-275* wUnit * this.size + this.xLoc, 139.58333333333334 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(291.6666666666667* wUnit * this.size + this.xLoc, 139.58333333333334 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(380.55555555555554* wUnit * this.size + this.xLoc, 28.472222222222225 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(291.6666666666667* wUnit * this.size + this.xLoc, -76.38888888888889 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(-275.69444444444446* wUnit * this.size + this.xLoc, -76.38888888888889 * wUnit * this.size + this.yLoc));
		this.path1= new Path();
		this.path1.strokeColor = { red: 0, green: 0, blue: 0 };
		this.path1.fillColor = { red: 0, green: 0, blue: 0 };
		this.path1.closed = true;
		this.path1.add( new Point(-270.83333333333337* wUnit * this.size + this.xLoc, 11.805555555555555 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(-238.88888888888889* wUnit * this.size + this.xLoc, 11.805555555555555 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(-238.88888888888889* wUnit * this.size + this.xLoc, 43.75 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(-270.83333333333337* wUnit * this.size + this.xLoc, 43.75 * wUnit * this.size + this.yLoc));
		this.path1.smooth();
		this.path2= new Path();
		this.path2.strokeColor = { red: 0, green: 0, blue: 0 };
		this.path2.fillColor = { red: 0, green: 0, blue: 0 };
		this.path2.closed = true;
		this.path2.add( new Point(256.25* wUnit * this.size + this.xLoc, 11.805555555555555 * wUnit * this.size + this.yLoc));
		this.path2.add( new Point(288.8888888888889* wUnit * this.size + this.xLoc, 11.805555555555555 * wUnit * this.size + this.yLoc));
		this.path2.add( new Point(288.19444444444446* wUnit * this.size + this.xLoc, 45.13888888888889 * wUnit * this.size + this.yLoc));
		this.path2.add( new Point(255.55555555555557* wUnit * this.size + this.xLoc, 45.13888888888889 * wUnit * this.size + this.yLoc));
		this.path2.smooth();
		this.path3= new Path();
		this.path3.strokeColor = { red: 0, green: 0, blue: 0 };
		this.path3.fillColor = null;
		this.path3.closed = false;
		this.path3.add( new Point(-300* wUnit * this.size + this.xLoc, -10.416666666666668 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(-339.58333333333337* wUnit * this.size + this.xLoc, 28.472222222222225 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(-300* wUnit * this.size + this.xLoc, 72.22222222222223 * wUnit * this.size + this.yLoc));
		this.path4= new Path();
		this.path4.strokeColor = { red: 0, green: 0, blue: 0 };
		this.path4.fillColor = null;
		this.path4.closed = false;
		this.path4.add( new Point(309.72222222222223* wUnit * this.size + this.xLoc, -10.416666666666668 * wUnit * this.size + this.yLoc));
		this.path4.add( new Point(343.75* wUnit * this.size + this.xLoc, 28.472222222222225 * wUnit * this.size + this.yLoc));
		this.path4.add( new Point(304.86111111111114* wUnit * this.size + this.xLoc, 72.22222222222223 * wUnit * this.size + this.yLoc));
		this.path5= new Path();
		this.path5.strokeColor = { red: 0, green: 0, blue: 0 };
		this.path5.fillColor = { red: 0, green: 0, blue: 0 };
		this.path5.closed = true;
		this.path5.add( new Point(-63.88888888888889* wUnit * this.size + this.xLoc, 5.555555555555555 * wUnit * this.size + this.yLoc));
		this.path5.add( new Point(-63.88888888888889* wUnit * this.size + this.xLoc, 55.55555555555556 * wUnit * this.size + this.yLoc));
		this.path5.add( new Point(-50* wUnit * this.size + this.xLoc, 81.94444444444444 * wUnit * this.size + this.yLoc));
		this.path5.add( new Point(69.44444444444444* wUnit * this.size + this.xLoc, 81.94444444444444 * wUnit * this.size + this.yLoc));
		this.path5.add( new Point(88.88888888888889* wUnit * this.size + this.xLoc, 55.55555555555556 * wUnit * this.size + this.yLoc));
		this.path5.add( new Point(88.88888888888889* wUnit * this.size + this.xLoc, 5.555555555555555 * wUnit * this.size + this.yLoc));
		this.path5.add( new Point(70.13888888888889* wUnit * this.size + this.xLoc, -22.22222222222222 * wUnit * this.size + this.yLoc));
		this.path5.add( new Point(-47.91666666666667* wUnit * this.size + this.xLoc, -22.22222222222222 * wUnit * this.size + this.yLoc));
		this.path6= new Path();
		this.path6.strokeColor = { red: 0, green: 0, blue: 0 };
		this.path6.fillColor = { red: 0, green: 0, blue: 0 };
		this.path6.closed = true;
		this.path6.add( new Point(0* wUnit * this.size + this.xLoc, -139.58333333333334 * wUnit * this.size + this.yLoc));
		this.path6.add( new Point(27.083333333333336* wUnit * this.size + this.xLoc, -139.58333333333334 * wUnit * this.size + this.yLoc));
		this.path6.add( new Point(27.083333333333336* wUnit * this.size + this.xLoc, -22.22222222222222 * wUnit * this.size + this.yLoc));
		this.path6.add( new Point(0* wUnit * this.size + this.xLoc, -22.22222222222222 * wUnit * this.size + this.yLoc));
	}

	update(xIncr, yIncr){
		this.path0.position.x += xIncr
		this.path0.position.y += yIncr
		this.path1.position.x += xIncr
		this.path1.position.y += yIncr
		this.path2.position.x += xIncr
		this.path2.position.y += yIncr
		this.path3.position.x += xIncr
		this.path3.position.y += yIncr
		this.path4.position.x += xIncr
		this.path4.position.y += yIncr
		this.path5.position.x += xIncr
		this.path5.position.y += yIncr
		this.path6.position.x += xIncr
		this.path6.position.y += yIncr	
	}
}