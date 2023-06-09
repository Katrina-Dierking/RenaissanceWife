
import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './views/home/Home';
import Events from './views/events/Events';
import Contact from './views/contact/Contact';
import Gallery from './views/gallery/Gallery';
import Shop from './views/shop/Shop'

function App() {
  return (
    <section className='app'>
      <BrowserRouter>
      
        <Routes>
          <Route exact path ="/" element = {<Home />}/>
          <Route path ="/contact" element={<Contact/>} />
          <Route path ="/events" element ={<Events />} />
          <Route path ="/gallery" element={<Gallery/>} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </section>
    
    
    );
  }
  
  export default App;
  
