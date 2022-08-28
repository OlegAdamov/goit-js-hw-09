import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css"
const flatpickr = require("flatpickr");


const startTime = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const timerWindow = document.querySelector('.timer');
const timerDays = timerWindow.querySelector('span[data-days]');
const timerHours = timerWindow.querySelector('span[data-hours]');
const timerMinutes = timerWindow.querySelector('span[data-minutes]');
const timerSeconds = timerWindow.querySelector('span[data-seconds]');

// const window.alert("Please choose a date in the future.")

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function pad(value) {
  return String(value).padStart(2, '0');
};

isActive = false;

const timer = {
  start() {
    if (this.isActive) {
      window.alert("Sorry, timer is active.")
       return;
    }
      this.isActive = true;

    const startTime = Date.now();

    setInterval(() => {
      const currentTime = Date.now();
      const countDown = currentTime - startTime;
      const { days, hours, minutes, seconds } = convertMs(countDown);

      console.log(`${days}:${hours}:${minutes}:${seconds}`);

      
        timerDays.textContent = `${days}`;
        timerHours.textContent = `${hours}`;
        timerMinutes.textContent = `${minutes}`;
        timerSeconds.textContent = `${seconds}`;
      

    }, 1000);
  },
};


startBtn.addEventListener('click', () => {
  timer.start();
})



