import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formPromises = document.addEventListener('.form');
formPromises.addEventListener('submit', onSubmitForm);


function createPromise(position, delay) {

  
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
    
  }
}


// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });


//     return Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms.`);
//     return Notify.failure(`❌ Rejected promise ${position} in ${delay}ms.`);

       
