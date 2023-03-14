import Notiflix from 'notiflix';

// const createBtn = document.querySelector('button');
const firstDelay = document.querySelector('input[name="delay"]');
const stepDelay = document.querySelector('input[name=step]');
const amountInput = document.querySelector('input[name=amount]');
const form = document.querySelector('.form');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  let delayValueFirst = Number(firstDelay.value);
  let stepValue = Number(stepDelay.value);
  let amountValue = Number(amountInput.value);
  for (let position = 1; position <= amountValue; position++) {
    createPromise(position, delayValueFirst)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
    delayValueFirst += stepValue;
  }
}

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   const promise = new Promise((resolve, reject) => {
//     setInterval(() => {
//       if (shouldResolve) {
//         resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
//       } else {
//         reject(`❌ Rejected promise ${position} in ${delay}ms`);
//       }
//     });
//   });
//   promise
//     .then(resolve => {
//       console.log(resolve);
//     })
//     .catch(reject => {
//       console.log(reject);
//     });
// }

