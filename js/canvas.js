/* Script for drawing canvas */

console.log("hello!");

// globals

var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var isPaint;
var context;


// constants

var canvasWidth = "500";
var canvasHeight = "200";

function initCanvas() {
    // IE safe way of creating a canvas
    var canvasDiv = document.getElementById('canvasDiv');
    var canvas = document.createElement('canvas');
    canvas.setAttribute('width', canvasWidth);
    canvas.setAttribute('height', canvasHeight);
    canvas.setAttribute('id', 'canvas');
    canvasDiv.appendChild(canvas);
    context = canvas.getContext("2d");
    canvas.setAttribute('style', "background-color: #FFFFFF");
    canvas.setAttribute('style', "border: #000000 solid 1px");
    
    // mousedown
    $('#canvas').mousedown(function(event) {
        console.log("hi");
        var mouseX = event.pageX - this.offsetLeft;
        var mouseY = event.pageY - this.offsetTop;
        isPaint = true;
        registerPosition(event.pageX - this.offsetLeft, event.pageY - this.offsetTop);
        draw();
    });


    // mousemove
    $('#canvas').mousemove(function(event) {
        if (isPaint) {
            console.log("offsetLeft");
            console.log(this.offsetLeft);
            registerPosition(event.pageX - this.offsetLeft, event.pageY - this.offsetTop, true);
            draw();
        }

    });

    // mouseup
    $('#canvas').mouseup(function(event){
        isPaint = false;
    });


    // mouseleave
    $("#canvas").mouseleave(function(event) {
        isPaint = false;
    });

}

/* registerPosition function records mouse positions */
function registerPosition(x, y, onCanvas) {
        //console.log(x);
        clickX.push(x-540);
        clickY.push(y-2820);
        clickDrag.push(onCanvas);
}


/* draw function draws all mouse positions thus far */
function draw() {
    console.log(context);
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    context.strokeStyle = "#000000";
    context.lineJoin = "round";
    context.lineWidth = 3;


    for (var i = 0; i < clickX.length; i++) {
        context.beginPath();
        if (clickDrag[i] && i) { // dragging and length != 0
            console.log("start");
            context.moveTo(clickX[i-1], clickY[i-1]);   
        }
        else {
            console.log("ho");
            //context.moveTo(clickX[i-1], clickY[i-1]); 
            context.moveTo(clickX[i]-1, clickY[i]-1);
        }
        console.log("end");
        context.lineTo(clickX[i], clickY[i]);
        context.closePath();
        context.stroke();
    }
}



