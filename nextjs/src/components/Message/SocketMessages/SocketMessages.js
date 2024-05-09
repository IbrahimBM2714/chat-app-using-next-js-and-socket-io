"use client";

import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { addMessage } from "@/lib/action";
import Styles from "./socketMessages.module.css"

const SocketMessages = ({ conversationId, user }) => {

  const [socket, setSocket] = useState(undefined);

  const [message, setMessage] = useState("");

  const [actionMessage, setActionMessage] = useState("");

  const [messages, setMessages] = useState([]);

  const [typing, setTyping] = useState("")

  // The main logic for connecting to the socket.io server
  useEffect(() => {
    try {


      const socket = io(process.env.NEXT_PUBLIC_SOCKET_SERVER); //Provide the socket server endpoint here

      setSocket(socket);

      socket.emit("joinRoom", conversationId);

      socket.on("message", (data) => {
        setMessages((prev) => [...prev, data]);
      });

      let activityTimeout;
      socket.on("activity", (data) => {

        try {
          setTyping(data);
          clearTimeout(activityTimeout);
          activityTimeout = setTimeout(() => {
            setTyping("")
          }, 1000);
        } catch (error) { }
      });
      return () => {
        clearTimeout(activityTimeout);
        socket.disconnect();
      };
    } catch (error) {
      console.log("error while connecting to the socket io server");
    }
  }, []);

  const handleSend = () => {
    try {
      setActionMessage(message);
      socket.emit("message", { room: conversationId, message: message, user: user.user.username });
      setMessage(() => "");
    } catch (error) {
      throw error
    }
  };

  const handleChange = (e) => {
    try {
      e.preventDefault();
      setMessage(e.target.value);
      socket.emit("activity", {
        room: conversationId,
        name: user.user.username,
      });
    } catch (error) {
      throw error
    }
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <div key={index} className={`${Styles.container} ${msg.user === user.user.username ? Styles.containerSender : Styles.containerReciever} `} >
            <div className={`${Styles.innerContainer} ${msg.user === user.user.username ? Styles.sender : Styles.reciever}`} >
              <h1>{msg.message}</h1>
              <h3 key={index}>By: {msg.user}</h3>
            </div>

          </div>
        ))}
        {typing.length !== 0 && typing !== user.user.username && <p>{typing} is typing...</p>}
      </div>
      <div className={Styles.form} >
        <form action={addMessage}>
          <input
            type="text"
            onChange={handleChange}
            value={message}
            placeholder="Enter message"
            name="input"
          />
          <input
            type="text"
            value={actionMessage}
            name="message"
            hidden
            readOnly
          />
          <input
            type="number"
            name="userId"
            value={user.user.id}
            hidden
            readOnly
          />
          <input
            type="number"
            name="conversationId"
            value={conversationId}
            hidden
            readOnly
          />
          <button onClick={handleSend}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default SocketMessages;
