import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Service from './pages/Service';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
             <Route path="/"  element={<Home/>} />  
             <Route path="/Service" element={<Service/>} />  
             <Route path="/ContactUs" element={<ContactUs/>} />  
             <Route path="/AboutUs" element={<AboutUs/>}/>  
        </Routes>
        <Footer/>
     </Router>
    
    </div>
  );
}

export default App;
