import '../../styles/chat-container.scss';
import Header from '../../components/Header/Header';
import TextBar from '../../components/textBar/TextBar';
import CardContainer from '../cardContainer/CardContainer';
import { useEffect, useState } from 'react';
import { openApi } from '../../api/api';

const ChatContainer = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [botReply, setBotReply] = useState<string[]>([]);

  const handleAddNewMessage = (newText: string) => {
    setMessages(prev => [...prev, newText]);
  };
  const lastMessage = messages.at(-1);

  useEffect(() => {
    if (!lastMessage) return;
  
    const getReply = async () => {
      const reply = await openApi(lastMessage);
      if (reply) setBotReply(prev => [...prev, reply]);
    }
    getReply();
  }, [lastMessage])


  return (
    <div className="chat-container">
      {messages.length > 0 ? (
        <div className="chat-window">
         {messages.map((msg, index) => (
          <div key={index}>
            <div className="message-bubble">
              {msg}
            </div>
            {botReply[index] ? (
              <p>{botReply[index]}</p>
            ) : (
              <p>Ładowanie...</p>
            )}
          </div>
          ))}
        </div>
      ) : (
        <>
          <Header />
          <CardContainer />
        </>
      )}
      <TextBar onValueSubmit={handleAddNewMessage} />
    </div>
  );
};

export default ChatContainer
