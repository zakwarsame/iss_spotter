const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require("./iss");

fetchMyIP((error, ip) => {
    if (error) {
      console.log("It didn't work!" , error);
      return;
    }

    console.log('It worked! Returned IP:' , ip);
  });

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