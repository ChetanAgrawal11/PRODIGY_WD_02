let hours = 0;
var min = 0;
var sec = 0;
var mili = 0;
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");
var timer = false;
start.addEventListener("click", function () {
  timer = true;
  time();
});

stop.addEventListener("click", function () {
  timer = false;
});
reset.addEventListener("click", function () {
  timer = false;
  hours = 0;
  minute = 0;
  second = 0;
  count = 0;
  document.getElementById("hour").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("mili").innerHTML = "00";
});
const time = () => {
  if (timer) {
    mili++;
    if (mili > 100) {
      sec++;
      mili = 0;
    }
    if (sec > 60) {
      min++;
      sec = 0;
    }
    if (min > 60) {
      hours++;
      min = 0;
      sec = 0;
    }
    if (hours > 24) {
      hours = 0;
    }

    document.getElementById("hour").innerHTML = hours;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("mili").innerHTML = mili;
    setTimeout(time, 10);
  }
};
