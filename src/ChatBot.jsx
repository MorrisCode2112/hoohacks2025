import { useState } from "react";
import axios from "axios";
import "./Chatbot.css";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post(
        "http://127.0.0.1:1234", // LM Studio API endpoint
        {
          model: "gemma-3-4b-it", // Model identifier from your screenshot
          messages: [{ role: "user", content: input }],
          max_tokens: 100,
          temperature: 0.7,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const botMessage = { text: response.data.choices[0].message.content, sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error calling LM Studio API:", error);
      setMessages((prev) => [...prev, { text: "Error: Unable to get response.", sender: "bot" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-container">
      <h1>AI Chatbot</h1>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
        {loading && <div className="message bot">...Loading...</div>}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default Chatbot;
