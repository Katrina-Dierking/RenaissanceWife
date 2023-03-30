import React from 'react'
import './main.scss'
import hostess from '../../images/hostess.png'


function Main() {
  return (

    <section className='main'>

      <div className='imgBox'>
      
      <img src={hostess} alt="Lana Vaughn" />
      </div>

      <section className='mainMiddle'>

        <div className='mainLeft'>
          <h3>left</h3>
        </div>

        <div className='mainRight'>
          <h3>right</h3>
        </div>

      </section>
  
    </section>
 
  )
}

export default Main