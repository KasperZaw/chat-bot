import './text-bar.scss'
import microfonIcon from '../../assets/icons/icon-microfone.svg'
import sendIcon from '../../assets/icons/icon-send.svg'

const TextBar = () => {
  return (
    <div className="text-bar-container">
        <div>
            <button><img src={microfonIcon} alt="microfone" /></button>
            <input type="text"  placeholder='Ask anything from here'/>
            <button className='send-btn'><img src={sendIcon} alt="" /></button>
        </div>
    </div>
  )
}

export default TextBar
