/*jshint esversion: 6 */
const path = require('path'),
  http = require('http'),
  publicPath = path.join(__dirname, '../public'),
  express = require('express'),
  socketIO = require('socket.io'),
  port = process.env.PORT || 3000;

let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('disconnect', () => {
    console.log('Client has disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
