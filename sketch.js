var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var particle
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var score = 0;
var ground
var gameState=1 ;
var count=0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height, width, 20);


  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight));
  }


  for (var j = 75; j <= width; j = j + 50) {

    plinkos.push(new Plinko(j, 75));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {

    plinkos.push(new Plinko(j, 175));
  }

  for (var j = 75; j <= width; j = j + 50) {

    plinkos.push(new Plinko(j, 275));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {

    plinkos.push(new Plinko(j, 375));
  }


  fill("white")


}



function draw() {
  background("black");
  
  
  
  
  Engine.update(engine);
console.log(gameState)
  if(gameState===1){
    console.log(gameState)
    textSize(20)
  text("500", 0, 550)
  text("Score : " + score, 20, 30);
  text("500", 160, 550)
  text("500", 400, 550)
  text("500", 640, 550)
  text("100", 320, 550)
  text("100", 480, 550)
  text("100", 560, 550)
  text("200", 80, 1100 / 2)
  text("200", 240, 550)
  text("200", 720, 550)
  for (var i = 0; i < plinkos.length; i++) {

    plinkos[i].display();
    ground.display();
  }


  // for (var j = 0; j < particle.length; j++) {
  if (particle != null) {
    particle.display();
    if (particle.body.position.y > 760) {
      if (particle.body.position.x > 80 && particle.body.position.x < 160) {
        score = score + 500;
        particle = null;

      }
      else if (particle.body.position.x > 0 && particle.body.position.x < 80) {
        score = score + 200;
        particle = null;

      }
      else if (particle.body.position.x > 80 * 2 && particle.body.position.x < 240) {
        score = score + 500;
        particle = null;

      }
      else if (particle.body.position.x > 240 && particle.body.position.x < 320) {
        score = score + 200;
        particle = null;

      }
      else if (particle.body.position.x > 320 && particle.body.position.x < 400) {
        score = score + 100;
        particle = null;

      }
      else if (particle.body.position.x > 80 * 5 && particle.body.position.x < 480) {
        score = score + 500;
        particle = null;

      }
      else if (particle.body.position.x > 480 && particle.body.position.x < 560) {
        score = score + 100;
        particle = null;

      }
      else if (particle.body.position.x > 560 && particle.body.position.x < 640) {
        score = score + 100;
        particle = null;

      } 
      else  if (particle.body.position.x > 640 && particle.body.position.x < 720) {
          score = score + 500;
          particle = null;

        }
        else {
          if (particle.body.position.x > 720 && particle.body.position.x < 800) {
            score = score + 200;
            particle = null;
  
          }
         
      }

    }

if(count>=5)gameState=0;
  }



  for (var k = 0; k < divisions.length; k++) {

    divisions[k].display();
  }
}
if(gameState===0){
  textSize(100)
  text("GAME OVER",height/2,width/2)
}
}




function mousePressed() {
if(gameState===1){
  particle = new Particle(mouseX, 10, 10, 10)
  
count++     
console.log(count)   }
}

