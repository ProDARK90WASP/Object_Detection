img="";
status="";
function preload(){
img=loadImage("dog_cat.jpg");

}
function setup(){
canvas=createCanvas(600,400);
canvas.position(400,130);
objectDetector=ml5.objectDetector('cocossd',modelloaded);
}
function draw(){
image(img,0,0,600,400);
fill("#0e0326");
text("dog",230,100);
noFill();
stroke("#0e0326",);
rect(130,70,250,300);
fill("#0e0326");
text("cat",450,130);
noFill();
stroke("#0e0326",);
rect(300,70,250,300);
}
function modelloaded(){
console.log("modelloaded");
status=true;
status=document.getElementById("status").innerHTML="Current Status-Detecting Objects";
objectDetector.detect(img,gotresult);
}
function gotresult(error,result){
    if(error){
        console.error("error");
    }
    else{
        console.log(result);
    }
}
