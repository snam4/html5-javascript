try {
	
	// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	// THIS IS THE SECTION WHERE PROCODING INJECTS THE CANVAS SCRIPT
	//
	//
	
	// Drawing with text
// (cc-by-nc) 2013 by SU HYUN NAM for Procoding
//www.suhyunnam.com
//Update Note : font, realtime feed streaming

var fonttype = "Helvetica";
var letters = "BIDE YOUR TIME, SUCCESS IS NEAR";
var x, y = 0;
var drawing = false;
var ctx = canvas.getContext("2d");
var num = letters.length;
var xArray = new Array(num);
var yArray = new Array(num);

function draw() {
    var grd1 = ctx.createLinearGradient(0, 0, width, height);
    var colorGrd1 = "rgb(" + x + ", 207, 207)";
    var colorGrd2 = "rgb(227, 78," + y + ")";
    grd1.addColorStop(0, colorGrd1);
    grd1.addColorStop(1, colorGrd2);
    ctx.fillStyle = grd1;

    ctx.fillRect(0, 0, width, height);

    if (drawing) {
        ctx.textAlign = "center";
        xArray[num] = x;
        yArray[num] = y;
        for (var i = 0; i < num + 1; i++) {
            xArray[i] = xArray[i + 1];
            yArray[i] = yArray[i + 1];
           var scaledIndex = map_range (i, 0, num+1, 0.0, 10.0 );
            var tempC = scaledIndex * 0.09 +0.1;
            var tempGreen = 200 - scaledIndex *20;
            var tempBlue = scaledIndex *20; 
            var tempS = scaledIndex * 6 ;
            ctx.font = tempS + "px " + fonttype;
            ctx.fillStyle = "rgba(" + x + "," + tempGreen + "," + tempBlue + "," + tempC + ")";
            ctx.fillText(letters.charAt(num - i - 1), xArray[i], yArray[i]);
        }
    }
}

function touchStart() {
    drawing = true;
}

function touchMove(e) {
    x = e.touches[0].pageX;
    y = e.touches[0].pageY;
}

function touchEnd() {
    drawing = false;
}

function mouseDown() {
    drawing = true;
}

function mouseMove(e) {
    x = e.pageX;
    y = e.pageY;
}

function mouseUp() {
    drawing = false;
    for (var i = 0; i < letters.length; i++) {
        xArray[i] = 0;
        yArray[i] = 0;
    }
}

function map_range(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}
// setup handlers
canvas.addEventListener('touchstart', touchStart);
canvas.addEventListener('touchmove', touchMove);
canvas.addEventListener('touchend', touchEnd);
canvas.addEventListener('touchcancel', touchEnd);
canvas.addEventListener('touchleave', touchEnd);
canvas.addEventListener('mousedown', mouseDown);
canvas.addEventListener('mousemove', mouseMove);
canvas.addEventListener('mouseup', mouseUp);
canvas.addEventListener('mouseleave', mouseUp);

// setup drawing routine
//clear();
setInterval(draw, 100);
	
	//
	//
	// THIS WAS THE SECTION WHERE PROCODING INJECTED THE CANVAS SCRIPT
	// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	
} catch (e) {
	_procoding_throwError(e);
}
