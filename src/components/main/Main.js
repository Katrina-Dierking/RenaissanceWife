import React from 'react'
import './main.scss'
import Hero from '../hero/Hero'
import Lana from '../../images/Lana.JPG'




function Main() {
  return (
    <section className="homePage">
      <Hero />
      <section className="main">
        <div className="imgBox">
          <img src={Lana} alt="Lana Vaughan headshot" className="mainImg" />
          <h2> LANA VAUGHAN</h2>
        </div>

        <section className="mainMiddle">
          <div className="mainLeft">
         
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
              eius vel harum sunt blanditiis nobis officia alias saepe facere
              dolorum expedita laboriosam aut eaque, sapiente cum incidunt
              tenetur doloribus labore!
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
              eius vel harum sunt blanditiis nobis officia alias saepe facere
              dolorum expedita laboriosam aut eaque, sapiente cum incidunt
              tenetur doloribus labore!
            </p>
          </div>
        </section>
      </section>
    </section>
  );
}

export default Main