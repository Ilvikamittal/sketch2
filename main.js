function preload(){
    classifier=ml5.imageClassifier("DoodleNet");
}


function setup(){
    canvas=createCanvas(280,285);
    canvas.center();
    background("whitesmoke");

    canvas.mouseReleased(classifyCanvas);
    synth=window.speechSynthesis;
}

function clearCanvas(){
    background("whitesmoke");
}

function draw(){

}

function classifyCanvas(){

}

function gotResult(){

}