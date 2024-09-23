// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./App.css"
// import { Stats } from "fs";
// import Blogs from "./components/Blogs";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Appointment from "./components/Navbar/Appointment";

import NavbarComp from "./components/Navbar/NavbarComp";
import Research from "./components/Research/Research";
import Stat from "./components/Stat/Stat";
// import NavbarComp from './components/Navbar/NavbarComp';


function App() {

  return (
    <>
    <div className="w-full">
    <NavbarComp className=""/>
    <Hero/>
    <Research/>
    <Stat/>
    {/* <Blogs/> */}
    <Appointment/>
    <Footer/>
    </div>
      
    </>
  )
}

export default App
