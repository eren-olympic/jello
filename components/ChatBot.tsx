// components/ChatBot.tsx
import React, { useState } from 'react';

// Mock GPT-3 function (replace with your actual GPT-3 API call)
const getChatCompletion = async (input: string) => {
  return new Promise<{ text: string }>((resolve) => {
    setTimeout(() => {
      resolve({ text: `Received: ${input}` });
    }, 1000);
  });
};

const ChatBot = () => {
    const callOpenAI = async (input: string) => {
        const response = await fetch('/api/openai/getChatCompletion', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            messages: [
            {
                role: 'system',
                content: 'You are a helpful assistant.',
            },
            {
                role: 'user',
                content: input,
            },
            ],
            model: 'gpt-3.5-turbo',
            temperature: 0.8,
            max_tokens: 512,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            n: 1,
        }),
        });
    
        const data = await response.json();
        return data;
    }; 

  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState<string[]>([]);

  const handleSendMessage = async () => {
    setMessages([...messages, `User: ${userInput}`]);
  
    try {
      const openAIData = await callOpenAI(userInput);
      const botMessage = `Bot: ${openAIData.data}`;
      setMessages([...messages, `User: ${userInput}`, botMessage]);
    } catch (e) {
      console.error(e);
    }
  
    setUserInput('');
  };
  

  return (
    <div className="chatbot">
      <div className="chatbot-messages p-4 border border-gray-300 rounded-md mb-4 h-60 overflow-y-scroll">
        {messages.map((message, index) => (
          <p key={index} className="mb-2">
            {message}
          </p>
        ))}
      </div>
      <div className="chatbot-input flex">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="flex-grow border border-gray-300 rounded-md p-2 mr-4"
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
