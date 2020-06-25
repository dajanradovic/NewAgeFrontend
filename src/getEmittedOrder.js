import openSocket from 'socket.io-client';
const socket = openSocket('http://newagebackend.xyz');



function getEmittedOrder() {
    socket.on('orderReceived', function(){

        console.log('a new order has been submitted');
    });


} 
export { getEmittedOrder }