import React, {useState} from 'react'
import Layout from '../../components/layout/Layout'
import './contact.scss'

function Contact() {

  const [inputValue, setInputValue] = useState('') 

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }
  

  return (
    <Layout>
      <section className="contact">
        <h1>CONTACT</h1>
        <form onSubmit={handleSubmit} className="form">
          <label>
            <input
              type="text"
              value={inputValue}
              placeholder="First name"
              onChange={handleChange}
            />
          </label>

          <label>
            <input
              type="text"
              value={inputValue}
              placeholder="Email address"
              onChange={handleChange}
            />
          </label>

          <button type="submit" className='button'>Submit</button>
        </form>
      </section>
    </Layout>
  );
}

export default Contact