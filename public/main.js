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

    ctx.beginPath();
    ctx.moveTo(v[0][0],v[0][1]);
    ctx.lineTo(v[1][0],v[1][1]);
    ctx.lineTo(v[2][0],v[2][1]);
    ctx.closePath();
    ctx.fill();

    ctx.restore()
}

/**
 * Display a black circle in ctx
 * @param  {Number} x X coordiante
 * @param  {Number} y Y coordinate
 * @param  {Number} scale diamater in pixels, roghly
 */
function drawCircle(x,y,scale){
    ctx.save();
    ctx.arc(x, y, scale/2, 0, 2 * Math.PI);
    ctx.fill();
    ctx.restore();
}

//Define on scren objects

class Shape {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    update(){
    }
    translate(targetX,targetY,speed) {
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
        super.translate(500,75, 1);
        drawTriangle(this.x,this.y,0,100);
    }
}

//Startup
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
spaceShip = new Ship(50,50);
setInterval(update, 1000/60);

//main loop
function update(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle(0,100,75);
    drawCircle(200,100,75);
    spaceShip.update();
    console.log("loop");
}

