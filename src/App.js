import React, {useEffect} from 'react';
import './App.css';
import {subject, Socket} from "./Socket.service"

function App() {
  useEffect(() => {
    Socket();
  }, []);
   

  useEffect(() => {
    subject.subscribe({
      next: (res) =>  console.log(res)
    });
  })
   
  const interrupt = () => {
    subject.next("pause");
  }

  return (
    <div className="App">
      <header className="App-header">
        React socketIO-RxJS boilerplate
          <p>
          Check Console!
      </p>
      </header>
      <div>
        This is a boilerplate which shows how the response from 
        socketIO connection gets updated on react application
        using RxJS. 
      </div>

      <button onClick={interrupt}>
          Click
      </button>
    </div>
  );
}

export default App;
