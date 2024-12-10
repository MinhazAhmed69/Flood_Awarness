import React, { useState, useEffect, useRef } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! How can I assist you today?' }
  ]);
  const [input, setInput] = useState('');
  const [context, setContext] = useState(''); // Track the context of the conversation
  const messagesEndRef = useRef(null);

  // This handles sending the message
  const handleSend = () => {
    if (!input.trim()) return;

    // Add the user's message to the conversation
    setMessages([...messages, { sender: 'user', text: input }]);

    // Simulate bot response based on context
    setTimeout(() => {
      const botReply = generateBotResponse(input);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot', text: botReply }
      ]);

      // Update context based on user's question for future reference
      setContext(input.toLowerCase());
    }, 1000);

    setInput('');
  };

  // This function generates bot responses based on the user's input
  const generateBotResponse = (message) => {
    const lowerCaseMessage = message.toLowerCase();

    // Basic responses based on keywords
    if (lowerCaseMessage.includes('flood')) {
      return "Flood-related resources are available on the Flood Awareness Hub. Do you want information about safety tips, or alerts?";
    } else if (lowerCaseMessage.includes('weather')) {
      return "Current weather updates are available on the alerts page.";
    } else if (lowerCaseMessage.includes('safety')) {
      return "Safety guidelines include evacuation plans, emergency kits, and communication strategies. Which one would you like to know more about?";
    } else if (lowerCaseMessage.includes('help')) {
      return "I'm here to assist! You can ask about flood risks, weather updates, or community support.";
    } else if (lowerCaseMessage.includes('maps')) {
      return "Interactive flood risk maps are available on the Flood Risk Maps page. Would you like to view a map for your area?";
    } else if (lowerCaseMessage.includes('thank')) {
      return "You're welcome! Let me know if you need anything else.";
    } else if (lowerCaseMessage.includes('contact')) {
      return "You can reach our support team on the Contact Us page. They are available 24/7 to assist you.";
    } else if (lowerCaseMessage.includes('bye')) {
      return "Goodbye! Stay safe and let me know if you need further assistance.";
    }

    // Handling sub-questions
    if (context.includes('flood') && lowerCaseMessage.includes('safety')) {
      return "Flood safety tips include staying indoors, avoiding flooded areas, and having an emergency kit ready. Would you like more details on evacuation plans or emergency kits?";
    } else if (context.includes('safety') && lowerCaseMessage.includes('emergency kits')) {
      return "An emergency kit should include food, water, flashlights, batteries, a first aid kit, and important documents.";
    } else if (context.includes('safety') && lowerCaseMessage.includes('evacuation plans')) {
      return "Evacuation plans should include multiple routes, a designated meeting spot, and communication methods. Do you need a specific area plan?";
    } else {
      return "I'm sorry, I didn't understand that. Could you please rephrase or ask about floods, safety, weather, or community support?";
    }
  };

  // Auto-scroll to the latest message
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="fixed bottom-16 right-4 bg-white p-4 rounded-lg shadow-lg w-80 h-96">
      <div className="h-full flex flex-col">
        <div className="flex-1 overflow-y-auto">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 my-2 ${
                msg.sender === 'user'
                  ? 'bg-blue-500 text-white self-end'
                  : 'bg-gray-200 text-black'
              }`}
            >
              <p>
                {msg.sender === 'user' ? 'You: ' : 'Mira.AI: '} {msg.text}
              </p>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-2 border rounded-lg"
            placeholder="Type a message..."
          />
          <button
            onClick={handleSend}
            className="ml-2 p-2 bg-blue-500 text-white rounded-lg"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;