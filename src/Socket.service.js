import openSocket from "socket.io-client";
import { Subject } from "rxjs";

const socket = openSocket("http://localhost:8000", {
        transports: ['websocket']
      })
    
export const subject = new Subject();
export const Socket = () => {
        socket.emit("activateSocket", 1000);
        socket.on("timer", (res) => {
                //    console.log((res))
           subject.next(res);
})



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

