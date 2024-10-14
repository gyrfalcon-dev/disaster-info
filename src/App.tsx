import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Events from "./pages/Events.tsx";
import About from "./pages/About.tsx";
import Event from "./pages/Event.tsx";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Events />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/events/:id" element={<Event />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
