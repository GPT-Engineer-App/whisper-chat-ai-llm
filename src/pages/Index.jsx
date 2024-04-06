import React, { useState } from "react";
import { FaPaperPlane, FaUserCircle, FaEllipsisV } from "react-icons/fa";

const Index = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I help you?", sender: "ai" },
    { id: 2, text: "I'd like to know more about the TOR network.", sender: "user" },
    // ... more messages
  ]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (newMessage.trim() === "") return;

    // In a real app, here you would send the message to the server
    const newMsg = { id: messages.length + 1, text: newMessage, sender: "user" };
    setMessages([...messages, newMsg]);
    setNewMessage("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white shadow rounded-lg w-full max-w-md">
        <div className="p-4 border-b flex justify-between items-center">
          <FaUserCircle className="text-2xl" />
          <span className="text-lg font-semibold">Chat with AI</span>
          <FaEllipsisV />
        </div>
        <div className="p-4 h-96 overflow-y-auto">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === "ai" ? "justify-start" : "justify-end"}`}>
              <div className={`rounded-lg px-4 py-2 my-2 ${message.sender === "ai" ? "bg-gray-200" : "bg-blue-500 text-white"}`}>{message.text}</div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t flex">
          <input type="text" className="flex-1 p-2 rounded-lg border-2 border-gray-300 mr-2" placeholder="Type a message..." value={newMessage} onChange={(e) => setNewMessage(e.target.value)} onKeyPress={(e) => e.key === "Enter" && sendMessage()} />
          <button className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition-colors" onClick={sendMessage}>
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
