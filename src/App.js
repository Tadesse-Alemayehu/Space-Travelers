import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import Profile from './pages/Profile';

import { addRockets } from './Redux/Rockets/Rocket';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addRockets());
  }, []);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/Missions" element={<Missions />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
