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


/* Code: {-s-rgb(13,28,14)-rgb(13,28,14)-true-p-84.72222222222223-248.61111
111111111-p-111.11111111111111-288.8888888888889-p-300-288.8888888888889-p-
322.9166666666667-248.61111111111111-p-300-209.02777777777777-p-111.1111111
1111111-209.02777777777777-false-s-rgb(0,0,0)-rgb(0,0,0)-true-p-111.1111111
1111111-244.44444444444446-p-118.75-244.44444444444446-p-118.75-252.7777777
777778-p-111.80555555555556-252.7777777777778-true-s-rgb(0,0,0)-rgb(0,0,0)-
true-p-300-244.44444444444446-p-300-252.7777777777778-p-292.36111111111114-
252.7777777777778-p-292.36111111111114-244.44444444444446-true-s-rgb(17,20,
17)-rgb(17,20,17)-true-p-193.75-272.9166666666667-p-221.5277777777778-272.9
166666666667-p-229.16666666666669-265.27777777777777-p-229.16666666666669-2
33.33333333333334-p-221.5277777777778-225.69444444444446-p-193.75-225.69444
444444446-p-185.41666666666669-233.33333333333334-p-185.41666666666669-265.
27777777777777-false-s-rgb(17,20,17)-rgb(17,20,17)-false-p-203.472222222222
23-225.69444444444446-p-203.47222222222223-214.58333333333334-p-206.25-213.
88888888888889-p-206.25-182.63888888888889-p-210.41666666666669-182.6388888
8888889-p-210.41666666666669-214.58333333333334-p-212.5-214.58333333333334-
p-212.5-225.69444444444446-false}*/
class userShip {
	constructor(x,y) {
		this.xLoc = x;
		this.yLoc = y;
		this.size = .2;
		this.path0= new Path();
		this.path0.strokeColor = { red: 0.05098, green: 0.1098, blue: 0.0549 };
		this.path0.fillColor = { red: 0.05098, green: 0.1098, blue: 0.0549 };
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
		this.path1.add( new Point(-92.70833333333334* wUnit * this.size + this.xLoc, 8.680555555555555 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(-85.06944444444444* wUnit * this.size + this.xLoc, 8.680555555555555 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(-85.06944444444444* wUnit * this.size + this.xLoc, 17.01388888888889 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(-92.01388888888889* wUnit * this.size + this.xLoc, 17.01388888888889 * wUnit * this.size + this.yLoc));
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

