import React from 'react'
import './main.scss'

import Lana from '../../images/Lana.JPG'




function Main() {
  return (
    <section className="main">
      <div className="imgBox">
        <img src={Lana} alt="Lana Vaughan headshot" className="mainImg" />
        <h2> LANA VAUGHAN</h2>
      </div>

      <section className="mainMiddle">
        <div className="mainLeft">
        <section className="definition">
            <h3>Renaissance :</h3>
            <p>[noun] - a new growth of activity or interest in something, especially art, litererature, or music
            
            </p>
        </section>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, eius
            vel harum sunt blanditiis nobis officia alias saepe facere dolorum
            expedita laboriosam aut eaque, sapiente cum incidunt tenetur
            doloribus labore!
          </p>
      
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, eius
            vel harum sunt blanditiis nobis officia alias saepe facere dolorum
            expedita laboriosam aut eaque, sapiente cum incidunt tenetur
            doloribus labore!
          </p>

        </div>
      </section>
    </section>
  );
}

export default Main