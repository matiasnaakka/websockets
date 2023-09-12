const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('a user connected', socket.id);

    socket.on('join', (username) => {
        users.push({ username: username, id: socket.id });
        console.log('users connected:', users);
        socket.emit('response', 'Joined with username ' + username);
    });

    socket.on('disconnect', () => {
        console.log('a user disconnected', socket.id);
        // TODO: remove user with socket.id form users array
    });

    socket.on('chat message', (msg) => {
        console.log('message: ', msg);
        io.emit('chat message', msg);
    });

});

server.listen(3002, () => {
    console.log('listening on *:3001');
});