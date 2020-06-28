require('dotenv').config();
const net = require('net');
const uuidv4 = require('uuid').v4;
const PORT = process.env.PORT || 3000;
const server = net.createServer();
//===============(listening on port)===============\\
server.listen(PORT, () => console.log(`server is up on port ${PORT}`));
const socketPool = {}; 
server.on('connection', (socket) => {
  const id = `socket-${uuidv4()}`;
  socketPool[id] = socket;
  socket.on('data', (buffer) => dispatchEvent(buffer));
  socket.on('error', (e) => console.log(`Socket error ${e.message}`));
  socket.on('end', (e) => delete socketPool[id]);
});
//==============(dispatchEvent function)=============\\
function dispatchEvent(buffer) {
  const message = JSON.parse(buffer);
  const date = new Date();
  console.log(`Event: ${date}` , message);
  broadcast(message);
}
//===============(broadcast function)===============\\
function broadcast(message) {
  const payload = JSON.stringify(message);
  for (let socket in socketPool) {
    socketPool[socket].write(payload); 
  }
}
server.on('error', (e) => console.log('SERVER ERROR', e.message));