import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import Technology from "./pages/Technology";
import Header from './layout/Header';

function App() {
  return (
    <div>
     <Router>
      <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
