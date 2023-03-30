import React from 'react'
import './header.scss'
import wife from '../../images/wife.png'
import spacer from '../../images/spacer3.png'
import header from '../../images/Header-Img.png'

function Header() {
  return (
    <header>
      <nav>
      <img src={wife} className="renLogo" alt="ren wife logo with sword" />
        <li>
          <a 
            href="https://www.blog.renaissancewife.com" 
            target={'blank'}
            aria-label="Renaissance Wife Blog page"
            >
            Blog
          </a>
        </li>
        <li>
          <a href="#">Events</a>
        </li>
        <li>
          <a href="#">Gallery</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </nav>
      <img src={header} className='headerImg' alt = "logo"/>
      <img src={spacer} className='spacer' alt="colored spacer" />
    </header>
  );
}

export default Header