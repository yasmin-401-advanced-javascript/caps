'use strict';
// const driver = require('./driver.js');
const events = require('./event.js');
const faker = require('faker');

let obj;

setInterval(() => {
  obj = {
    store: faker.company.companyName(),
    orderID: faker.random.uuid(),
    customer: faker.name.findName(),
    address: `${faker.address.state()},${faker.address.stateAbbr()}`,
  };
  events.emit('pickup', obj );
  // console.log(`where is the towice?`);
},5000);

// setTimeout(() => {/
events.on('delivered' , ()=>{
  console.log(`VENDOR: Thank you for delivering ${obj.orderID}`);
});
// },2000);