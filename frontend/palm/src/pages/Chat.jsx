import React, { useEffect, useState } from "react";
import socket from "../components/hooks/socket";

const Chat = () => {

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

 
  const sendMessage = () => {

    if (!input.trim()) return;

    const messageData = {
      text: input,
      user: "You",
    };

  socket.emit("sendMessage", messageData);

    setInput("");
  };

 
useEffect(() => {

  socket.on("receiveMessage", (data) => {
    setMessages((prev) => [...prev, data]);
  });

  socket.on("user-joined", (data) => {
    setMessages((prev) => [...prev, data]);
  });

  return () => {
    socket.off("receiveMessage");
    socket.off("user-joined");
  };

}, []);

  return (
    <div className="h-screen flex flex-col bg-gray-100">

     
      <div className="p-4 bg-green-500 text-white text-center font-bold">
        Chat Room
      </div>

      
      <div className="flex-1 p-4 overflow-y-auto space-y-2">

        {messages.map((msg, index) => (
          <div
            key={index}
            className="bg-white p-2 rounded shadow w-fit"
          >
            <strong>{msg.user}:</strong> {msg.text}
          </div>
        ))}

      </div>

   
      <div className="p-4 flex gap-2 bg-white">

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type message..."
          className="flex-1 border p-2 rounded"
        />

        <button
          onClick={sendMessage}
          className="bg-green-500 text-white px-4 rounded"
        >
          Send
        </button>

      </div>

    </div>
  );
};

export default Chat;