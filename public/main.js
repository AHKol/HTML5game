//Draw Primaive Shapes

/**
 * Display a black triangle in ctx
 * @param  {Number} x X coordiante
 * @param  {Number} y Y coordinate
 * @param  {Number} angle Degrees rotated clockwise, up is 0
 * @param  {Number} scale Length in pixels, roghly
 */
function drawTriangle(x,y,angle,scale){
    scale = scale / 10;
    v = [[0 * scale, 0 * scale],
        [5 * scale, 10 * scale],
        [-5 * scale, 10 * scale]];

    ctx.save()

    rotation = angle * Math.PI / 180;

    ctx.translate(x,y);
    ctx.rotate(rotation);

    ctx.fillStyle = "rgba(0, 0, 0, 255)";
    ctx.strokeStyle = "#000000";

    ctx.beginPath();
    ctx.moveTo(v[0][0],v[0][1]);
    ctx.lineTo(v[1][0],v[1][1]);
    ctx.lineTo(v[2][0],v[2][1]);
    ctx.closePath();
    //ctx.stroke();
    ctx.fill();

    ctx.restore()
}
function drawCircle(x,y,scale){

}

//Define on scren objects

class Shape {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    update(){
    }
    transit(targetX,targetY,speed) {
        //normalize vector then multiply x, y, by speed
        var vX = targetX - this.x;
        var vY = targetY - this.y;
        var magnitude = Math.sqrt(vX * vX + vY * vY);
        //normalize vector
        vX /= magnitude;
        vY /= magnitude;
        //set new position of shape
        this.x += vX * speed;
        this.y += vY * speed;
    }
}
class Planet extends Shape {
    constructor(x,y){
        super(x,y);
    }
    update(){

    }
}
class Ship extends Shape{
    constructor(x,y){
        super(x,y);
    }
    update(){
        super.transit(500,75, 10);
        drawTriangle(this.x,this.y,0,100);
    }
}

//Startup
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
spaceShip = new Ship(50,50);
setInterval(update, 1000/16);

function update(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    spaceShip.update();
    console.log("loop");
}

