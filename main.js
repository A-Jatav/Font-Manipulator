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
};

function gotPoses(results){
};