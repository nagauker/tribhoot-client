import { io } from 'socket.io-client';

let socket;

export const initiateSocketConnection = () => {
	socket = io('http://localhost:8000');
	console.log(`Connecting socket...`);
    socket.on('connect', () => {
        console.log('connected');
    })
    return socket;
}

export const disconnectSocket = () => {
    console.log('Disconnecting socket...');
    if(socket) socket.disconnect();
    // return initiateSocketConnection()
  }