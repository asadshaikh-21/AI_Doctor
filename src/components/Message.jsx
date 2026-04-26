export default function Message({ role, content }) {
  const isUser = role === "user";

  return (
    <div className={`message ${isUser ? "user" : "ai"}`}>
      <div className={`avatar ${isUser ? "user" : "ai"}`}>
        {isUser ? "U" : "AI"}
      </div>
      <div className="bubble">{content}</div>
    </div>
  );
}