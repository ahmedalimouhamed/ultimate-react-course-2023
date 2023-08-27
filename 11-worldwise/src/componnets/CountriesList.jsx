import Spinner from './Spinner'
import styles from './CountryList.module.css';
import CountryItem from './CountryItem';
import Message from './Message';
import PropTypes from 'prop-types';
import { useCities } from '../contexts/CitiesContext';

CountriesList.propTypes = {
  cities: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default function CountriesList() {

  const {cities, isLoading} = useCities();

  //console.log(cities, isLoading);
  if(isLoading) return <Spinner/>

  if(!cities.length) return <Message message='Add Your first city by clicking on a city in the map'/>

  const countries= cities.reduce((arr, city) => {
    if(!arr.map(el => el.country).includes(city.country)) 
      return [...arr, {country: city.country, emoji:city.emoji}];
    else
      return arr;
  }, [])
  return (
    <ul className={styles.countryList}>
      {countries.map(country => <CountryItem country={country} key={country}/>)}
    </ul>
  )
}
