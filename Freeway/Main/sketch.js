// Variaveis do cenario;
let imageStreet;
let imageActor;
let imageCar;

//Variaveis do carro;
let xCar = 600;


//Variaveis do ator;
let yActor = 366;

//Preload function;
function preload()
{  imageStreet = loadImage("images/estrada.png")
   imageActor = loadImage("images/ator-1.png");
   imageCar = loadImage("images/carro-1.png");
}

function setup() 
{  createCanvas(500, 400);    }

//Main function;
function draw() 
{  background(imageStreet);
   Car();
   Actor();
   MoveCar();
   MoveActor();
}

function Actor()
{  image(imageActor, 100, yActor, 30, 30);
   
}

function MoveActor()
{  if(keyIsDown(UP_ARROW))
   {  yActor -= 3;
     
   }
   if(keyIsDown(DOWN_ARROW))
   {  yActor += 3;
     
   }
  
}

function Car()
{  image(imageCar, xCar, 40, 50, 40);
  
}

function MoveCar()
{  xCar -=2;
  
}