import '../../styles/chat-container.scss';
import Header from '../../components/Header/Header';
import TextBar from '../../components/textBar/TextBar';
import CardContainer from '../cardContainer/CardContainer';
import ChatBubble from '../../components/chatBubble/ChatBubble';
import { useEffect, useState } from 'react';
import { openApi } from '../../api/api';
import { ThreeDot } from 'react-loading-indicators';

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
          <div key={index} className="message-pair">
              <ChatBubble isBot={false} userMessage={msg}/>
            {botReply[index] ? (
              <ChatBubble isBot={true} botMessage={botReply[index]} userMessage={msg}/>
            ) : (
            <ThreeDot color="#FAFAFA" size="small" text="" textColor="" />
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
      <TextBar onValueSubmit={handleAddNewMessage}  />
    </div>
  );
};

export default ChatContainer
