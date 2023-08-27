import styles from './Map.module.css';
import PropTypes from 'prop-types';
import {MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents} from 'react-leaflet';
import { useCities } from '../contexts/CitiesContext';
import {useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useGeolocation } from '../hooks/useGeoLocation';
import Button from './Button';
import { useUrlPosition } from '../hooks/useUrlPosition';

export default function Map() {
  const {cities} = useCities();
  const [mapPosition, setMapPosition] = useState([40, 0]);

  const [mapLat, mapLng] = useUrlPosition();

  const {isLoading: isLoadingPodition, position: geoLocationPosition, getPosition} = useGeolocation();

  useEffect(function(){
    if(mapLat && mapLng) setMapPosition([mapLat, mapLng]);
  }, [mapLat, mapLng]);

  useEffect(function(){
    if(geoLocationPosition) setMapPosition([geoLocationPosition.lat, geoLocationPosition.lng]);
  }, [geoLocationPosition]);

  return (
    <div className={styles.mapContainer}>
      {!geoLocationPosition && (<Button type='position' onClick={getPosition}>
        {isLoadingPodition? 'Loading...' : 'Use Your Position'}
      </Button>)}
      <MapContainer center={mapPosition}  zoom={6} scrollWheelZoom={true} className={styles.mapContainer}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map(city => 
          (
          <>
            <Marker position={[city.position.lat, city.position.lng]} key={city.id}>
              <Popup>
                <span>{city.emoji}</span><span>{city.cityName}</span>
              </Popup>
            </Marker>
          </>
          )
        )}
        <ChangeCenter position={mapPosition}/>
        <DetectClick/>
      </MapContainer>
    </div>
  )
}

ChangeCenter.propTypes = {
  position: PropTypes.array.isRequired,
};

function ChangeCenter({position}){
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick(){
  const navigate = useNavigate();

  useMapEvents({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`)
  })
}
