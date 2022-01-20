const nextISSTimesForMyLocation = require('./iss_promised');
const logPasses = require('./index')

nextISSTimesForMyLocation()
  .then(passtimes => logPasses(passtimes))
  .catch(error => console.log('Error: ', error.message))