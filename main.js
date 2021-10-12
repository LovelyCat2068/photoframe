function preload(){}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 230, 150 , 220, 200);

    fill(20, 24, 87);
    stroke(184, 235, 169);
    circle(50, 50, 80);

    fill(245, 66, 135);
    stroke(65, 94, 240);
    rect(87, 38, 457, 20);

    fill(245, 66, 135);
    stroke(65, 94, 240);
    rect(45, 80, 20, 315);

    fill(20, 24, 87);
    stroke(184, 235, 169);
    circle(50, 430, 80);


    fill(20, 24, 87);
    stroke(184, 235, 169);
    circle(580, 40, 80);

    fill(245, 66, 135);
    stroke(65, 94, 240);
    rect(87, 425, 457, 20);

    fill(20, 24, 87);
    stroke(184, 235, 169);
    circle(580, 430, 80);

    fill(245, 66, 135);
    stroke(65, 94, 240);
    rect(570, 80, 20, 315);
}


function take_snapshot(){
    save("MyPic-with-MyFrame");
}