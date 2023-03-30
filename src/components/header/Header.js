import React from 'react'
import './header.scss'
import wife from '../../images/wife.png'
import spacer from '../../images/spacer3.png'
import header from '../../images/Header-Img.png'

function Header() {
  return (
    <header>
      <nav className = "headerNav">
      <img src={wife} className="renLogo" alt="ren wife logo with sword" />
        <li>
          <a 
            href="https://www.blog.renaissancewife.com" 
            target={'blank'}
            aria-label="Renaissance Wife Blog page"
            >
            BLOG
          </a>
        </li>
        <li>
          <a href="events" target={"blank"}>EVENTS</a>
        </li>
        <li>
          <a href="#">GALLERY</a>
        </li>
        <li>
          <a href="#">CONTACT</a>
        </li>
      </nav>
      <img src={header} className='headerImg' alt = "logo"/>
      <img src={spacer} className='spacer' alt="colored spacer" />
    </header>
  );
}

export default Header