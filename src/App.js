import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Nosotros from './pages/Nosotros';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<LandingPage />}
        />
        <Route
          path="/nosotros"
          element={<Nosotros />}
        />
      </Routes>
    </Router>
  );
}

export default App;
