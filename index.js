const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require("./iss");

// fetchMyIP((error, ip) => {
//     if (error) {
//       console.log("It didn't work!" , error);
//       return;
//     }

//     console.log('It worked! Returned IP:' , ip);
//   });

// fetchCoordsByIP("138.199.57.35", (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log("It worked! Returned coordinates:", coordinates);
// });

// fetchISSFlyOverTimes({ latitude: 43.6644, longitude: -79.4195 }, (err, info) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log("It worked!",info);

// });

const printPassTimes = function(passTimes) {
    for (const pass of passTimes) {
      const datetime = new Date(0);
      datetime.setUTCSeconds(pass.risetime);
      const duration = pass.duration;
      console.log(`Next pass at ${datetime} for ${duration} seconds!`);
    }
  };

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});