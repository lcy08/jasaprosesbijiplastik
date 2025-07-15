import {
  BrowserRouter as Router,
  Routes, Route,
} from 'react-router-dom'

import Home from "./components/Home/Home"
import About from "./components/About/About"
import Services from "./components/Services/Services"
import Contact from "./components/Contact/Contact"

function App(){
  const padding = {
    padding: 5
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}
export default App;