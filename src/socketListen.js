import openSocket from 'socket.io-client';
const socket = openSocket('http://127.0.0.1:4000');

function socketListen() {
    socket.emit('orderPlaced');


} 
export { socketListen }