import React from 'react'
import Layout from '../../components/layout/Layout'
import './events.scss'

import clemens from '../../images/MountClemens.png'
import band from '../../images/bathtubBand.png'
import writers from '../../images/WritersPin.png'

function Events() {
  return (

    <Layout>
        <section className='events' aria-label = 'events page'>
            <div className='eventsTop'>
                <img src = {writers} alt = "writers group meeting" />
                <img src={clemens} alt="flyer for Mount Clemens Saturday workshop" />
            
            </div>
            <div className='eventsBottom'>
            
                <img src = {band} alt = "bathtub band flyer" />
                <button type="submit" className='eventsBut'>LEARN MORE</button>
            </div>
        </section>
    </Layout>
  )
}

export default Events