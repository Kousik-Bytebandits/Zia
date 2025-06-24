import './App.css';
import './index.css';
import { Routes, Route, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import ShopList from './pages/ShopList';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import ShopDetails from './pages/ShopDetails';
import AboutUs from './pages/AboutUs';
import ErrorPage from './pages/ErrorPage';
import OrderTracking from './pages/OrderTracking';
import ContactUs from './pages/ContactUs';
import Faq from './pages/Faq';
import StartScreen from './pages/StartScreen';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  const location = useLocation();
  const hideNavbarRoutes = ['/', '/login', '/signup'];

  return (
    <>
      <ScrollToTop />
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}

      <div className={!hideNavbarRoutes.includes(location.pathname) ? 'pt-[50px]' : ''}>
        <Routes>
          <Route path="/" element={<StartScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shoplist" element={<ShopList />} />
          <Route path="/shopdetails" element={<ShopDetails />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/ordertracking" element={<OrderTracking />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
