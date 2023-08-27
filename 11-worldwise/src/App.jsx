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
import CountriesList from './componnets/CountriesList';
import { CitiesProvider } from './contexts/CitiesContext';
import { AuthProvider } from './contexts/FakeAuthContext';
import ProtectedRoute from './pages/ProtectedRoute';


export default function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage/>}/>
            <Route path="product" element={<Product/>}/>
            <Route path="pricing" element={<Pricing/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="app" element={<ProtectedRoute><AppLayout/></ProtectedRoute>}>
              <Route index element={<Navigate replace to='cities'/>}/>
              <Route path='cities' element={<CityList/>}/>
              <Route path='cities/:id' element={<City/>}/>
              <Route path='countries' element={<CountriesList/>}/>
              <Route path='form' element={<Form />}/>
            </Route>
            <Route path="*" element={<PageNotFound/>}/>
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  )
}
