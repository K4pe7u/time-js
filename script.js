let hours = 0;
let minutes = 0;
let seconds = 0;
let timer;

function startTimer() {
  timer = setInterval(function () {
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
    document.getElementById("hours").innerText = pad(hours);
    document.getElementById("minutes").innerText = pad(minutes);
    document.getElementById("seconds").innerText = pad(seconds);
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
  hours = 0;
  minutes = 0;
  seconds = 0;
  document.getElementById("hours").innerText = pad(hours);
  document.getElementById("minutes").innerText = pad(minutes);
  document.getElementById("seconds").innerText = pad(seconds);
}

function pad(number) {
  return (number < 10 ? "0" : "") + number;
}
