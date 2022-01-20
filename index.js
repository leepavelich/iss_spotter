const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log('Error' , error.message);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ip);
// });

fetchCoordsByIP('104.205.246.244', (error, coord) => {
  if (error) {
    console.log('Error', error.message);
    return;
  }
  console.log(coord);
});

// fetchISSFlyOverTimes({ latitude: '49.27670', longitude: '-123.13000' }, (error, data) => {
//   if (error) {
//     console.log('Error', error.message);
//     return;
//   }
//   console.log(data[0]);
// });