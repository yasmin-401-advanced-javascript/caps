'use strict';
const events = require('./event.js');
// get instance from the EE

const date = new Date();
const currentDate = date.toLocaleDateString();

events.on('pickup', (payload) => logIt('pickup', payload));
events.on('in-transit', (payload) => logIt('in-transit', payload));



function logIt(event , payload){
  console.log(`
  EVENT { event: '${event}'
   time : ${currentDate}
   payload:
   `,
  payload);
}

require('./vendor.js');
events.on('delivered',(payload) => logIt('delivered', payload));
require('./driver.js');




