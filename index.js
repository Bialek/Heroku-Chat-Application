const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const UsersService = require('./UsersService');
const PORT = process.env.PORT || 8080;
const userService = new UsersService();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    app.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    socket.on('join', function(name) {
        userService.addUser({
            id: socket.id,
            name
        });
        io.emit('update', {
            users: userService.getAllUsers()
        });
    });
    socket.on('disconnect', function() {
        userService.removeUser(socket.id);
        socket.broadcast.emit('update', {
            users: userService.getAllUsers()
        });
    });
    socket.on('message', function(message) {
        const {name} = userService.getUserById(socket.id);
        socket.broadcast.emit('message', {
            text: message.text,
            from: name,
            color: message.color
        });
    });
});

server.listen(PORT, function() {
    console.log('8080');
});