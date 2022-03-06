let x,y;
let num = 1;
let stepSize = 15;
let stepsTillTurn = 1;
let turn = 0; //specifies the values of x and y
let px,py;
let vars = 0;

function isPrime(number) {
  let primey = true;
  for(let i=2;i<number/2 ; i++){
    if(number % i == 0){
      primey =false;
      break;
    }
  }
  return primey;
} 
function setup() {
  createCanvas(500, 500);
  x = width/2;
  y = height/2;
  background(0);
}

function draw() {
  
  fill(127);
  stroke(255);
  if(isPrime(num))
    circle(x,y,stepSize*0.5);
  line(x,y,px,py)
  px = x;
  py = y;
  num++;
  turn = turn%4;
  if(vars ==0)
    {
      turn++;
      vars = 2* stepsTillTurn;
    }
    
  if(vars > 0)
    {
      if(vars == stepsTillTurn)
        turn++;
      vars--;
      if(vars == 0) 
      {
        stepsTillTurn++;
      }
    }
    switch (turn%4 +1) {
     case 1:
        x += stepSize;
        break;
     case 2:
        y -= stepSize;
        break;
     case 3:
        x -= stepSize;
        break;
     case 4:
        y += stepSize;
        break;
    }
  
  frameRate(60)
  
}
