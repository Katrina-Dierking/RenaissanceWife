import React from 'react'
import './home.scss'
import Layout from '../../components/layout/Layout'
import Main from '../../components/main/Main'
import Bottom from '../../components/bottom/Bottom'
import Events from '../events/Events'

function Home() {
  return (
    <Layout>
      <section className='home'>
      
        <Main />
        <Bottom />
        <Events />
      </section>
    </Layout>
  )
}

export default Home