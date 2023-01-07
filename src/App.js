import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import CountryDetail from './components/CountryDetail';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { getWeatherAPI } from './redux/Country/Country';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWeatherAPI());
  }, [dispatch]);
  return (
    <div className="main-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:country" element={<CountryDetail />} />
      </Routes>
    </div>
  );
}

export default App;
