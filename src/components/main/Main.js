import React from 'react'
import './main.scss'
import hostess from '../../images/hostess.png'


function Main() {
  return (
    <section className="main">
      <div className="imgBox">
        <img src={hostess} alt="Lana Vaughn" />
      </div>

      <section className="mainMiddle">
        <div className="mainLeft">
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, eius
            vel harum sunt blanditiis nobis officia alias saepe facere dolorum
            expedita laboriosam aut eaque, sapiente cum incidunt tenetur
            doloribus labore!
          </h3>
        </div>

        <div className="mainRight">
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, eius
            vel harum sunt blanditiis nobis officia alias saepe facere dolorum
            expedita laboriosam aut eaque, sapiente cum incidunt tenetur
            doloribus labore!
          </h3>
        </div>
      </section>
    </section>
  );
}

export default Main