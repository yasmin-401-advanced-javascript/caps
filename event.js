"use strict";

//first party library(events)
// EE is like the constructor or the class
const EE = require("events");
// get instance from the EE
const events = new EE();
const faker = require("faker");
const caps = require("./caps.js");


module.exports= events;
