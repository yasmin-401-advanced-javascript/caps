const net = require('net');
const client = new net.Socket();
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;
//===============(connect to server)===============\\
client.connect(PORT, HOST, () => {
//==============(listening on server)===============\\
  client.on('data', (data) => {
    const even = JSON.parse(data);
    if (even.event === 'pickup') {
      setTimeout(()=>{
        console.log(`DRIVER: picked up ${even.payload.orderID}`);
        const event = JSON.stringify({ event: 'in-transit', payload: even.payload });
        client.write(event);
        setTimeout(()=>{
          console.log(`DRIVER: delivered up ${even.payload.orderID}`);
          const event = JSON.stringify({ event: 'delivered', payload: even.payload });
          client.write(event);
        },3000);
      },1000);
    }
  });
});

client.on('error', (err) => console.log('Client Error ', err.message));