'use strict';

var allImages =[];
var totalClicks = 0;
var labelArray = [];
var dataArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
forFirstData();
var image1 = document.getElementById('image1');
var image2 = document.getElementById('image2');
var image3 = document.getElementById('image3');

function RandomImage(name) {
  this.filepath = `image/${name}`;
  this.name = name;
  this.rendered = 0;
  this.clicked = 0;
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

//generate random unique array
function randomNumber(){
  //console.log('randomArray length ' + randomArray.length);
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

//first function on pageload
function showRandomImage(){
  randomNumber();
  image1.src = allImages[randomArray[0]].filepath;
  image1.alt = allImages[randomArray[0]].name;
  image1.title = allImages[randomArray[0]].name;
  allImages[randomArray[0]].rendered++;
  //console.log('image rendered count ' + allImages[0].rendered);

  image2.src = allImages[randomArray[1]].filepath;
  image2.alt = allImages[randomArray[1]].name;
  image2.title = allImages[randomArray[1]].name;
  allImages[randomArray[1]].rendered++;

  image3.src = allImages[randomArray[2]].filepath;
  image3.alt = allImages[randomArray[2]].name;
  image3.title = allImages[randomArray[2]].name;
  allImages[randomArray[2]].rendered++;
}

//new image after each click
function renderImage(){
  var newImage1 = document.getElementById('image1');
  var newImage2 = document.getElementById('image2');
  var newImage3 = document.getElementById('image3');
  randomNumber();

  newImage1.src = allImages[randomArray[0]].filepath;
  newImage1.alt = allImages[randomArray[0]].name;
  newImage1.title = allImages[randomArray[0]].name;
  allImages[randomArray[0]].rendered++;

  newImage2.src = allImages[randomArray[1]].filepath;
  newImage2.alt = allImages[randomArray[1]].name;
  newImage2.title = allImages[randomArray[1]].name;
  allImages[randomArray[1]].rendered++;

  newImage3.src = allImages[randomArray[2]].filepath;
  newImage3.alt = allImages[randomArray[2]].name;
  newImage3.title = allImages[randomArray[2]].name;
  allImages[randomArray[2]].rendered++;
}

//function to count total overall clicks, total clicks for each picture, display votes of each image and drawchart
function handleImageClick(event) {
  //console.log('here is even.target ' + event.target.alt);
  totalClicks++;
  for(var i =0; i<allImages.length; i++){
    if(event.target.alt === allImages[i].name){
      allImages[i].clicked++;
      dataArray[i]++;
    }
    localStorage.setItem('dataArray1', JSON.stringify(dataArray));
  }
  renderImage();
  //console.log('clicks countup ' + totalClicks);
  if(totalClicks===25){
    image1.removeEventListener('click', handleImageClick);
    image2.removeEventListener('click', handleImageClick);
    image3.removeEventListener('click', handleImageClick);
    // var votesInfo = document.getElementById('votes');
    // for(var j = 0; j <allImages.length; j++){
    //   //console.log(allImages[j].clicked + ' votes for the ' + allImages[j].name);
    //   var liEL = document.createElement('li');
    //   liEL.textContent = allImages[j].clicked + ' votes for the ' + allImages[j].name;
    //   votesInfo.appendChild(liEL);
    // }
    drawChart();
  }
}


showRandomImage();

image1.addEventListener('click', handleImageClick);
image2.addEventListener('click', handleImageClick);
image3.addEventListener('click', handleImageClick);

//Drawing Chart
function drawChart(){
  for(var i =0; i<allImages.length; i++){
    labelArray.push(allImages[i].name);
    //dataArray.push(allImages[i].clicked);
  }

  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labelArray,
      datasets: [{
        label: '# of Votes',
        data: dataArray,
        backgroundColor: [
          'red',
          'blue',
          'yellow',
          'black',
          'pink',
          'rgb(64, 255, 0)',
          'red',
          'blue',
          'yellow',
          'black',
          'pink',
          'rgb(64, 255, 0)',
          'red',
          'blue',
          'yellow',
          'black',
          'pink',
          'rgb(64, 255, 0)',
          'rgb(255, 191, 0)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            stepSize: 2,
            beginAtZero: true
          }
        }]
      }
    }
  });
}

function forFirstData(){
  if(!localStorage.getItem('dataArray1')) {
    localStorage.setItem('dataArray1', JSON.stringify(dataArray));
    console.log('runs this');
  }
  else {
    dataArray = JSON.parse(localStorage.getItem('dataArray1'));
  }
}
