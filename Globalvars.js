 /* This file finds width and height of the screen and sets the canvas
 size accordingly. It then sets a number of units including w, h, wUnit, 
 hUnit, center that are used to design all objects in the program. */
 
 
 var w = 0;
 var h = 0;
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
