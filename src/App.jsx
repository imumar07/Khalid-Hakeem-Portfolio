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
import BooksList from './components/ResearchAndArticles/Books/BooksList';
import ResearchAndArticles from './components/ResearchAndArticles/ResearchAndArticles';
import Hajrah from './components/Hajrah/Hajrah';
import Foundation from './components/Foundation/Foundation';
import Career from './components/Career/Career';
// import { Tweet } from 'react-tweet';


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
                <Foundation />
                {/* <Tweet/> */}
                <Appointment />
              </div>
            }
            />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/blogs' element={<Blogs />} />
            <Route exact path='/appointments' element={<Appointment />} />
            <Route exact path='/books' element={<BooksList />} />
            <Route exact path='/research' element={<ResearchAndArticles />} />
            <Route exact path='/foundation' element={<Hajrah />} />
            <Route exact path='/career' element={<Career />} />
            <Route exact path='*' element={<div>Not Found Path</div>} />
          </Routes>
        </Router>
        <Footer />
      </div>

    </>
  )
}

export default App
