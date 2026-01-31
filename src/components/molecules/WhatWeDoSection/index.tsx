import React from 'react'
import './style.scss'
import { WHAT_WE_DO_DATA } from 'utils/consts'
import ServiceCard from 'components/atoms/ServiceCard'

const WhatWeDoSection = () => {
  return (
    <section id="what-we-do" className="whatwedo-section">
      <h3 className="whatwedo-section__title">Co robimy?</h3>
      <div className="whatwedo-section__grid">
        {WHAT_WE_DO_DATA.map((item, index) => (
          <ServiceCard
            key={`service-${index}`}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  )
}

export default WhatWeDoSection
