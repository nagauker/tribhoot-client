import {useEffect} from 'react'
import { w3cwebsocket as W3CWebSocket } from 'websocket'

const client = new W3CWebSocket('ws://127.0.0.1:8000')

const App = () => {

  const clicker = (value) => {
    client.send(JSON.stringify({
      message:"message",
      value:value
    }))
  }

  useEffect(() => {
    client.onopen = () => {
      console.log("websocket connected");
    }
    client.onmessage = (message) => {
      const dataFromServer = JSON.parse(message.data);
      console.log(dataFromServer);
    }
  })

  return (
    <div className="App">
      <button onClick={() => clicker("Nagauker")}>
        AAA
      </button>
    </div>
  );
}

export default App;
