import "./App.css"
import Home from "../src/components/pages/Home"
import About from "../src/components/pages/About"
import Contact from "../src/components/pages/Contact"
import Navbar from "./components/inc/Navbar"
import Footer from "./components/inc/Footer"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
