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

undefined
/* Code: {-s-rgb(128,128,128)-rgb(128,128,128)-true-p-301.3888888888889-31.
944444444444446-p-422.9166666666667-31.25-p-441.6666666666667-124.305555555
55556-p-499.3055555555556-138.88888888888889-p-484.02777777777777-325-p-418
.05555555555554-361.80555555555554-p-395.1388888888889-428.47222222222223-p
-331.94444444444446-428.47222222222223-p-308.33333333333337-361.80555555555
554-p-250-325-p-225-138.88888888888889-p-284.72222222222223-124.30555555555
556-false-s-rgb(255,255,255)-null-false-p-362.5-106.25-p-362.5-403.47222222
222223-false-s-rgb(255,255,255)-null-false-p-395.83333333333337-106.25-p-39
5.83333333333337-134.02777777777777-false-s-rgb(255,255,255)-null-false-p-3
95.83333333333337-160.41666666666669-p-395.83333333333337-188.1944444444444
6-false-s-rgb(255,255,255)-null-false-p-395.83333333333337-270.833333333333
37-p-395.83333333333337-298.61111111111114-false-s-rgb(255,255,255)-rgb(255
,255,255)-false-p-395.83333333333337-243.05555555555557-p-395.8333333333333
7-215.2777777777778-false-s-rgb(255,255,255)-null-false-p-395.8333333333333
7-325-p-395.83333333333337-352.08333333333337-false-s-rgb(255,255,255)-null
-false-p-395.83333333333337-377.08333333333337-p-395.83333333333337-403.472
22222222223-false-s-rgb(255,255,255)-null-false-p-329.1666666666667-403.472
22222222223-p-329.1666666666667-377.08333333333337-false-s-rgb(255,255,255)
-null-false-p-329.1666666666667-352.08333333333337-p-329.1666666666667-325-
false-s-rgb(255,255,255)-null-false-p-329.1666666666667-270.83333333333337-
p-329.1666666666667-298.61111111111114-false-s-rgb(255,255,255)-null-false-
p-329.1666666666667-243.05555555555557-p-329.1666666666667-215.277777777777
8-false-s-rgb(255,255,255)-null-false-p-329.1666666666667-188.1944444444444
6-p-329.1666666666667-160.41666666666669-false-s-rgb(255,255,255)-null-fals
e-p-329.1666666666667-134.02777777777777-p-329.1666666666667-106.25-false-s
-rgb(54,47,47)-null-false-p-272.22222222222223-302.77777777777777-p-253.472
22222222223-152.08333333333334-false-s-rgb(54,47,47)-null-false-p-471.52777
777777777-152.08333333333334-p-462.5-302.77777777777777-false}*/
class enemyShip {
	constructor(x,y) {
		this.xLoc = x;
		this.yLoc = y;
		this.size = .1;
		this.path0= new Path();
		this.path0.strokeColor = { red: 0.50196, green: 0.50196, blue: 0.50196 };
		this.path0.fillColor = { red: 0.50196, green: 0.50196, blue: 0.50196 };
		this.path0.closed = true;
		this.path0.add( new Point(-60.76388888888889* wUnit * this.size + this.xLoc, -197.91666666666669 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(60.76388888888889* wUnit * this.size + this.xLoc, -198.61111111111111 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(79.51388888888889* wUnit * this.size + this.xLoc, -105.55555555555556 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(137.15277777777777* wUnit * this.size + this.xLoc, -90.97222222222223 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(121.875* wUnit * this.size + this.xLoc, 95.13888888888889 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(55.90277777777778* wUnit * this.size + this.xLoc, 131.94444444444446 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(32.986111111111114* wUnit * this.size + this.xLoc, 198.61111111111111 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(-30.208333333333336* wUnit * this.size + this.xLoc, 198.61111111111111 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(-53.81944444444445* wUnit * this.size + this.xLoc, 131.94444444444446 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(-112.15277777777779* wUnit * this.size + this.xLoc, 95.13888888888889 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(-137.15277777777777* wUnit * this.size + this.xLoc, -90.97222222222223 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(-77.43055555555556* wUnit * this.size + this.xLoc, -105.55555555555556 * wUnit * this.size + this.yLoc));
		this.path1= new Path();
		this.path1.strokeColor = { red: 1, green: 1, blue: 1 };
		this.path1.fillColor = null;
		this.path1.closed = false;
		this.path1.add( new Point(0.3472222222222222* wUnit * this.size + this.xLoc, -123.61111111111111 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(0.3472222222222222* wUnit * this.size + this.xLoc, 173.61111111111111 * wUnit * this.size + this.yLoc));
		this.path2= new Path();
		this.path2.strokeColor = { red: 1, green: 1, blue: 1 };
		this.path2.fillColor = null;
		this.path2.closed = false;
		this.path2.add( new Point(33.68055555555556* wUnit * this.size + this.xLoc, -123.61111111111111 * wUnit * this.size + this.yLoc));
		this.path2.add( new Point(33.68055555555556* wUnit * this.size + this.xLoc, -95.83333333333334 * wUnit * this.size + this.yLoc));
		this.path3= new Path();
		this.path3.strokeColor = { red: 1, green: 1, blue: 1 };
		this.path3.fillColor = null;
		this.path3.closed = false;
		this.path3.add( new Point(33.68055555555556* wUnit * this.size + this.xLoc, -69.44444444444444 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(33.68055555555556* wUnit * this.size + this.xLoc, -41.66666666666667 * wUnit * this.size + this.yLoc));
		this.path4= new Path();
		this.path4.strokeColor = { red: 1, green: 1, blue: 1 };
		this.path4.fillColor = null;
		this.path4.closed = false;
		this.path4.add( new Point(33.68055555555556* wUnit * this.size + this.xLoc, 40.97222222222222 * wUnit * this.size + this.yLoc));
		this.path4.add( new Point(33.68055555555556* wUnit * this.size + this.xLoc, 68.75 * wUnit * this.size + this.yLoc));
		this.path5= new Path();
		this.path5.strokeColor = { red: 1, green: 1, blue: 1 };
		this.path5.fillColor = { red: 1, green: 1, blue: 1 };
		this.path5.closed = false;
		this.path5.add( new Point(33.68055555555556* wUnit * this.size + this.xLoc, 13.194444444444445 * wUnit * this.size + this.yLoc));
		this.path5.add( new Point(33.68055555555556* wUnit * this.size + this.xLoc, -14.583333333333334 * wUnit * this.size + this.yLoc));
		this.path6= new Path();
		this.path6.strokeColor = { red: 1, green: 1, blue: 1 };
		this.path6.fillColor = null;
		this.path6.closed = false;
		this.path6.add( new Point(33.68055555555556* wUnit * this.size + this.xLoc, 95.13888888888889 * wUnit * this.size + this.yLoc));
		this.path6.add( new Point(33.68055555555556* wUnit * this.size + this.xLoc, 122.22222222222223 * wUnit * this.size + this.yLoc));
		this.path7= new Path();
		this.path7.strokeColor = { red: 1, green: 1, blue: 1 };
		this.path7.fillColor = null;
		this.path7.closed = false;
		this.path7.add( new Point(33.68055555555556* wUnit * this.size + this.xLoc, 147.22222222222223 * wUnit * this.size + this.yLoc));
		this.path7.add( new Point(33.68055555555556* wUnit * this.size + this.xLoc, 173.61111111111111 * wUnit * this.size + this.yLoc));
		this.path8= new Path();
		this.path8.strokeColor = { red: 1, green: 1, blue: 1 };
		this.path8.fillColor = null;
		this.path8.closed = false;
		this.path8.add( new Point(-32.986111111111114* wUnit * this.size + this.xLoc, 173.61111111111111 * wUnit * this.size + this.yLoc));
		this.path8.add( new Point(-32.986111111111114* wUnit * this.size + this.xLoc, 147.22222222222223 * wUnit * this.size + this.yLoc));
		this.path9= new Path();
		this.path9.strokeColor = { red: 1, green: 1, blue: 1 };
		this.path9.fillColor = null;
		this.path9.closed = false;
		this.path9.add( new Point(-32.986111111111114* wUnit * this.size + this.xLoc, 122.22222222222223 * wUnit * this.size + this.yLoc));
		this.path9.add( new Point(-32.986111111111114* wUnit * this.size + this.xLoc, 95.13888888888889 * wUnit * this.size + this.yLoc));
		this.path10= new Path();
		this.path10.strokeColor = { red: 1, green: 1, blue: 1 };
		this.path10.fillColor = null;
		this.path10.closed = false;
		this.path10.add( new Point(-32.986111111111114* wUnit * this.size + this.xLoc, 40.97222222222222 * wUnit * this.size + this.yLoc));
		this.path10.add( new Point(-32.986111111111114* wUnit * this.size + this.xLoc, 68.75 * wUnit * this.size + this.yLoc));
		this.path11= new Path();
		this.path11.strokeColor = { red: 1, green: 1, blue: 1 };
		this.path11.fillColor = null;
		this.path11.closed = false;
		this.path11.add( new Point(-32.986111111111114* wUnit * this.size + this.xLoc, 13.194444444444445 * wUnit * this.size + this.yLoc));
		this.path11.add( new Point(-32.986111111111114* wUnit * this.size + this.xLoc, -14.583333333333334 * wUnit * this.size + this.yLoc));
		this.path12= new Path();
		this.path12.strokeColor = { red: 1, green: 1, blue: 1 };
		this.path12.fillColor = null;
		this.path12.closed = false;
		this.path12.add( new Point(-32.986111111111114* wUnit * this.size + this.xLoc, -41.66666666666667 * wUnit * this.size + this.yLoc));
		this.path12.add( new Point(-32.986111111111114* wUnit * this.size + this.xLoc, -69.44444444444444 * wUnit * this.size + this.yLoc));
		this.path13= new Path();
		this.path13.strokeColor = { red: 1, green: 1, blue: 1 };
		this.path13.fillColor = null;
		this.path13.closed = false;
		this.path13.add( new Point(-32.986111111111114* wUnit * this.size + this.xLoc, -95.83333333333334 * wUnit * this.size + this.yLoc));
		this.path13.add( new Point(-32.986111111111114* wUnit * this.size + this.xLoc, -123.61111111111111 * wUnit * this.size + this.yLoc));
		this.path14= new Path();
		this.path14.strokeColor = { red: 0.21176, green: 0.18431, blue: 0.18431 };
		this.path14.fillColor = null;
		this.path14.closed = false;
		this.path14.add( new Point(-89.93055555555556* wUnit * this.size + this.xLoc, 72.91666666666667 * wUnit * this.size + this.yLoc));
		this.path14.add( new Point(-108.68055555555556* wUnit * this.size + this.xLoc, -77.77777777777779 * wUnit * this.size + this.yLoc));
		this.path15= new Path();
		this.path15.strokeColor = { red: 0.21176, green: 0.18431, blue: 0.18431 };
		this.path15.fillColor = null;
		this.path15.closed = false;
		this.path15.add( new Point(109.375* wUnit * this.size + this.xLoc, -77.77777777777779 * wUnit * this.size + this.yLoc));
		this.path15.add( new Point(100.34722222222223* wUnit * this.size + this.xLoc, 72.91666666666667 * wUnit * this.size + this.yLoc));
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
		this.path7.position.x += xIncr
		this.path7.position.y += yIncr
		this.path8.position.x += xIncr
		this.path8.position.y += yIncr
		this.path9.position.x += xIncr
		this.path9.position.y += yIncr
		this.path10.position.x += xIncr
		this.path10.position.y += yIncr
		this.path11.position.x += xIncr
		this.path11.position.y += yIncr
		this.path12.position.x += xIncr
		this.path12.position.y += yIncr
		this.path13.position.x += xIncr
		this.path13.position.y += yIncr
		this.path14.position.x += xIncr
		this.path14.position.y += yIncr
		this.path15.position.x += xIncr
		this.path15.position.y += yIncr
	}

	remove(){
		this.path0.remove()
		this.path1.remove()
		this.path2.remove()
		this.path3.remove()
		this.path4.remove()
		this.path5.remove()
		this.path6.remove()
		this.path7.remove()
		this.path8.remove()
		this.path9.remove()
		this.path10.remove()
		this.path11.remove()
		this.path12.remove()
		this.path13.remove()
		this.path14.remove()
		this.path15.remove()
	}
}


/* Code: {-s-rgb(0,0,0)-rgb(0,0,0)-true-p-602.3706896551723-44.181034482758
62-p-598.0603448275862-59.26724137931034-p-589.4396551724137-59.26724137931
034-p-582.9741379310344-94.82758620689654-p-582.9741379310344-130.387931034
48276-p-365.301724137931-130.38793103448276-p-365.301724137931-169.18103448
27586-p-582.9741379310344-187.5-p-589.4396551724137-311.42241379310343-p-53
7.7155172413793-321.1206896551724-p-536.6379310344827-354.5258620689655-p-5
96.9827586206897-355.60344827586204-p-602.3706896551723-367.4568965517241-p
-607.7586206896551-355.60344827586204-p-671.3362068965517-354.5258620689655
-p-670.2586206896551-321.1206896551724-p-615.301724137931-312.5-p-622.84482
75862069-187.5-p-872.8448275862069-169.1810344827586-p-872.8448275862069-13
1.4655172413793-p-622.8448275862069-130.38793103448276-p-622.8448275862069-
94.82758620689654-p-617.4568965517241-58.189655172413794-p-606.681034482758
6-58.189655172413794-false-s-rgb(92,24,24)-null-false-p-567.8879310344827-1
76.72413793103448-p-373.92241379310343-160.5603448275862-p-373.922413793103
43-140.08620689655172-p-568.9655172413793-140.08620689655172-false-s-rgb(92
,24,24)-null-false-p-602.3706896551723-106.68103448275862-p-602.37068965517
23-292.0258620689655-false-s-rgb(92,24,24)-null-false-p-633.6206896551723-1
40.08620689655172-p-865.301724137931-140.08620689655172-p-865.301724137931-
160.5603448275862-p-632.5431034482758-176.72413793103448-false-s-rgb(92,24,
24)-rgb(92,24,24)-true-p-548.4913793103448-340.51724137931035-p-549.5689655
172414-329.7413793103448-p-575.4310344827586-323.2758620689655-p-633.620689
6551723-323.2758620689655-p-658.405172413793-329.7413793103448-p-658.405172
413793-340.51724137931035-false}*/
class plane {
	constructor(x,y) {
		this.xLoc = x;
		this.yLoc = y;
		this.size = .2;
		this.path0= new Path();
		this.path0.strokeColor = { red: 0, green: 0, blue: 0 };
		this.path0.fillColor = { red: 0, green: 0, blue: 0 };
		this.path0.closed = true;
		this.path0.add( new Point(-16.70258620689655* wUnit * this.size + this.xLoc, -161.63793103448276 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(-21.012931034482758* wUnit * this.size + this.xLoc, -146.55172413793102 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(-29.63362068965517* wUnit * this.size + this.xLoc, -146.55172413793102 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(-36.099137931034484* wUnit * this.size + this.xLoc, -110.99137931034483 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(-36.099137931034484* wUnit * this.size + this.xLoc, -75.43103448275862 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(-253.7715517241379* wUnit * this.size + this.xLoc, -75.43103448275862 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(-253.7715517241379* wUnit * this.size + this.xLoc, -36.637931034482754 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(-36.099137931034484* wUnit * this.size + this.xLoc, -18.318965517241377 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(-29.63362068965517* wUnit * this.size + this.xLoc, 105.60344827586206 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(-81.35775862068965* wUnit * this.size + this.xLoc, 115.30172413793103 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(-82.4353448275862* wUnit * this.size + this.xLoc, 148.70689655172413 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(-22.09051724137931* wUnit * this.size + this.xLoc, 149.78448275862067 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(-16.70258620689655* wUnit * this.size + this.xLoc, 161.63793103448276 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(-11.314655172413792* wUnit * this.size + this.xLoc, 149.78448275862067 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(52.262931034482754* wUnit * this.size + this.xLoc, 148.70689655172413 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(51.185344827586206* wUnit * this.size + this.xLoc, 115.30172413793103 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(-3.771551724137931* wUnit * this.size + this.xLoc, 106.68103448275862 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(3.771551724137931* wUnit * this.size + this.xLoc, -18.318965517241377 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(253.7715517241379* wUnit * this.size + this.xLoc, -36.637931034482754 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(253.7715517241379* wUnit * this.size + this.xLoc, -74.35344827586206 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(3.771551724137931* wUnit * this.size + this.xLoc, -75.43103448275862 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(3.771551724137931* wUnit * this.size + this.xLoc, -110.99137931034483 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(-1.6163793103448274* wUnit * this.size + this.xLoc, -147.6293103448276 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(-12.392241379310343* wUnit * this.size + this.xLoc, -147.6293103448276 * wUnit * this.size + this.yLoc));
		this.path1= new Path();
		this.path1.strokeColor = { red: 0.36078, green: 0.09412, blue: 0.09412 };
		this.path1.fillColor = null;
		this.path1.closed = false;
		this.path1.add( new Point(-51.185344827586206* wUnit * this.size + this.xLoc, -29.094827586206897 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(-245.1508620689655* wUnit * this.size + this.xLoc, -45.25862068965517 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(-245.1508620689655* wUnit * this.size + this.xLoc, -65.73275862068965 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(-50.10775862068965* wUnit * this.size + this.xLoc, -65.73275862068965 * wUnit * this.size + this.yLoc));
		this.path2= new Path();
		this.path2.strokeColor = { red: 0.36078, green: 0.09412, blue: 0.09412 };
		this.path2.fillColor = null;
		this.path2.closed = false;
		this.path2.add( new Point(-16.70258620689655* wUnit * this.size + this.xLoc, -99.13793103448275 * wUnit * this.size + this.yLoc));
		this.path2.add( new Point(-16.70258620689655* wUnit * this.size + this.xLoc, 86.20689655172413 * wUnit * this.size + this.yLoc));
		this.path3= new Path();
		this.path3.strokeColor = { red: 0.36078, green: 0.09412, blue: 0.09412 };
		this.path3.fillColor = null;
		this.path3.closed = false;
		this.path3.add( new Point(14.547413793103448* wUnit * this.size + this.xLoc, -65.73275862068965 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(246.22844827586206* wUnit * this.size + this.xLoc, -65.73275862068965 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(246.22844827586206* wUnit * this.size + this.xLoc, -45.25862068965517 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(13.469827586206895* wUnit * this.size + this.xLoc, -29.094827586206897 * wUnit * this.size + this.yLoc));
		this.path4= new Path();
		this.path4.strokeColor = { red: 0.36078, green: 0.09412, blue: 0.09412 };
		this.path4.fillColor = { red: 0.36078, green: 0.09412, blue: 0.09412 };
		this.path4.closed = true;
		this.path4.add( new Point(-70.58189655172413* wUnit * this.size + this.xLoc, 134.69827586206895 * wUnit * this.size + this.yLoc));
		this.path4.add( new Point(-69.50431034482759* wUnit * this.size + this.xLoc, 123.92241379310344 * wUnit * this.size + this.yLoc));
		this.path4.add( new Point(-43.64224137931034* wUnit * this.size + this.xLoc, 117.45689655172413 * wUnit * this.size + this.yLoc));
		this.path4.add( new Point(14.547413793103448* wUnit * this.size + this.xLoc, 117.45689655172413 * wUnit * this.size + this.yLoc));
		this.path4.add( new Point(39.331896551724135* wUnit * this.size + this.xLoc, 123.92241379310344 * wUnit * this.size + this.yLoc));
		this.path4.add( new Point(39.331896551724135* wUnit * this.size + this.xLoc, 134.69827586206895 * wUnit * this.size + this.yLoc));
		console.log(this.path0);
		
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
	}

	remove(){
		this.path0.remove()
		this.path1.remove()
		this.path2.remove()
		this.path3.remove()
		this.path4.remove()
	}
}

undefined
undefined
/* Code: {-s-rgb(33,27,27)-rgb(45,41,41)-true-p-271.52777777777777-375.6944
4444444446-p-336.11111111111114-499.3055555555556-p-477.77777777777777-499.
3055555555556-p-545.8333333333334-375.69444444444446-p-627.0833333333334-34
8.61111111111114-p-545.8333333333334-9.027777777777779-p-271.52777777777777
-9.027777777777779-p-193.05555555555557-348.61111111111114-false-s-rgb(69,1
,1)-rgb(69,1,1)-true-p-271.52777777777777-72.22222222222223-p-212.5-337.5-p
-271.52777777777777-195.83333333333334-false-s-rgb(69,1,1)-rgb(69,1,1)-true
-p-544.4444444444445-72.22222222222223-p-609.0277777777778-337.5-p-545.8333
333333334-195.83333333333334-false-s-rgb(255,255,255)-null-false-p-409.0277
7777777777-72.22222222222223-p-409.02777777777777-439.58333333333337-false-
s-rgb(255,255,255)-null-false-p-336.11111111111114-70.83333333333334-p-336.
11111111111114-439.58333333333337-false-s-rgb(255,255,255)-null-false-p-477
.77777777777777-70.13888888888889-p-477.77777777777777-439.58333333333337-f
alse-s-rgb(255,255,255)-null-false-p-370.83333333333337-72.22222222222223-p
-370.83333333333337-110.41666666666667-false-s-rgb(255,255,255)-null-false-
p-370.83333333333337-140.97222222222223-p-370.83333333333337-177.0833333333
3334-false-s-rgb(255,255,255)-null-false-p-370.83333333333337-208.333333333
33334-p-370.83333333333337-243.75-false-s-rgb(255,255,255)-null-false-p-370
.83333333333337-275-p-370.83333333333337-309.72222222222223-false-s-rgb(255
,255,255)-null-false-p-370.83333333333337-337.5-p-370.83333333333337-372.22
222222222223-false-s-rgb(255,255,255)-null-false-p-370.83333333333337-404.8
6111111111114-p-370.83333333333337-439.58333333333337-false-s-rgb(255,255,2
55)-null-false-p-442.36111111111114-71.52777777777779-p-442.36111111111114-
110.41666666666667-false-s-rgb(255,255,255)-null-false-p-442.36111111111114
-140.97222222222223-p-442.36111111111114-177.08333333333334-false-s-rgb(255
,255,255)-null-false-p-442.36111111111114-208.33333333333334-p-442.36111111
111114-243.75-false-s-rgb(255,255,255)-null-false-p-442.36111111111114-275-
p-442.36111111111114-309.72222222222223-false-s-rgb(255,255,255)-null-false
-p-442.36111111111114-337.5-p-442.36111111111114-372.22222222222223-false-s
-rgb(255,255,255)-null-false-p-442.36111111111114-404.86111111111114-p-442.
36111111111114-439.58333333333337-false}*/
class shipBody3 {
	constructor(x,y) {
		this.xLoc = x;
		this.yLoc = y;
		this.size = .15;
		this.path0= new Path();
		this.path0.strokeColor = { red: 0.12941, green: 0.10588, blue: 0.10588 };
		this.path0.fillColor = { red: 0.17647, green: 0.16078, blue: 0.16078 };
		this.path0.closed = true;
		this.path0.add( new Point(-138.54166666666669* wUnit * this.size + this.xLoc, 121.52777777777779 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(-73.95833333333334* wUnit * this.size + this.xLoc, 245.13888888888889 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(67.70833333333334* wUnit * this.size + this.xLoc, 245.13888888888889 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(135.76388888888889* wUnit * this.size + this.xLoc, 121.52777777777779 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(217.01388888888889* wUnit * this.size + this.xLoc, 94.44444444444444 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(135.76388888888889* wUnit * this.size + this.xLoc, -245.13888888888889 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(-138.54166666666669* wUnit * this.size + this.xLoc, -245.13888888888889 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(-217.01388888888889* wUnit * this.size + this.xLoc, 94.44444444444444 * wUnit * this.size + this.yLoc));
		this.path1= new Path();
		this.path1.strokeColor = { red: 0.27059, green: 0.00392, blue: 0.00392 };
		this.path1.fillColor = { red: 0.27059, green: 0.00392, blue: 0.00392 };
		this.path1.closed = true;
		this.path1.add( new Point(-138.54166666666669* wUnit * this.size + this.xLoc, -181.94444444444446 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(-197.56944444444446* wUnit * this.size + this.xLoc, 83.33333333333334 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(-138.54166666666669* wUnit * this.size + this.xLoc, -58.333333333333336 * wUnit * this.size + this.yLoc));
		this.path2= new Path();
		this.path2.strokeColor = { red: 0.27059, green: 0.00392, blue: 0.00392 };
		this.path2.fillColor = { red: 0.27059, green: 0.00392, blue: 0.00392 };
		this.path2.closed = true;
		this.path2.add( new Point(134.375* wUnit * this.size + this.xLoc, -181.94444444444446 * wUnit * this.size + this.yLoc));
		this.path2.add( new Point(198.95833333333334* wUnit * this.size + this.xLoc, 83.33333333333334 * wUnit * this.size + this.yLoc));
		this.path2.add( new Point(135.76388888888889* wUnit * this.size + this.xLoc, -58.333333333333336 * wUnit * this.size + this.yLoc));
		this.path3= new Path();
		this.path3.strokeColor = { red: 1, green: 1, blue: 1 };
		this.path3.fillColor = null;
		this.path3.closed = false;
		this.path3.add( new Point(-1.0416666666666667* wUnit * this.size + this.xLoc, -181.94444444444446 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(-1.0416666666666667* wUnit * this.size + this.xLoc, 185.41666666666669 * wUnit * this.size + this.yLoc));
		this.path4= new Path();
		this.path4.strokeColor = { red: 1, green: 1, blue: 1 };
		this.path4.fillColor = null;
		this.path4.closed = false;
		this.path4.add( new Point(-73.95833333333334* wUnit * this.size + this.xLoc, -183.33333333333334 * wUnit * this.size + this.yLoc));
		this.path4.add( new Point(-73.95833333333334* wUnit * this.size + this.xLoc, 185.41666666666669 * wUnit * this.size + this.yLoc));
		this.path5= new Path();
		this.path5.strokeColor = { red: 1, green: 1, blue: 1 };
		this.path5.fillColor = null;
		this.path5.closed = false;
		this.path5.add( new Point(67.70833333333334* wUnit * this.size + this.xLoc, -184.02777777777777 * wUnit * this.size + this.yLoc));
		this.path5.add( new Point(67.70833333333334* wUnit * this.size + this.xLoc, 185.41666666666669 * wUnit * this.size + this.yLoc));
		this.path6= new Path();
		this.path6.strokeColor = { red: 1, green: 1, blue: 1 };
		this.path6.fillColor = null;
		this.path6.closed = false;
		this.path6.add( new Point(-39.236111111111114* wUnit * this.size + this.xLoc, -181.94444444444446 * wUnit * this.size + this.yLoc));
		this.path6.add( new Point(-39.236111111111114* wUnit * this.size + this.xLoc, -143.75 * wUnit * this.size + this.yLoc));
		this.path7= new Path();
		this.path7.strokeColor = { red: 1, green: 1, blue: 1 };
		this.path7.fillColor = null;
		this.path7.closed = false;
		this.path7.add( new Point(-39.236111111111114* wUnit * this.size + this.xLoc, -113.19444444444444 * wUnit * this.size + this.yLoc));
		this.path7.add( new Point(-39.236111111111114* wUnit * this.size + this.xLoc, -77.08333333333334 * wUnit * this.size + this.yLoc));
		this.path8= new Path();
		this.path8.strokeColor = { red: 1, green: 1, blue: 1 };
		this.path8.fillColor = null;
		this.path8.closed = false;
		this.path8.add( new Point(-39.236111111111114* wUnit * this.size + this.xLoc, -45.833333333333336 * wUnit * this.size + this.yLoc));
		this.path8.add( new Point(-39.236111111111114* wUnit * this.size + this.xLoc, -10.416666666666668 * wUnit * this.size + this.yLoc));
		this.path9= new Path();
		this.path9.strokeColor = { red: 1, green: 1, blue: 1 };
		this.path9.fillColor = null;
		this.path9.closed = false;
		this.path9.add( new Point(-39.236111111111114* wUnit * this.size + this.xLoc, 20.833333333333336 * wUnit * this.size + this.yLoc));
		this.path9.add( new Point(-39.236111111111114* wUnit * this.size + this.xLoc, 55.55555555555556 * wUnit * this.size + this.yLoc));
		this.path10= new Path();
		this.path10.strokeColor = { red: 1, green: 1, blue: 1 };
		this.path10.fillColor = null;
		this.path10.closed = false;
		this.path10.add( new Point(-39.236111111111114* wUnit * this.size + this.xLoc, 83.33333333333334 * wUnit * this.size + this.yLoc));
		this.path10.add( new Point(-39.236111111111114* wUnit * this.size + this.xLoc, 118.05555555555556 * wUnit * this.size + this.yLoc));
		this.path11= new Path();
		this.path11.strokeColor = { red: 1, green: 1, blue: 1 };
		this.path11.fillColor = null;
		this.path11.closed = false;
		this.path11.add( new Point(-39.236111111111114* wUnit * this.size + this.xLoc, 150.69444444444446 * wUnit * this.size + this.yLoc));
		this.path11.add( new Point(-39.236111111111114* wUnit * this.size + this.xLoc, 185.41666666666669 * wUnit * this.size + this.yLoc));
		this.path12= new Path();
		this.path12.strokeColor = { red: 1, green: 1, blue: 1 };
		this.path12.fillColor = null;
		this.path12.closed = false;
		this.path12.add( new Point(32.29166666666667* wUnit * this.size + this.xLoc, -182.63888888888889 * wUnit * this.size + this.yLoc));
		this.path12.add( new Point(32.29166666666667* wUnit * this.size + this.xLoc, -143.75 * wUnit * this.size + this.yLoc));
		this.path13= new Path();
		this.path13.strokeColor = { red: 1, green: 1, blue: 1 };
		this.path13.fillColor = null;
		this.path13.closed = false;
		this.path13.add( new Point(32.29166666666667* wUnit * this.size + this.xLoc, -113.19444444444444 * wUnit * this.size + this.yLoc));
		this.path13.add( new Point(32.29166666666667* wUnit * this.size + this.xLoc, -77.08333333333334 * wUnit * this.size + this.yLoc));
		this.path14= new Path();
		this.path14.strokeColor = { red: 1, green: 1, blue: 1 };
		this.path14.fillColor = null;
		this.path14.closed = false;
		this.path14.add( new Point(32.29166666666667* wUnit * this.size + this.xLoc, -45.833333333333336 * wUnit * this.size + this.yLoc));
		this.path14.add( new Point(32.29166666666667* wUnit * this.size + this.xLoc, -10.416666666666668 * wUnit * this.size + this.yLoc));
		this.path15= new Path();
		this.path15.strokeColor = { red: 1, green: 1, blue: 1 };
		this.path15.fillColor = null;
		this.path15.closed = false;
		this.path15.add( new Point(32.29166666666667* wUnit * this.size + this.xLoc, 20.833333333333336 * wUnit * this.size + this.yLoc));
		this.path15.add( new Point(32.29166666666667* wUnit * this.size + this.xLoc, 55.55555555555556 * wUnit * this.size + this.yLoc));
		this.path16= new Path();
		this.path16.strokeColor = { red: 1, green: 1, blue: 1 };
		this.path16.fillColor = null;
		this.path16.closed = false;
		this.path16.add( new Point(32.29166666666667* wUnit * this.size + this.xLoc, 83.33333333333334 * wUnit * this.size + this.yLoc));
		this.path16.add( new Point(32.29166666666667* wUnit * this.size + this.xLoc, 118.05555555555556 * wUnit * this.size + this.yLoc));
		this.path17= new Path();
		this.path17.strokeColor = { red: 1, green: 1, blue: 1 };
		this.path17.fillColor = null;
		this.path17.closed = false;
		this.path17.add( new Point(32.29166666666667* wUnit * this.size + this.xLoc, 150.69444444444446 * wUnit * this.size + this.yLoc));
		this.path17.add( new Point(32.29166666666667* wUnit * this.size + this.xLoc, 185.41666666666669 * wUnit * this.size + this.yLoc));
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
		this.path7.position.x += xIncr
		this.path7.position.y += yIncr
		this.path8.position.x += xIncr
		this.path8.position.y += yIncr
		this.path9.position.x += xIncr
		this.path9.position.y += yIncr
		this.path10.position.x += xIncr
		this.path10.position.y += yIncr
		this.path11.position.x += xIncr
		this.path11.position.y += yIncr
		this.path12.position.x += xIncr
		this.path12.position.y += yIncr
		this.path13.position.x += xIncr
		this.path13.position.y += yIncr
		this.path14.position.x += xIncr
		this.path14.position.y += yIncr
		this.path15.position.x += xIncr
		this.path15.position.y += yIncr
		this.path16.position.x += xIncr
		this.path16.position.y += yIncr
		this.path17.position.x += xIncr
		this.path17.position.y += yIncr
	}

	remove(){
		this.path0.remove()
		this.path1.remove()
		this.path2.remove()
		this.path3.remove()
		this.path4.remove()
		this.path5.remove()
		this.path6.remove()
		this.path7.remove()
		this.path8.remove()
		this.path9.remove()
		this.path10.remove()
		this.path11.remove()
		this.path12.remove()
		this.path13.remove()
		this.path14.remove()
		this.path15.remove()
		this.path16.remove()
		this.path17.remove()
	}
}

undefined
/* Code: {-s-rgb(2,59,7)-rgb(8,89,15)-true-p-385.8784893267652-145.04652435
686918-p-517.7887246852764-145.04652435686918-p-530.3776683087028-164.20361
247947454-p-530.3776683087028-381.49972632731254-p-516.6940339354132-400.65
681444991793-p-385.8784893267652-400.65681444991793-p-373.28954570333883-38
1.49972632731254-p-373.28954570333883-164.20361247947454-false-s-rgb(1,64,7
)-rgb(8,102,17)-true-p-444.99178981937604-40.503557744937055-p-461.41215106
732346-40.503557744937055-p-461.41215106732346-97.42747673782156-p-457.5807
334428024-97.42747673782156-p-459.22276956759714-178.98193760262726-p-474.5
4844006568146-178.98193760262726-p-517.7887246852764-255.06294471811714-p-4
74.54844006568146-358.5112205801861-p-434.592227695676-358.5112205801861-p-
385.8784893267652-255.06294471811714-p-434.592227695676-178.98193760262726-
p-449.91789819376027-178.98193760262726-p-448.2758620689655-97.427476737821
56-p-444.99178981937604-97.42747673782156-p-444.99178981937604-74.438970990
69513-false}*/
class TankDraft {
	constructor(x,y) {
		this.xLoc = x;
		this.yLoc = y;
		this.size = 0.3;
		this.path0= new Path();
		this.path0.strokeColor = { red: 0.00784, green: 0.23137, blue: 0.02745 };
		this.path0.fillColor = { red: 0.03137, green: 0.34902, blue: 0.05882 };
		this.path0.closed = true;
		this.path0.add( new Point(-65.95511767925561* wUnit * this.size + this.xLoc, -75.53366174055829 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(65.95511767925561* wUnit * this.size + this.xLoc, -75.53366174055829 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(78.544061302682* wUnit * this.size + this.xLoc, -56.37657361795293 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(78.544061302682* wUnit * this.size + this.xLoc, 160.91954022988506 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(64.86042692939245* wUnit * this.size + this.xLoc, 180.07662835249042 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(-65.95511767925561* wUnit * this.size + this.xLoc, 180.07662835249042 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(-78.544061302682* wUnit * this.size + this.xLoc, 160.91954022988506 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(-78.544061302682* wUnit * this.size + this.xLoc, -56.37657361795293 * wUnit * this.size + this.yLoc));
		this.path1= new Path();
		this.path1.strokeColor = { red: 0.00392, green: 0.25098, blue: 0.02745 };
		this.path1.fillColor = { red: 0.03137, green: 0.4, blue: 0.06667 };
		this.path1.closed = true;
		this.path1.add( new Point(-6.841817186644773* wUnit * this.size + this.xLoc, -180.07662835249042 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(9.578544061302683* wUnit * this.size + this.xLoc, -180.07662835249042 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(9.578544061302683* wUnit * this.size + this.xLoc, -123.15270935960591 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(5.74712643678161* wUnit * this.size + this.xLoc, -123.15270935960591 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(7.389162561576355* wUnit * this.size + this.xLoc, -41.59824849480022 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(22.714833059660645* wUnit * this.size + this.xLoc, -41.59824849480022 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(65.95511767925561* wUnit * this.size + this.xLoc, 34.48275862068966 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(22.714833059660645* wUnit * this.size + this.xLoc, 137.93103448275863 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(-17.24137931034483* wUnit * this.size + this.xLoc, 137.93103448275863 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(-65.95511767925561* wUnit * this.size + this.xLoc, 34.48275862068966 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(-17.24137931034483* wUnit * this.size + this.xLoc, -41.59824849480022 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(-1.9157088122605364* wUnit * this.size + this.xLoc, -41.59824849480022 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(-3.557744937055282* wUnit * this.size + this.xLoc, -123.15270935960591 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(-6.841817186644773* wUnit * this.size + this.xLoc, -123.15270935960591 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(-6.841817186644773* wUnit * this.size + this.xLoc, -146.14121510673235 * wUnit * this.size + this.yLoc));
	}

	update(xIncr, yIncr){
		this.path0.position.x += xIncr
		this.path0.position.y += yIncr
		this.path1.position.x += xIncr
		this.path1.position.y += yIncr
	}

	remove(){
		this.path0.remove()
		this.path1.remove()
	}
}


/* Code: {-s-rgb(12,86,14)-rgb(12,86,14)-true-p-84.72222222222223-248.61111
111111111-p-111.11111111111111-288.8888888888889-p-300-288.8888888888889-p-
322.9166666666667-248.61111111111111-p-300-209.02777777777777-p-111.1111111
1111111-209.02777777777777-false-s-rgb(0,0,0)-rgb(0,0,0)-true-p-112.5-244.4
4444444444446-p-120.1388888888889-244.44444444444446-p-120.1388888888889-25
2.7777777777778-p-112.5-252.7777777777778-true-s-rgb(0,0,0)-rgb(0,0,0)-true
-p-300-244.44444444444446-p-300-252.7777777777778-p-292.36111111111114-252.
7777777777778-p-292.36111111111114-244.44444444444446-true-s-rgb(17,20,17)-
rgb(17,20,17)-true-p-193.75-272.9166666666667-p-221.5277777777778-272.91666
66666667-p-229.16666666666669-265.27777777777777-p-229.16666666666669-233.3
3333333333334-p-221.5277777777778-225.69444444444446-p-193.75-225.694444444
44446-p-185.41666666666669-233.33333333333334-p-185.41666666666669-265.2777
7777777777-false-s-rgb(17,20,17)-rgb(17,20,17)-false-p-203.47222222222223-2
25.69444444444446-p-203.47222222222223-214.58333333333334-p-206.25-213.8888
8888888889-p-206.25-182.63888888888889-p-210.41666666666669-182.63888888888
889-p-210.41666666666669-214.58333333333334-p-212.5-214.58333333333334-p-21
2.5-225.69444444444446-false-s-rgb(0,0,0)-null-false-p-111.11111111111111-2
27.7777777777778-p-95.83333333333334-248.61111111111111-p-111.1111111111111
1-270.83333333333337-false-s-rgb(0,0,0)-null-false-p-300-227.7777777777778-
p-311.80555555555554-248.61111111111111-p-300-270.83333333333337-false}*/
class userShip {
	constructor(x,y) {
		this.xLoc = x;
		this.yLoc = y;
		this.size = .2;
		this.path0= new Path();
		this.path0.strokeColor = { red: 0.04706, green: 0.33725, blue: 0.0549 };
		this.path0.fillColor = { red: 0.04706, green: 0.33725, blue: 0.0549 };
		this.path0.closed = true;
		this.path0.add( new Point(-119.09722222222223* wUnit * this.size + this.xLoc, 12.847222222222223 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(-92.70833333333334* wUnit * this.size + this.xLoc, 53.125 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(96.18055555555556* wUnit * this.size + this.xLoc, 53.125 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(119.09722222222223* wUnit * this.size + this.xLoc, 12.847222222222223 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(96.18055555555556* wUnit * this.size + this.xLoc, -26.73611111111111 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(-92.70833333333334* wUnit * this.size + this.xLoc, -26.73611111111111 * wUnit * this.size + this.yLoc));
		this.path1= new Path();
		this.path1.strokeColor = { red: 0, green: 0, blue: 0 };
		this.path1.fillColor = { red: 0, green: 0, blue: 0 };
		this.path1.closed = true;
		this.path1.add( new Point(-91.31944444444444* wUnit * this.size + this.xLoc, 8.680555555555555 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(-83.68055555555556* wUnit * this.size + this.xLoc, 8.680555555555555 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(-83.68055555555556* wUnit * this.size + this.xLoc, 17.01388888888889 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(-91.31944444444444* wUnit * this.size + this.xLoc, 17.01388888888889 * wUnit * this.size + this.yLoc));
		this.path1.smooth();
		this.path2= new Path();
		this.path2.strokeColor = { red: 0, green: 0, blue: 0 };
		this.path2.fillColor = { red: 0, green: 0, blue: 0 };
		this.path2.closed = true;
		this.path2.add( new Point(96.18055555555556* wUnit * this.size + this.xLoc, 8.680555555555555 * wUnit * this.size + this.yLoc));
		this.path2.add( new Point(96.18055555555556* wUnit * this.size + this.xLoc, 17.01388888888889 * wUnit * this.size + this.yLoc));
		this.path2.add( new Point(88.54166666666667* wUnit * this.size + this.xLoc, 17.01388888888889 * wUnit * this.size + this.yLoc));
		this.path2.add( new Point(88.54166666666667* wUnit * this.size + this.xLoc, 8.680555555555555 * wUnit * this.size + this.yLoc));
		this.path2.smooth();
		this.path3= new Path();
		this.path3.strokeColor = { red: 0.06667, green: 0.07843, blue: 0.06667 };
		this.path3.fillColor = { red: 0.06667, green: 0.07843, blue: 0.06667 };
		this.path3.closed = true;
		this.path3.add( new Point(-10.069444444444445* wUnit * this.size + this.xLoc, 37.15277777777778 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(17.708333333333336* wUnit * this.size + this.xLoc, 37.15277777777778 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(25.34722222222222* wUnit * this.size + this.xLoc, 29.51388888888889 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(25.34722222222222* wUnit * this.size + this.xLoc, -2.430555555555556 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(17.708333333333336* wUnit * this.size + this.xLoc, -10.069444444444445 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(-10.069444444444445* wUnit * this.size + this.xLoc, -10.069444444444445 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(-18.40277777777778* wUnit * this.size + this.xLoc, -2.430555555555556 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(-18.40277777777778* wUnit * this.size + this.xLoc, 29.51388888888889 * wUnit * this.size + this.yLoc));
		this.path4= new Path();
		this.path4.strokeColor = { red: 0.06667, green: 0.07843, blue: 0.06667 };
		this.path4.fillColor = { red: 0.06667, green: 0.07843, blue: 0.06667 };
		this.path4.closed = false;
		this.path4.add( new Point(-0.3472222222222222* wUnit * this.size + this.xLoc, -10.069444444444445 * wUnit * this.size + this.yLoc));
		this.path4.add( new Point(-0.3472222222222222* wUnit * this.size + this.xLoc, -21.180555555555557 * wUnit * this.size + this.yLoc));
		this.path4.add( new Point(2.430555555555556* wUnit * this.size + this.xLoc, -21.875 * wUnit * this.size + this.yLoc));
		this.path4.add( new Point(2.430555555555556* wUnit * this.size + this.xLoc, -53.125 * wUnit * this.size + this.yLoc));
		this.path4.add( new Point(6.597222222222222* wUnit * this.size + this.xLoc, -53.125 * wUnit * this.size + this.yLoc));
		this.path4.add( new Point(6.597222222222222* wUnit * this.size + this.xLoc, -21.180555555555557 * wUnit * this.size + this.yLoc));
		this.path4.add( new Point(8.680555555555555* wUnit * this.size + this.xLoc, -21.180555555555557 * wUnit * this.size + this.yLoc));
		this.path4.add( new Point(8.680555555555555* wUnit * this.size + this.xLoc, -10.069444444444445 * wUnit * this.size + this.yLoc));
		this.path5= new Path();
		this.path5.strokeColor = { red: 0, green: 0, blue: 0 };
		this.path5.fillColor = null;
		this.path5.closed = false;
		this.path5.add( new Point(-92.70833333333334* wUnit * this.size + this.xLoc, -7.986111111111112 * wUnit * this.size + this.yLoc));
		this.path5.add( new Point(-107.98611111111111* wUnit * this.size + this.xLoc, 12.847222222222223 * wUnit * this.size + this.yLoc));
		this.path5.add( new Point(-92.70833333333334* wUnit * this.size + this.xLoc, 35.06944444444444 * wUnit * this.size + this.yLoc));
		this.path6= new Path();
		this.path6.strokeColor = { red: 0, green: 0, blue: 0 };
		this.path6.fillColor = null;
		this.path6.closed = false;
		this.path6.add( new Point(96.18055555555556* wUnit * this.size + this.xLoc, -7.986111111111112 * wUnit * this.size + this.yLoc));
		this.path6.add( new Point(107.98611111111111* wUnit * this.size + this.xLoc, 12.847222222222223 * wUnit * this.size + this.yLoc));
		this.path6.add( new Point(96.18055555555556* wUnit * this.size + this.xLoc, 35.06944444444444 * wUnit * this.size + this.yLoc));
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

	remove(){
		this.path0.remove()
		this.path1.remove()
		this.path2.remove()
		this.path3.remove()
		this.path4.remove()
		this.path5.remove()
		this.path6.remove()
	}
}


/* Code: {-s-rgb(0,0,0)-rgb(124,75,32)-true-p-64.41393875395988-214.3611404
4350583-p-107.70855332629357-172.12249208025344-p-325.23759239704333-173.17
845828933474-p-365.3643083421331-214.36114044350583-p-366.4202745512144-612
.4604012671595-p-325.23759239704333-626.1879619852165-p-108.76451953537487-
625.1319957761352-p-65.46990496304119-612.4604012671595-false-s-rgb(82,60,1
4)-rgb(82,60,14)-false-p-181.62618796198524-626.1879619852165-p-174.2344244
9841605-610.3484688489968-p-173.17845828933474-587.117212249208-p-167.89862
72439282-575.5015839493136-p-146.779303062302-565.9978880675818-p-127.77191
129883845-561.7740232312566-p-109.82048574445618-546.9904963041183-p-107.70
855332629357-514.2555438225977-p-88.70116156283-504.7518479408659-p-76.0295
6705385428-501.583949313622-p-65.46990496304119-481.52059134107714-p-69.693
76979936642-467.79303062302006-p-87.64519535374869-454.06546990496304-p-100
.31678986272439-453.00950369588173-p-114.04435058078143-467.79303062302006-
p-120.38014783526928-484.68848996832105-p-133.05174234424499-496.3041182682
1546-p-142.5554382259768-507.9197465681099-p-165.78669482576558-523.7592397
043295-p-175.29039070749738-545.934530095037-p-189.0179514255544-555.438225
9767688-p-199.57761351636748-561.7740232312566-p-205.91341077085534-572.333
6853220698-p-208.02534318901797-588.1731784582894-p-212.2492080253432-613.5
163674762408-p-213.3051742344245-625.1319957761352-true-s-rgb(82,60,14)-rgb
(82,60,14)-false-p-364.3083421330518-418.16261879619856-p-336.8532206969377
4-422.3864836325238-p-321.01372756071805-434.0021119324182-p-311.5100316789
863-454.06546990496304-p-294.6145723336853-450.8975712777191-p-289.33474128
82788-432.9461457233369-p-289.3347412882788-413.9387539598733-p-285.1108764
519536-384.37170010559663-p-312.5659978880676-389.6515311510032-p-327.34952
481520594-388.59556494192185-p-337.90918690601904-395.98732840549104-p-352.
69271383315737-398.09926082365365-p-361.1404435058078-395.98732840549104-p-
365.3643083421331-412.882787750792-true-s-rgb(115,75,18)-rgb(82,60,14)-fals
e-p-65.46990496304119-342.13305174234426-p-80.25343189017951-337.9091869060
1904-p-92.92502639915523-326.29355860612463-p-92.92502639915523-314.6779303
062302-p-102.42872228088702-299.8944033790919-p-119.32418162618796-285.1108
764519536-p-137.27560718057023-285.1108764519536-p-149.94720168954595-288.2
787750791975-p-163.67476240760297-299.8944033790919-p-173.17845828933474-31
3.6219640971489-p-176.34635691657869-335.7972544878564-p-187.9619852164731-
337.90918690601904-p-204.85744456177403-361.1404435058078-p-231.25659978880
677-361.1404435058078-p-241.81626187961987-360.0844772967265-p-252.37592397
043295-353.7486800422387-p-273.49524815205916-338.96515311510035-p-275.6071
805702218-316.78986272439283-p-275.6071805702218-296.726504751848-p-275.607
1805702218-279.831045406547-p-270.32734952481525-267.1594508975713-p-250.26
399155227034-267.1594508975713-p-240.76029567053857-289.3347412882788-p-240
.76029567053857-309.39809926082364-p-239.70432946145723-325.23759239704333-
p-223.8648363252376-321.01372756071805-p-206.96937697993664-294.61457233368
53-p-200.63357972544878-284.05491024287227-p-187.9619852164731-263.99155227
032736-p-175.29039070749738-263.99155227032736-p-164.73072861668427-263.991
55227032736-p-151.00316789862725-263.99155227032736-p-127.77191129883845-25
7.65575501583953-p-116.15628299894404-257.65575501583953-p-104.540654699049
64-257.65575501583953-p-91.86906019007392-269.2713833157339-p-74.9736008447
7297-277.7191129883844-p-65.46990496304119-331.57338965153116-true-s-rgb(82
,60,14)-rgb(82,60,14)-false-p-282.9989440337909-626.1879619852165-p-279.831
045406547-604.012671594509-p-279.831045406547-575.5015839493136-p-260.82365
364308345-557.5501583949314-p-221.752903907075-525.8711721224921-p-212.2492
080253432-511.0876451953538-p-213.3051742344245-484.68848996832105-p-233.36
853220696938-484.68848996832105-p-248.15205913410773-487.85638859556497-p-2
69.2713833157339-495.24815205913416-p-285.1108764519536-512.1436114044351-p
-296.726504751848-526.9271383315734-p-303.0623020063358-550.1583949313622-p
-305.1742344244984-568.1098204857445-p-306.2302006335797-583.9493136219642-
p-309.39809926082364-599.7888067581838-p-309.39809926082364-610.34846884899
68-p-310.454065469905-627.2439281942978-true-s-rgb(74,103,26)-rgb(74,103,26
)-true-p-88.70116156283-394.93136219640974-p-92.92502639915523-384.37170010
559663-p-105.59662090813094-371.7001055966209-p-117.21224920802536-371.7001
055966209-p-128.82787750791977-372.7560718057022-p-134.1077085533263-388.59
556494192185-p-147.8352692713833-409.71488912354806-p-147.8352692713833-426
.610348468849-p-129.88384371700107-428.72228088701166-p-108.76451953537487-
427.6663146779303-p-102.42872228088702-414.9947201689546-true-s-rgb(0,0,0)-
rgb(255,255,0)-true-p-233.36853220696938-379.0918690601901-p-244.9841605068
638-378.0359028511088-p-214.36114044350583-402.3231256599789-p-210.13727560
718058-449.8416050686378-p-223.8648363252376-461.45723336853223-p-258.71172
122492084-458.2893347412883-p-266.10348468848997-444.5617740232313-p-273.49
524815205916-425.5543822597677-p-252.37592397043295-408.65892291446676-p-26
0.82365364308345-400.21119324181626-true-s-rgb(74,103,26)-rgb(74,103,26)-fa
lse-p-246.0401267159451-173.17845828933474-p-246.0401267159451-192.18585005
279832-p-252.37592397043295-213.3051742344245-p-262.93558606124606-220.6969
3769799366-p-274.55121436114047-228.08870116156285-p-286.1668426610349-250.
26399155227034-p-303.0623020063358-276.6631467793031-p-315.7338965153115-27
5.6071805702218-p-318.90179514255544-257.65575501583953-p-313.6219640971489
-233.36853220696938-p-298.8384371700106-222.8088701161563-p-288.27877507919
75-203.80147835269273-p-281.9429778247096-174.23442449841605-true-s-rgb(0,0
,0)-null-false-false-s-rgb(0,0,0)-rgb(115,75,18)-true-p-164.73072861668427-
501.583949313622-p-267.1594508975713-502.6399155227033-p-312.5659978880676-
365.3643083421331-p-267.1594508975713-250.26399155227034-p-165.786694825765
58-250.26399155227034-p-125.65997888067582-363.2523759239705-false-s-rgb(0,
0,0)-null-false-p-191.129883843717-313.6219640971489-false-s-rgb(74,103,26)
-rgb(74,103,26)-false-p-126.71594508975713-362.1964097148891-p-158.39493136
219642-322.06969376979936-p-174.23442449841605-304.1182682154171-p-200.6335
7972544878-294.6145723336853-p-225.9767687434002-325.23759239704333-p-221.7
52903907075-359.0285110876452-p-194.29778247096093-378.0359028511088-p-156.
2829989440338-385.42766631467794-p-134.1077085533263-389.6515311510032-true
-s-rgb(0,0,0)-null-false-p-276.6631467793031-465.68109820485745-false-s-rgb
(74,103,26)-rgb(74,103,26)-false-p-222.8088701161563-501.583949313622-p-209
.08130939809928-469.9049630411827-p-216.47307286166844-437.1700105596621-p-
197.46568109820487-413.9387539598733-p-219.64097148891236-385.4276663146779
4-p-250.26399155227034-387.53959873284055-p-256.59978880675817-424.49841605
06864-p-257.65575501583953-444.5617740232313-p-243.92819429778248-464.62513
199577614-p-250.26399155227034-502.6399155227033-true-s-rgb(0,0,0)-rgb(115,
75,18)-false-p-208.02534318901797-249.20802534318904-p-208.02534318901797-3
3.790918690601906-p-230.20063357972546-32.734952481520594-p-230.20063357972
546-251.31995776135165-false}*/
class tank3 {
	constructor(x,y) {
		this.xLoc = x;
		this.yLoc = y;
		this.size = .09;
		this.path0= new Path();
		this.path0.strokeColor = { red: 0, green: 0, blue: 0 };
		this.path0.fillColor = { red: 0.48627, green: 0.29412, blue: 0.12549 };
		this.path0.closed = true;
		this.path0.add( new Point(-151.00316789862725* wUnit * this.size + this.xLoc, -115.62829989440338 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(-107.70855332629357* wUnit * this.size + this.xLoc, -157.86694825765576 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(109.82048574445618* wUnit * this.size + this.xLoc, -156.81098204857446 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(149.94720168954595* wUnit * this.size + this.xLoc, -115.62829989440338 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(151.00316789862725* wUnit * this.size + this.xLoc, 282.4709609292503 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(109.82048574445618* wUnit * this.size + this.xLoc, 296.1985216473073 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(-106.65258711721225* wUnit * this.size + this.xLoc, 295.142555438226 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(-149.94720168954595* wUnit * this.size + this.xLoc, 282.4709609292503 * wUnit * this.size + this.yLoc));
		this.path1= new Path();
		this.path1.strokeColor = { red: 0.32157, green: 0.23529, blue: 0.0549 };
		this.path1.fillColor = { red: 0.32157, green: 0.23529, blue: 0.0549 };
		this.path1.closed = false;
		this.path1.add( new Point(-33.790918690601906* wUnit * this.size + this.xLoc, 296.1985216473073 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(-41.18268215417107* wUnit * this.size + this.xLoc, 280.3590285110877 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(-42.23864836325238* wUnit * this.size + this.xLoc, 257.12777191129885 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(-47.518479408658926* wUnit * this.size + this.xLoc, 245.51214361140444 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(-68.63780359028512* wUnit * this.size + this.xLoc, 236.00844772967267 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(-87.64519535374869* wUnit * this.size + this.xLoc, 231.78458289334742 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(-105.59662090813094* wUnit * this.size + this.xLoc, 217.0010559662091 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(-107.70855332629357* wUnit * this.size + this.xLoc, 184.2661034846885 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(-126.71594508975713* wUnit * this.size + this.xLoc, 174.76240760295673 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(-139.38753959873284* wUnit * this.size + this.xLoc, 171.59450897571278 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(-149.94720168954595* wUnit * this.size + this.xLoc, 151.5311510031679 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(-145.7233368532207* wUnit * this.size + this.xLoc, 137.8035902851109 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(-127.77191129883845* wUnit * this.size + this.xLoc, 124.07602956705387 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(-115.10031678986273* wUnit * this.size + this.xLoc, 123.02006335797255 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(-101.37275607180571* wUnit * this.size + this.xLoc, 137.8035902851109 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(-95.03695881731785* wUnit * this.size + this.xLoc, 154.69904963041182 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(-82.36536430834214* wUnit * this.size + this.xLoc, 166.31467793030623 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(-72.86166842661035* wUnit * this.size + this.xLoc, 177.93030623020064 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(-49.63041182682154* wUnit * this.size + this.xLoc, 193.76979936642027 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(-40.12671594508976* wUnit * this.size + this.xLoc, 215.9450897571278 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(-26.399155227032736* wUnit * this.size + this.xLoc, 225.44878563885956 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(-15.839493136219641* wUnit * this.size + this.xLoc, 231.78458289334742 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(-9.503695881731785* wUnit * this.size + this.xLoc, 242.34424498416053 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(-7.391763463569166* wUnit * this.size + this.xLoc, 258.18373812038016 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(-3.1678986272439285* wUnit * this.size + this.xLoc, 283.5269271383316 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(-2.111932418162619* wUnit * this.size + this.xLoc, 295.142555438226 * wUnit * this.size + this.yLoc));
		this.path1.smooth();
		this.path2= new Path();
		this.path2.strokeColor = { red: 0.32157, green: 0.23529, blue: 0.0549 };
		this.path2.fillColor = { red: 0.32157, green: 0.23529, blue: 0.0549 };
		this.path2.closed = false;
		this.path2.add( new Point(148.89123548046464* wUnit * this.size + this.xLoc, 88.17317845828934 * wUnit * this.size + this.yLoc));
		this.path2.add( new Point(121.43611404435059* wUnit * this.size + this.xLoc, 92.39704329461458 * wUnit * this.size + this.yLoc));
		this.path2.add( new Point(105.59662090813094* wUnit * this.size + this.xLoc, 104.01267159450899 * wUnit * this.size + this.yLoc));
		this.path2.add( new Point(96.09292502639916* wUnit * this.size + this.xLoc, 124.07602956705387 * wUnit * this.size + this.yLoc));
		this.path2.add( new Point(79.19746568109821* wUnit * this.size + this.xLoc, 120.90813093980994 * wUnit * this.size + this.yLoc));
		this.path2.add( new Point(73.91763463569166* wUnit * this.size + this.xLoc, 102.95670538542767 * wUnit * this.size + this.yLoc));
		this.path2.add( new Point(73.91763463569166* wUnit * this.size + this.xLoc, 83.9493136219641 * wUnit * this.size + this.yLoc));
		this.path2.add( new Point(69.69376979936642* wUnit * this.size + this.xLoc, 54.38225976768744 * wUnit * this.size + this.yLoc));
		this.path2.add( new Point(97.14889123548046* wUnit * this.size + this.xLoc, 59.66209081309398 * wUnit * this.size + this.yLoc));
		this.path2.add( new Point(111.9324181626188* wUnit * this.size + this.xLoc, 58.60612460401268 * wUnit * this.size + this.yLoc));
		this.path2.add( new Point(122.4920802534319* wUnit * this.size + this.xLoc, 65.99788806758184 * wUnit * this.size + this.yLoc));
		this.path2.add( new Point(137.27560718057023* wUnit * this.size + this.xLoc, 68.10982048574446 * wUnit * this.size + this.yLoc));
		this.path2.add( new Point(145.7233368532207* wUnit * this.size + this.xLoc, 65.99788806758184 * wUnit * this.size + this.yLoc));
		this.path2.add( new Point(149.94720168954595* wUnit * this.size + this.xLoc, 82.89334741288279 * wUnit * this.size + this.yLoc));
		this.path2.smooth();
		this.path3= new Path();
		this.path3.strokeColor = { red: 0.45098, green: 0.29412, blue: 0.07059 };
		this.path3.fillColor = { red: 0.32157, green: 0.23529, blue: 0.0549 };
		this.path3.closed = false;
		this.path3.add( new Point(-149.94720168954595* wUnit * this.size + this.xLoc, 12.143611404435058 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(-135.16367476240762* wUnit * this.size + this.xLoc, 7.9197465681098205 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(-122.4920802534319* wUnit * this.size + this.xLoc, -3.695881731784583 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(-122.4920802534319* wUnit * this.size + this.xLoc, -15.311510031678987 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(-112.9883843717001* wUnit * this.size + this.xLoc, -30.09503695881732 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(-96.09292502639916* wUnit * this.size + this.xLoc, -44.87856388595565 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(-78.1414994720169* wUnit * this.size + this.xLoc, -44.87856388595565 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(-65.46990496304119* wUnit * this.size + this.xLoc, -41.71066525871172 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(-51.74234424498416* wUnit * this.size + this.xLoc, -30.09503695881732 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(-42.23864836325238* wUnit * this.size + this.xLoc, -16.367476240760297 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(-39.07074973600845* wUnit * this.size + this.xLoc, 5.807814149947202 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(-27.455121436114045* wUnit * this.size + this.xLoc, 7.9197465681098205 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(-10.559662090813095* wUnit * this.size + this.xLoc, 31.15100316789863 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(15.839493136219641* wUnit * this.size + this.xLoc, 31.15100316789863 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(26.399155227032736* wUnit * this.size + this.xLoc, 30.09503695881732 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(36.95881731784583* wUnit * this.size + this.xLoc, 23.759239704329463 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(58.07814149947202* wUnit * this.size + this.xLoc, 8.97571277719113 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(60.19007391763464* wUnit * this.size + this.xLoc, -13.199577613516368 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(60.19007391763464* wUnit * this.size + this.xLoc, -33.262935586061246 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(60.19007391763464* wUnit * this.size + this.xLoc, -50.158394931362196 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(54.91024287222809* wUnit * this.size + this.xLoc, -62.82998944033791 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(34.84688489968321* wUnit * this.size + this.xLoc, -62.82998944033791 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(25.343189017951428* wUnit * this.size + this.xLoc, -40.654699049630416 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(25.343189017951428* wUnit * this.size + this.xLoc, -20.591341077085534 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(24.287222808870116* wUnit * this.size + this.xLoc, -4.7518479408658925 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(8.447729672650476* wUnit * this.size + this.xLoc, -8.97571277719113 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(-8.447729672650476* wUnit * this.size + this.xLoc, -35.37486800422386 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(-14.783526927138332* wUnit * this.size + this.xLoc, -45.93453009503696 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(-27.455121436114045* wUnit * this.size + this.xLoc, -65.99788806758184 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(-40.12671594508976* wUnit * this.size + this.xLoc, -65.99788806758184 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(-50.686378035902855* wUnit * this.size + this.xLoc, -65.99788806758184 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(-64.41393875395988* wUnit * this.size + this.xLoc, -65.99788806758184 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(-87.64519535374869* wUnit * this.size + this.xLoc, -72.3336853220697 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(-99.26082365364309* wUnit * this.size + this.xLoc, -72.3336853220697 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(-110.8764519535375* wUnit * this.size + this.xLoc, -72.3336853220697 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(-123.5480464625132* wUnit * this.size + this.xLoc, -60.718057022175294 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(-140.44350580781415* wUnit * this.size + this.xLoc, -52.27032734952482 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(-149.94720168954595* wUnit * this.size + this.xLoc, 1.5839493136219642 * wUnit * this.size + this.yLoc));
		this.path3.smooth();
		this.path4= new Path();
		this.path4.strokeColor = { red: 0.32157, green: 0.23529, blue: 0.0549 };
		this.path4.fillColor = { red: 0.32157, green: 0.23529, blue: 0.0549 };
		this.path4.closed = false;
		this.path4.add( new Point(67.58183738120381* wUnit * this.size + this.xLoc, 296.1985216473073 * wUnit * this.size + this.yLoc));
		this.path4.add( new Point(64.41393875395988* wUnit * this.size + this.xLoc, 274.0232312565998 * wUnit * this.size + this.yLoc));
		this.path4.add( new Point(64.41393875395988* wUnit * this.size + this.xLoc, 245.51214361140444 * wUnit * this.size + this.yLoc));
		this.path4.add( new Point(45.40654699049631* wUnit * this.size + this.xLoc, 227.5607180570222 * wUnit * this.size + this.yLoc));
		this.path4.add( new Point(6.335797254487857* wUnit * this.size + this.xLoc, 195.8817317845829 * wUnit * this.size + this.yLoc));
		this.path4.add( new Point(-3.1678986272439285* wUnit * this.size + this.xLoc, 181.09820485744456 * wUnit * this.size + this.yLoc));
		this.path4.add( new Point(-2.111932418162619* wUnit * this.size + this.xLoc, 154.69904963041182 * wUnit * this.size + this.yLoc));
		this.path4.add( new Point(17.95142555438226* wUnit * this.size + this.xLoc, 154.69904963041182 * wUnit * this.size + this.yLoc));
		this.path4.add( new Point(32.734952481520594* wUnit * this.size + this.xLoc, 157.86694825765576 * wUnit * this.size + this.yLoc));
		this.path4.add( new Point(53.854276663146784* wUnit * this.size + this.xLoc, 165.25871172122493 * wUnit * this.size + this.yLoc));
		this.path4.add( new Point(69.69376979936642* wUnit * this.size + this.xLoc, 182.1541710665259 * wUnit * this.size + this.yLoc));
		this.path4.add( new Point(81.30939809926083* wUnit * this.size + this.xLoc, 196.93769799366422 * wUnit * this.size + this.yLoc));
		this.path4.add( new Point(87.64519535374869* wUnit * this.size + this.xLoc, 220.168954593453 * wUnit * this.size + this.yLoc));
		this.path4.add( new Point(89.7571277719113* wUnit * this.size + this.xLoc, 238.12038014783528 * wUnit * this.size + this.yLoc));
		this.path4.add( new Point(90.81309398099262* wUnit * this.size + this.xLoc, 253.95987328405494 * wUnit * this.size + this.yLoc));
		this.path4.add( new Point(93.98099260823655* wUnit * this.size + this.xLoc, 269.79936642027457 * wUnit * this.size + this.yLoc));
		this.path4.add( new Point(93.98099260823655* wUnit * this.size + this.xLoc, 280.3590285110877 * wUnit * this.size + this.yLoc));
		this.path4.add( new Point(95.03695881731785* wUnit * this.size + this.xLoc, 297.2544878563886 * wUnit * this.size + this.yLoc));
		this.path4.smooth();
		this.path5= new Path();
		this.path5.strokeColor = { red: 0.2902, green: 0.40392, blue: 0.10196 };
		this.path5.fillColor = { red: 0.2902, green: 0.40392, blue: 0.10196 };
		this.path5.closed = true;
		this.path5.add( new Point(-126.71594508975713* wUnit * this.size + this.xLoc, 64.94192185850054 * wUnit * this.size + this.yLoc));
		this.path5.add( new Point(-122.4920802534319* wUnit * this.size + this.xLoc, 54.38225976768744 * wUnit * this.size + this.yLoc));
		this.path5.add( new Point(-109.82048574445618* wUnit * this.size + this.xLoc, 41.71066525871172 * wUnit * this.size + this.yLoc));
		this.path5.add( new Point(-98.20485744456178* wUnit * this.size + this.xLoc, 41.71066525871172 * wUnit * this.size + this.yLoc));
		this.path5.add( new Point(-86.58922914466737* wUnit * this.size + this.xLoc, 42.76663146779303 * wUnit * this.size + this.yLoc));
		this.path5.add( new Point(-81.30939809926083* wUnit * this.size + this.xLoc, 58.60612460401268 * wUnit * this.size + this.yLoc));
		this.path5.add( new Point(-67.58183738120381* wUnit * this.size + this.xLoc, 79.72544878563886 * wUnit * this.size + this.yLoc));
		this.path5.add( new Point(-67.58183738120381* wUnit * this.size + this.xLoc, 96.62090813093981 * wUnit * this.size + this.yLoc));
		this.path5.add( new Point(-85.53326293558607* wUnit * this.size + this.xLoc, 98.73284054910243 * wUnit * this.size + this.yLoc));
		this.path5.add( new Point(-106.65258711721225* wUnit * this.size + this.xLoc, 97.67687434002113 * wUnit * this.size + this.yLoc));
		this.path5.add( new Point(-112.9883843717001* wUnit * this.size + this.xLoc, 85.00527983104541 * wUnit * this.size + this.yLoc));
		this.path5.smooth();
		this.path6= new Path();
		this.path6.strokeColor = { red: 0, green: 0, blue: 0 };
		this.path6.fillColor = { red: 1, green: 1, blue: 0 };
		this.path6.closed = true;
		this.path6.add( new Point(17.95142555438226* wUnit * this.size + this.xLoc, 49.10242872228089 * wUnit * this.size + this.yLoc));
		this.path6.add( new Point(29.567053854276665* wUnit * this.size + this.xLoc, 48.04646251319958 * wUnit * this.size + this.yLoc));
		this.path6.add( new Point(-1.0559662090813096* wUnit * this.size + this.xLoc, 72.3336853220697 * wUnit * this.size + this.yLoc));
		this.path6.add( new Point(-5.279831045406548* wUnit * this.size + this.xLoc, 119.85216473072862 * wUnit * this.size + this.yLoc));
		this.path6.add( new Point(8.447729672650476* wUnit * this.size + this.xLoc, 131.46779303062303 * wUnit * this.size + this.yLoc));
		this.path6.add( new Point(43.294614572333685* wUnit * this.size + this.xLoc, 128.29989440337908 * wUnit * this.size + this.yLoc));
		this.path6.add( new Point(50.686378035902855* wUnit * this.size + this.xLoc, 114.57233368532208 * wUnit * this.size + this.yLoc));
		this.path6.add( new Point(58.07814149947202* wUnit * this.size + this.xLoc, 95.5649419218585 * wUnit * this.size + this.yLoc));
		this.path6.add( new Point(36.95881731784583* wUnit * this.size + this.xLoc, 78.66948257655756 * wUnit * this.size + this.yLoc));
		this.path6.add( new Point(45.40654699049631* wUnit * this.size + this.xLoc, 70.22175290390707 * wUnit * this.size + this.yLoc));
		this.path6.smooth();
		this.path7= new Path();
		this.path7.strokeColor = { red: 0.2902, green: 0.40392, blue: 0.10196 };
		this.path7.fillColor = { red: 0.2902, green: 0.40392, blue: 0.10196 };
		this.path7.closed = false;
		this.path7.add( new Point(30.623020063357973* wUnit * this.size + this.xLoc, -156.81098204857446 * wUnit * this.size + this.yLoc));
		this.path7.add( new Point(30.623020063357973* wUnit * this.size + this.xLoc, -137.8035902851109 * wUnit * this.size + this.yLoc));
		this.path7.add( new Point(36.95881731784583* wUnit * this.size + this.xLoc, -116.68426610348469 * wUnit * this.size + this.yLoc));
		this.path7.add( new Point(47.518479408658926* wUnit * this.size + this.xLoc, -109.29250263991553 * wUnit * this.size + this.yLoc));
		this.path7.add( new Point(59.13410770855333* wUnit * this.size + this.xLoc, -101.90073917634636 * wUnit * this.size + this.yLoc));
		this.path7.add( new Point(70.74973600844773* wUnit * this.size + this.xLoc, -79.72544878563886 * wUnit * this.size + this.yLoc));
		this.path7.add( new Point(87.64519535374869* wUnit * this.size + this.xLoc, -53.326293558606125 * wUnit * this.size + this.yLoc));
		this.path7.add( new Point(100.31678986272439* wUnit * this.size + this.xLoc, -54.38225976768744 * wUnit * this.size + this.yLoc));
		this.path7.add( new Point(103.48468848996832* wUnit * this.size + this.xLoc, -72.3336853220697 * wUnit * this.size + this.yLoc));
		this.path7.add( new Point(98.20485744456178* wUnit * this.size + this.xLoc, -96.62090813093981 * wUnit * this.size + this.yLoc));
		this.path7.add( new Point(83.42133051742344* wUnit * this.size + this.xLoc, -107.18057022175292 * wUnit * this.size + this.yLoc));
		this.path7.add( new Point(72.86166842661035* wUnit * this.size + this.xLoc, -126.18796198521648 * wUnit * this.size + this.yLoc));
		this.path7.add( new Point(66.52587117212249* wUnit * this.size + this.xLoc, -155.75501583949315 * wUnit * this.size + this.yLoc));
		this.path7.smooth();
		this.path8= new Path();
		this.path8.strokeColor = { red: 0, green: 0, blue: 0 };
		this.path8.fillColor = null;
		this.path8.closed = false;
		this.path9= new Path();
		this.path9.strokeColor = { red: 0, green: 0, blue: 0 };
		this.path9.fillColor = { red: 0.45098, green: 0.29412, blue: 0.07059 };
		this.path9.closed = true;
		this.path9.add( new Point(-50.686378035902855* wUnit * this.size + this.xLoc, 171.59450897571278 * wUnit * this.size + this.yLoc));
		this.path9.add( new Point(51.74234424498416* wUnit * this.size + this.xLoc, 172.6504751847941 * wUnit * this.size + this.yLoc));
		this.path9.add( new Point(97.14889123548046* wUnit * this.size + this.xLoc, 35.37486800422386 * wUnit * this.size + this.yLoc));
		this.path9.add( new Point(51.74234424498416* wUnit * this.size + this.xLoc, -79.72544878563886 * wUnit * this.size + this.yLoc));
		this.path9.add( new Point(-49.63041182682154* wUnit * this.size + this.xLoc, -79.72544878563886 * wUnit * this.size + this.yLoc));
		this.path9.add( new Point(-89.7571277719113* wUnit * this.size + this.xLoc, 33.262935586061246 * wUnit * this.size + this.yLoc));
		this.path10= new Path();
		this.path10.strokeColor = { red: 0, green: 0, blue: 0 };
		this.path10.fillColor = null;
		this.path10.closed = false;
		this.path10.add( new Point(-24.287222808870116* wUnit * this.size + this.xLoc, -16.367476240760297 * wUnit * this.size + this.yLoc));
		this.path11= new Path();
		this.path11.strokeColor = { red: 0.2902, green: 0.40392, blue: 0.10196 };
		this.path11.fillColor = { red: 0.2902, green: 0.40392, blue: 0.10196 };
		this.path11.closed = false;
		this.path11.add( new Point(-88.70116156283* wUnit * this.size + this.xLoc, 32.20696937697994 * wUnit * this.size + this.yLoc));
		this.path11.add( new Point(-57.02217529039071* wUnit * this.size + this.xLoc, -7.9197465681098205 * wUnit * this.size + this.yLoc));
		this.path11.add( new Point(-41.18268215417107* wUnit * this.size + this.xLoc, -25.87117212249208 * wUnit * this.size + this.yLoc));
		this.path11.add( new Point(-14.783526927138332* wUnit * this.size + this.xLoc, -35.37486800422386 * wUnit * this.size + this.yLoc));
		this.path11.add( new Point(10.559662090813095* wUnit * this.size + this.xLoc, -4.7518479408658925 * wUnit * this.size + this.yLoc));
		this.path11.add( new Point(6.335797254487857* wUnit * this.size + this.xLoc, 29.03907074973601 * wUnit * this.size + this.yLoc));
		this.path11.add( new Point(-21.11932418162619* wUnit * this.size + this.xLoc, 48.04646251319958 * wUnit * this.size + this.yLoc));
		this.path11.add( new Point(-59.13410770855333* wUnit * this.size + this.xLoc, 55.43822597676875 * wUnit * this.size + this.yLoc));
		this.path11.add( new Point(-81.30939809926083* wUnit * this.size + this.xLoc, 59.66209081309398 * wUnit * this.size + this.yLoc));
		this.path11.smooth();
		this.path12= new Path();
		this.path12.strokeColor = { red: 0, green: 0, blue: 0 };
		this.path12.fillColor = null;
		this.path12.closed = false;
		this.path12.add( new Point(61.24604012671595* wUnit * this.size + this.xLoc, 135.69165786694828 * wUnit * this.size + this.yLoc));
		this.path13= new Path();
		this.path13.strokeColor = { red: 0.2902, green: 0.40392, blue: 0.10196 };
		this.path13.fillColor = { red: 0.2902, green: 0.40392, blue: 0.10196 };
		this.path13.closed = false;
		this.path13.add( new Point(7.391763463569166* wUnit * this.size + this.xLoc, 171.59450897571278 * wUnit * this.size + this.yLoc));
		this.path13.add( new Point(-6.335797254487857* wUnit * this.size + this.xLoc, 139.9155227032735 * wUnit * this.size + this.yLoc));
		this.path13.add( new Point(1.0559662090813096* wUnit * this.size + this.xLoc, 107.18057022175292 * wUnit * this.size + this.yLoc));
		this.path13.add( new Point(-17.95142555438226* wUnit * this.size + this.xLoc, 83.9493136219641 * wUnit * this.size + this.yLoc));
		this.path13.add( new Point(4.223864836325238* wUnit * this.size + this.xLoc, 55.43822597676875 * wUnit * this.size + this.yLoc));
		this.path13.add( new Point(34.84688489968321* wUnit * this.size + this.xLoc, 57.550158394931366 * wUnit * this.size + this.yLoc));
		this.path13.add( new Point(41.18268215417107* wUnit * this.size + this.xLoc, 94.5089757127772 * wUnit * this.size + this.yLoc));
		this.path13.add( new Point(42.23864836325238* wUnit * this.size + this.xLoc, 114.57233368532208 * wUnit * this.size + this.yLoc));
		this.path13.add( new Point(28.511087645195357* wUnit * this.size + this.xLoc, 134.63569165786694 * wUnit * this.size + this.yLoc));
		this.path13.add( new Point(34.84688489968321* wUnit * this.size + this.xLoc, 172.6504751847941 * wUnit * this.size + this.yLoc));
		this.path13.smooth();
		this.path14= new Path();
		this.path14.strokeColor = { red: 0, green: 0, blue: 0 };
		this.path14.fillColor = { red: 0.45098, green: 0.29412, blue: 0.07059 };
		this.path14.closed = false;
		this.path14.add( new Point(-7.391763463569166* wUnit * this.size + this.xLoc, -80.78141499472018 * wUnit * this.size + this.yLoc));
		this.path14.add( new Point(-7.391763463569166* wUnit * this.size + this.xLoc, -296.1985216473073 * wUnit * this.size + this.yLoc));
		this.path14.add( new Point(14.783526927138332* wUnit * this.size + this.xLoc, -297.2544878563886 * wUnit * this.size + this.yLoc));
		this.path14.add( new Point(14.783526927138332* wUnit * this.size + this.xLoc, -78.66948257655756 * wUnit * this.size + this.yLoc));
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
		this.path7.position.x += xIncr
		this.path7.position.y += yIncr
		this.path8.position.x += xIncr
		this.path8.position.y += yIncr
		this.path9.position.x += xIncr
		this.path9.position.y += yIncr
		this.path10.position.x += xIncr
		this.path10.position.y += yIncr
		this.path11.position.x += xIncr
		this.path11.position.y += yIncr
		this.path12.position.x += xIncr
		this.path12.position.y += yIncr
		this.path13.position.x += xIncr
		this.path13.position.y += yIncr
		this.path14.position.x += xIncr
		this.path14.position.y += yIncr
	}

	remove(){
		this.path0.remove()
		this.path1.remove()
		this.path2.remove()
		this.path3.remove()
		this.path4.remove()
		this.path5.remove()
		this.path6.remove()
		this.path7.remove()
		this.path8.remove()
		this.path9.remove()
		this.path10.remove()
		this.path11.remove()
		this.path12.remove()
		this.path13.remove()
		this.path14.remove()
	}
}

undefined
/* Code: {-s-rgb(0,0,0)-rgb(115,75,18)-true-p-230.55555555555557-343.055555
55555554-p-281.25-292.36111111111114-p-329.1666666666667-343.05555555555554
-false-s-rgb(0,0,0)-rgb(101,64,18)-true-p-328.47222222222223-343.0555555555
5554-p-281.25-292.36111111111114-p-281.25-207.63888888888889-p-329.16666666
66667-158.33333333333334-p-329.1666666666667-222.91666666666669-false-s-rgb
(0,0,0)-rgb(101,64,18)-true-p-230.55555555555557-343.05555555555554-p-230.5
5555555555557-158.33333333333334-p-281.25-207.63888888888889-p-281.25-292.3
6111111111114-false-s-rgb(0,0,0)-rgb(115,75,18)-true-p-231.25-158.333333333
33334-p-330.55555555555554-158.33333333333334-p-281.25-207.63888888888889-f
alse}*/
class tent {
	constructor(x,y) {
		this.xLoc = x;
		this.yLoc = y;
		this.size = .1;
		this.path0= new Path();
		this.path0.strokeColor = { red: 0, green: 0, blue: 0 };
		this.path0.fillColor = { red: 0.45098, green: 0.29412, blue: 0.07059 };
		this.path0.closed = true;
		this.path0.add( new Point(-50* wUnit * this.size + this.xLoc, 92.36111111111111 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(0.6944444444444444* wUnit * this.size + this.xLoc, 41.66666666666667 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(48.611111111111114* wUnit * this.size + this.xLoc, 92.36111111111111 * wUnit * this.size + this.yLoc));
		this.path1= new Path();
		this.path1.strokeColor = { red: 0, green: 0, blue: 0 };
		this.path1.fillColor = { red: 0.39608, green: 0.25098, blue: 0.07059 };
		this.path1.closed = true;
		this.path1.add( new Point(47.91666666666667* wUnit * this.size + this.xLoc, 92.36111111111111 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(0.6944444444444444* wUnit * this.size + this.xLoc, 41.66666666666667 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(0.6944444444444444* wUnit * this.size + this.xLoc, -43.05555555555556 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(48.611111111111114* wUnit * this.size + this.xLoc, -92.36111111111111 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(48.611111111111114* wUnit * this.size + this.xLoc, -27.77777777777778 * wUnit * this.size + this.yLoc));
		this.path2= new Path();
		this.path2.strokeColor = { red: 0, green: 0, blue: 0 };
		this.path2.fillColor = { red: 0.39608, green: 0.25098, blue: 0.07059 };
		this.path2.closed = true;
		this.path2.add( new Point(-50* wUnit * this.size + this.xLoc, 92.36111111111111 * wUnit * this.size + this.yLoc));
		this.path2.add( new Point(-50* wUnit * this.size + this.xLoc, -92.36111111111111 * wUnit * this.size + this.yLoc));
		this.path2.add( new Point(0.6944444444444444* wUnit * this.size + this.xLoc, -43.05555555555556 * wUnit * this.size + this.yLoc));
		this.path2.add( new Point(0.6944444444444444* wUnit * this.size + this.xLoc, 41.66666666666667 * wUnit * this.size + this.yLoc));
		this.path3= new Path();
		this.path3.strokeColor = { red: 0, green: 0, blue: 0 };
		this.path3.fillColor = { red: 0.45098, green: 0.29412, blue: 0.07059 };
		this.path3.closed = true;
		this.path3.add( new Point(-49.30555555555556* wUnit * this.size + this.xLoc, -92.36111111111111 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(50* wUnit * this.size + this.xLoc, -92.36111111111111 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(0.6944444444444444* wUnit * this.size + this.xLoc, -43.05555555555556 * wUnit * this.size + this.yLoc));
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
	}

	remove(){
		this.path0.remove()
		this.path1.remove()
		this.path2.remove()
		this.path3.remove()
	}
}