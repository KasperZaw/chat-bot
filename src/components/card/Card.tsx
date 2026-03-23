import './card.scss'

interface CardProps {
    text: string;
    img: string;
    alt: string;
}


const Card = ({ text, img, alt }: CardProps) => {
    return (
      <div className="card-container">
            <svg width="0" height="0">
            <defs>
                <clipPath id="card-clip" clipPathUnits="objectBoundingBox">
                <path d="M0.89,0.005 
                        C0.95,0.005 1,0.065 1,0.14 
                        V0.63 
                        C1,0.665 1,0.68 0.99,0.7 
                        C0.985,0.71 0.977,0.72 0.968,0.725 
                        C0.957,0.733 0.94,0.733 0.91,0.733 
                        H0.845 
                        C0.81,0.733 0.78,0.77 0.78,0.816 
                        V0.93 
                        C0.78,0.957 0.765,0.995 0.745,0.995 
                        H0.11 
                        C0.05,0.995 0.003,0.935 0.003,0.86 
                        V0.14 
                        C0.003,0.065 0.05,0.005 0.11,0.005 
                        H0.89 
                        Z" />
                </clipPath>
            </defs>
            </svg>
          <div className='card-main'>
              <span>{text}</span>
          </div>
          <div className='card-side'>
              <img src={img} alt={alt}/>
          </div>
      </div>
    )
  }

export default Card
