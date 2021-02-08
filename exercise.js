//Callback approach - start
// getCustomer(1, (customer) => {
//   console.log('Customer: ', customer);
//   if (customer.isGold) {
//     getTopMovies((movies) => {
//       console.log('Top movies: ', movies);
//       sendEmail(customer.email, movies, () => {
//         console.log('Email sent...')
//       });
//     });
//   }
// });

// function getCustomer(id, callback) {
//   setTimeout(() => {
//     callback({ 
//       id: 1, 
//       name: 'Mosh Hamedani', 
//       isGold: true, 
//       email: 'email' 
//     });
//   }, 4000);  
// }

// function getTopMovies(callback) {
//   setTimeout(() => {
//     callback(['movie1', 'movie2']);
//   }, 4000);
// }

// function sendEmail(email, movies, callback) {
//   setTimeout(() => {
//     callback();
//   }, 4000);
// }
//Callback approach - ends

//Async await approach - starts
function getCustomer(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: 'Mosh Hamedani',
        isGold: true,
        email: 'email'
      });
    }, 4000);
  })
}

function getTopMovies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['movie1', 'movie2']);
    }, 4000);
  });
}

function sendEmail(email, movies) {
  return new Promise((resolve, reject) => {
    {
      setTimeout(() => {
        resolve('Email sent');
      }, 4000);
    }
  });
}

async function process() {
  try {
    const customer = await getCustomer(1);    
    if(customer)
    {
      console.log('Customer loaded...', customer);
      const topMovies = await getTopMovies();
      if(topMovies){
        console.log('Movies loaded...', topMovies);
        await sendEmail('a@b.com', 'movie 1');
        console.log('Email sent...');
      }
    }
  }
  catch (error) {
    console.log(error);
  }
}

process();
//Async await approach - ends