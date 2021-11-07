song="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
scorerightwrist=0;
scoreleftwrist=0;
status1song="";
status2song="";
song1="";
song2="";


function preload(){
    song1= loadSound('music.mp3');
    song2= loadSound('music2.mp3');
}

function setup(){
    canvas=createCanvas(600, 500);
    canvas.center();

    video= createCapture(VIDEO);
    video.hide();

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('posenet is Initialize');
}

function draw(){
    image(video, 0, 0, 600, 500);
  status1song= song1.isPlaying();
  status2song= song2.isPlaying();
    fill("green");
    stroke("black");

    if(scorerightwrist > 0.2){
        circle(rightWristX , rightWristY, 20);
        song2.stop();

    }

    if(status1song == false){
    song1.play();
    document.getElementById("song").innerHTML="playing:pirate";
    }


    if(scoreleftwrist > 0.2){
        circle(leftWristX , leftWristY, 20);
        song1.stop();

    if(status2song == false){
    song2.play();
    document.getElementById("song").innerHTML="playing:island";
    
            
}

}

}


function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function stop(){
    song.stop();
}

function gotPoses(results){

if(results.length > 0){
    console.log(results);
    scorerightwrist=results[0].pose.keypoints[10].score;
    scoreleftwrist=results[0].pose.keypoints[9].score;
    console.log("scoreleftwrist= " +scoreleftwrist+ "scorerightwrist =" +scorerightwrist);
    leftWristX=results[0].pose.leftWrist.x;
    leftWristY=results[0].pose.leftWrist.y;
    console.log("leftWristX =" + leftWristX + "leftWristY =" + leftWristY );

    rightWristX=results[0].pose.rightWrist.x;
    rightWristY=results[0].pose.rightWrist.y;
    console.log("rightWristX =" + rightWristX + "rightWristY =" + rightWristY );



}}