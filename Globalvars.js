var win = window,
doc = document,
docElem = doc.documentElement,
body = doc.getElementsByTagName('body')[0],
w = win.innerWidth || docElem.clientWidth || body.clientWidth,
h = win.innerHeight|| docElem.clientHeight|| body.clientHeight;

var height = h - (h/6);
var width = w/15;


var wUnit = w/1000;
var hUnit = h/1000;
var center =  w/2;