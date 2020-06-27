const net = require('net');
const client = new net.Socket();
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;
const faker = require('faker');
const storeName = 'caps-shop';
//===============(connect to server)===============\\
client.connect(PORT, HOST, () => {
setInterval(() => {
let newpayload = {
    store: storeName,
    orderID: faker.random.number(),
    customer: faker.name.firstName(),
    address: faker.address.city()
}
const event = JSON.stringify({ event: 'pickup', payload: newpayload });
client.write(event);
},5000)
//===============(listening on server)===============\\
client.on('data', (data) => {
    const message = JSON.parse(data);
    if (message.event === 'delivered') {
        console.log(`VENDOR: Thank you for delivering ${message.payload.orderID}`);
    }
});
});


client.on('error', (err) => console.log('Client Error ', err.message));