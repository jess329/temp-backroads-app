import React from 'react'
import logo from "../images/logo.svg"
import {pageLinks} from "../data"
import {socialLinks} from "../data"

function navbar() {
  return (
    <nav className="navbar">
        <div className="nav-center">
            <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
                <i className="fas fa-bars"></i>
            </button>
            </div>
            <ul className="nav-links" id="nav-links">
            {pageLinks.map((link) => {
              return (
                <li>
                  <a href={link.href} className={link.class} >{link.text}</a>
                </li>
              ) 
            })}
            </ul>

            
            <ul className="nav-icons">
            {socialLinks.map((link) => {
              return (
                <li>
                  <a href={link.href} rel="noreferrer" className={link.classLink}>
                    <i className={link.classIcon}></i>
                  </a>
                </li>
              ) 
            })}
            </ul>
        </div>
    </nav>
  )
}

export default navbar