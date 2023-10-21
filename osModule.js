const os = require('os');

//info about current user
const user = os.userInfo();

//method returns the  system uptime in seconds
console.log(`The system Uptime is ${Math.floor(os.uptime() / 3600)} hours`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};

console.log(currentOS);
