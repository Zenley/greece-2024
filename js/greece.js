const daysElem = document.querySelector('[data-days]');
const hoursElem = document.querySelector('[data-hours]');
const minutesElem = document.querySelector('[data-minutes]');
const secondsElem = document.querySelector('[data-seconds]');

// Fixed date: September 5, 2024
const selectedDate = new Date('2024-09-05T00:00:00');

// Hide the input field as it's not needed
const inputElem = document.querySelector('#datetime-picker');
inputElem.style.display = 'none'; 


function updateTimer() {
  const now = new Date();
  const ms = selectedDate - now;

  if (ms <= 0) {
    clearInterval(intervalId);

    daysElem.textContent = '00';
    hoursElem.textContent = '00';
    minutesElem.textContent = '00';
    secondsElem.textContent = '00';
    return;
  }

  const time = convertMs(ms);
  daysElem.textContent = addLeadingZero(time.days);
  hoursElem.textContent = addLeadingZero(time.hours);
  minutesElem.textContent = addLeadingZero(time.minutes);
  secondsElem.textContent = addLeadingZero(time.seconds);
}

// Function to convert milliseconds to days, hours, minutes, and seconds
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// Function to add a leading zero to single-digit numbers
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

// Start the countdown immediately
updateTimer();
const intervalId = setInterval(updateTimer, 1000);