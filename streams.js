const fs = require('fs');
const server = require('http').createServer();

// Listen to event and specify callback
server.on('request', (req, res) => {
  //Solution 1 : Node will have to load the entire file. It is inefficient especially when the file is big
  //   fs.readFile('test-file.txt', (err, data) => {
  //     if (err) console.log(err);
  //     res.end(data);
  //   });
  //Solution 2: Using Streams - Suffers back pressure
  //We read one piece of the file and as soon as that is available,
  // we sent it to the client with the write function. And when the next
  //piece is available the same procidure is followed up untill the entire file is read.
  // const readable = fs.createReadStream('test-file.txt');
  // readable.on('data', (chunk) => {
  //   //response is a writable stream
  //   res.write(chunk); //writing chunk on the response stream
  // });
  // readable.on('end', () => {
  //   res.end();
  // });
  // readable.on('error', (err) => {
  //   console.log(err);
  //   res.statusCode = 500;
  //   res.end('File Not Found!!');
  // });

  // Solution 3: Using Pipe operator
  const readable = fs.createReadStream('test-file.txt');
  readable.pipe(res);
  // readableSource.pipe(writableDestination)
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening...');
});
