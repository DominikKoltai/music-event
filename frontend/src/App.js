import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Event from "./pages/events/Event";
import Artist from "./pages/artists/Artist";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/events" element={<Event />} />
        <Route exact path="/artists" element={<Artist />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
