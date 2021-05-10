let secondsHand = document.querySelector('.seconds-hand');
let minuteHand = document.querySelector('.minute-hand');

const setDate = () => {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = Math.round(((seconds / 60) * 360) + 90);

  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = Math.round(((minutes / 60) * 360) + 90);

  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
}

setInterval(setDate, 1000);