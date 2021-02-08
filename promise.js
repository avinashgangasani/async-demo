const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve(1);
        reject(new Error('error occurred'));
    }, 2000);
});

p.then((result) => {
    console.log('Result:', result);
})
    .catch((error) => {
        console.log('Error:', error.message);
    });