import {useEffect,useState} from 'react';
import ManagerPassword from './modules/ManagerPassword/ManagerPassword';
import {initiateSocketConnection, disconnectSocket} from './socketIOUtils'

const App = () => {

  const [messages, setMessages] = useState([]);
  // const [ws, setWs] = useState(new WebSocket(URL));
  const [managerPasswordModal, setManagerPasswordModal] = useState(false)

  useEffect(() => {
    const socket = initiateSocketConnection();
    socket.on('bla', () => {
      alert("workkk")
    })
    return () => {
      disconnectSocket();
    }
  }, [])

  return (
    <div className="App">
      <ManagerPassword open={managerPasswordModal} setOpen={setManagerPasswordModal}/>
      <button onClick={() => setManagerPasswordModal(true)}>bar</button>
    </div>
  );
}

export default App;
