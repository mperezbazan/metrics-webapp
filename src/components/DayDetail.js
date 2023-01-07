import PropTypes from 'prop-types';

const DayDetail = ({ time, min, max }) => (
  <li className="day-container">
    <p className="day-date">{time}</p>
    <p className="day-temperature">{ `${min} °C / ${max} °C` }</p>
  </li>
);

DayDetail.propTypes = {
  time: PropTypes.string.isRequired,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
};
export default DayDetail;
