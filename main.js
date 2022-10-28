function preload()
{
 alert = loadSound("alert.mp3");
}
function setup()
{
 canvas = createCanvas(400, 400);
 canvas.center();
 objectDetector = ml5.objectDetector('cocossd', modelLoaded);
 
}
function draw()
{
    
}