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
import ContactUs from './pages/ContactUs';
import Faq from './pages/Faq';
import StartScreen from './pages/StartScreen';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ShopCart from './pages/ShopCart';
import OrderTracking from './pages/OrderTracking';
import DisclaimerPage from './pages/Disclaimer';
import CookiePolicyPage from './pages/CookiesPolicy';
import LegalCompliancePage from './pages/LegalComplaince';
import PrivacyPolicyPage from './pages/PrivacyPolicy';
import ReturnRefundPolicyPage from './pages/ReturnRefundPolicy';
import ShippingPolicyPage from './pages/ShippingPolicy';
import TermsAndConditionsPage from './pages/TermsCondition';
import RouteLoader from './components/RouterLoader';
import { ToastContainer } from 'react-toastify';
function App() {
  const location = useLocation();
  const hideNavbarRoutes = ['/startscreen', '/login', '/signup'];

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
        <RouteLoader>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/startscreen" element={<StartScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
          <Route path="/shoplist" element={<ShopList />} />
          <Route path="/shopdetails/:productId" element={<ShopDetails />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/shopcart" element={<ShopCart />} />
          <Route path="/order-tracking" element={<OrderTracking />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
<Route path="/cookie-policy" element={<CookiePolicyPage />} />
<Route path="/legal-compliance" element={<LegalCompliancePage />} />
<Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
<Route path="/return-refund-policy" element={<ReturnRefundPolicyPage />} />
<Route path="/shipping-policy" element={<ShippingPolicyPage />} />
<Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />


          

          {/* 404 */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        </RouteLoader>
          
      </div>
       <ToastContainer position="top-right" />
    </>
  );
}

export default App;
