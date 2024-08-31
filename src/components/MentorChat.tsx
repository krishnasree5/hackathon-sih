import { useState } from "react";

interface Mentor {
  name: string;
  expertise: string;
  bio: string;
}

const mentor: Mentor = {
  name: "John Doe",
  expertise: "Software Engineering, Career Guidance",
  bio: "John has 10+ years of experience in software development and mentoring students in career paths related to technology.",
};

const MentorChat = () => {
  const [chatVisible, setChatVisible] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, newMessage]);
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
            {messages.length === 0 ? (
              <p className="text-gray-500">
                No messages.Start the conversation.
              </p>
            ) : (
              messages.map((msg, index) => (
                <div key={index} className="bg-gray-100 p-2 rounded">
                  {msg}
                </div>
              ))
            )}
          </div>
          <div className="flex space-x-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="border border-gray-300 rounded flex-grow px-2 py-1"
              placeholder="Type your message"
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
          This is a discussion bar where user can interact with other students.
        </p>
      </div>
    </div>
  );
};

export default MentorChat;
