
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar'; 
import ProductEditor from './ProductEditor'; 
import ProductGrid from './ProductGrid';

export default function AdminRoutes() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <Routes>
        <Route path="home" element={<ProductEditor />} />
        <Route path="grid" element={<ProductGrid />} />

      </Routes>
    </div>
  );
}
