import openSocket from 'socket.io-client';
const socket = openSocket('http://104.248.26.222:4000');

function socketListen() {
    socket.emit('orderPlaced');


} 
export { socketListen }