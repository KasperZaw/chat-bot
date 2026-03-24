import Card from "../../components/card/Card"
import iconCreateImg from '../../assets/icons/icon-create-img 1.svg'
import iconBulb from '../../assets/icons/icon-idea.svg'
import iconEye from '../../assets/icons/icon-eye.svg'
import robot from '../../assets/img/robot.png'
import './card-container.scss'

const CardContainer = () => {
  return (
    <div className="cards-container">
      <div>
        <Card img={iconCreateImg} alt={"create img icon"} text={"Cretae an image for my presentation"}/>
        <Card img={iconBulb} alt={"give me idea icon"} text={"What to do with kids\’ art"} />
        <Card img={iconEye} alt={"look icon"} text={"Find the decade that a photo is from"}/>
      </div>

        <img src={robot} alt="" />
    </div>
  )
}

export default CardContainer
