"use strict";
const EE = require("events");
// get instance from the EE
const events = new EE();
const vendor = require("./vendor.js");
const driver = require("./driver.js");
const faker = require("faker");


events.on("pickUp", vendor.pickupHandler);
events.on("in-transit", driver.transit);
events.on("vendorThank",vendor.deliveredHandler);

function newOrder() {
    setTimeout(() => {   
        let obj = {
            store: faker.company.companyName(),
            orderID: faker.random.uuid(),
            customer: faker.name.findName(),
            address: `${faker.address.state()},${faker.address.stateAbbr()}`,
          };
      events.emit("pickUp", obj);
    setTimeout(() => {
      console.log("DRIVER: picked up", `${obj.orderID}`);
      events.emit("in-transit", obj);
    }, 2000);
    setTimeout(() => {
      console.log("DRIVER: delivered up ", `${obj.orderID}`);
      console.log('VENDOR:Thank you for delivering ', `${obj.orderID}`)
      events.emit("vendorThank", obj);
    }, 3000);
    newOrder()
  }, 5000);
}
newOrder()