console.log('Sample JavaScript #5 HW #17');


function addDiv() {
  let newDiv = document.createElement('div');

  newDiv.setAttribute('id', 'carousel');
  newDiv.setAttribute('class', 'carousel');
  document.querySelector('body').appendChild(newDiv);
}

function addSlides(amount) {
  let slides = document.createElement('ul');

  slides.setAttribute('class', 'slides');

  for (let i = 0; i < amount; i++) {
    let slidesItem = document.createElement('li');
    let slidesLink = document.createElement('a');

    slidesItem.setAttribute('class', i === 0 ? 'slides__item active' : 'slides__item');
    slidesLink.setAttribute('href', '#');

    slidesItem.appendChild(slidesLink);
    slides.appendChild(slidesItem);
  }

  document.querySelector('.carousel').appendChild(slides);
}

function addIndicators(amount) {
  let div = document.createElement('div');

  div.setAttribute('class', 'indicators');

  for (let i = 0; i < amount; i++) {
    let span = document.createElement('span');

    span.setAttribute('class', i === 0 ? 'indicators__item active' : 'indicators__item');
    span.setAttribute('data-slide-to', i);

    div.appendChild(span);
  }

  document.querySelector('.carousel').appendChild(div);
}

function addControls() {
  let div = document.createElement('div');

  div.setAttribute('class', 'controls');

  for (let i = 0; i < 3; i++) {
    let childDiv = document.createElement('div');
    let tegI = document.createElement('i');


    switch (i) {
      case 0:
        childDiv.setAttribute('class', 'controls__item controls__prev');
        tegI.setAttribute('class', 'fas fa-chevron-left');
        break;
      case 1:
        childDiv.setAttribute('class', 'controls__item controls__next');
        tegI.setAttribute('class', 'fas fa-chevron-right');
        break;
      case 2:
        childDiv.setAttribute('class', 'controls__item controls__pause');
        tegI.setAttribute('class', 'fas fa-play');
        break;
    }

    childDiv.appendChild(tegI);
    div.appendChild(childDiv);
  }

  document.querySelector('.carousel').appendChild(div);
}

function addStyle() {
  let style = document.createElement('style');

  let code = `
  .slides {
    position: relative;
    list-style: none;
    width: 500px;
    height: 500px;
    background-color: darkblue;
  }
  .controls {
    position: relative;
    display: flex;
    margin-left: 160px;
  }
  .controls__item {
    width: 50px;
    height: 50px;
    background-color: olive;
    margin: 5px;
  }
  .indicators {
    display: flex;
    margin-left: 130px;
  }
  .indicators__item {
    display: block;
    margin: 10px;
    background-color: gray;
    width: 30px;
    height: 5px;

  }`;

  style.innerHTML = code;
  document.querySelector('.carousel').appendChild(style);
}
let indStyle = null;

function indTarget(event) {
  let target = event.target;
  let item = document.querySelector('.indicators__item');

  if (target.classList.contains('indicators__item')) {
    target.style.backgroundColor = 'blue';

    if (indStyle !== null) {
      indStyle.removeAttribute('style');
    }
    indStyle = target;
  }

}


function listener() {
  document.querySelector('.indicators').addEventListener('click', indTarget);
}

function createCarousel(slidesCount = 5) {
  addSlides(slidesCount);
  addIndicators(slidesCount);
  addControls();
  addStyle();
  listener();
}

createCarousel(4);