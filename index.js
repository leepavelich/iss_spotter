const { fetchMyIP, fetchCoordsByIP } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!\n" , error);
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