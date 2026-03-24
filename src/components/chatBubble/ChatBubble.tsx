import './chat-window.scss';
import logo from '../../assets/icons/logo.svg'
import avatar from '../../assets/img/profile-pic.png'

interface chooseBubble {
  isBot: boolean;
  botMessage?: string | undefined;
  userMessage?: string;
}

const ChatBubble = ({isBot, botMessage, userMessage}: chooseBubble) => {
  return (
    <> 
    {isBot ? (
      <div className='bot-bubble'>
        <div>
          <img src={logo} alt="logo" />
          <span>{userMessage}</span>
        </div>
        <span>{botMessage}</span>

      </div>
    ) : (
      <div className='user-bubble'>
        <img src={avatar} alt="avatar" />
        <span>{userMessage}</span>
      </div>
    )}
  </>
  )
}

export default ChatBubble
