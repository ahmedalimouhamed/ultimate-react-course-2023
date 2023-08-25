import Spinner from './Spinner'
import styles from './CityList.module.css';
import CityItem from './CityItem';
import Message from './Message';
import PropTypes from 'prop-types';

CityList.propTypes = {
  cities: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default function CityList({cities, isLoading}) {
  //console.log(cities, isLoading);
  if(isLoading) return <Spinner/>

  if(!cities.length) return <Message message='Add Your first city by clicking on a city in the map'/>

  return (
    <ul className={styles.cityList}>
      {cities.map(city => <CityItem city={city} key={city}/>)}
    </ul>
  )
}
