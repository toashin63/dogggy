//Create variables here
var dog,happyDog,database,foodS,foodStock,dog1

function preload()

{
  //load images here
  dog = loadImage("Dog.png")
  happyDog = loadImage("happydog.png")

}


function setup() {
  createCanvas(500,500);
  
 dog1 = createSprite(200,200,50,50)
database = firebase.database()
foodStock=database.ref("food").on("value",function(data){
  foodS=data.val()
  dog1.addImage("d1",dog)
})
dog1.scale=0.5
 
}


function draw() {  
background("white")










if(keyWentUp(UP_ARROW)){
writeStock(foodS)

dog1.addImage("d1",happyDog)

}


  drawSprites();
  //add styles here

}

function writeStock(x){
database.ref("/").update({
  food:x
})



}

