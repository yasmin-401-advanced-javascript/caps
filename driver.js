"use strict";
const date = new Date();
const currentDate = date.toLocaleDateString();


  function transit(payload) {
    console.log(`
      event:'in-transit',
      time: '${currentDate}'
      payload:{
          store:'${payload.store}',
          orderID:'${payload.orderID}', 
          customer:'${payload.customer}',
          address:'${payload.address}'}`);
  }


module.exports = {
    transit: transit
}