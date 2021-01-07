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


class truck {
	constructor(x,y) {
		this.xLoc = x;
		this.yLoc = y;
		this.size = .16;
		this.path0= new Path();
		this.path0.strokeColor = { red: 0.16863, green: 0.36863, blue: 0.17255 };
		this.path0.fillColor = { red: 0.16863, green: 0.36863, blue: 0.17255 };
		this.path0.closed = true;
		this.path0.add( new Point(431.94444444444446* wUnit * this.size + this.xLoc, 199.30555555555557 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(431.94444444444446* wUnit * this.size + this.xLoc, 165.27777777777777 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(447.22222222222223* wUnit * this.size + this.xLoc, 128.47222222222223 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(499.3055555555556* wUnit * this.size + this.xLoc, 128.47222222222223 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(511.8055555555556* wUnit * this.size + this.xLoc, 165.27777777777777 * wUnit * this.size + this.yLoc));
		this.path0.add( new Point(511.8055555555556* wUnit * this.size + this.xLoc, 199.30555555555557 * wUnit * this.size + this.yLoc));
		this.path1= new Path();
		this.path1.strokeColor = { red: 0.16863, green: 0.36863, blue: 0.17255 };
		this.path1.fillColor = { red: 0.16863, green: 0.36863, blue: 0.17255 };
		this.path1.closed = true;
		this.path1.add( new Point(511.8055555555556* wUnit * this.size + this.xLoc, 215.2777777777778 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(431.94444444444446* wUnit * this.size + this.xLoc, 215.2777777777778 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(431.94444444444446* wUnit * this.size + this.xLoc, 410.4166666666667 * wUnit * this.size + this.yLoc));
		this.path1.add( new Point(511.8055555555556* wUnit * this.size + this.xLoc, 410.4166666666667 * wUnit * this.size + this.yLoc));
		this.path2= new Path();
		this.path2.strokeColor = { red: 0, green: 0, blue: 0 };
		this.path2.fillColor = null;
		this.path2.closed = false;
		this.path2.add( new Point(496.52777777777777* wUnit * this.size + this.xLoc, 161.11111111111111 * wUnit * this.size + this.yLoc));
		this.path2.add( new Point(450* wUnit * this.size + this.xLoc, 161.11111111111111 * wUnit * this.size + this.yLoc));
		this.path3= new Path();
		this.path3.strokeColor = { red: 0, green: 0, blue: 0 };
		this.path3.fillColor = null;
		this.path3.closed = false;
		this.path3.add( new Point(452.77777777777777* wUnit * this.size + this.xLoc, 136.11111111111111 * wUnit * this.size + this.yLoc));
		this.path3.add( new Point(452.77777777777777* wUnit * this.size + this.xLoc, 152.77777777777777 * wUnit * this.size + this.yLoc));
		this.path4= new Path();
		this.path4.strokeColor = { red: 0, green: 0, blue: 0 };
		this.path4.fillColor = null;
		this.path4.closed = false;
		this.path4.add( new Point(456.94444444444446* wUnit * this.size + this.xLoc, 136.11111111111111 * wUnit * this.size + this.yLoc));
		this.path4.add( new Point(457.6388888888889* wUnit * this.size + this.xLoc, 152.77777777777777 * wUnit * this.size + this.yLoc));
		this.path4.add( new Point(456.94444444444446* wUnit * this.size + this.xLoc, 152.77777777777777 * wUnit * this.size + this.yLoc));
		this.path5= new Path();
		this.path5.strokeColor = { red: 0, green: 0, blue: 0 };
		this.path5.fillColor = null;
		this.path5.closed = false;
		this.path5.add( new Point(462.5* wUnit * this.size + this.xLoc, 135.41666666666669 * wUnit * this.size + this.yLoc));
		this.path5.add( new Point(462.5* wUnit * this.size + this.xLoc, 152.77777777777777 * wUnit * this.size + this.yLoc));
		this.path6= new Path();
		this.path6.strokeColor = { red: 0, green: 0, blue: 0 };
		this.path6.fillColor = null;
		this.path6.closed = false;
		this.path6.add( new Point(467.36111111111114* wUnit * this.size + this.xLoc, 152.77777777777777 * wUnit * this.size + this.yLoc));
		this.path6.add( new Point(467.36111111111114* wUnit * this.size + this.xLoc, 135.41666666666669 * wUnit * this.size + this.yLoc));
		this.path7= new Path();
		this.path7.strokeColor = { red: 0, green: 0, blue: 0 };
		this.path7.fillColor = null;
		this.path7.closed = false;
		this.path7.add( new Point(471.52777777777777* wUnit * this.size + this.xLoc, 152.77777777777777 * wUnit * this.size + this.yLoc));
		this.path7.add( new Point(471.52777777777777* wUnit * this.size + this.xLoc, 136.11111111111111 * wUnit * this.size + this.yLoc));
		this.path8= new Path();
		this.path8.strokeColor = { red: 0, green: 0, blue: 0 };
		this.path8.fillColor = null;
		this.path8.closed = false;
		this.path9= new Path();
		this.path9.strokeColor = { red: 0, green: 0, blue: 0 };
		this.path9.fillColor = null;
		this.path9.closed = false;
		this.path9.add( new Point(475* wUnit * this.size + this.xLoc, 152.08333333333334 * wUnit * this.size + this.yLoc));
		this.path9.add( new Point(475* wUnit * this.size + this.xLoc, 135.41666666666669 * wUnit * this.size + this.yLoc));
		this.path10= new Path();
		this.path10.strokeColor = { red: 0, green: 0, blue: 0 };
		this.path10.fillColor = null;
		this.path10.closed = false;
		this.path10.add( new Point(479.1666666666667* wUnit * this.size + this.xLoc, 152.08333333333334 * wUnit * this.size + this.yLoc));
		this.path10.add( new Point(479.1666666666667* wUnit * this.size + this.xLoc, 136.80555555555557 * wUnit * this.size + this.yLoc));
		this.path11= new Path();
		this.path11.strokeColor = { red: 0, green: 0, blue: 0 };
		this.path11.fillColor = null;
		this.path11.closed = false;
		this.path11.add( new Point(484.72222222222223* wUnit * this.size + this.xLoc, 152.77777777777777 * wUnit * this.size + this.yLoc));
		this.path11.add( new Point(484.72222222222223* wUnit * this.size + this.xLoc, 136.80555555555557 * wUnit * this.size + this.yLoc));
		this.path12= new Path();
		this.path12.strokeColor = { red: 0, green: 0, blue: 0 };
		this.path12.fillColor = null;
		this.path12.closed = false;
		this.path12.add( new Point(488.8888888888889* wUnit * this.size + this.xLoc, 152.08333333333334 * wUnit * this.size + this.yLoc));
		this.path12.add( new Point(489.58333333333337* wUnit * this.size + this.xLoc, 136.80555555555557 * wUnit * this.size + this.yLoc));
		this.path13= new Path();
		this.path13.strokeColor = { red: 0, green: 0, blue: 0 };
		this.path13.fillColor = null;
		this.path13.closed = false;
		this.path13.add( new Point(494.44444444444446* wUnit * this.size + this.xLoc, 137.5 * wUnit * this.size + this.yLoc));
		this.path13.add( new Point(494.44444444444446* wUnit * this.size + this.xLoc, 152.08333333333334 * wUnit * this.size + this.yLoc));
		this.path14= new Path();
		this.path14.strokeColor = { red: 0.50196, green: 0.50196, blue: 0.50196 };
		this.path14.fillColor = { red: 0.50196, green: 0.50196, blue: 0.50196 };
		this.path14.closed = false;
		this.path14.add( new Point(444.44444444444446* wUnit * this.size + this.xLoc, 215.2777777777778 * wUnit * this.size + this.yLoc));
		this.path14.add( new Point(444.44444444444446* wUnit * this.size + this.xLoc, 199.30555555555557 * wUnit * this.size + this.yLoc));
		this.path14.add( new Point(499.3055555555556* wUnit * this.size + this.xLoc, 199.30555555555557 * wUnit * this.size + this.yLoc));
		this.path14.add( new Point(500* wUnit * this.size + this.xLoc, 215.2777777777778 * wUnit * this.size + this.yLoc));
		this.path15= new Path();
		this.path15.strokeColor = { red: 0, green: 0, blue: 0 };
		this.path15.fillColor = null;
		this.path15.closed = false;
		this.path15.add( new Point(448.61111111111114* wUnit * this.size + this.xLoc, 229.86111111111111 * wUnit * this.size + this.yLoc));
		this.path15.add( new Point(448.61111111111114* wUnit * this.size + this.xLoc, 395.1388888888889 * wUnit * this.size + this.yLoc));
		this.path16= new Path();
		this.path16.strokeColor = { red: 0, green: 0, blue: 0 };
		this.path16.fillColor = null;
		this.path16.closed = false;
		this.path16.add( new Point(494.44444444444446* wUnit * this.size + this.xLoc, 230.55555555555557 * wUnit * this.size + this.yLoc));
		this.path16.add( new Point(493.0555555555556* wUnit * this.size + this.xLoc, 395.1388888888889 * wUnit * this.size + this.yLoc));
	}
}


for(var i = 0; i<(w/40); i++) {
    for(var j = 0; j<(h/90); j++) { 
        var x = new truck(i*40*wUnit,j*90*hUnit); 
    }
}



}