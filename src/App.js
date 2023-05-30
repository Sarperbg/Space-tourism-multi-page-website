import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import Technology from "./pages/Technology";

function App() {
  return (
    <div>
     <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination/" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
