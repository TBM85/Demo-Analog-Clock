let secondsHand = document.querySelector(".seconds-hand");
let minuteHand = document.querySelector(".minute-hand");
let hourHand = document.querySelector(".hour-hand");

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let weekDay = document.querySelector(".weekday");

const setDate = () => {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = Math.round((seconds / 60) * 360 + 90);
  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = Math.round((minutes / 60) * 360 + 90);
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = Math.round((hours / 12) * 360 + 90);
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  const day = weekday[now.getDay()];
  weekDay.setAttribute('data-text', `${day}`);
};

setInterval(setDate, 1000);
