import {  Routes, Route } from 'react-router-dom';
import Contact from './pages/contact';
import Hero from './molecules/hero';
import NewLaunch from './pages/newLaunch';
import Product from './pages/product';
import BuyNow from './pages/buyNow';


export const MyRoutes = () => (
  <Routes> 
<Route path="/" element={<Hero/>} />
<Route path="/product" element={<Product />} />
<Route path="/newlaunch" element={<NewLaunch />} />
<Route path="/contact" element={<Contact />} />
<Route path="/buyNow" element={<BuyNow />} />
</Routes>

);