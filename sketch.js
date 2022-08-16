let s01, s02, s03, s04;
let ks01;
let audio;

let bg;

function preload() {
    s01 = loadSound('./audio/01.wav');
    s02 = loadSound('./audio/02.wav');
    s03 = loadSound('./audio/03.wav');
    s04 = loadSound('./audio/04.wav');
    ks01 = loadSound('./audio/k01.wav');
    audio = loadSound('./audio/monte_booker_-_endless.wav');
}

function setup() {
    createCanvas(400, 400);
    bg = color(0, 0, 0);
    background(bg);
    audio.setVolume(0.4);
    s01.setVolume(1);
    s02.setVolume(1);
    s03.setVolume(1);
    s04.setVolume(1);
    ks01.setVolume(1);
    audio.stop();
}
  
function draw() {
    background(bg);
}

function mousePressed() {
    audio.play();
}

function keyTyped() {
    if (key == 'w') {
        s01.play();
        bg = color(217, 117, 83);
    }
    if (key == 's') {
        s02.play();
        bg = color(186, 193, 139);
    }
    if (key == 'a') {
        s03.play();
        bg = color(209, 225, 210);
    }
    if (key == 'd') {
        s04.play();
        bg = color(254, 223, 167);
    }
    if (key == 'x') {
        ks01.play();
        bg = color(196, 229, 255);
    }
}