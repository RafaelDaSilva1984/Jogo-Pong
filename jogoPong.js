// variaveis da bolinha posição e medidas
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

// velocidade da bolinha nos eixos x e y
let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;
let comprimentoRaquete = 10;
let alturaRaquete = 85;

// variaveis raquete posição e medidas
let xRaquete = 5;
let yRaquete = 150;

let colidiu = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  limitesBolinha();
  mostraRaquete();
  movimentaMinhaRaquete();
  //verificaColisaoMinhaRaquete();
  colisaoMinhaRaqueteBiblioteca();
}

function mostraBolinha(){
  circle(xBolinha,yBolinha,diametro); 
}

function movimentaBolinha(){
  //criar velocidade para a bolinha a variável xBolinha + velocidadexBolina
  xBolinha += velocidadexBolinha;
  //criar velocidade para a bolinha a variável yBolinha + velocidadeyBolina
  yBolinha += velocidadeyBolinha;
}

function limitesBolinha(){
    // width refere-se ao limite da área eixo "x"
  // multiplica-se velcidadexBolinha por -1 para inverter sentido
  // para a bolinha não entrar na borda usa-se bolinha + raio para bolinha tocar o nicio na borda e retornar e bolinha - raio bolinha tocar o nicio na borda e retornar
  
  if(xBolinha + raio > width || xBolinha -  raio < 0){
    velocidadexBolinha *= -1;
  }
  // height refere-se ao limite da área eixo "y"
  // multiplica-se velcidadeyBolinha por -1 para inverter sentido
  // para a bolinha não entrar na borda usa-se bolinha + raio para bolinha tocar o nicio na borda e retornar e bolinha - raio bolinha tocar o nicio na borda e retornar
  
  if(yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeyBolinha *= -1;
  }
}
function mostraRaquete (){
  rect(xRaquete,yRaquete,comprimentoRaquete,alturaRaquete);
}

function movimentaMinhaRaquete(){
 if (keyIsDown(UP_ARROW)){
   yRaquete -= 10;
 }
  
 if (keyIsDown(DOWN_ARROW)){
   yRaquete += 10;
 }
}
function verificaColisaoMinhaRaquete(){
  if (xBolinha - raio < xRaquete + comprimentoRaquete 
      && yBolinha - raio  < yRaquete + alturaRaquete && yBolinha + raio > yRaquete )
  {
    velocidadexBolinha *= -1;
  } 
}
function colisaoMinhaRaqueteBiblioteca(){
  colidiu =   collideRectCircle(xRaquete,yRaquete,comprimentoRaquete,alturaRaquete, xBolinha,yBolinha,raio);
  if (colidiu)  {
    velocidadexBolinha *= -1;
  }
}