import './App.css';
import Chatarea from './component/Chatarea';
import io from 'socket.io-client'
import { messageContext } from './contexts/context';
import { useEffect, useState } from 'react';

const socket = io.connect("http://localhost:3001")

function App() {

  const [message, setmessage] = useState([]);
  const pass = {
    message,
    setmessage
  }

useEffect(() => {
socket.emit("join_room","name")
}, [])

  return (
    <>
    <messageContext.Provider value={pass}>
    <Chatarea socket = {socket}/>
    </messageContext.Provider>
    </>
  );
}

export default App;
