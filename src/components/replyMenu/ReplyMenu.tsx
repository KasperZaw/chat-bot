import "./reply-menu.scss";
import refresh from "../../assets/icons/bot-icons/icon-refresh.svg";
import thumbUp from "../../assets/icons/bot-icons/icon-thumbs-up.svg";
import thumbDown from "../../assets/icons/bot-icons/icon-thumbs-down.svg";
import clipboard from "../../assets/icons/bot-icons/icon-clipboard.svg";
import volume from "../../assets/icons/bot-icons/icon-volume.svg";

const ReplyMenu = () => {
  return (
    <div className="bot-menu">
      <img src={refresh} alt="refresh" />
      <img src={thumbUp} alt="thumbUp" />
      <img src={thumbDown} alt="thumbDown" />
      <img src={clipboard} alt="clipboard" />
      <img src={volume} alt="volume" />
    </div>
  );
};

export default ReplyMenu;
