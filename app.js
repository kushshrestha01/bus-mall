'use strict';

var allImages =[];
var image1 = document.getElementById('image1');
var image2 = document.getElementById('image2');
var image3 = document.getElementById('image3');

function RandomImage(name) {
  this.filepath = `image/${name}`;
  this.name = name;
  this.rendered = 0;
  this.views = 0;
  allImages.push(this);
}

new RandomImage('bag.jpg');
new RandomImage('banana.jpg');
new RandomImage('bathroom.jpg');
new RandomImage('boots.jpg');
new RandomImage('breakfast.jpg');
new RandomImage('chair.jpg');
new RandomImage('cthulhu.jpg');
new RandomImage('dog-duck.jpg');
new RandomImage('dragon.jpg');
new RandomImage('pen.jpg');
new RandomImage('pet-sweep.jpg');
new RandomImage('scissors.jpg');
new RandomImage('shark.jpg');
new RandomImage('sweep.png');
new RandomImage('tauntaun.jpg');
new RandomImage('unicorn.jpg');
new RandomImage('usb.gif');
new RandomImage('water-can.jpg');
new RandomImage('wine-glass.jpg');

function showRandomImage(){
  var randomArray = [];
  console.log('randomArray length ' + randomArray.length);
  // https://stackoverflow.com/questions/2380019/generate-unique-random-numbers-between-1-and-100
  while(randomArray.length < 3){
    var r = Math.floor(Math.random() * 18) + 1;
    if(randomArray.indexOf(r) === -1) randomArray.push(r);
  }
  document.write(randomArray);

  console.log('random array ' + randomArray[0]);
  console.log('random array ' + randomArray[1]);
  console.log('random array ' + randomArray[2]);



  image1.src = allImages[randomArray[0]].filepath;
  console.log('image ' + image1.src);
  image1.alt = allImages[randomArray[0]].name;
  console.log('image name ' + image1.alt);
  image1.title = allImages[randomArray[0]].name;
  console.log('image title ' + image1.title);

  image2.src = allImages[randomArray[1]].filepath;
  image2.alt = allImages[randomArray[1]].name;
  image2.title = allImages[randomArray[1]].name;

  image3.src = allImages[randomArray[2]].filepath;
  image3.alt = allImages[randomArray[2]].name;
  image3.title = allImages[randomArray[2]].name;
}

function handleImageClick(event) {
  console.log('here is even.target ' + event.target);
  showRandomImage();
}

showRandomImage();

image1.addEventListener('click', handleImageClick);
image2.addEventListener('click', handleImageClick);
image3.addEventListener('click', handleImageClick);



// var previous;

// function showRandomImage(){
//   // var ramdom = Math.floor(Math.random() * allImages.length);
//   // console.log('currently showing before generating new ramdom', image1.alt);
//   // while (image1.alt === allImages[ramdom].name) {
//   //   ramdom = Math.floor(Math.random() * allImages.length);
//   //   console.log('duplicate found');
//   // }
//   // previous = ramdom; 
//   var randomArray = [];
//   //console.log('randomArray length ' + randomArray.length);
//   //https://stackoverflow.com/questions/2380019/generate-unique-random-numbers-between-1-and-100
//   while(randomArray.length < 1){
//     var r = Math.floor(Math.random() * 18) + 1;
//     if(randomArray.indexOf(r) === -1) randomArray.push(r);
//   }
//   document.write(randomArray);
//   console.log('random number ' + randomArray[0]);

//   allImages[randomArray[0]].views += 1;
//   image1.src = allImages[randomArray[0]].filepath;
//   image1.alt = allImages[randomArray[0]].name;
//   image1.title = allImages[randomArray[0]].name;
// }

// function handleImageClick(event) {
//   //console.log(event.target);
//   showRandomImage();
// }

// showRandomImage();

// image1.addEventListener('click', handleImageClick);


