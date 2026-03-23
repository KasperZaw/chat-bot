import '../../styles/chat-container.scss';
import Header from '../../components/Header/Header';
import TextBar from '../../components/textBar/TextBar';
import CardContainer from '../cardContainer/CardContainer';
import Card from '../../components/card/Card';
const ChatContainer = () => {
  return (
    <div className="chat-container">
      <Header />
      <CardContainer />
      <TextBar />
    </div>
  )
}

export default ChatContainer
