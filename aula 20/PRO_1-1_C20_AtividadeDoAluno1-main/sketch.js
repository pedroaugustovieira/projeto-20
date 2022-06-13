const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let engine;
let world;
var ball;
var ground;
var wedge;
var angle=60;
var poly;
var rock;
var parede;
var cubo;

function setup() {
  
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution : 2,
    frictionAir : 0.1
  }

  var ground_options = {
    isStatic : true
  }

 var rock_options = {
   restitution : 0.7,
   frictionAir : 0
  }
  
  var parede_options = {
    restitution : 0.8 
    
  }
 
  var cubo_options = {
     restitution : 1.5, 
     friction : 0.3

  }


  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
  
  rock = Bodies.circle(220,10,20,rock_options);
  World.add(world,rock);

  parede = Bodies.rectangle(300,200,50,40,parede_options);
  World.add(world,parede);

  cubo = Bodies.rectangle(80,200,30,30,cubo_options);
 World.add(world,cubo);
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
 background (51);
 Engine.update(engine);
 
 ellipse(ball.position.x,ball.position.y,20);
 rect(ground.position.x,ground.position.y,400,20);
 ellipse(rock.position.x,rock.position.y,20);
 rect(parede.position.x,parede.position.y,50,20);
 rect(cubo.position.x,cubo.position.y,30,30);

}

