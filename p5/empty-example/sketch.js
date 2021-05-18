// Ray Marcus' Sketch -- Blast Off With Me

//Variables
   
   let x;

  function setup() {
// createCanvas defines the size of the display window
      createCanvas(1350,650);

//Movement Of Rocket

frameRate(20);

// Coordinates for Text
      x = width; 


}

  function draw() {  
// Defining the colour of the display window 
      background("#000000");

//White Stars

       if (mouseIsPressed){
        fill('#fafaff');
       } else {
        fill('#fee600');
       }
       print(mouseIsPressed);
//Line 1
      push();
       ellipse(25,25,4,4);
       ellipse(25,75,3,3);
       ellipse(25,125,4,4);
       ellipse(25,175,3,3);
       ellipse(25,225,4,4);
       ellipse(25,275,3,3);
       ellipse(25,325,4,4);
       ellipse(25,375,3,3);
       ellipse(25,425,4,4);
       ellipse(25,475,3,3);
       ellipse(25,525,4,4);
       ellipse(25,575,3,3);
       ellipse(25,625,4,4);
       ellipse(25,675,3,3);
//Line 2
       ellipse(125,25,4,4);
       ellipse(125,75,3,3);
       ellipse(125,125,4,4);
       ellipse(125,175,3,3);
       ellipse(125,225,4,4);
       ellipse(125,275,3,3);
       ellipse(125,325,4,4);
       ellipse(125,375,3,3);
       ellipse(125,425,4,4);
       ellipse(125,475,3,3);
       ellipse(125,525,4,4);
       ellipse(125,575,3,3);
       ellipse(125,625,4,4);
       ellipse(125,675,3,3);
//Line 3
       ellipse(225,25,4,4);
       ellipse(225,75,4,4);
       ellipse(225,125,4,4);
       ellipse(225,175,4,4);
       ellipse(225,225,4,4);
       ellipse(225,275,4,4);
       ellipse(225,325,4,4);
       ellipse(225,375,4,4);
       ellipse(225,425,4,4);
       ellipse(225,475,4,4);
       ellipse(225,525,4,4);
       ellipse(225,575,4,4);
       ellipse(225,625,4,4);
       ellipse(225,675,4,4);
//Line 3
       ellipse(325,25,4,4);
       ellipse(325,75,4,4);
       ellipse(325,125,4,4);
       ellipse(325,175,4,4);
       ellipse(325,225,4,4);
       ellipse(325,275,4,4);
       ellipse(325,325,4,4);
       ellipse(325,375,4,4);
       ellipse(325,425,4,4);
       ellipse(325,475,4,4);
       ellipse(325,525,4,4);
       ellipse(325,575,4,4);
       ellipse(325,625,4,4);
       ellipse(325,675,4,4);
//Line 5
       ellipse(425,25,4,4);
       ellipse(425,75,4,4);
       ellipse(425,125,4,4);
       ellipse(425,175,4,4);
       ellipse(425,225,4,4);
       ellipse(425,275,4,4);
       ellipse(425,325,4,4);
       ellipse(425,375,4,4);
       ellipse(425,425,4,4);
       ellipse(425,475,4,4);
       ellipse(425,525,4,4);
       ellipse(425,575,4,4);
       ellipse(425,625,4,4);
       ellipse(425,675,4,4);
//Line 6
       ellipse(525,25,4,4);
       ellipse(525,75,4,4);
       ellipse(525,125,4,4);
       ellipse(525,175,4,4);
       ellipse(525,225,4,4);
       ellipse(525,275,4,4);
       ellipse(525,325,4,4);
       ellipse(525,375,4,4);
       ellipse(525,425,4,4);
       ellipse(525,475,4,4);
       ellipse(525,525,4,4);
       ellipse(525,575,4,4);
       ellipse(525,625,4,4);
       ellipse(525,675,4,4);
//Line 7
       ellipse(625,25,4,4);
       ellipse(625,75,4,4);
       ellipse(625,125,4,4);
       ellipse(625,175,4,4);
       ellipse(625,225,4,4);
       ellipse(625,275,4,4);
       ellipse(625,325,4,4);
       ellipse(625,375,4,4);
       ellipse(625,425,4,4);
       ellipse(625,475,4,4);
       ellipse(625,525,4,4);
       ellipse(625,575,4,4);
       ellipse(625,625,4,4);
       ellipse(625,675,4,4);
//Line 8
       ellipse(725,25,4,4);
       ellipse(725,75,4,4);
       ellipse(725,125,4,4);
       ellipse(725,175,4,4);
       ellipse(725,225,4,4);
       ellipse(725,275,4,4);
       ellipse(725,325,4,4);
       ellipse(725,375,4,4);
       ellipse(725,425,4,4);
       ellipse(725,475,4,4);
       ellipse(725,525,4,4);
       ellipse(725,575,4,4);
       ellipse(725,625,4,4);
       ellipse(725,675,4,4);
//Line 9
       ellipse(825,25,4,4);
       ellipse(825,75,4,4);
       ellipse(825,125,4,4);
       ellipse(825,175,4,4);
       ellipse(825,225,4,4);
       ellipse(825,275,4,4);
       ellipse(825,325,4,4);
       ellipse(825,375,4,4);
       ellipse(825,425,4,4);
       ellipse(825,475,4,4);
       ellipse(825,525,4,4);
       ellipse(825,575,4,4);
       ellipse(825,625,4,4);
       ellipse(825,675,4,4);
//Line 10
       ellipse(925,25,4,4);
       ellipse(925,75,4,4);
       ellipse(925,125,4,4);
       ellipse(925,175,4,4);
       ellipse(925,225,4,4);
       ellipse(925,275,4,4);
       ellipse(925,325,4,4);
       ellipse(925,375,4,4);
       ellipse(925,425,4,4);
       ellipse(925,475,4,4);
       ellipse(925,525,4,4);
       ellipse(925,575,4,4);
       ellipse(925,625,4,4);
       ellipse(925,675,4,4);
//Line 11
       ellipse(1025,25,4,4);
       ellipse(1025,75,4,4);
       ellipse(1025,125,4,4);
       ellipse(1025,175,4,4);
       ellipse(1025,225,4,4);
       ellipse(1025,275,4,4);
       ellipse(1025,325,4,4);
       ellipse(1025,375,4,4);
       ellipse(1025,425,4,4);
       ellipse(1025,475,4,4);
       ellipse(1025,525,4,4);
       ellipse(1025,575,4,4);
       ellipse(1025,625,4,4);
       ellipse(1025,675,4,4);
//Line 12
       ellipse(1125,25,4,4);
       ellipse(1125,75,4,4);
       ellipse(1125,125,4,4);
       ellipse(1125,175,4,4);
       ellipse(1125,225,4,4);
       ellipse(1125,275,4,4);
       ellipse(1125,325,4,4);
       ellipse(1125,375,4,4);
       ellipse(1125,425,4,4);
       ellipse(1125,475,4,4);
       ellipse(1125,525,4,4);
       ellipse(1125,575,4,4);
       ellipse(1125,625,4,4);
       ellipse(1125,675,4,4);
//Line 13
       ellipse(1225,25,4,4);
       ellipse(1225,75,4,4);
       ellipse(1225,125,4,4);
       ellipse(1225,175,4,4);
       ellipse(1225,225,4,4);
       ellipse(1225,275,4,4);
       ellipse(1225,325,4,4);
       ellipse(1225,375,4,4);
       ellipse(1225,425,4,4);
       ellipse(1225,475,4,4);
       ellipse(1225,525,4,4);
       ellipse(1225,575,4,4);
       ellipse(1225,625,4,4);
       ellipse(1225,675,4,4);
//Line 14
       ellipse(1325,25,4,4);
       ellipse(1325,75,4,4);
       ellipse(1325,125,4,4);
       ellipse(1325,175,4,4);
       ellipse(1325,225,4,4);
       ellipse(1325,275,4,4);
       ellipse(1325,325,4,4);
       ellipse(1325,375,4,4);
       ellipse(1325,425,4,4);
       ellipse(1325,475,4,4);
       ellipse(1325,525,4,4);
       ellipse(1325,575,4,4);
       ellipse(1325,625,4,4);
       ellipse(1325,675,4,4); 
      pop();

//Blue Stars
       if (mouseIsPressed){
        fill('#6610f2');
       } else {
        fill('#fee600');
       }
       print(mouseIsPressed);

//Line 1
      push();
       ellipse(50,50,4,4);
       ellipse(50,100,4,4);
       ellipse(50,150,4,4);
       ellipse(50,200,4,4);
       ellipse(50,250,4,4);
       ellipse(50,300,4,4);
       ellipse(50,350,4,4);
       ellipse(50,400,4,4);
       ellipse(50,450,4,4);
       ellipse(50,500,4,4);
       ellipse(50,550,4,4);
       ellipse(50,600,4,4);
       ellipse(50,650,4,4);
       ellipse(50,700,4,4);
//Line 2
       ellipse(150,50,4,4);
       ellipse(150,100,4,4);
       ellipse(150,150,4,4);
       ellipse(150,200,4,4);
       ellipse(150,250,4,4);
       ellipse(150,300,4,4);
       ellipse(150,350,4,4);
       ellipse(150,400,4,4);
       ellipse(150,450,4,4);
       ellipse(150,500,4,4);
       ellipse(150,550,4,4);
       ellipse(150,600,4,4);
       ellipse(150,650,4,4);
       ellipse(150,700,4,4);
//Line 3
       ellipse(250,50,4,4);
       ellipse(250,100,4,4);
       ellipse(250,150,4,4);
       ellipse(250,200,4,4);
       ellipse(250,250,4,4);
       ellipse(250,300,4,4);
       ellipse(250,350,4,4);
       ellipse(250,400,4,4);
       ellipse(250,450,4,4);
       ellipse(250,500,4,4);
       ellipse(250,550,4,4);
       ellipse(250,600,4,4);
       ellipse(250,650,4,4);
       ellipse(250,700,4,4);
//Line 4
       ellipse(350,50,4,4);
       ellipse(350,100,4,4);
       ellipse(350,150,4,4);
       ellipse(350,200,4,4);
       ellipse(350,250,4,4);
       ellipse(350,300,4,4);
       ellipse(350,350,4,4);
       ellipse(350,400,4,4);
       ellipse(350,450,4,4);
       ellipse(350,500,4,4);
       ellipse(350,550,4,4);
       ellipse(350,600,4,4);
       ellipse(350,650,4,4);
       ellipse(350,700,4,4);
//Line 5
       ellipse(450,50,4,4);
       ellipse(450,100,4,4);
       ellipse(450,150,4,4);
       ellipse(450,200,4,4);
       ellipse(450,250,4,4);
       ellipse(450,300,4,4);
       ellipse(450,350,4,4);
       ellipse(450,400,4,4);
       ellipse(450,450,4,4);
       ellipse(450,500,4,4);
       ellipse(450,550,4,4);
       ellipse(450,600,4,4);
       ellipse(450,650,4,4);
       ellipse(450,700,4,4);
//Line 6
       ellipse(550,50,4,4);
       ellipse(550,100,4,4);
       ellipse(550,150,4,4);
       ellipse(550,200,4,4);
       ellipse(550,250,4,4);
       ellipse(550,300,4,4);
       ellipse(550,350,4,4);
       ellipse(550,400,4,4);
       ellipse(550,450,4,4);
       ellipse(550,500,4,4);
       ellipse(550,550,4,4);
       ellipse(550,600,4,4);
       ellipse(550,650,4,4);
       ellipse(550,700,4,4);
//Line 7
       ellipse(650,50,4,4);
       ellipse(650,100,4,4);
       ellipse(650,150,4,4);
       ellipse(650,200,4,4);
       ellipse(650,250,4,4);
       ellipse(650,300,4,4);
       ellipse(650,350,4,4);
       ellipse(650,400,4,4);
       ellipse(650,450,4,4);
       ellipse(650,500,4,4);
       ellipse(650,550,4,4);
       ellipse(650,600,4,4);
       ellipse(650,650,4,4);
       ellipse(650,700,4,4);
//Line 8
       ellipse(750,50,4,4);
       ellipse(750,100,4,4);
       ellipse(750,150,4,4);
       ellipse(750,200,4,4);
       ellipse(750,250,4,4);
       ellipse(750,300,4,4);
       ellipse(750,350,4,4);
       ellipse(750,400,4,4);
       ellipse(750,450,4,4);
       ellipse(750,500,4,4);
       ellipse(750,550,4,4);
       ellipse(750,600,4,4);
       ellipse(750,650,4,4);
       ellipse(750,700,4,4);
//Line 9
       ellipse(850,50,4,4);
       ellipse(850,100,4,4);
       ellipse(850,150,4,4);
       ellipse(850,200,4,4);
       ellipse(850,250,4,4);
       ellipse(850,300,4,4);
       ellipse(850,350,4,4);
       ellipse(850,400,4,4);
       ellipse(850,450,4,4);
       ellipse(850,500,4,4);
       ellipse(850,550,4,4);
       ellipse(850,600,4,4);
       ellipse(850,650,4,4);
       ellipse(850,700,4,4);
//Line 10
       ellipse(950,50,4,4);
       ellipse(950,100,4,4);
       ellipse(950,150,4,4);
       ellipse(950,200,4,4);
       ellipse(950,250,4,4);
       ellipse(950,300,4,4);
       ellipse(950,350,4,4);
       ellipse(950,400,4,4);
       ellipse(950,450,4,4);
       ellipse(950,500,4,4);
       ellipse(950,550,4,4);
       ellipse(950,600,4,4);
       ellipse(950,650,4,4);
       ellipse(950,700,4,4);
//Line 11
       ellipse(1050,50,4,4);
       ellipse(1050,100,4,4);
       ellipse(1050,150,4,4);
       ellipse(1050,200,4,4);
       ellipse(1050,250,4,4);
       ellipse(1050,300,4,4);
       ellipse(1050,350,4,4);
       ellipse(1050,400,4,4);
       ellipse(1050,450,4,4);
       ellipse(1050,500,4,4);
       ellipse(1050,550,4,4);
       ellipse(1050,600,4,4);
       ellipse(1050,650,4,4);
       ellipse(1050,700,4,4);
//Line 12
       ellipse(1150,50,4,4);
       ellipse(1150,100,4,4);
       ellipse(1150,150,4,4);
       ellipse(1150,200,4,4);
       ellipse(1150,250,4,4);
       ellipse(1150,300,4,4);
       ellipse(1150,350,4,4);
       ellipse(1150,400,4,4);
       ellipse(1150,450,4,4);
       ellipse(1150,500,4,4);
       ellipse(1150,550,4,4);
       ellipse(1150,600,4,4);
       ellipse(1150,650,4,4);
       ellipse(1150,700,4,4);
//Line 13
       ellipse(1250,50,4,4);
       ellipse(1250,100,4,4);
       ellipse(1250,150,4,4);
       ellipse(1250,200,4,4);
       ellipse(1250,250,4,4);
       ellipse(1250,300,4,4);
       ellipse(1250,350,4,4);
       ellipse(1250,400,4,4);
       ellipse(1250,450,4,4);
       ellipse(1250,500,4,4);
       ellipse(1250,550,4,4);
       ellipse(1250,600,4,4);
       ellipse(1250,650,4,4);
       ellipse(1250,700,4,4);
      pop();

//Red Stars
       if (mouseIsPressed){
        fill('#f71735');
       } else {
        fill('#fee600');
       }
       print(mouseIsPressed);
//Line 1
      push();
       ellipse(75,25,4,4);
       ellipse(75,75,4,4);
       ellipse(75,125,4,4);
       ellipse(75,175,4,4);
       ellipse(75,225,4,4);
       ellipse(75,275,4,4);
       ellipse(75,325,4,4);
       ellipse(75,375,4,4);
       ellipse(75,425,4,4);
       ellipse(75,475,4,4);
       ellipse(75,525,4,4);
       ellipse(75,575,4,4);
       ellipse(75,625,4,4);
       ellipse(75,675,4,4);
//Line 2
       ellipse(175,25,4,4);
       ellipse(175,75,4,4);
       ellipse(175,125,4,4);
       ellipse(175,175,4,4);
       ellipse(175,225,4,4);
       ellipse(175,275,4,4);
       ellipse(175,325,4,4);
       ellipse(175,375,4,4);
       ellipse(175,425,4,4);
       ellipse(175,475,4,4);
       ellipse(175,525,4,4);
       ellipse(175,575,4,4);
       ellipse(175,625,4,4);
       ellipse(175,675,4,4);
//Line 3
       ellipse(275,25,4,4);
       ellipse(275,75,4,4);
       ellipse(275,125,4,4);
       ellipse(275,175,4,4);
       ellipse(275,225,4,4);
       ellipse(275,275,4,4);
       ellipse(275,325,4,4);
       ellipse(275,375,4,4);
       ellipse(275,425,4,4);
       ellipse(275,475,4,4);
       ellipse(275,525,4,4);
       ellipse(275,575,4,4);
       ellipse(275,625,4,4);
       ellipse(275,675,4,4);
//Line 4
       ellipse(375,25,4,4);
       ellipse(375,75,4,4);
       ellipse(375,125,4,4);
       ellipse(375,175,4,4);
       ellipse(375,225,4,4);
       ellipse(375,275,4,4);
       ellipse(375,325,4,4);
       ellipse(375,375,4,4);
       ellipse(375,425,4,4);
       ellipse(375,475,4,4);
       ellipse(375,525,4,4);
       ellipse(375,575,4,4);
       ellipse(375,625,4,4);
       ellipse(375,675,4,4);
//Line 5
       ellipse(475,25,4,4);
       ellipse(475,75,4,4);
       ellipse(475,125,4,4);
       ellipse(475,175,4,4);
       ellipse(475,225,4,4);
       ellipse(475,275,4,4);
       ellipse(475,325,4,4);
       ellipse(475,375,4,4);
       ellipse(475,425,4,4);
       ellipse(475,475,4,4);
       ellipse(475,525,4,4);
       ellipse(475,575,4,4);
       ellipse(475,625,4,4);
       ellipse(475,675,4,4);
//Line 6
       ellipse(575,25,4,4);
       ellipse(575,75,4,4);
       ellipse(575,125,4,4);
       ellipse(575,175,4,4);
       ellipse(575,225,4,4);
       ellipse(575,275,4,4);
       ellipse(575,325,4,4);
       ellipse(575,375,4,4);
       ellipse(575,425,4,4);
       ellipse(575,475,4,4);
       ellipse(575,525,4,4);
       ellipse(575,575,4,4);
       ellipse(575,625,4,4);
       ellipse(575,675,4,4);
//Line 7
       ellipse(675,25,4,4);
       ellipse(675,75,4,4);
       ellipse(675,125,4,4);
       ellipse(675,175,4,4);
       ellipse(675,225,4,4);
       ellipse(675,275,4,4);
       ellipse(675,325,4,4);
       ellipse(675,375,4,4);
       ellipse(675,425,4,4);
       ellipse(675,475,4,4);
       ellipse(675,525,4,4);
       ellipse(675,575,4,4);
       ellipse(675,625,4,4);
       ellipse(675,675,4,4);
//Line 8
       ellipse(775,25,4,4);
       ellipse(775,75,4,4);
       ellipse(775,125,4,4);
       ellipse(775,175,4,4);
       ellipse(775,225,4,4);
       ellipse(775,275,4,4);
       ellipse(775,325,4,4);
       ellipse(775,375,4,4);
       ellipse(775,425,4,4);
       ellipse(775,475,4,4);
       ellipse(775,525,4,4);
       ellipse(775,575,4,4);
       ellipse(775,625,4,4);
       ellipse(775,675,4,4);
//Line 9
       ellipse(875,25,4,4);
       ellipse(875,75,4,4);
       ellipse(875,125,4,4);
       ellipse(875,175,4,4);
       ellipse(875,225,4,4);
       ellipse(875,275,4,4);
       ellipse(875,325,4,4);
       ellipse(875,375,4,4);
       ellipse(875,425,4,4);
       ellipse(875,475,4,4);
       ellipse(875,525,4,4);
       ellipse(875,575,4,4);
       ellipse(875,625,4,4);
       ellipse(875,675,4,4);
//Line 10
       ellipse(975,25,4,4);
       ellipse(975,75,4,4);
       ellipse(975,125,4,4);
       ellipse(975,175,4,4);
       ellipse(975,225,4,4);
       ellipse(975,275,4,4);
       ellipse(975,325,4,4);
       ellipse(975,375,4,4);
       ellipse(975,425,4,4);
       ellipse(975,475,4,4);
       ellipse(975,525,4,4);
       ellipse(975,575,4,4);
       ellipse(975,625,4,4);
       ellipse(975,675,4,4);
//Line 11
       ellipse(1075,25,4,4);
       ellipse(1075,75,4,4);
       ellipse(1075,125,4,4);
       ellipse(1075,175,4,4);
       ellipse(1075,225,4,4);
       ellipse(1075,275,4,4);
       ellipse(1075,325,4,4);
       ellipse(1075,375,4,4);
       ellipse(1075,425,4,4);
       ellipse(1075,475,4,4);
       ellipse(1075,525,4,4);
       ellipse(1075,575,4,4);
       ellipse(1075,625,4,4);
       ellipse(1075,675,4,4);
//Line 12
       ellipse(1175,25,4,4);
       ellipse(1175,75,4,4);
       ellipse(1175,125,4,4);
       ellipse(1175,175,4,4);
       ellipse(1175,225,4,4);
       ellipse(1175,275,4,4);
       ellipse(1175,325,4,4);
       ellipse(1175,375,4,4);
       ellipse(1175,425,4,4);
       ellipse(1175,475,4,4);
       ellipse(1175,525,4,4);
       ellipse(1175,575,4,4);
       ellipse(1175,625,4,4);
       ellipse(1175,675,4,4);
//Line 13
       ellipse(1275,25,4,4);
       ellipse(1275,75,4,4);
       ellipse(1275,125,4,4);
       ellipse(1275,175,4,4);
       ellipse(1275,225,4,4);
       ellipse(1275,275,4,4);
       ellipse(1275,325,4,4);
       ellipse(1275,375,4,4);
       ellipse(1275,425,4,4);
       ellipse(1275,475,4,4);
       ellipse(1275,525,4,4);
       ellipse(1275,575,4,4);
       ellipse(1275,625,4,4);
       ellipse(1275,675,4,4);
      pop();

//Gold Star 
       if (mouseIsPressed){
        fill('#0abeff');
       } else {
        fill('#fee600');
       }
       print(mouseIsPressed);
//Line 1
      push();
       ellipse(100,50,4,4);
       ellipse(100,100,4,4);
       ellipse(100,150,4,4);
       ellipse(100,200,4,4);
       ellipse(100,250,4,4);
       ellipse(100,300,4,4);
       ellipse(100,350,4,4);
       ellipse(100,400,4,4);
       ellipse(100,450,4,4);
       ellipse(100,500,4,4);
       ellipse(100,550,4,4);
       ellipse(100,600,4,4);
       ellipse(100,650,4,4);
       ellipse(100,700,4,4);
//Line 2
       ellipse(200,50,4,4);
       ellipse(200,100,4,4);
       ellipse(200,150,4,4);
       ellipse(200,200,4,4);
       ellipse(200,250,4,4);
       ellipse(200,300,4,4);
       ellipse(200,350,4,4);
       ellipse(200,400,4,4);
       ellipse(200,450,4,4);
       ellipse(200,500,4,4);
       ellipse(200,550,4,4);
       ellipse(200,600,4,4);
       ellipse(200,650,4,4);
       ellipse(200,700,4,4);
//Line 3
       ellipse(300,50,4,4);
       ellipse(300,100,4,4);
       ellipse(300,150,4,4);
       ellipse(300,200,4,4);
       ellipse(300,250,4,4);
       ellipse(300,300,4,4);
       ellipse(300,350,4,4);
       ellipse(300,400,4,4);
       ellipse(300,450,4,4);
       ellipse(300,500,4,4);
       ellipse(300,550,4,4);
       ellipse(300,600,4,4);
       ellipse(300,650,4,4);
       ellipse(300,700,4,4);
//Line 4
       ellipse(400,50,4,4);
       ellipse(400,100,4,4);
       ellipse(400,150,4,4);
       ellipse(400,200,4,4);
       ellipse(400,250,4,4);
       ellipse(400,300,4,4);
       ellipse(400,350,4,4);
       ellipse(400,400,4,4);
       ellipse(400,450,4,4);
       ellipse(400,500,4,4);
       ellipse(400,550,4,4);
       ellipse(400,600,4,4);
       ellipse(400,650,4,4);
       ellipse(400,700,4,4);
//Line 5
       ellipse(500,50,4,4);
       ellipse(500,100,4,4);
       ellipse(500,150,4,4);
       ellipse(500,200,4,4);
       ellipse(500,250,4,4);
       ellipse(500,300,4,4);
       ellipse(500,350,4,4);
       ellipse(500,400,4,4);
       ellipse(500,450,4,4);
       ellipse(500,500,4,4);
       ellipse(500,550,4,4);
       ellipse(500,600,4,4);
       ellipse(500,650,4,4);
       ellipse(500,700,4,4);
//Line 6
       ellipse(600,50,4,4);
       ellipse(600,100,4,4);
       ellipse(600,150,4,4);
       ellipse(600,200,4,4);
       ellipse(600,250,4,4);
       ellipse(600,300,4,4);
       ellipse(600,350,4,4);
       ellipse(600,400,4,4);
       ellipse(600,450,4,4);
       ellipse(600,500,4,4);
       ellipse(600,550,4,4);
       ellipse(600,600,4,4);
       ellipse(600,650,4,4);
       ellipse(600,700,4,4);
//Line 7
       ellipse(700,50,4,4);
       ellipse(700,100,4,4);
       ellipse(700,150,4,4);
       ellipse(700,200,4,4);
       ellipse(700,250,4,4);
       ellipse(700,300,4,4);
       ellipse(700,350,4,4);
       ellipse(700,400,4,4);
       ellipse(700,450,4,4);
       ellipse(700,500,4,4);
       ellipse(700,550,4,4);
       ellipse(700,600,4,4);
       ellipse(700,650,4,4);
       ellipse(700,700,4,4);
//Line 8
       ellipse(800,50,4,4);
       ellipse(800,100,4,4);
       ellipse(800,150,4,4);
       ellipse(800,200,4,4);
       ellipse(800,250,4,4);
       ellipse(800,300,4,4);
       ellipse(800,350,4,4);
       ellipse(800,400,4,4);
       ellipse(800,450,4,4);
       ellipse(800,500,4,4);
       ellipse(800,550,4,4);
       ellipse(800,600,4,4);
       ellipse(800,650,4,4);
       ellipse(800,700,4,4);
//Line 9
       ellipse(900,50,4,4);
       ellipse(900,100,4,4);
       ellipse(900,150,4,4);
       ellipse(900,200,4,4);
       ellipse(900,250,4,4);
       ellipse(900,300,4,4);
       ellipse(900,350,4,4);
       ellipse(900,400,4,4);
       ellipse(900,450,4,4);
       ellipse(900,500,4,4);
       ellipse(900,550,4,4);
       ellipse(900,600,4,4);
       ellipse(900,650,4,4);
       ellipse(900,700,4,4);
//Line 10
       ellipse(1000,50,4,4);
       ellipse(1000,100,4,4);
       ellipse(1000,150,4,4);
       ellipse(1000,200,4,4);
       ellipse(1000,250,4,4);
       ellipse(1000,300,4,4);
       ellipse(1000,350,4,4);
       ellipse(1000,400,4,4);
       ellipse(1000,450,4,4);
       ellipse(1000,500,4,4);
       ellipse(1000,550,4,4);
       ellipse(1000,600,4,4);
       ellipse(1000,650,4,4);
       ellipse(1000,700,4,4);
//Line 11
       ellipse(1100,50,4,4);
       ellipse(1100,100,4,4);
       ellipse(1100,150,4,4);
       ellipse(1100,200,4,4);
       ellipse(1100,250,4,4);
       ellipse(1100,300,4,4);
       ellipse(1100,350,4,4);
       ellipse(1100,400,4,4);
       ellipse(1100,450,4,4);
       ellipse(1100,500,4,4);
       ellipse(1100,550,4,4);
       ellipse(1100,600,4,4);
       ellipse(1100,650,4,4);
       ellipse(1100,700,4,4);
//Line 12
       ellipse(1200,50,4,4);
       ellipse(1200,100,4,4);
       ellipse(1200,150,4,4);
       ellipse(1200,200,4,4);
       ellipse(1200,250,4,4);
       ellipse(1200,300,4,4);
       ellipse(1200,350,4,4);
       ellipse(1200,400,4,4);
       ellipse(1200,450,4,4);
       ellipse(1200,500,4,4);
       ellipse(1200,550,4,4);
       ellipse(1200,600,4,4);
       ellipse(1200,650,4,4);
       ellipse(1200,700,4,4);
//Line 13
       ellipse(1300,50,4,4);
       ellipse(1300,100,4,4);
       ellipse(1300,150,4,4);
       ellipse(1300,200,4,4);
       ellipse(1300,250,4,4);
       ellipse(1300,300,4,4);
       ellipse(1300,350,4,4);
       ellipse(1300,400,4,4);
       ellipse(1300,450,4,4);
       ellipse(1300,500,4,4);
       ellipse(1300,550,4,4);
       ellipse(1300,600,4,4);
       ellipse(1300,650,4,4);
       ellipse(1300,700,4,4);



// Text and its Features
// Blast Off With Me
     push();
      fill("#FCF300");
      stroke('#000000');
      strokeWeight(1);
      textSize(40);
      textFont("Courier New");
      textStyle(ITALIC);
      textAlign(CENTER);
      text("BLAST OFF WITH ME",x,100);
      x = x - 1;
      if (x < 0) {
         x = width; }
     pop();

//Ray Marcus Persaud
     push();
      fill("#FCF300");
      stroke('#000000');
      strokeWeight(1);
      textSize(20);
      textFont("Courier New");
      textStyle(ITALIC);
      textAlign(CENTER);
      text("Ray Marcus Persaud",x,130);
      x = x - 3;
      if (x < 0) {
         x = width; }
     pop();


//Rocket and its Features

//Movement of Rocket 
let step = frameCount % 40;
applyMatrix(1,0,0,1, 40 + step,0);

//Body of Rocket
      push();
       fill('#444554');
       stroke('#F8FFE5');
       strokeWeight(3);
       rect(500,386,230,108);
      pop();
   
//Head of Rocket
      push();
       fill('#37004a');
       stroke('#F8FFE5');
       strokeWeight(3);
       triangle(730,520,730,360,850,440);
      pop();

//Upper Wing
      push();
       fill('#37004a');
       stroke('#F8FFE5');
       strokeWeight(3);
       triangle(600,386,680,386,600,300);
      pop();

//Lower Wing
      push();
       fill('#37004a');
       stroke('#F8FFE5');
       strokeWeight(3);
       triangle(600,494,680,494,600,580);
      pop();

//Thruster
      push();
       fill('#21002c');
       stroke('#F8FFE5');
       strokeWeight(3);
       rect(450,360,50,160);
      pop();

//Window One
      push();
       fill('#000111');
       stroke('#efc3f5');
       strokeWeight(5);
       rect(650,415,50,50,20);
      pop();  

//Window Two
      push();
       fill('#000111');
       stroke('#efc3f5');
       strokeWeight(5);
       rect(580,415,50,50,20);
      pop();  

//Flames
      push();
       fill('#BF0603');
       stroke('#fb5607');
       strokeWeight(6);
       triangle(300,300,400,300,440,400);
      pop();

      push();
       fill('#BF0603');
       stroke('#fb5607');
       strokeWeight(6);
       triangle(300,600,400,600,440,500);
      pop();

      push();
       fill('#BF0603');
       stroke('#fb5607');
       strokeWeight(6);
       triangle(200,350,440,450,200,550);
      pop();      
}


