// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./App.css"
// import { Stats } from "fs";
// import Blogs from "./components/Blogs";
import Hero from "./components/Hero/Hero";
import Appointment from "./components/Navbar/Appointment";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComp from "./components/Navbar/NavbarComp";
import Research from "./components/Research/Research";
import Stat from "./components/Stat/Stat";
import Research from "./components/Research";
import Footer from "./components/Footer/Footer";


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
                <Appointment />
                <Stat />
                <Research />
              </div>
            }
            />
          </Routes>
        </Router>
        <Footer />
      </div>

    </>
  )
}

export default App
