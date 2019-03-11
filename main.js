var canvas = document.getElementById("canvas");

var ctx = canvas.getContext('2d');
drawTriangle(50,50,0,100);
setInterval(update, 10000/30);

function update(){

}

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