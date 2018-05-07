if ('serviceWorker' in navigator) {

  navigator.serviceWorker.register('sw.js')
    .then(
      (event) => {
        console.log('Service Worker is Registered Succesfully ', event.scope);
      },
      (err) => {
        console.log('Service Worker Fails to install');
      }
    );
}


// Async Await
// function doSomething(a) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       // res(Math.sqrt(a));
//       rej(false);
//     }, 2000);
//   });
// }

// async function callSomething(a) {
//   try {
//     let response = await doSomething(a);
//     let response1 = await doSomething(a);
//     let response2 = await doSomething(a);
//     let response3 = await doSomething(a);
//     console.log(response);
//     // return response;
//   }
//   catch (err) {
//     console.log(err);
//   }
// }

// callSomething(24);

function doubleAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x * 2);
    }, 2000);
  });
}

function addPromise() {
  return new Promise(resolve => {
    doubleAfter2Seconds(10).then((a) => {
      doubleAfter2Seconds(20).then((b) => {
        doubleAfter2Seconds(30).then((c) => {
          resolve(a + b + c);
        })
      })
    })
  });
}
// addPromise()
//   .then((res) => {
//     console.log(res);
//   })


var response = Promise.all(
  [doubleAfter2Seconds(10),
  doubleAfter2Seconds(20),
  doubleAfter2Seconds(30)
  ]
)

response.then(res => {
  let counter = res.reduce((prev, next) => prev + next);
  console.log(counter);
}, (err) => {
  console.log(err);
})


async function sumPromises() {
  let res1 = await doubleAfter2Seconds(10);
  let res2 = await doubleAfter2Seconds(20);
  let res3 = await doubleAfter2Seconds(30);
  console.log(res1 + res2 + res3);
}




















