var to1,to2,to3,m1,m2,m3,b1,b2,b3;

var t1,t2,t3,t4,t5,t6,t7,t8,t9;

var sp = [];
var im = [];
var test = [null,null,null,null,null,null,null,null];

var image1;

var mage;

var moves = 0;



function preload(){
  to1 = loadImage("images/top1.jpg");
  to2 = loadImage("images/top2.jpg");
  to3 = loadImage("images/top3.jpg");
  m1 = loadImage("images/mid1.jpg");
  m2 = loadImage("images/mid2.jpg");
  m3 = loadImage("images/mid3.jpg");
  b1 = loadImage("images/bottom1.jpg");
  b2 = loadImage("images/bottom2.jpg");
  b3 = loadImage("images/bottom3.jpg");
  im = [to1,to2,to3,m1,m3,b1,b2,b3];
  image1 = loadImage("images/m.jpg");
}
function setup() {
  createCanvas(800,700);
  
  heading = createElement('h2'); 
  heading.html("< < <   SLIDE PUZZLE   > > >");
  heading.position(500,60);
  heading.style("font-size",'50px');
  
  next = createButton("START THE GAME");
  next.position(575,470);
  next.style('background-color',color(162,239,234));
  next.style('border-radius','30px');
  next.style("width",'25%');
  next.style("height",'8%');
  next.style("font-size",'35px')
  
  
  next.mousePressed(()=>{
    heading.position(700,20);
    heading.style("font-size",'30px');
     next.hide();
    createSprites();
    sp = [t1,t2,t3,t5,t6,t7,t8,t9];
    addimages();
  })
}

function createSprites(){
  t1 = createSprite(245,300, 65, 65);
  //t1.addImage(to1);
  t1.scale = 0.5;
  t2 = createSprite(395,300, 65, 65);
  //t2.addImage(to2);
  t2.scale = 0.5;
  t3 = createSprite(245,450, 65, 65);
 // t3.addImage(m1);
  t3.scale = 0.5;
  t4 = createSprite(395,450,50,50);
  t4.shapeColor = color(0,179,223);
  t5 = createSprite(245,600,65,65);
//  t5.addImage(b1);
  t5.scale = 0.5;
  t6 = createSprite(395,600,65,65);
  //t6.addImage(b2);
  t6.scale = 0.5;
  t7 = createSprite(545,300,65,65);
 // t7.addImage(to3);
  t7.scale = 0.5;
  t8 = createSprite(545,450,65,65);
  //t8.addImage(m3);
  t8.scale = 0.5;
  t9 = createSprite(545,600,65,65);
 // t9.addImage(b3);
  t9.scale = 0.5;

  mage = createSprite(125,100);
  mage.addImage(image1);
  mage.scale = 0.35;
}

function addimages(){
  
  for(var i=0;i<sp.length;i++){
    

     var n = Math.round(random(0,im.length-1));
     
     while(contains(n)){
      var n = Math.round(random(0,im.length-1));
     }
    test[i] = n;
    sp[i].addImage(im[n]);

  }
}

function contains(pick){
  //return true if the number is in the grid else false.
  for(var i = 0;i<sp.length;i++){
    
      if(test[i] === pick && test[i]!==null){
        return true;
    }  
  }
return false;
}

function moveSprites(){
  if(t1.x+150 == t4.x && t1.y == t4.y|| t1.x-150 == t4.x&& t1.y == t4.y||t1.y+150 == t4.y&&t1.x == t4.x||t1.y-150 == t4.y && t1.x == t4.x){
    if(mousePressedOver(t1)){
      var x = t1.x;
      var y = t1.y;
      t1.x = t4.x;
      t1.y = t4.y;
      t4.x = x;
      t4.y = y;
      moves = moves+1;
    }
  }
  if(t2.x+150 == t4.x && t2.y == t4.y|| t2.x-150 == t4.x && t2.y == t4.y||t2.y+150 == t4.y&&t2.x == t4.x||t2.y-150 == t4.y&&t2.x == t4.x){
   if(mousePressedOver(t2)){
     var x = t2.x;
     var y = t2.y;
     t2.x = t4.x;
     t2.y = t4.y;
     t4.y = y;
     t4.x = x;
     moves = moves+1;

   }
 }
 if(t3.x+150 == t4.x && t3.y == t4.y|| t3.x-150 == t4.x && t3.y == t4.y||t3.y+150 == t4.y&&t3.x == t4.x||t3.y-150 == t4.y&&t3.x == t4.x){
   if(mousePressedOver(t3)){
     var x = t3.x;
     var y = t3.y;
     t3.x = t4.x;
     t3.y = t4.y;
     t4.y = y;
     t4.x = x;
     moves = moves+1;

   }
 }
 if(t5.x+150 == t4.x && t5.y == t4.y|| t5.x-150 == t4.x && t5.y == t4.y||t5.y+150 == t4.y&&t5.x == t4.x||t5.y-150 == t4.y&&t5.x == t4.x){
   if(mousePressedOver(t5)){
     var x = t5.x;
     var y = t5.y;
     t5.x = t4.x;
     t5.y = t4.y;
     t4.y = y;
     t4.x = x;
     moves = moves+1;

   }
 }
 if(t6.x+150 == t4.x && t6.y == t4.y|| t6.x-150 == t4.x && t6.y == t4.y||t6.y+150 == t4.y&&t6.x == t4.x||t6.y-150 == t4.y&&t6.x == t4.x){
   if(mousePressedOver(t6)){
     var x = t6.x;
     var y = t6.y;
     t6.x = t4.x;
     t6.y = t4.y;
     t4.y = y;
     t4.x = x;
     moves = moves+1;

   }
 }
 if(t7.x+150 == t4.x && t7.y == t4.y|| t7.x-150 == t4.x && t7.y == t4.y||t7.y+150 == t4.y&&t7.x == t4.x||t7.y-150 == t4.y&&t7.x == t4.x){
   if(mousePressedOver(t7)){
     var x = t7.x;
     var y = t7.y;
     t7.x = t4.x;
     t7.y = t4.y;
     t4.y = y;
     t4.x = x;
     moves = moves+1;

   }
 }
 if(t8.x+150 == t4.x && t8.y == t4.y|| t8.x-150 == t4.x && t8.y == t4.y||t8.y+150 == t4.y&&t8.x == t4.x||t8.y-150 == t4.y&&t8.x == t4.x){
   if(mousePressedOver(t8)){
     var x = t8.x;
     var y = t8.y;
     t8.x = t4.x;
     t8.y = t4.y;
     t4.y = y;
     t4.x = x;
     moves = moves+1;

   }
 }
 if(t9.x+150 == t4.x && t9.y == t4.y|| t9.x-150 == t4.x && t9.y == t4.y||t9.y+150 == t4.y&&t9.x == t4.x||t9.y-150 == t4.y&&t9.x == t4.x){
   if(mousePressedOver(t9)){
     var x = t9.x;
     var y = t9.y;
     t9.x = t4.x;
     t9.y = t4.y;
     t4.y = y;
     t4.x = x;
     moves = moves+1;

   }
 }

}

function drawGrid(){
  for(var i=0;i<3;i++){
    for(var j = 0;j<3;j++){
      fill("white")
      rect(437.5+i,66.5+j,65,65);
    }
  }
}

function draw() {
  background(0,179,223); 
  fill('white');
  if(t1 && t2 && t3 && t4 && t5 && t6 && t7 && t8 && t9){
  moveSprites();
 // drawGrid();
 textSize(20);
 text('MOVES  :    '+moves,450,130);
  }

  



  drawSprites();

}