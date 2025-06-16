import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ShopList from './pages/ShopList'; 
import Navbar from './components/Navbar'; 

function App() {
  return (
    <Router>
      
      <Navbar  />

      {/* Page content */}
      <div className="pt-[50px] "> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shoplist" element={<ShopList />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
