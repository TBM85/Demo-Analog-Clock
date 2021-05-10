let secondsHand = document.querySelector('.seconds-hand');

const setDate = () => {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = Math.round(((seconds / 60) * 360) + 90);

  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
}

setInterval(setDate, 1000);