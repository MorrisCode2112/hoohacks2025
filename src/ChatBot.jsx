import { useState } from "react";
import { GoogleGenAI } from "@google/genai";
import "./ChatBot.css";

// Initialize the Gemini API
const ai = new GoogleGenAI({ apiKey: "AIzaSyBMX7EXzIlc3i0KdX8B1z7Jn9x3AllQq_4"});

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
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: input
      });
      
      const botMessage = { 
        text: response.text, 
        sender: "bot" 
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      setMessages((prev) => [...prev, { 
        text: `Error: ${error.message || "Unable to get response"}`, 
        sender: "bot" 
      }]);
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
