import React from 'react'
import { socialLinks } from '../data'

function footer() {
  return (
    <footer className="section footer">
      <ul className="footer-icons">
      {socialLinks.map((icon) => {
        return (
          <li>
            <a href={icon.href} target="_blank" rel="noreferrer" className="footer-icon"
            ><i className={icon.classIcon}></i></a>
          </li>
        )
      })}
        
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()} </span> all rights reserved
      </p>
    </footer>
  )
}

export default footer