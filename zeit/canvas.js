try {
	
	// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	// THIS IS THE SECTION WHERE PROCODING INJECTS THE CANVAS SCRIPT
	//
	//
	
	//var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var bg = "rgb(0,0,0)"; 
// 4 ways to assign color : 1.named color 2.hex (16bit -255 value) 3. 
var color = "rgb(255, 255, 255)";
var font;
var mulHr = 9;
var mulMin = 4;
var mulSec = 4;
var r,g,b;
var fontSize =0;

var r1 = window.innerWidth/20;
var r2 = window.innerWidth/15+ window.innerWidth/50;
var r3 = window.innerWidth/10+  window.innerWidth/50;
var ring1 = window.innerWidth/10+  window.innerWidth/50;
var ringth1 = 10;
var ra1 = 1.0;	
var ring2 = window.innerWidth/10+ window.innerWidth/50 +22;
var ringth2 = 15;
var ra2 = 0.7;	 
  
var th1 = window.innerWidth/40;
var th2 = window.innerWidth/52;
var th3 = window.innerWidth/45;
			

function addLeadingZero(num){
    //num is 1 ==> 01
	//num is 99 ==>99
	var str = '0' + num;
	//slice the last two digits to return
	str = str.slice(-2);
	return str;
}

function setup(){
    fontSize = window.innerWidth/5;
    font = fontSize + "px HelveticaNeue-UltraLight"; 
    //window.innerWidth will enable the responsive UI
}
	
function draw(){ // refreshing every frame
	var now = new Date();
	var hr = now.getHours();
	hr = addLeadingZero(hr);
	var min  = now.getMinutes();
	min = addLeadingZero(min);
	var sec = now.getSeconds();
	sec = addLeadingZero(sec);
	
	r = hr*mulHr;
	g = min*mulMin;
	b = sec*mulSec;
		
	var time = hr + ":" + min + ":" + sec;
    bg = "rgb(" + r + "," + g + "," + b + ")";
    ctx.fillStyle = bg;
	ctx.fillRect (0,0,width,height);
    
    ctx.strokeStyle = "rgba("+ r+7 +","+ g +10+ ","+b + "," + ra1 +")";
    ctx.beginPath();
    ctx.arc(width/2, height/2 + fontSize/2, ring1, 0,Math.PI);
    ctx.lineWidth = ringth1;
    ctx.stroke();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.arc(width/2, height/2 - fontSize/2, ring1, Math.PI,Math.PI*2);
    ctx.lineWidth = ringth1;
    ctx.stroke();
     ctx.closePath();
     
    ring1 ++;
    if (ringth1 > 0.1){ringth1 = ringth1 - 0.1; }
    if (ra1 > 0.1){ra1 = ra1 - 0.05;}
    if (ring1 > 200){
     ring1 = window.innerWidth/10+  window.innerWidth/50;
     ringth1 = 10;
     ra1 = 1.0;   
    }
   
   ctx.strokeStyle = "rgba("+ r+7 +","+ g +10+ ","+b + "," + ra2 +")";
    ctx.beginPath();
    ctx.arc(width/2, height/2 + fontSize/2, ring2, 0,Math.PI);
    ctx.lineWidth = ringth2;
    ctx.stroke();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.arc(width/2, height/2 - fontSize/2, ring2, Math.PI,Math.PI*2);
    ctx.lineWidth = ringth2;
    ctx.stroke();
     ctx.closePath();
     
    ring2 = ring2 +0.7;
    if (ringth2 > 0.1){ringth2 = ringth2 - 0.1; }
    if (ra2 > 0.1){ra2 = ra2 - 0.1;}
    if (ring2 > 350){
     ring2 = window.innerWidth/10+  window.innerWidth/50 +22;
     ringth2 = 15;
     ra2 = 0.7;   
    }

    
    
    var grd1 = ctx.createLinearGradient(width/2-r1/2, height/2-fontSize/2-r1/2,width/2+r1/2, height/2-fontSize/2+r1/2);
    grd1.addColorStop(0, "rgb(140, 207, 207)");
    grd1.addColorStop(1, "rgb(227, 207, 207)");
    ctx.strokeStyle = grd1;
	ctx.beginPath();
    ctx.arc(width/2, height/2-fontSize/2,r1,0*Math.PI,sec/30*Math.PI);
    ctx.lineWidth = th1;
    ctx.stroke();

    var grd2 = ctx.createLinearGradient(width/2-33, height/2-33-fontSize/2,width/2+r2/2, height/2+33-fontSize/2);
    grd2.addColorStop(0, "rgb(255, 58, 207)");
    grd2.addColorStop(1, "rgb(227, 207, 39)");
    ctx.strokeStyle = grd2;
	ctx.beginPath();
    ctx.arc(width/2, height/2-fontSize/2,r2,0*Math.PI,min/30*Math.PI);
    ctx.lineWidth = th2;
    ctx.stroke();
        
    var grd3 = ctx.createLinearGradient(width/2-45,height/2-45-fontSize/2,width/2+r3/2, height/2+45-fontSize/2);
    grd3.addColorStop(0, "rgb(112, 222, 58)");
    grd3.addColorStop(1, "rgb(164, 56, 201)");
    ctx.strokeStyle = grd3;
	ctx.beginPath();
    ctx.arc(width/2, height/2-fontSize/2,r3,0*Math.PI,hr/12*Math.PI);
    ctx.lineWidth = th3;
    ctx.stroke();
    
    
    var grd11 = ctx.createLinearGradient(width/2-r1/2, height/2+fontSize/2-r1/2,width/2+r1/2, height/2+fontSize/2+r1/2);
    grd11.addColorStop(0, "rgb(140, 207, 207)");
    grd11.addColorStop(1, "rgb(227, 207, 207)");

    ctx.strokeStyle = grd1;
	ctx.beginPath();
    ctx.arc(width/2, height/2+fontSize/2,r1,0*Math.PI,sec/30*Math.PI );
    ctx.lineWidth = th1;
    ctx.stroke();

    var grd22 = ctx.createLinearGradient(width/2-33, height/2-33+fontSize/2,width/2+33, height/2+33+fontSize/2);
    grd22.addColorStop(0, "rgb(255, 58, 207)");
    grd22.addColorStop(1, "rgb(227, 207, 39)");
    ctx.strokeStyle = grd22;
	ctx.beginPath();
    ctx.arc(width/2, height/2+fontSize/2,r2,0*Math.PI,min/30*Math.PI);
    ctx.lineWidth = th2;
    ctx.stroke();
        
    var grd33 = ctx.createLinearGradient(width/2-45,height/2-45+fontSize/2,width/2+45, height/2+45+fontSize/2);
    grd33.addColorStop(0, "rgb(112, 222, 58)");
    grd33.addColorStop(1, "rgb(164, 56, 201)");
    ctx.strokeStyle = grd33;
	ctx.beginPath();
    ctx.arc(width/2, height/2+fontSize/2,r3,0*Math.PI,hr/12*Math.PI);
    ctx.lineWidth = th3;
    ctx.stroke();
    
    ctx.fillStyle = bg;
	ctx.fillRect (0,height/2 - fontSize/2,width,fontSize);
    
	ctx.font = font;
	ctx.fillStyle = color;
	ctx.textAlign = "center";
	ctx.textBaseline = 'middle';
	ctx.fillText(time,width/2, height/2);
}
setup();
setInterval(draw,100);// create processing draw function manually
addEventListener("resize", setup); // resize font based on the window size! --> responsive     




	
	//
	//
	// THIS WAS THE SECTION WHERE PROCODING INJECTED THE CANVAS SCRIPT
	// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	
} catch (e) {
	_procoding_throwError(e);
}
