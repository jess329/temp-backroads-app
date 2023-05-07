import React from 'react'
import title from "./title"
import {toursData} from "../data" 

function tours() {
  return (
    <section className="section" id="tours">
      {title("featured", "tours")}

      <div className="section-center featured-center">
        {toursData.map((tour) => {
          return (
            <article className="tour-card">
          <div className="tour-img-container">
            <img src={tour.img} className="tour-img" alt="" />
            <p className="tour-date">{tour.date}</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{tour.title}</h4>
            </div>
            <p>
              {tour.text}
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span> {tour.where}
              </p>
              <p>{tour.days} </p>
              <p>{tour.price} </p>
            </div>
          </div>
        </article>
          )
        })}

      </div>
    </section>
  )
}

export default tours