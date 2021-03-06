const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);
const PORT = 8080;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

let chat = [];
let users = [];

io.on('connection', channel => {
    
    emitir();
    sendUsers();

    channel.on('incomingMessage', message => {
        users.indexOf(message.nombre) === -1 ? null : channel.emit("changeName");
        chat.push(message);
        users.push(message.nombre);
        emitir();
        sendUsers();
    });
});

const emitir = () => io.sockets.emit('chat', chat);
const sendUsers = () => io.sockets.emit('usersList', users);

server.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});