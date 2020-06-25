import openSocket from 'socket.io-client';
const socket = openSocket('http://104.248.26.222:4000');



function getEmittedOrder() {
    socket.on('orderReceived', function(){

        console.log('a new order has been submitted');
    });


} 
export { getEmittedOrder }