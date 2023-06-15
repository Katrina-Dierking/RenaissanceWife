import React from 'react'
import './hero.scss'

function Hero(){
    return (
      <section className="heroBanner">
        <section className="leftHero">
          <article>
            <p className="example-right">
              Somehow I've lost myself Somehow I've lost myself Somehow I've
              lost myself Somehow I've lost myself Somehow I've lost myself
              Somehow I've lost myself Somehow I've lost myself Somehow I've
              lost myself Somehow I've lost myself Somehow I've lost myself{" "}
            </p>
            <p className="example-left">
              I used to have dreams I used to have dreams I used to have dreams
              I used to have dreams I used to have dreams I used to have dreams
              I used to have dreams I used to have dreams I used to have dreams
              I used to have dreams I used to have dreams
            </p>
          </article>
        </section>
        <section className="mainScroll">
          <section behavior="scroll" direction="left">
            <p>
              Does this sound like you? 
            </p>
            <p>
              Do these thoughts continually run
              through your head?
            </p>
            <p> Are you looking for a way to find yourself again and finally accomplish all the dreams you had for yourself?</p>
          </section>
        </section>
        <section className="rightHero">
          <article>
            <p className="example-right">
              I've spent my whole life taking care of everyone else I've spent
              my whole life taking care of everyone else I've spent my whole
              life taking care of everyone else I've spent my whole life taking
              care of everyone else I've spent my whole life taking care of
              everyone else I've spent my whole life taking care of everyone
              else{" "}
            </p>
          </article>

          <article>
            <p className="example-left">
              There's still so much I want to do with my life There's still so
              much I want to do with my life There's still so much I want to do
              with my life There's still so much I want to do with my life
              There's still so much I want to do with my life There's still so
              much I want to do with my life
            </p>
          </article>
        </section>
      </section>
    );
}

export default Hero
      // <section className="definition">
      //   <h3>RENAISSANCE :</h3>
      //   <p>
      //     [noun] - a new growth of activity or interest in something,
      //     especially art, litererature, or music
      //   </p>
      // </section>