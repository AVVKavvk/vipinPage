
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './routes_i/Home';
import About from './routes_i/About';
import Contact from './routes_i/Contact';
import Nav from './componets/Nav';
import Gallary from './routes_i/Gallary';
import School from './About/School'
import Coaching from './About/Coaching';
import College from './About/College';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} >
          <Route path="school" element={<School/>}/>
          <Route path="*" element={<School/>}/>
          <Route path="coaching" element={<Coaching/>}/>
          <Route path="college" element={<College/>}/>

        </Route>
        <Route path="/contact" element={<Contact/>} />
        <Route path="/gallery" element={<Gallary/>} />
      </Routes>
    </div>
  );
}

export default App;
