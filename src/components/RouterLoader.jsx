// src/components/RouteLoader.jsx
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "./Loader";

export default function RouteLoader({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 900); // simulate page load delay
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return loading ? <Loader /> : children;
}
