import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { getWeatherAPI } from './redux/Country/Country';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWeatherAPI());
  }, [dispatch]);
  return (
    <div className="main-container">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
