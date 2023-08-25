//initialize x and y position in matrix
let textYpos = 200;
let textXpos = 0;
//initailize movement speed
let dropSpeed = 5;
//spacing in between lines of numbers
let xSpacing = 15;
let ySpacing = 10;
//An array of random numbers for Y positions
let yInitialPos = [];
//An array of random numbers for the length of number line
let numberLength = [];
//X position for each text
let textXposInLine = 0;
//Y position for each text
let textYposInLine = 0;
//Timer
let timeCounter = 0;
//Gaps between each line
let lineGaps = [];

let topLayer;
let slider;
let img;

function preload() {
  img = loadImage('building 복사본.jpeg');
}

function setup() {
  createCanvas(450, 600);
  randomizer();

  topLayer = createGraphics(width, height);

  
  topLayer.image(img, 0, 0);
  
  //topLayer.strokeWeight(30);
  
        
  topLayer.blendMode(REMOVE);
  
}

function draw() {
  
  background(203,196,189);
  frameRate(50);
  //run the timer
  timeCounter ++;
  //call main function
  movingNumberMatrix();
  
  
  
  if(mouseIsPressed){
    
    topLayer.line(pmouseX, pmouseY, mouseX, mouseY);
  
  topLayer.noStroke();
  topLayer.ellipse(mouseX, mouseY, random(60));
  topLayer.rectMode(CENTER);
    
  }
  
  image(topLayer, 0, 0);
}

//매트릭스 효과 
function randomizer() {
  //Randomize three arrays 
  for (let a = 0; a < 100;  a++) {
  //Generate a array of ramdom numbers to be the length of number lines
  numberLength[a] = int(random(2, 20));
  //Generate a array of ramdom numbers to be the initial Y postions of the matrix 
  yInitialPos[a] = int(random(-50, 50));
  //Generate a array of ramdom numbers to be gaps length between each falling lines on Y axis
  lineGaps[a] = int(random(2, 8));
 }
}

function generateNumberMatrix() {
  textSize(13);
  fill(color(0));
  //For loop on x axis
  for (let xRepCounter = 0; xRepCounter < 50;  xRepCounter++) {
    //For loop on Y axis
    for(let yRepCounter = 0; yRepCounter < numberLength[xRepCounter]; yRepCounter ++) {
      // X positons 
      textXposInLine = textXpos + xRepCounter * xSpacing;
      // For loop for each falling number line
      //NOTE: change number 30 to higher or a inifinte number ('Timecounter') will cuase your computer overheated!!!!!!!!
      for (let lineRepCounter = 0; lineRepCounter < 30; lineRepCounter ++) {
        // Y positons 
        textYposInLine = textYpos + yInitialPos[xRepCounter] + yRepCounter * ySpacing - lineRepCounter * numberLength[xRepCounter] * (ySpacing + lineGaps[xRepCounter]);
        //Write numbers
        text(int(random(0, 10)), textXposInLine, textYposInLine);
      }
    }
  }
}


function movingNumberMatrix() {
  //Make the matrix move
  textYpos += dropSpeed;
  generateNumberMatrix();
}

p5.disableFriendlyErrors = true;
