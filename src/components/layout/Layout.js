import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'

function Layout({children}) {
  return (
<section className = "layout"> 
    <Header />
    <main>{children}</main>
    <Footer />
</section>
  )
}

export default Layout