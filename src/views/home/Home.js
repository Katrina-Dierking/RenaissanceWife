import React from 'react'
import './home.scss'
import Layout from '../../components/layout/Layout'
import Main from '../../components/main/Main'
import Bottom from '../../components/bottom/Bottom'

function Home() {
  return (
    <Layout>
      <section className='home'>
      
        <Main />
        <Bottom />
      </section>
    </Layout>
  )
}

export default Home