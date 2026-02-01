import { useState } from "react";

export default function App() {
  const [messages, setMessages] = useState([]);
  const [textA, setTextA] = useState("");
  const [textB, setTextB] = useState("");

  const sendMessage = (sender, text, clearInput) => {
    if (!text.trim()) return;
    setMessages([...messages, { sender, text }]);
    clearInput("");
  };

  return (
    <div className="container">
      <h2>Two Way Chat App</h2>

      {/* Chat Window */}
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender === "A" ? "left" : "right"}`}
          >
            <b>User {msg.sender}:</b> {msg.text}
          </div>
        ))}
      </div>

      {/* User A */}
      <div className="input-box">
        <input
          value={textA}
          onChange={(e) => setTextA(e.target.value)}
          placeholder="User A message"
        />
        <button onClick={() => sendMessage("A", textA, setTextA)}>Send</button>
      </div>

      {/* User B */}
      <div className="input-box">
        <input
          value={textB}
          onChange={(e) => setTextB(e.target.value)}
          placeholder="User B message"
        />
        <button onClick={() => sendMessage("B", textB, setTextB)}>Send</button>
      </div>
    </div>
  );
}

