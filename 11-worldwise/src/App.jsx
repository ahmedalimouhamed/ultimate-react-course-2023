import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Product from './pages/Product'
import Pricing from './pages/Pricing'
import HomePage from './pages/HomePage'
import PageNotFound from './pages/PageNotFound';
import AppLayout from './pages/AppLayout';
import Login from './pages/Login';
import CityList from './componnets/CityList';
import City from './componnets/City';
import Form from './componnets/Form';
import { useState } from 'react';
import { useEffect } from 'react';
import CountriesList from './componnets/CountriesList';
const BASE_URL = 'http://localhost:8000';
export default function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function(){
    async  function fetchCities(){
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        console.log(data); // Check the type of data here
        setCities(data);
      } catch {
        alert('there was an error loading data');
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path="product" element={<Product/>}/>
        <Route path="pricing" element={<Pricing/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="app" element={<AppLayout/>}>
          <Route index element={<Navigate replace to='cities'/>}/>
          <Route path='cities' element={<CityList cities={cities} isLoading={isLoading}/>}/>
          <Route path='cities/:id' element={<City/>}/>
          <Route path='countries' element={<CountriesList cities={cities} isLoading={isLoading}/>}/>
          <Route path='form' element={<Form />}/>
        </Route>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}
