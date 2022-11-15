const net = require('net');

const config = {
  host: 'localhost',
  port: 3246
};

const connection = net.createConnection(config);

connection.setEncoding('utf-8');

connection.on('data', (messageFromTheServer) => {
  console.log('Server says:', messageFromTheServer);
});

// connection.write('glad to be here');

process.stdin.setEncoding('utf-8');

process.stdin.on('data', (messageFromStdIn) => {
  // console.log('you typed:', messageFromStdIn.trim());
  connection.write(messageFromStdIn.trim());
});
