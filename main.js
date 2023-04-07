var leftWristX = 0;
var rightWristX = 0;


function preload() {
};

function setup() {
    canvas = createCanvas(500, 450);
    canvas.position(900, 175);
    video = createCapture(VIDEO);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
};

function modelLoaded(){
    console.log("ml5 Version: " + ml5.version + ", model has been initialized successfully!");
};

function draw(){
    var sizee = Math.floor(leftWristX - rightWristX);
    console.log(sizee);
    fill("green");
    textSize(sizee);
    text("Apratim Jatav", 250, 225);
    document.getElementById("font_size").innerHTML = sizee;
};

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
    };
};