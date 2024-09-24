// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./App.css"
// import { Stats } from "fs";
// import Blogs from "./components/Blogs";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Appointment from "./components/Navbar/Appointment";
import NavbarComp from "./components/Navbar/NavbarComp";
import Research from "./components/Research/Research";
import Stat from "./components/Stat/Stat";
import About from './components/About/About';
import Blogs from './components/Blog/Blogs';


function App() {

  return (
    <>
      <div className="w-full">
        <NavbarComp className="" />
        <Router>
          <Routes>
            <Route path='/' element={
              <div>
                <Hero />
                <Research />
                <Stat />
                <Appointment />
              </div>
            }
            />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/appointments' element={<Appointment />} />
            <Route path='*' element={<div>Not Found Path</div>} />
          </Routes>
        </Router>
        <Footer />
      </div>

    </>
  )
}

export default App
