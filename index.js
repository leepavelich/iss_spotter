const fetchMyIP = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!\n" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});