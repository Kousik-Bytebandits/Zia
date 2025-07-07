import './App.css';
import './index.css';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Profile from './pages/Profile';
import ShopList from './pages/ShopList';
import ShopDetails from './pages/ShopDetails';
import AboutUs from './pages/AboutUs';
import ErrorPage from './pages/ErrorPage';
import OrderTracking from './pages/OrderTracking';
import ContactUs from './pages/ContactUs';
import Faq from './pages/Faq';
import StartScreen from './pages/StartScreen';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ShopCart from './pages/ShopCart';
import AdminRoutes from './admin panel/AdminRoutes';

function App() {
  const location = useLocation();
  const hideNavbarRoutes = ['/startscreen', '/login', '/signup','/admin/home', '/admin/grid'];

  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem('accessToken')
  );

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    setIsAuthenticated(!!token);
  }, [location]);

  return (
    <>
      <ScrollToTop />
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <div className={!hideNavbarRoutes.includes(location.pathname) ? 'pt-[50px]' : ''}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/startscreen" element={<StartScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
          <Route path="/shoplist" element={<ShopList />} />
          <Route path="/shopdetails" element={<ShopDetails />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/ordertracking" element={<OrderTracking />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/shopcart" element={<ShopCart />} />

          {/* Admin Route  */}
          <Route path="/admin/*" element={<AdminRoutes />} />

          {/* 404 */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
