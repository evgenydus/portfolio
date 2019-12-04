const panel = document.querySelectorAll('.collapsible');

for (let i = 0; i < panel.length; i++) {
  panel[i].addEventListener('click', function open() {
    this.classList.toggle('active');
    const content = this.nextElementSibling;
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
}

const opener = document.querySelector('.opener');
opener.style.transform = 'rotate(45deg)';

for (let i = 0; i < panel.length; i++) {
  panel[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }

    if (opener.style.transform === 'rotate(45deg)') {
      opener.style.transform = 'rotateZ(225deg)';
    } else {
      opener.style.transform = 'rotate(45deg)';
    }
  });
}

const slides = document.querySelectorAll('.slider-wrapper .slide');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
  currentItem = (n + slides.length) % slides.length;
}

function hideItem(direction) {
  isEnabled = false;
  slides[currentItem].classList.add(direction);
  slides[currentItem].addEventListener('animationend', function() {
    this.classList.remove('active', direction);
  });
}

function showItem(direction) {
  slides[currentItem].classList.add('next', direction);
  slides[currentItem].addEventListener('animationend', function() {
    this.classList.remove('next', direction);
    this.classList.add('active');
    isEnabled = true;
  });
}

function nextItem(n) {
  hideItem('to-left');
  changeCurrentItem(n + 1);
  showItem('from-right');
}

function previousItem(n) {
  hideItem('to-right');
  changeCurrentItem(n - 1);
  showItem('from-left');
}

document.querySelector('.control.left').addEventListener('click', function() {
  if (isEnabled) {
    previousItem(currentItem);
  }
});

document.querySelector('.control.right').addEventListener('click', function() {
  if (isEnabled) {
    nextItem(currentItem);
  }
});

const swipeDetect = (el) => {

  let surface = el;
  let startX = 0;
  let startY = 0;
  let distX = 0;
  let distY = 0;
  let startTime = 0;
  let elapsedTime = 0;

  let threshold = 100;
  let restraint = 100;
  let allowedTime = 200;

  surface.addEventListener('mousedown', function(e){
    startX = e.pageX;
    startY = e.pageY;
    startTime = new Date().getTime();
  }, false);

  surface.addEventListener('mouseup', function(e){
    distX = e.pageX - startX;
    distY = e.pageY - startY;
    elapsedTime = new Date().getTime() - startTime;
    if (elapsedTime <= allowedTime){
      if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
        if ((distX > 0)) {
          if (isEnabled) {
            previousItem(currentItem);
          }
        } else {
          if (isEnabled) {
            nextItem(currentItem);
          }
        }
      }
    }
  }, false);

  surface.addEventListener('touchstart', function(e){
    if (e.target.classList.contains('arrow') || e.target.classList.contains('control')) {
      if (e.target.classList.contains('left')) {
        if (isEnabled) {
          previousItem(currentItem);
        }
      } else {
        if (isEnabled) {
          nextItem(currentItem);
        }
      }
    }
    let touchObj = e.changedTouches[0];
    startX = touchObj.pageX;
    startY = touchObj.pageY;
    startTime = new Date().getTime();
  }, false);

  surface.addEventListener('touchmove', function(e){
    e.preventDefault();
  }, false);

  surface.addEventListener('touchend', function(e){
    let touchObj = e.changedTouches[0];
    distX = touchObj.pageX - startX;
    distY = touchObj.pageY - startY;
    elapsedTime = new Date().getTime() - startTime;
    if (elapsedTime <= allowedTime){
      if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
        if ((distX > 0)) {
          if (isEnabled) {
            previousItem(currentItem);
          }
        } else {
          if (isEnabled) {
            nextItem(currentItem);
          }
        }
      }
    }
  }, false);
}

const el = document.querySelector('.slider-wrapper');
swipeDetect(el);


const description = document.querySelectorAll('.description-container');
const showDescriptionButton = document.querySelector('.show-description-button');

showDescriptionButton.addEventListener('touchstart', () => {
  const buttonText = Array.from(showDescriptionButton.children)
  
  buttonText.forEach(element => {
    element.classList.toggle('hidden')
  })

  description.forEach((item) => {
    item.classList.toggle('show');
  })
})