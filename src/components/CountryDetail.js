import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DayDetail from './DayDetail';

const CountryDetail = () => {
  const [detailData, setDetailData] = useState();
  const { country } = useParams();
  const countries = useSelector((state) => state.countries);

  useEffect(() => {
    const data = countries.find((item) => item.country === country);
    setDetailData(data);
  }, []);
  return (
    <div>
      {detailData
        && (
        <div className="detail-container">
          <div className="detail-content">
            <img src={`https://flagcdn.com/144x108/${detailData.alpha2.toLowerCase()}.png`} alt="" className="detail-country-flag" />
            <div className="detail-country-content">
              <img src={`./assets/images/${detailData.data.current_weather.weathercode}.png`} alt="weather icon" className="weather-icon" />
              <div className="detail-text">
                <p className="detail-country-title">{detailData.country}</p>
                <p className="detail-country-temperature">
                  {`Temperature: ${detailData.data.current_weather.temperature}°C`}
                </p>
                <p className="detail-country-temperature">
                  {`Wind: ${detailData.data.current_weather.windspeed} km/h`}
                </p>
              </div>
            </div>
          </div>
          <div className="home-mid-container background-dark">
            <p className="home-title">TEMPERATURES BY DAYS</p>
          </div>
          <ul className="home-list-container">
            {
              detailData.data.daily.time.map((time, index) => (
                <DayDetail
                  time={time}
                  key={time}
                  min={detailData.data.daily.temperature_2m_min[index]}
                  max={detailData.data.daily.temperature_2m_max[index]}
                />
              ))
            }
          </ul>
        </div>
        )}
    </div>
  );
};

export default CountryDetail;
