import './style.scss'
import { StageCardProps } from './interface'

const StageCard = ({ letter, title, description }: StageCardProps) => {
  return (
    <article className="stage-card">
      <span className="stage-card__letter">{letter}</span>
      <h3 className="stage-card__title">{title}</h3>
      <p className="stage-card__description">{description}</p>
    </article>
  )
}

export default StageCard
