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

var randomArray = [];

function randomNumber(){
  console.log('randomArray length ' + randomArray.length);
  // https://stackoverflow.com/questions/2380019/generate-unique-random-numbers-between-1-and-100
  var checkRandomArray = [];
  checkRandomArray = randomArray;
  randomArray = [];
  while(randomArray.length < 3){
    var r = Math.floor(Math.random() * 18) + 1;
    if(randomArray.indexOf(r) === -1 && checkRandomArray.indexOf(r) === -1){
      randomArray.push(r);
    }
  }
}

function showRandomImage(){
  randomNumber();
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

function renderImage(){
  var newImage1 = document.getElementById('image1');
  var newImage2 = document.getElementById('image2');
  var newImage3 = document.getElementById('image3');
  randomNumber();

  newImage1.src = allImages[randomArray[0]].filepath;
  console.log('image ' + image1.src);
  newImage1.alt = allImages[randomArray[0]].name;
  console.log('image name ' + image1.alt);
  newImage1.title = allImages[randomArray[0]].name;
  console.log('image title ' + image1.title);

  newImage2.src = allImages[randomArray[1]].filepath;
  newImage2.alt = allImages[randomArray[1]].name;
  newImage2.title = allImages[randomArray[1]].name;

  newImage3.src = allImages[randomArray[2]].filepath;
  newImage3.alt = allImages[randomArray[2]].name;
  newImage3.title = allImages[randomArray[2]].name;
}

function handleImageClick(event) {
  console.log('here is even.target ' + event.target);
  renderImage();
}

showRandomImage();

image1.addEventListener('click', handleImageClick);
image2.addEventListener('click', handleImageClick);
image3.addEventListener('click', handleImageClick);
