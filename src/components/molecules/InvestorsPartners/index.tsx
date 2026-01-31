'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { INVESTORS_DATA } from './../../../utils/consts'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './style.scss'

const InvestorsPartners = () => {
  return (
    <section id="investors-partners-section" className="investors-partners-section">
      <h2 className="investors-partners-section__title">Inwestorzy i partnerzy</h2>

      <div className="investors-partners-section__container">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="investors-swiper">
          {INVESTORS_DATA.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="investor-card">
                <div className="investor-card__header">
                  <img
                    src={typeof item.image === 'string' ? item.image : item.image.src}
                    alt={item.name}
                    className="investor-card__avatar"
                  />
                  <div className="investor-card__info">
                    <h3 className="investor-card__name">{item.name}</h3>
                    <p className="investor-card__role">{item.role}</p>
                  </div>
                </div>
                <p className="investor-card__desc">{item.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default InvestorsPartners
