let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const buttons = document.querySelectorAll('[data-time]');
const audio = new Audio ('assets/alarmsong.mp3');



function timer(seconds) {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);


  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if(secondsLeft < 0) {
      audio.play()
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}


function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
});
document.querySelector('body').addEventListener('click', function() {
  audio.pause()
  window.body
});
document.querySelector('#washhands').addEventListener('click', function() {
  document.querySelector('.image').style.background = 'url(assets/hand-wash.png) center no-repeat';
  document.querySelector('.image').style.backgroundSize = '80%';
  window.body
});
document.querySelector('#brushteeth').addEventListener('click', function() {
  document.querySelector('.image').style.background = 'url(assets/toothbrush.png) center no-repeat';
  document.querySelector('.image').style.backgroundSize = '80%';
  window.body
});
document.querySelector('#cleanup').addEventListener('click', function() {
  document.querySelector('.image').style.background = 'url(assets/cleanup.png) left no-repeat';
  document.querySelector('.image').style.backgroundSize = '80%';
  window.body
});
document.querySelector('#screentime').addEventListener('click', function() {
  document.querySelector('.image').style.background = 'url(assets/screentime.png) center no-repeat';
  document.querySelector('.image').style.backgroundSize = '90%';
  window.body
});
document.querySelector('#timeout').addEventListener('click', function() {
  document.querySelector('.image').style.background = 'url(assets/timeout.png) left no-repeat';
  document.querySelector('.image').style.backgroundSize = '85%';
  window.body
});
document.querySelector('#customtime').addEventListener('click', function() {
  document.querySelector('.image').style.background = 'url(assets/clock.svg) center no-repeat';
  document.querySelector('.image').style.backgroundSize = '90%';
  window.body
});
