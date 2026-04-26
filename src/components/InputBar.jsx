import { useState, useRef } from "react";

export default function InputBar({ onSend, loading, error }) {
  const [input, setInput] = useState("");
  const textareaRef = useRef(null);

  const autoResize = (el) => {
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 140) + "px";
  };

  const handleSend = () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    if (textareaRef.current) textareaRef.current.style.height = "auto";
    onSend(text);
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="input-area">
      {error && <div className="error-msg">⚠ {error}</div>}
      <div className="input-row">
        <textarea
          ref={textareaRef}
          value={input}
          placeholder="Describe your symptoms…"
          rows={1}
          onChange={(e) => { setInput(e.target.value); autoResize(e.target); }}
          onKeyDown={handleKey}
        />
        <button
          className="send-btn"
          onClick={handleSend}
          disabled={!input.trim() || loading}
          title="Send"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"/>
            <polygon points="22 2 15 22 11 13 2 9 22 2"/>
          </svg>
        </button>
      </div>
      <div className="footer-hint">
        <p className="hint">↵ Send · ⇧↵ New line</p>
        <p className="powered">Powered by <span>Gemini</span></p>
      </div>
    </div>
  );
}