import React from 'react'
import title from "./title"
import {servicesData} from "../data"

function services() {
  return (
    <section className="section services" id="services">
      {title("our", "services")}
      <div className="section-center services-center">
        {servicesData.map((service) => {
          return (
            <article className="service">
              <span className="service-icon"><i className={service.icon} ></i></span>
              <div className="service-info">
                <h4 className="service-title">{service.title} </h4>
                <p className="service-text">{service.text}</p>
              </div>
            </article>
          )
        })}

      </div>
    </section>
  )
}

export default services