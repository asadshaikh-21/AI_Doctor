import { useEffect, useRef } from "react";
import Message from "./Message";

export default function ChatWindow({ messages, loading, onSuggestion }) {
  const bottomRef = useRef(null);

  // Auto-send a silent trigger so Dr. Aria opens the conversation
  useEffect(() => {
    if (messages.length === 0 && !loading) {
      onSuggestion("__init__");
    }
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Filter out the silent init message from display
  const visible = messages.filter((m) => m.content !== "__init__");

  return (
    <div className="chat-area">
      {visible.length === 0 && loading && (
        <div className="message ai">
          <div className="avatar ai">✚</div>
          <div className="bubble-wrap">
            <div className="role-label">Dr. Aria</div>
            <div className="bubble typing-bubble">
              <div className="dot" /><div className="dot" /><div className="dot" />
            </div>
          </div>
        </div>
      )}

      {visible.map((m, i) => (
        <Message key={i} role={m.role} content={m.content} />
      ))}

      {loading && visible.length > 0 && (
        <div className="message ai">
          <div className="avatar ai">✚</div>
          <div className="bubble-wrap">
            <div className="role-label">Dr. Aria</div>
            <div className="bubble typing-bubble">
              <div className="dot" /><div className="dot" /><div className="dot" />
            </div>
          </div>
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  );
}