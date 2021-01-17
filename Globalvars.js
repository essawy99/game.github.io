/* var win = window,
doc = document,
docElem = doc.documentElement,
body = doc.getElementsByTagName('body')[0],
w = win.innerWidth || docElem.clientWidth || body.clientWidth,
h = win.innerHeight|| docElem.clientHeight|| body.clientHeight; */

 var w = 0;var h = 0;
        //IE
        if(!window.innerWidth){
            if(!(document.documentElement.clientWidth == 0)){
            //strict mode
            w = document.documentElement.clientWidth;h = document.documentElement.clientHeight;
            } else{
            //quirks mode
            w = document.body.clientWidth;h = document.body.clientHeight;
            }
        } else {
            //w3c
            w = window.innerWidth * 0.94;h = window.innerHeight;
  }

var height = h - (h/6);
var width = w/15;


var wUnit = w/1000;
var hUnit = h/1000;
var center =  w/2;

document.getElementById("myCanvas").width = w;
document.getElementById("myCanvas").height = h;

let gameStatus = 0;