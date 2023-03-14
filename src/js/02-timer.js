import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const myInput = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');
startButton.disabled = true;
const values = document.querySelectorAll('.value');
const daysDate = document.querySelector('[data-days]');
const hoursDate = document.querySelector('[data-hours]');
const minutesDate = document.querySelector('[data-minutes]');
const secondsDate = document.querySelector('[data-seconds]');

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const fp = flatpickr(myInput, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    let selectedDate = selectedDates[0].getTime();
    let actualDate = new Date().getTime();
    let counterStop = selectedDate - actualDate;

    if (selectedDate <= actualDate) {
      window.alert('Please choose a date in the future');
      startButton.disabled = true;
    } else {
      startButton.disabled = false;

      const btnStartClick = () => {
        const addLeadingZero = value => value.toString().padStart(2, '0');

        let timer = setInterval(() => {
          counterStop -= 1000;

          const second = 1000;
          const minute = second * 60;
          const hour = minute * 60;
          const day = hour * 24;

          const days = Math.floor(counterStop / day);
          const hours = Math.floor((counterStop % day) / hour);
          const minutes = Math.floor(((counterStop % day) % hour) / minute);
          const seconds = Math.floor(
            (((counterStop % day) % hour) % minute) / second
          );

          daysDate.textContent = addLeadingZero(days);
          hoursDate.textContent = addLeadingZero(hours);
          minutesDate.textContent = addLeadingZero(minutes);
          secondsDate.textContent = addLeadingZero(seconds);

          if (counterStop < 1000) {
            clearInterval(timer);
            secondsDate.textContent = 0;
          }
        }, 1000);
      };
      startButton.addEventListener('click', btnStartClick);
    }
  },
});

// let calendar = flatpickr(myInput, options);

// myInput.addEventListener("click", () => {

// });
