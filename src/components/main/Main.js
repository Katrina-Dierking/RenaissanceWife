import React from 'react'
import './main.scss'
import Lana from '../../images/Lana.JPG'


function Main() {
  return (

    <section className='main'>
    <div className='mainLeft'>
    <img src={Lana} alt="Lana Vaughn" />
    <p> Welcome to Ren Wife</p>
    
    </div>
    <div className='mainRight'>
        <h2>Meet your host</h2>
        <p>Lana Vaughn</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quam, eos, ex nemo nisi distinctio quis id ullam doloremque quaerat ipsam nobis reiciendis laboriosam cumque perferendis aliquam maxime veniam explicabo!</p>
    </div>
    </section>
 
  )
}

export default Main