// Buttons section

$(document).ready(function() {
    
    
//Move to section js--section-game 
    
$('.js--scroll-to-game').click(function(){
$('html,body').animate({scrollTop: $('.js--section-game').offset().top},1500);
 });
    
    
//Move to section js--section-about

$('.js--scroll-to-about').click(function(){
$('html,body').animate({scrollTop: $('.js--section-about').offset().top},1500);
 });

    
});


// Card data
const cardsArray = 
  [{
          'name': 'klimt1',
          'img': './css/img/klimt1.jpg',
      },
      {
          'name': 'klimt2',
          'img': './css/img/klimt2.jpg',
      },
      {
          'name': 'klimt3',
          'img': './css/img/klimt3.jpg',
      },
 {
    'name': 'klimt4',
    'img': 'css/img/klimt4.jpg',
  },
  {
    'name': 'klimt5',
    'img': 'css/img/klimt5.jpg',
  },
  {
    'name': 'klimt6',
    'img': 'css/img/klimt6.jpg',
  },
  {
    'name': 'klimt7',
    'img': 'css/img/klimt7.jpg',
  },
  {
    'name': 'klimt8',
    'img': 'css/img/klimt8.jpg',
  },
  {
    'name': 'klimt9',
    'img': 'css/img/klimt9.jpg',
  },
  {
    'name': 'klimt10',
    'img': 'css/img/klimt10.jpg',
  },
  {
    'name': 'klimt11',
    'img': 'css/img/klimt11.jpg',
  },
  {
    'name': 'klimt12',
    'img': 'css/img/klimt12.jpg',
  },
];



let gameGrid = cardsArray.concat(cardsArray);
gameGrid.sort(() => 0.5 - Math.random());


let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let delay = 1200;


const game = document.getElementById('game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);



gameGrid.forEach(item => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = item.name;
  card.style.backgroundImage = `url(${item.img})`;
  grid.appendChild(card);
    
   // Create front of card
  const front = document.createElement('div');
  front.classList.add('front');

  // Create back of card, which contains 
  const back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = `url(${item.img})`;

  // Append card to grid, and front and back to each card
  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);     
});


// Add match CSS
const match = () => {
  var selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.add('match');
  });
}

// Reset 

const resetGuesses = () => {
  firstGuess = '';
  secondGuess = '';
  count = 0;

  var selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.remove('selected');
  });
};



grid.addEventListener('click', function (event) {
    const clicked = event.target;
    if (
        clicked.nodeName === "SECTION" || 
        clicked === previousTarget || clicked.parentNode.classList.contains("selected") ||
        clicked.parentNode.classList.contains("match")
    ){
        return;
    };
  if (count < 2) {
    count++;
   if (count === 1) {
  firstGuess = clicked.parentNode.dataset.name;
  console.log(firstGuess);
  clicked.parentNode.classList.add('selected');
} else {
  secondGuess = clicked.parentNode.dataset.name;
  console.log(secondGuess);
  clicked.parentNode.classList.add('selected');
}
     if (firstGuess !== '' && secondGuess !== '') {
      if (firstGuess === secondGuess) {
        setTimeout(match, delay);
        setTimeout(resetGuesses, delay);
      } else {
        setTimeout(resetGuesses, delay);
      }
    }  
    previousTarget = clicked;
  }
});



// SLIDER 

const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.6;

// Set first img opacity
imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener("click", imgClick));

function imgClick(e) {
  // Reset the opacity
  imgs.forEach(img => (img.style.opacity = 1));

  // Change current image to src of clicked image
  current.src = e.target.src;

  // Add fade in class
  current.classList.add("fade-in");

  // Remove fade-in class after .5 seconds
  setTimeout(() => current.classList.remove("fade-in"), 500);

  // Change the opacity to opacity var
  e.target.style.opacity = opacity;
}
