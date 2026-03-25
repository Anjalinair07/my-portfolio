'use client';

import { useState } from 'react';

interface Message {
  text: string;
  isUser: boolean;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi! I'm Anjali's AI assistant. How can I help you learn more about her portfolio?", isUser: false }
  ]);
  const [input, setInput] = useState('');

  const responses: { [key: string]: string } = {
    'hello': 'Hello! Nice to meet you. What would you like to know about Anjali?',
    'hi': 'Hi there! How can I assist you today?',
    'projects': 'Anjali has worked on several exciting projects including web applications with React and AI-powered systems. Check out the Projects section for more details!',
    'skills': 'Anjali is skilled in React, Next.js, TypeScript, Python, AI/ML, and more. Visit the Skills section to see the full list.',
    'experience': 'Anjali has 2+ years in web development and is passionate about AI engineering. She holds a BSC HONS in Artificial Intelligence.',
    'contact': 'You can reach Anjali via email at anjalivnair02007@gmail.com or connect on LinkedIn.',
    'resume': 'You can download Anjali\'s resume from the Resume section.',
    'certificates': 'Anjali has several certificates in her field. Check the Certificates section for details.',
    'default': 'That\'s interesting! Feel free to ask about Anjali\'s projects, skills, experience, or how to contact her.'
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, isUser: true };
    setMessages(prev => [...prev, userMessage]);

    const lowerInput = input.toLowerCase();
    let response = responses.default;

    for (const key in responses) {
      if (lowerInput.includes(key)) {
        response = responses[key];
        break;
      }
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { text: response, isUser: false }]);
    }, 500);

    setInput('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-black dark:bg-white text-white dark:text-black p-4 rounded-full shadow-lg hover:shadow-xl transition z-50"
      >
        💬
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 h-96 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl z-50 flex flex-col">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-black dark:text-white">Portfolio Assistant</h3>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs px-3 py-2 rounded-lg ${
                  msg.isUser 
                    ? 'bg-black dark:bg-white text-white dark:text-black' 
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-black dark:text-white"
              />
              <button
                onClick={handleSend}
                className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:opacity-80 transition"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;