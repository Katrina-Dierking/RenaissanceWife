import React from 'react'
import './home.scss'
import spacer from "../../images/spacer3.png";
import header from "../../images/Header-Img.png";
import Layout from '../../components/layout/Layout'
import Main from '../../components/main/Main'
import Bottom from '../../components/bottom/Bottom'
import Events from '../events/Events'

function Home() {
  return (
    <Layout>
      <section className="home">
        <img src={header} className="topNavImg" alt="logo" />
        <img src={spacer} className="spacer" alt="colored spacer" />
        <Main />
        <Bottom />
      </section>
    </Layout>
  );
}

export default Home