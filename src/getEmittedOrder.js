import openSocket from 'socket.io-client';
const socket = openSocket('http://127.0.0.1:4000');



function getEmittedOrder() {
    socket.on('orderReceived', function(){

        console.log('a new order has been submitted');
    });


} 
export { getEmittedOrder }