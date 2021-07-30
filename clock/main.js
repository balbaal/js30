const elSecondPin = document.querySelector(".second-pin");

function setDate() {
  const dateNow = new Date();
  const seconds = dateNow.getSeconds();
  console.log(seconds)

  // transform second to degrees
  const secondsDeg = ((seconds / 60) * 360) + 90;
  elSecondPin.style.transform = `rotate(${secondsDeg}deg)`;
}

setInterval(setDate, 1000);
