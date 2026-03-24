import './text-bar.scss'
import microfonIcon from '../../assets/icons/icon-microfone.svg'
import sendIcon from '../../assets/icons/icon-send.svg'
import { openApi } from '../../api/api'
import { useState } from 'react'

interface TextBarProps {
  onValueSubmit: (value: string) => void;
}
const TextBar = ({onValueSubmit}: TextBarProps) => {
  const [message, setMessage] = useState('');
 
  const sendToParent = () => {
    onValueSubmit(message);
  };
  return (
    <div className="text-bar-container">
        <div>
            <button><img src={microfonIcon} alt="microfone" /></button>
            <input type="text"  placeholder='Ask anything from here'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            />
            <button className='send-btn'><img src={sendIcon} alt="" onClick={sendToParent}/></button>
        </div>
    </div>
  )
}

export default TextBar
