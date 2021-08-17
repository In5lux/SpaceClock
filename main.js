let clock = document.querySelector('#clock');
let ship = document.querySelector('#ship');

function currentTime() {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  hour = (hour < 10) ? "0" + hour : hour;
  min = (min < 10) ? "0" + min : min;
  sec = (sec < 10) ? "0" + sec : sec;
  clock.innerHTML = `${hour}:${min}:${sec}`;
  (sec == 59) ? clock.classList.add('scale') : 0;
  (sec == 0) ? clock.classList.remove('scale') : 0;
  (sec == 29) ? ship.classList.add('move-ship') : 0;
  (sec == 37) ? ship.classList.remove('move-ship') : 0;
  setTimeout(() => currentTime(), 100);
}

currentTime();
