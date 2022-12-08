// Variaveis da bolinha;
let xBall = 300;
let yBall = 200;

let diametro = 15;
let raio = diametro / 2;

//Raquete;
let XRacket = 5;
let YRacket = 150;

let LengthRacket = 10;
let HeightRacket = 90;

//Velocidade da bolinha;
let XspeedBall = 7;
let YspeedBall = 7;

//Variaveis de colisão;
let colision = false;

//Raquete do oponente;
let XOpponentRacket = 585;
let YOpponentRacket = 150;

let YSpeedOpponent;

let ErrorOpponent = 0;

//Placar do jogo;
let MyPoints = 0;
let PointsOpponents = 0;

function setup()
{  createCanvas(600, 400);  }

function draw() 
{  background('#1E2940');
   Ball();
   ErrorBall();
   MoveBall();
   Racket(XRacket,YRacket);
   Racket(XOpponentRacket, YOpponentRacket);
   MoveRacket();
   CheckDimensions();
   //CheckColisions();
   ColisionLibrary(XRacket, YRacket);
   ColisionLibrary(XOpponentRacket, YOpponentRacket);
   MoveOpponentRacket();
   Scoreboard();
   Points();
   ErrorChanceOpponents();
}

function Ball()
{   circle(xBall, yBall, diametro);    }

function ErrorBall(){
    if (xBall - raio < 0)
    {  xBall = 23;  }
}

function MoveBall()
{   xBall += XspeedBall;
    yBall += YspeedBall;
}

function Racket(x,y)
{   rect(x, y, LengthRacket, HeightRacket);  }

function MoveRacket()
{   if(keyIsDown(UP_ARROW)){
      YRacket -= 10;
    }
    if(keyIsDown(DOWN_ARROW)){
      YRacket += 10;
    }
}

function ErrorChanceOpponents()
{  if (PointsOpponents >= MyPoints) 
  {  ErrorOpponent += 1
     if (ErrorOpponent >= 39)
     {  ErrorOpponent = 40  }
  } 
  else 
  {  ErrorOpponent -= 1
      if (ErrorOpponent <= 35)
      {  ErrorOpponent = 35   }
  }
}


function MoveOpponentRacket()
{ 
  YSpeedOpponent = yBall - YOpponentRacket - LengthRacket / 2 - 30;
  YOpponentRacket += YSpeedOpponent + ErrorOpponent;
  ErrorChanceOpponents();
}

function CheckDimensions()
{    if(xBall + raio > width || xBall - raio < 0)
   {     XspeedBall *= -1;       }
 
     if(yBall + raio > height || yBall - raio < 0)
   {     YspeedBall *= -1;       }
}

function CheckColisions()
{    if(xBall - raio < XRacket + LengthRacket && yBall - raio < YRacket + HeightRacket && yBall + raio > YRacket)
   {     XspeedBall *= -1;      }  
}

function ColisionLibrary(x, y)
{    colision = collideRectCircle(x, y, LengthRacket, HeightRacket, xBall, yBall, raio);
  
     if(colision)
     {  XspeedBall *= -1;  } 
}

function Scoreboard()
{ fill(255); 
  textSize(25);
  textAlign(CENTER);
  text(MyPoints, 278, 26);
  text(PointsOpponents, 321, 26)
}

function Points()
{  if(xBall > 590)
   {  MyPoints += 1;    }
   if(xBall < 10){
      PointsOpponents += 1;
   }
}