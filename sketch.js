var pet,petImg,petImg2,database,foodS,foodStock;

function preload(){
  petImg = loadImage("images/dogImg.png");
  petImg2 = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  //pet = new dog(250,250,100,100);
  pet = createSprite(250,250,10,10);
  pet.addImage(petImg);
  pet.scale = 0.25

  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(46,139,87);
  

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    pet.addImage(petImg2);
  }

  drawSprites();

  push();
  fill(255);
  text("Food Remaining:" + foodS,30,30);
  pop();
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x = 0;
  }else{
    x = x-1;
  }

  database.ref('/').update({
    Food:x
  })
}
