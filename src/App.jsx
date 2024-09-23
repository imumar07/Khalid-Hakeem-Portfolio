// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./App.css"
// import { Stats } from "fs";
// import Blogs from "./components/Blogs";
// import Hero from "./components/Hero/Hero";
// import Appointment from "./components/Navbar/Appointment";

import About from "./components/About/About";
import NavbarComp from "./components/Navbar/NavbarComp";
// import Research from "./components/Research/Research";
// import Stat from "./components/Stat/Stat";
// import NavbarComp from './components/Navbar/NavbarComp';


function App() {

  return (
    <>
    <div className="w-full">
    <NavbarComp className=""/>
    <About/>
    {/* <Hero/>
    <Research/>
    <Stat/>
    
    <Appointment/> */}
    </div>
      
    </>
  )
}

export default App
