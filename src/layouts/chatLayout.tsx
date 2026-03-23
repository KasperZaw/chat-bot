import '../styles/chat-layout.scss';
import ChatContainer from '../containers/chatContainer/ChatContainer';
import Navbar from '../components/navbar/Navbar';
const ChatLayout = () => {
  return (
    <div className='main-container'>
      <Navbar />
      <ChatContainer />
    </div>
  )
}

export default ChatLayout
