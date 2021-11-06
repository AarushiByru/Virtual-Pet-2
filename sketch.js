var dog, happyDog, database,foodS,foodStock,lastfed;

function preload()
{
	dogimage1=loadImage("images/dogImg.png");
  dogimage2=loadImage("images/dogImg1.png");
  milkimage=loadImage("images/Milk.png");
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(400,250);
  dog.addImage(dogimage1)
  dog.scale = 0.15;
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  feed = createButton("feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);
  foodObject = new Food()
  food = createButton("add the food");
  food.position(800,95);
  food.mousePressed(addFoods);
}
function readStock(data){
  foodS = data.val();
  foodObject.updateFoodStock(foodS)
}

function writeStock(x){
  x = x-1;
  database.ref('/').update({
    Food:x
  })
}

function draw() {  
  background("green");
  fedTime = database.ref('fedTime')
  fedTime.on("value", data =>{
    lastfed = data.val();
  })
  text("lastfed:"+lastfed, 350, 30);
  foodObject.display();

  drawSprites();
  //add styles here

}
 function feedDog(){
   dog.addImage(dogimage2)
   foodObject.updateFoodStock(foodObject.getFoodStock()-1)
   database.ref('/').update({
     Food: foodObject.getFoodStock(),
     fedTime: hour()
   })
 }

function addFoods(){
  foodS++
  database.ref('/').update({
    Food: foodS
  })
}
