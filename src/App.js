import React, {useEffect} from 'react';
import Socket from "./Socket.service"
import './App.css';


function App() {

  useEffect(() => {
    Socket.socketConnect();
  }, []);

  Socket.subject.subscribe({
    next: (res) => console.log(res)
  });

  return (
    <div className="App">
      <header className="App-header">
        React socketIO connection using RxJS
          <p>
          Check Console
      </p>
      </header>
    
      <div>
        This is a sample project which shows how the response from 
        socketIO connection gets updated on react application
        using RxJS.
      
      </div>
    </div>
  );
}

export default App;
