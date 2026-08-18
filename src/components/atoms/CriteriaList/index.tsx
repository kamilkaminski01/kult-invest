import './style.scss'
import classNames from 'classnames'
import { CriteriaListProps, ICriterion } from './interface'

const CriteriaList = ({ title, items, variant }: CriteriaListProps) => {
  return (
    <div className={classNames('criteria-list', 'fade', `criteria-list--${variant}`)}>
      <h3 className="criteria-list__title">{title}</h3>
      <ul className="criteria-list__items">
        {items.map((item: ICriterion) => (
          <li key={item.lead} className="criteria-list__item">
            <span className="criteria-list__lead">{item.lead}</span> {item.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CriteriaList
