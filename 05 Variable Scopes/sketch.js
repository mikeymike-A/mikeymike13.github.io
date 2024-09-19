// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10)
}

function draw() {
  myBackground();
  myForeground();
}
function myBackground(){
  noStroke();
  let rectHeight = 1;
  for(let y = height; y >= 0; y-=rectHeight){
    let value = map(y,0,height,0,234)
    fill(value, 255-value, 255-value)
    rect(0, y, width,rectHeight);
  }
}


// function myForeground(){
//   let starCount = 0;
//   while(starCount < 10){
//     fill(40, 20, 222);
//     let x = random(0, width);
//     let y = random(0, height)
//     circle(x,y,10)
//     starCount++
//   }
// }
  