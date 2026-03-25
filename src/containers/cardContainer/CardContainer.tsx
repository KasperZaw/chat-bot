import Card from "../../components/card/Card";
import iconCreateImg from "../../assets/icons/icon-create-img 1.svg";
import iconBulb from "../../assets/icons/icon-idea.svg";
import iconEye from "../../assets/icons/icon-eye.svg";
import robot from "../../assets/img/robot.png";
import "./card-container.scss";

const CardContainer = () => {
  return (
    <div className="cards-container">
      <div>
        <Card
          img={iconCreateImg}
          alt={"create img icon"}
          text={"Cretae an image for my presentation"}
          gradient={{
            from: { color: "#FFC68E", opacity: 0.4 },
            mid: { color: "#FF7F00", opacity: 1.0 },
            to: { color: "#FFFFFF", opacity: 0.8 },
          }}
        />
        <Card
          img={iconBulb}
          alt={"give me idea icon"}
          text={"What to do with kids\’ art"}
          gradient={{
            from: { color: "#2F82EF", opacity: 0.6 },
            mid: { color: "#223FFA", opacity: 1.0 },
            to: { color: "#FFFFFF", opacity: 0.4 },
          }}
        />
        <Card
          img={iconEye}
          alt={"look icon"}
          text={"Find the decade that a photo is from"}
          gradient={{
            from: { color: "#FFFFFF", opacity: 0.6 },
            mid: { color: "#37C390", opacity: 1.0 },
            to: { color: "#99F8D6", opacity: 0.4 },
          }}
        />
      </div>

      <img src={robot} alt="" />
    </div>
  );
};

export default CardContainer;
