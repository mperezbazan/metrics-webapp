import PropTypes from 'prop-types';

const Country = ({ item, fullwidth }) => {
  const { country, data, alpha2 } = item;
  return (
    <div className={`country-container ${fullwidth && 'fullwidth'}`}>
      <img src={`https://flagcdn.com/144x108/${alpha2.toLowerCase()}.png`} alt="" className="country-flag" />
      <div className="country-content">
        <p className="country-title">{country}</p>
        <p className="country-temperature">
          {`${data.current_weather.temperature}°C`}
        </p>
      </div>
    </div>
  );
};

Country.defaultProps = {
  fullwidth: false,
};

Country.propTypes = {
  item: PropTypes.shape().isRequired,
  fullwidth: PropTypes.bool,
};

export default Country;
