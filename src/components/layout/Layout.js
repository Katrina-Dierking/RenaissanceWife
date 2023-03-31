import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'

function Layout({title, children}) {
  return (
<section className = "layout"> 
    <Header />
    <main>{children}</main>
    <Footer />
</section>
  )
}

export default Layout