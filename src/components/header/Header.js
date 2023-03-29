import React from 'react'
import './header.scss'

function Header() {
  return (
    <header>
      <nav>
        <li>
          <a href="#">Blog</a>
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
    </header>
  );
}

export default Header