difference=0;
rightWristX=0;
leftWristX=0;
function setup(){
canvas=createCanvas(550,550);
canvas.position(560,150);
video=createCapture(VIDEO);
video.size(550,500);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function draw(){
    background('#1C1C1C');
    document.getElementById("square_sides").innerHTML="width and height of a square will be="+difference+"px";
        fill('#1AA7EC');
        textSize(difference);
        text('Shriyan',50,400);
}
function modelLoaded(){
    console.log('')
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    difference=floor(leftWristX-rightWristX);
    console.log("left wrist x="+leftWristX+"right wrist x="+rightWristX+"difference="+difference);
}
}