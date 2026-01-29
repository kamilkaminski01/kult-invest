import './style.scss'
import { FactCardProps } from './interface'

const FactCard = ({ number, title, description }: FactCardProps) => {
  return (
    <div className="fact-card">
      <div className="fact-card__content">
        <div className="content__number">{number}</div>
        <div className="content__title">{title}</div>
        <div className="content__description">{description}</div>
      </div>
    </div>
  )
}

export default FactCard
