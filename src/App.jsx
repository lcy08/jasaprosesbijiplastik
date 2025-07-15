import {
  BrowserRouter as Router,
  Routes, Route,
} from 'react-router-dom'

import Home from "./components/Home/Home"
import About from "./components/About/About"
import FAQ from "./components/FAQ/FAQ"
import Pricing from "./components/Pricing/Pricing"
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
        <Route path="/faq" element={<FAQ />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}
export default App;