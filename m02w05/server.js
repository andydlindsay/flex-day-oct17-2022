const net = require('net');
const port = 3246;

// const config = { allowHalfOpen: true, pauseOnConnect: true };

const server = net.createServer();

const connections = [];

// listen for incoming connections
server.on('connection', (connection) => {
  console.log('a new client has connected');

  // add the new connection to our connections array
  connections.push(connection);

  // send a welcome message to the client
  connection.write('welcome to the chat server!');

  // set the encoding on the connection
  connection.setEncoding('utf-8');

  // listen for incoming messages from the client
  connection.on('data', (messageFromClient) => {
    console.log('Client says:', messageFromClient);

    // echo whatever the client said to all active connections
    for (const conn of connections) {
      // make sure that conn is NOT the connection that sent the message
      if (conn !== connection) {
        conn.write(messageFromClient);
      }
    }
  }); 
});

// console.log(server);

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
}); // start the server up listening on the port specified
