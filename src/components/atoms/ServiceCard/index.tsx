import React from 'react'
import { ServiceCardProps } from './interface'
import './style.scss'

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  const imageSrc = typeof icon === 'string' ? icon : icon.src

  return (
    <div className="service-card">
      <div className="service-card__icon-wrapper">
        <img src={imageSrc} alt={title} className="service-card__icon" />
      </div>
      <h4 className="service-card__title">{title}</h4>
      <p className="service-card__description">{description}</p>
    </div>
  )
}

export default ServiceCard
