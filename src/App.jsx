import { useState } from "react";
import ChatWindow from "./components/ChatWindow";
import InputBar from "./components/InputBar";
import { sendMessage } from "./api/gemini";

export default function App() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSend = async (text) => {
    const isInit = text === "__init__";

    // For the init trigger, don't add a user message to state
    const newMessages = isInit
      ? [{ role: "user", content: "Hello" }]
      : [...messages, { role: "user", content: text }];

    if (!isInit) setMessages(newMessages);
    setLoading(true);
    setError(null);

    try {
      const reply = await sendMessage(newMessages);
      setMessages(isInit
        ? [{ role: "assistant", content: reply }]
        : [...newMessages, { role: "assistant", content: reply }]
      );
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <header className="header">
        <div className="logo-mark">
          <svg viewBox="0 0 42 42" fill="none">
            <rect x="1" y="1" width="40" height="40" rx="2"
              stroke="#c9a84c" strokeOpacity="0.4" strokeWidth="1"/>
            <rect x="5" y="5" width="32" height="32" rx="1"
              stroke="#c9a84c" strokeOpacity="0.2" strokeWidth="0.5"/>
          </svg>
          <div className="logo-inner">✚</div>
        </div>
        <div className="header-copy">
          <h1>Dr. Aria</h1>
          <p>AI Medical Consultation</p>
        </div>
        <div className="live-badge">
          <div className="live-dot" />
          Online
        </div>
      </header>

      <ChatWindow messages={messages} loading={loading} onSuggestion={handleSend} />
      <InputBar onSend={handleSend} loading={loading} error={error} />
    </div>
  );
}