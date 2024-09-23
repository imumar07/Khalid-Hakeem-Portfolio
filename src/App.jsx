// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./App.css"
// import { Stats } from "fs";
// import Blogs from "./components/Blogs";
import Hero from "./components/Hero/Hero";
import Appointment from "./components/Navbar/Appointment";

import NavbarComp from "./components/Navbar/NavbarComp";
import Research from "./components/Research";
import Stat from "./components/Stat";
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
    </div>
      
    </>
  )
}

export default App
