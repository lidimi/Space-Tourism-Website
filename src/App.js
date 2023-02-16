import DestinationPage from "./pages/DestinationPage";
import Homepage from "./pages/Homepage";
import CrewPage from "./pages/CrewPage";
import TechnologyPage from "./pages/TechnologyPage";
import { Route, Routes } from "react-router-dom";

// TODO:
// MEDIA QUERIES
// SWIPE FOR MOBILE DEVICES?

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="destination" element={<DestinationPage />} />
        <Route path="crew" element={<CrewPage />} />
        <Route path="technology" element={<TechnologyPage />} />
      </Routes>
    </div>
  );
}

export default App;
