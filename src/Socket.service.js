import openSocket from "socket.io-client";
import { Subject } from "rxjs";

const socket = openSocket("http://localhost:8000");

export default class Socket {
    static subject = new Subject();
    static socketConnect = function () {
        socket.on("timer", (res) => {
            Socket.subject.next(res);
        });
        socket.emit("activateSocket", 1000);
    };
}

//----SERVER ON LOCALHOST:8000----------
// const io = require('socket.io')();
// io.on('connection', (client) => {
//   client.on('activateSocket', (interval) => {
//     console.log('socket is activated with interval', interval);
//     setInterval(() => {
//       client.emit('timer', new Date());
//       //api hit
//     }, interval);
//   });
// });
// const port = 8000;
// io.listen(port);
// console.log('listening on port ', port);

//create a separate folder for server-side socketIO and run socket in background