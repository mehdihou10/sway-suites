import {Routes,Route} from 'react-router-dom';
import {Amenties, Gallery, Home, Rooms,Contact} from './pages';
import Footer from './components/Footer';

function App() {
  return (
   <div>

    <Routes>
      <Route path='/' element={<Home  />} />
      <Route path='/rooms' element={<Rooms  />} />
      <Route path='/amenties' element={<Amenties  />} />
      <Route path='/gallery' element={<Gallery  />} />
      <Route path='/contact' element={<Contact  />} />


    </Routes>

    <Footer />
    
   </div>
  );
}

export default App;
