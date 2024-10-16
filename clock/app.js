const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();

  const second = now.getSeconds();
  const secondDegree = (second / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDegree}deg)`;

  const mins = now.getMinutes();
  const minusDegree = (mins / 60) * 360 + 90;
  minsHand.style.transform = `rotate(${minusDegree}deg)`;

  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
