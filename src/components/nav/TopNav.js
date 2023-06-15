import React from 'react'
import { Link } from 'react-router-dom'
import './topNav.scss'

import wife from '../../images/wife.png'
import spacer from '../../images/spacer3.png'
import header from '../../images/Header-Img.png'

function TopNav() {
  return (
    <section className="navContainer">
      <section className="topNav">
        <img src={wife} className="renLogo" alt="ren wife logo with sword" />
        <li>
          <Link to="/">HOME</Link>
        </li>

        <li>
          <a
            href="https://www.blog.renaissancewife.com"
            target={"blank"}
            aria-label="Renaissance Wife Blog page"
          >
            BLOG
          </a>
        </li>

        <li>
          <Link to="/events">EVENTS</Link>
        </li>

        <li>
          <Link to="/gallery">GALLERY</Link>
        </li>
        

        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
      </section>
      <div className='headerSpace'>
      
      <img src={spacer} className="spacer topSpacer" alt="colored spacer" />
      <img src={header} className="topNavImg" alt="logo" />
      <img src={spacer} className="spacer" alt="colored spacer" />
      </div>
    </section>
  );
}

export default TopNav