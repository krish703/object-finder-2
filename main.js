status="";


function setup(){
    canvas=createCanvas(480,380);
    canvas.center(); 
}

function draw(){
    image(video,0,0,300,300);
    classifier.classify(video,gotresult);
  
}



function gotResult(error, results){
    image(video,0,0,300,300);
    classifier.classify(video,gotresult);
}

function start(){
    objectdetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status:detecting objects";
}

function modelLoaded(){
    console.log("Model Loaded");
    status=true;
}