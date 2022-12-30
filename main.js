


var minutesInput = document.querySelector('#minutes');
var secondsInput = document.querySelector('#seconds');
var startButton = document.querySelector('#start');

function start() {
  minutesInput.setAttribute('disabled', '');
  secondsInput.setAttribute('disabled', '');
  startButton.setAttribute('disabled', '');

  var minutes = Number(minutesInput.value);
  var seconds = Number(secondsInput.value);

  var secondsLeft = minutes * 60 + seconds;

  var intervalRef = setInterval(function () {

    if (secondsLeft > 0) {
      secondsLeft -= 1;

      minutesInput.value = Math.floor(secondsLeft / 60);
      secondsInput.value = secondsLeft % 60;
    } else {
      clearInterval(intervalRef);
      minutesInput.removeAttribute('disabled');
      secondsInput.removeAttribute('disabled');
      startButton.removeAttribute('disabled');
    }

  }, 1000);
}

startButton.addEventListener('click', start);
