import openSocket from 'socket.io-client';
const socket = openSocket('http://newagebackend.xyz');

function socketListen() {
    socket.emit('orderPlaced');


} 
export { socketListen }