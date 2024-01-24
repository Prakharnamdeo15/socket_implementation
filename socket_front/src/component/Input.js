import React from 'react'
import { useContext } from 'react';
import { messageContext } from '../contexts/context';

function Input(props) {

const passed = useContext(messageContext)

const setmessage = passed.setmessage;
const message = passed.message;

const send = async() => {
const toSend = document.getElementById("message_in");
setmessage([...message ,toSend.value])
const socket = props.socket
await socket.emit("send_message",toSend.value)
}

  return (
<>
    <div className='input_container'>
        <input type="text" name='message' placeholder='enter your essage here' id='message_in'/>
        <button className='send_button' onClick={send}>send</button>
    </div>
</>
  )
}

export default Input