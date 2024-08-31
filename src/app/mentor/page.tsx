"use client";
import { useState } from "react";

interface Mentor {
  name: string;
  expertise: string;
  bio: string;
}

const mentor: Mentor = {
  name: "Sateesh G.",
  expertise: "Software Engineering, Career Guidance",
  bio: "Sateesh has 10+ years of experience in software development and mentoring students in career paths related to technology.",
};

const initialChats = [
  {
    sender: "mentor",
    message: "Hello! How can I assist you with your career path today?",
  },
  {
    sender: "student",
    message:
      "I'm interested in software engineering but unsure where to start.",
  },
  {
    sender: "mentor",
    message: "That's great! Do you have any prior experience in programming?",
  },
  {
    sender: "student",
    message: "Yes, I've done some projects in JavaScript and Python.",
  },
];

const MentorChat = () => {
  const [chatVisible, setChatVisible] = useState(false);
  const [messages, setMessages] = useState(initialChats);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { sender: "student", message: newMessage }]);
      setNewMessage("");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-4 mb-4">
        <h2 className="text-xl font-semibold mb-2">Mentor</h2>
        <p className="font-medium">Name: {mentor.name}</p>
        <p className="font-medium">Expertise: {mentor.expertise}</p>
        <p className="text-gray-600 mt-2">{mentor.bio}</p>
        <button
          onClick={() => setChatVisible(!chatVisible)}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          {chatVisible ? "Close Chat" : "Chat with Mentor"}
        </button>
      </div>

      {chatVisible && (
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">Chat</h3>
          <div className="space-y-2 mb-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded ${
                  msg.sender === "mentor"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-gray-100"
                }`}
              >
                <strong>{msg.sender === "mentor" ? "Mentor" : "You"}:</strong>{" "}
                {msg.message}
              </div>
            ))}
          </div>
          <div className="flex space-x-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="border border-gray-300 rounded flex-grow px-2 py-1"
              placeholder="Type your message..."
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        </div>
      )}

      <div className="bg-white shadow-md rounded-lg p-4 mt-4">
        <h3 className="text-lg font-semibold mb-2">Discussion</h3>
        <p className="text-gray-600">
          This is a discussion bar where users can interact with the mentor and
          other students.
        </p>
      </div>
    </div>
  );
};

export default MentorChat;
