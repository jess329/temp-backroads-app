import React from 'react'
import aboutImg from "../images/react1.jpeg"
import title from "./title"

function about() {
  return (
    <section className="section" id="about">
      {title("about", "us")}

      <div className="section-center about-center">
        <div className="about-img">
          <img
            src={aboutImg}
            className="about-photo"
            alt="awesome beach"
          />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            We are a new founded travel agency with the goal to make 
            the process of travelling easier and more enjoyable for you. 
            Scroll down to Our Services to see how we do that.
          </p>
          <p>
            We are constantly searching for new adventures and hope to 
            create the most laid back holidays for you. Have a great trip!
          </p>
          <a href="#about" className="btn">read more</a>
        </article>
      </div>
    </section>
  )
}

export default about