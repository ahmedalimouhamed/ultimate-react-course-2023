import { Suspense, lazy } from 'react';
import { CitiesProvider } from './contexts/CitiesContext';
import { AuthProvider } from './contexts/FakeAuthContext';
import ProtectedRoute from './pages/ProtectedRoute';

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import CityList from './componnets/CityList';
import City from './componnets/City';
import Form from './componnets/Form';
import CountriesList from './componnets/CountriesList';
import SpinnerFullPage from './componnets/SpinnerFullPage' 


// import Product from './pages/Product'
// import Pricing from './pages/Pricing'
// import HomePage from './pages/HomePage'
// import PageNotFound from './pages/PageNotFound';
// import AppLayout from './pages/AppLayout';
// import Login from './pages/Login';

const Product = lazy(() => import('./pages/Product'));
const Pricing = lazy(() => import('./pages/Pricing'));
const HomePage = lazy(() => import('./pages/HomePage'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));
const AppLayout = lazy(() => import('./pages/AppLayout'));
const Login = lazy(() => import('./pages/Login'));




export default function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage/>}> 
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
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  )
}
