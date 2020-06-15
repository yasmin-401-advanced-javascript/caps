'use strict';
const events = require('./event.js');


events.on('pickup', (payload) => logIt(payload));


function logIt(payload){
  setTimeout(() => {
    console.log(`DRIVER: picked up ${payload.orderID}`);
    events.emit('in-transit', payload);
    setTimeout(() => {
      console.log(`DRIVER: delivered up ${payload.orderID}`);
      events.emit('Vendordelivered', payload);
      events.emit('delivered', payload);
    }, 3000);
  }, 1000);
}


