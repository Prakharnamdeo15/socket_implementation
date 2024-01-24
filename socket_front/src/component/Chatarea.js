import React, { useState } from 'react'
import './components.css'
import Input from './Input'
import Message from './Message'
import { useContext } from 'react';
import { messageContext } from '../contexts/context';


function Chatarea(props) {

const passed = useContext(messageContext);

const setmessage = passed.setmessage;
const message = passed.message;
const socket = props.socket;

// const [messageList, setMessageList] = useState([]);

socket.on("recieved_message",(data)=>{
  setmessage([...message,data]);
})

// if(message){
//   const target = document.getElementById("show_chats")
//   // const append = <Message/>}


  return (
  <>
    <div className='chatarea_container'>
      <div className="show_chats" id='show_chats'>
        {message.map((message)=>{
          return <h4>{message}</h4>
        })}
      </div>
    </div>
    <Input socket = {socket}/>
  </>
  )

}

export default Chatarea