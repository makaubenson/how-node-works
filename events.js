const EventEmitter = require('events');
const http = require('http');

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}
const myEmmiter = new Sales();

myEmmiter.on('newSale', () => {
  console.log('There was a new sale');
});

myEmmiter.on('newSale', () => {
  console.log('Customer Name: Benson Makau');
});

myEmmiter.on('newSale', (stock) => {
  console.log(`There are now ${stock} items left in stock`);
});

myEmmiter.emit('newSale', 9);

//////////////////////////
const server = http.createServer();

server.on('request', (req, res) => {
  console.log('Request Received1');
  console.log(req.url);
  res.end('Request Received');
});

server.on('request', (req, res) => {
  console.log('Request2 Received!!!!!');
});

server.on('close', () => {
  console.log('Server Closed!!!');
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Waiting for requests');
});
