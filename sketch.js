var S,s,f1,f2,f3,f4,fruitGroup;
var a1,a2,enemyGroup;
var fruit1,fruit2,fruit3,fruit4,alien1,alien2;
var knife,gO,game;
var score = 0;
var play = 1;
var end = 0;
var gamestate = play;

function preload(){
  s = loadImage("sword.png")
  
  f1 = loadImage("fruit1.png");
  f2 = loadImage("fruit2.png");
  f3 = loadImage("fruit3.png");
  f4 = loadImage("fruit4.png");
  
  a1 = loadImage("alien1.png");
  a2 = loadImage("alien2.png");
  
  game = loadImage("gameover.png");
  
  gO = loadSound("gameover.mp3");
  knife = loadSound("knifeSwooshSound.mp3");
}
function setup(){
  createCanvas(400,400);
  
  S = createSprite(200,200);
  S.addImage(s);
  S.scale = 0.5;
  
  //Groups
  fruitGroup = new Group();
  enemyGroup = new Group();
}
function draw(){
  background(rgb(50,200,225))
  if(gamestate === play){
    S.x = mouseX;
    S.y = mouseY;
    
    if(fruitGroup.collide(S)){
      fruitGroup.destroyEach();
      score = score + 1;
      
      knife.play();
    }
    if(enemyGroup.collide(S)){
      fruitGroup.destroyEach();
      enemyGroup.destroyEach();
      gamestate = end;
      
      gO.play();
    }
  }
  if(gamestate === end){
    S.addImage(game);
    S.scale = 2;
    S.x = 200;
    S.y = 200;
  }
  Fruit();
  Enemy();
  drawSprites();
  text("Score : " + score,300,50)
}
function Fruit(){

  var r = Math.round(random(1,4));
  if(gamestate === play){
    if(frameCount%40 === 0){
      if(r === 1){
        F1();
      } else if(r === 2){
        F2();
      } else if(r === 3){
        F3();
      } else{
        F4();
      }
    }
  }
}
function F1(){
  var R = Math.round(random(1,2));
  if(R === 1){
    fruit1 = createSprite(-10,random(50,350),50,50);
    fruit1.addImage(f1);
    fruit1.velocityX = 10;
    fruit1.scale = 0.25;
  }
  if(R === 2){
    fruit1 = createSprite(410,random(50,350),50,50);
    fruit1.addImage(f2);
    fruit1.velocityX = -10;
    fruit1.scale = 0.25;
  }
  fruitGroup.add(fruit1);
}
function F2(){
  var R = Math.round(random(1,2));
  if(R === 1){
    fruit2 = createSprite(-10,random(50,350),50,50);
    fruit2.addImage(f2);
    fruit2.velocityX = 10;
    fruit2.scale = 0.25
  }
  if(R === 2){
    fruit2 = createSprite(410,random(50,350),50,50);
    fruit2.addImage(f2);
    fruit2.velocityX = -10;
    fruit2.scale = 0.25;
  }
  fruitGroup.add(fruit2);
}
function F3(){
  var R = Math.round(random(1,2));
  if(R === 1){
    fruit3 = createSprite(-10,random(50,350),50,50);
    fruit3.addImage(f3);
    fruit3.velocityX = 10;
    fruit3.scale = 0.25;
  }
  if(R === 2){
    fruit3 = createSprite(410,random(50,350),50,50);
    fruit3.addImage(f3);
    fruit3.velocityX = -10;
    fruit3.scale = 0.25;
  }
  fruitGroup.add(fruit3);
}
function F4(){
  var R = Math.round(random(1,2));
  if(R === 1){
    fruit4 = createSprite(-10,random(50,350),50,50);
    fruit4.addImage(f4);
    fruit4.velocityX = 10;
    fruit4.scale = 0.25;
  }
  if(R === 2){
    fruit4 = createSprite(410,random(50,350),50,50);
    fruit4.addImage(f4);
    fruit4.velocityX = -10;
    fruit4.scale = 0.25;
  }
  fruitGroup.add(fruit4);
}
function Enemy(){
  a = Math.round(random(1,2));
  if(gamestate === play){
    if(frameCount%100 === 0){
      if(a === 1){
        Alien1();
      } else{
        Alien2();
      }
    }
  }
}
function Alien1(){
  A = Math.round(random(1,2));
  if(A === 1){
    alien1 = createSprite(-10,random(50,350),50,50);
    alien1.addImage(a1)
    alien1.velocityX = 10
  } else{
    alien1 = createSprite(410,random(50,350),50,50);
    alien1.addImage(a1)
    alien1.velocityX = -10
  }
  enemyGroup.add(alien1);
}
function Alien2(){
  A = Math.round(random(1,2));
  if(A === 1){
    alien2 = createSprite(-10,random(50,350),50,50);
    alien2.addImage(a2)
    alien2.velocityX = 10
  } else{
    alien2 = createSprite(410,random(50,350),50,50);
    alien2.addImage(a2)
    alien2.velocityX = -10
  }
  enemyGroup.add(alien2);
}