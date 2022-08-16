let sound;
let audio;

function preload() {
    sound = loadSound('./audio/MONTE_NFT_808.wav');
    audio = loadSound('./audio/monte_booker_-_endless.wav');
}

function setup() {
    createCanvas(400, 400);
    background(0);
    audio.setVolume(1);
    audio.stop();
}
  
function draw() {
}