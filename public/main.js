//TODO: Use dx as x velocity ect
//TODO: Make Planets clickable/transversable
//TODO: Add lables looks like ( /-Description )
//TODO: Document this crp

//Draw Primive Shapes

/**
 * Display a black triangle in ctx
 * @param  {Number} x X coordiante
 * @param  {Number} y Y coordinate
 * @param  {Number} angle Degrees rotated clockwise, up is 0
 * @param  {Number} scale Length in pixels, roughly
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
 * @param  {Number} scale diamater in pixels, roughly
 */
function drawCircle(x,y,scale){
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, scale/2, 0, 2 * Math.PI);
    ctx.stroke();
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
        let vX = targetX - this.x;
        let vY = targetY - this.y;
        let magnitude = Math.sqrt(vX * vX + vY * vY);
        //normalize vector
        vX /= magnitude;
        vY /= magnitude;
        //set new position of shape
        this.x += vX * speed;
        this.y += vY * speed;
    }
}
class Planet extends Shape {
    //Todo: Behaviour: Make ship only travel from planet to planet, click 2 planets and ship will traverse
    constructor(x,y){
        super(x,y);
    }
    update(){

    }
}
class Ship extends Shape{
    //Todo: Point ship at travel direction
    //Todo: Show details on click

    //Idle = 0
    //In Transit = 1
    //In production = 2
    constructor(x,y){
        super(x,y);
        this.state = 1;
        this.target = {x: 500, y: 75};
    };
    setTarget(x, y) {
        if(this.state == 0){
            this.state = 1;
            this.target.x = x;
            this.target.y = y;
        }
    };
    test() {
        console.log("test");
    };
    update(){
        //TODO: Make this a switch
        if(this.state == 0){
        }
        if(this.state == 1){
            //TODO, use speed * 2 as the target size
            if( (5 > Math.abs(this.x - this.target.x)) && (5 > Math.abs(this.y - this.target.y)) ) {
                this.state = 0;
                console.log("DONE");
            } else {
                super.translate(this.target.x,this.target.y, 1);
            }
        }
        drawTriangle(this.x,this.y,90,25);
    };
}

//Startup
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
spaceShip = new Ship(0,75);
update();

//main loop
//TODO: rewrite to use requestAnimationFrame
function update(){
    requestAnimationFrame(update);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawCircle(0,75,75);
    drawCircle(500,75,75);
    spaceShip.update();
    console.log("loop");
}

//Mouse event listener
window.addEventListener("click", (event) => {
    console.log("clicked at " + event.clientX + " " + event.clientY );
    //send target position to ship
    spaceShip.setTarget(event.clientX, event.clientY);

    //Todo: Loop through shapes array and click the closest one if < some px range


    spaceShip.test();
})