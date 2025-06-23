import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ShopList from './pages/ShopList'; 
import Navbar from './components/Navbar'; 
import ScrollToTop from './components/ScrollToTop';
import ShopDetails from './pages/ShopDetails';
import AboutUs from './pages/AboutUs';
import ErrorPage from './pages/ErrorPage';
import OrderTracking from './pages/OrderTracking';
import ContactUs from './pages/ContactUs';


function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar  />

      {/* Page content */}
      <div className="pt-[50px] "> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shoplist" element={<ShopList />} />
          <Route path="/shopdetails" element={<ShopDetails/>}/>
          <Route path="/about" element={<AboutUs/>}/>
         <Route path='/contactus' element={<ContactUs/>}/>
          <Route path='/ordertracking' element={<OrderTracking/>}/>
           <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
