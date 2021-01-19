// next four lines initialize paper.js
paper.install(window);
window.onload = function() {
var canvas = document.getElementById('myCanvas');
paper.setup(canvas);

class Background { //DHEVAA TODO: Implement wave animation on shore
	constructor() {
		this.rect = new Path.Rectangle(new Point(0, 0), new Size(w, h));
		this.rect.fillColor = new Color("#42adf5");
		
		this.rect2 = new Path.Rectangle(new Point(0, 7 * h / 8), new Size(w, h));
		this.rect2.fillColor = new Color("#ebd8a0");
	}
}



/* Code: {-s-rgb(0,0,0)-null-false-false-s-rgb(0,0,0)-null-false-false-s-rg
b(0,0,0)-null-false-false-s-rgb(0,0,0)-null-false-false-s-rgb(0,0,0)-null-f
alse-false-s-rgb(0,0,0)-rgb(0,128,0)-true-p-853.0612244897959-167.346938775
5102-p-398.63945578231295-167.3469387755102-p-397.27891156462584-311.564625
8503401-p-853.0612244897959-311.5646258503401-false-s-rgb(255,192,203)-rgb(
255,192,203)-true-p-545.578231292517-512.9251700680272-p-721.0884353741496-
312.9251700680272-p-606.8027210884354-310.2040816326531-p-545.578231292517-
310.2040816326531-p-721.0884353741496-511.5646258503401-false-s-rgb(0,0,0)-
null-true-p-338.7755102040816-623.1292517006802-p-887.0748299319728-623.129
2517006802-p-888.4353741496599-91.15646258503402-p-338.7755102040816-91.156
46258503402-true}*/
class tree {
	constructor(x,y) {
		this.xLoc = x;
		this.yLoc = y;
		this.size = 1;
		this.path0= new Path();
		this.path0.strokeColor = { red: 0, green: 0, blue: 0 };
		this.path0.fillColor = null;
		this.path0.closed = false;
		this.path1= new Path();
		this.path1.strokeColor = { red: 0, green: 0, blue: 0 };
		this.path1.fillColor = null;
		this.path1.closed = false;
		this.path2= new Path();
		this.path2.strokeColor = { red: 0, green: 0, blue: 0 };
		this.path2.fillColor = null;
		this.path2.closed = false;
		this.path3= new Path();
		this.path3.strokeColor = { red: 0, green: 0, blue: 0 };
		this.path3.fillColor = null;
		this.path3.closed = false;
		this.path4= new Path();
		this.path4.strokeColor = { red: 0, green: 0, blue: 0 };
		this.path4.fillColor = null;
		this.path4.closed = false;
		this.path5= new Path();
		this.path5.strokeColor = { red: 0, green: 0, blue: 0 };
		this.path5.fillColor = { red: 0, green: 0.50196, blue: 0 };
		this.path5.closed = true;
		this.path5.add( new Point(239.45578231292518* wUnit * this.size + this.xLoc, -189.79591836734693 * wUnit * this.size + this.yLoc));
		this.path5.add( new Point(-214.96598639455783* wUnit * this.size + this.xLoc, -189.79591836734693 * wUnit * this.size + this.yLoc));
		this.path5.add( new Point(-216.3265306122449* wUnit * this.size + this.xLoc, -45.578231292517046 * wUnit * this.size + this.yLoc));
		this.path5.add( new Point(239.45578231292518* wUnit * this.size + this.xLoc, -45.578231292517046 * wUnit * this.size + this.yLoc));
		this.path6= new Path();
		this.path6.strokeColor = { red: 1, green: 0.75294, blue: 0.79608 };
		this.path6.fillColor = { red: 1, green: 0.75294, blue: 0.79608 };
		this.path6.closed = true;
		this.path6.add( new Point(-68.02721088435375* wUnit * this.size + this.xLoc, 155.78231292517006 * wUnit * this.size + this.yLoc));
		this.path6.add( new Point(107.48299319727892* wUnit * this.size + this.xLoc, -44.21768707482993 * wUnit * this.size + this.yLoc));
		this.path6.add( new Point(-6.802721088435375* wUnit * this.size + this.xLoc, -46.93877551020408 * wUnit * this.size + this.yLoc));
		this.path6.add( new Point(-68.02721088435375* wUnit * this.size + this.xLoc, -46.93877551020408 * wUnit * this.size + this.yLoc));
		this.path6.add( new Point(107.48299319727892* wUnit * this.size + this.xLoc, 154.42176870748298 * wUnit * this.size + this.yLoc));
		this.path7= new Path();
		this.path7.strokeColor = { red: 0, green: 0, blue: 0 };
		this.path7.fillColor = null;
		this.path7.closed = true;
		this.path7.add( new Point(-274.8299319727891* wUnit * this.size + this.xLoc, 265.9863945578231 * wUnit * this.size + this.yLoc));
		this.path7.add( new Point(273.46938775510205* wUnit * this.size + this.xLoc, 265.9863945578231 * wUnit * this.size + this.yLoc));
		this.path7.add( new Point(274.8299319727891* wUnit * this.size + this.xLoc, -265.98639455782313 * wUnit * this.size + this.yLoc));
		this.path7.add( new Point(-274.8299319727891* wUnit * this.size + this.xLoc, -265.98639455782313 * wUnit * this.size + this.yLoc));
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
	}
}

var x = new tree(0,0);
var y = new tree(62,59);
var z = new tree(500*wUnit,500*hUnit);

/* for(var i = 0; i<(w/40); i++) {
    for(var j = 0; j<(h/90); j++) { 
		var x = new weird(i*40*wUnit,j*90*hUnit); 
		x.update(200,200);
	}
} */


}


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
		this.size = 1;
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
		