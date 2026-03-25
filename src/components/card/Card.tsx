import { useId } from "react";
import "./card.scss";

interface ColorStop {
  color: string;
  opacity?: number;
}

interface CardProps {
  text: string;
  img: string;
  alt: string;
  gradient: {
    from: ColorStop;
    mid?: ColorStop;
    to: ColorStop;
  };
}

const Card = ({ text, img, alt, gradient }: CardProps) => {
  const gradientId = useId();

  return (
    <div className="card">
      <svg viewBox="0 0 270 213" className="card-svg">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop
              offset="0%"
              stopColor={gradient.from.color}
              stopOpacity={gradient.from.opacity ?? 1}
            />
            {gradient.mid && (
              <stop
                offset="50%"
                stopColor={gradient.mid.color}
                stopOpacity={gradient.mid.opacity ?? 1}
              />
            )}
            <stop
              offset="100%"
              stopColor={gradient.to.color}
              stopOpacity={gradient.to.opacity ?? 1}
            />
          </linearGradient>
        </defs>
        <path
          d="M240,1 C257,1 270,14 270,30 V134 C270,142 270,145 267,149 C265,152 262,154 259,156 C255,159 248,159 240,159 H228 C217,159 210,168 210,178 V198 C210,206 204,212 198,212 H30 C13,212 1,198 1,183 V30 C1,14 13,1 30,1 H240 Z"
          fill="var(--color-card-small)"
          stroke={`url(#${gradientId})`}
          strokeWidth="1"
        />
      </svg>
      <span className="card-text">{text}</span>
      <div className="card-side">
        <img src={img} alt={alt} />
      </div>
    </div>
  );
};

export default Card;
