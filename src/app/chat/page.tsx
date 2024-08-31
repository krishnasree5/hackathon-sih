"use client";

import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      {messages.map((m) => (
        <div
          key={m.id}
          className={`whitespace-pre-wrap p-5 border-solid shadow-md my-2 ${
            m.role == "user" ? "bg-green-200" : "bg-red-100"
          }`}
        >
          <span className="font-semibold">
            {m.role === "user" ? "User: " : "AI: "}
          </span>
          {m.content}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border bg-blue-950 text-white rounded shadow-xl"
          value={input}
          placeholder="Ask me anything!"
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
