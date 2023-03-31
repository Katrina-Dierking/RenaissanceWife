import React from 'react'

import Footer from '../footer/Footer'
import TopNav from '../nav/TopNav'

function Layout({children}) {
  return (
    <section className = "layout"> 
        <TopNav />
          <main>{children}</main>
        <Footer />
    </section>
  )
}

export default Layout