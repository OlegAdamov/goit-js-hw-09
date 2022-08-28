import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css"
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const onFormPromises = document.querySelector('.form');

const onFormDelay = document.querySelector('[name="delay"]');
// console.log('onFormDelay', onFormDelay)
const onFormStep = document.querySelector('[name="step"]');
// console.log('onFormStep', onFormStep)
const onFormAmount = document.querySelector('[name="amount"]');
// console.log('onFormAmount', onFormAmount)

onFormPromises.addEventListener('submit', onFormSubmit);


function onFormSubmit(event) {
  event.preventDefault();

  let delay = Number(onFormDelay.value);
  // console.log('delay', delay)
  const step = Number(onFormStep.value);
  // console.log('step', step)
  const amount = Number(onFormAmount.value);
  // console.log('amount', amount)

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms.`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms.`);
      });
    delay += step;
  }
}


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    
   setTimeout(() => {  
    if (shouldResolve) {
   resolve({ position, delay })
  } else {
   reject({ position, delay })
    
    };
  }, delay)
  })
}
