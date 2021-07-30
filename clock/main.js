const elSecondPin = document.querySelector(".second-pin");
const elMinutePin = document.querySelector(".minute-pin");
const elHourPin = document.querySelector(".hour-pin");

function setDate() {
  const dateNow = new Date();
  const seconds = dateNow.getSeconds();
  const minutes = dateNow.getMinutes();
  const hours = dateNow.getHours();
  console.log(seconds);

  // transform second to degrees
  const secondsDeg = (seconds / 60) * 360 + 90;
  elSecondPin.style.transform = `rotate(${secondsDeg}deg)`;

  const minutesDeg = (minutes / 60) * 360 + 90;
  elMinutePin.style.transform = `rotate(${minutesDeg}deg)`;

  const hoursDeg = (hours / 12) * 360 + 90;
  elHourPin.style.transform = `rotate(${hoursDeg}deg)`;
}

setInterval(setDate, 1000);
