
import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './views/home/Home';
import Events from './views/events/Events';
import Contact from './views/contact/Contact';

function App() {
  return (
    <>
      <section className='app'>
      <Home />
      </section>

      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path = "contact" element={<Contact/>} />
          <Route path = "events" element ={<Events />} />
        </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
