// const faker = require('faker');
const date = new Date();
const currentDate = date.toLocaleDateString();
// const driver = require('./driver.js');
const EE = require('events');
// const events = new EE();


function pickupHandler(payload) {
  console.log(`
      event:'Pick Up',
      time: '${currentDate}'
      payload:{
          store:'${payload.store}',
          orderID:'${payload.orderID}', 
          customer:'${payload.customer}',
          address:'${payload.address}'}`);
}

function deliveredHandler(payload) {
  console.log(`
      event:'delivered',
      time: '${currentDate}'
      payload:{
          store:'${payload.store}',
          orderID:'${payload.orderID}', 
          customer:'${payload.customer}',
          address:'${payload.address}'}`);
}
module.exports={
  pickupHandler :pickupHandler,
  deliveredHandler :deliveredHandler,
};
