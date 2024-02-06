import { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import IndexCategory from '../views/Category/Index';
import IndexSubCategory from '../views/SubCategory/index';
import IndexProduct from '../views/Product/index';
import IndexUser from '../views/User/index';
import IndexTicket from '../views/Ticket/index';
import IndexWorker from '../views/Worker/Index';
import IndexWarehouse from '../views/Warehouse/Index';
import IndexHooks from '../views/Hooks/Index';
import './ProtectedRoutes.css'


const ProtectedRoutes = () => {
  const { isLoggedIn } = useAuth();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setAuthChecked(true);
    };

    checkAuth();
  }, []);

  if (!authChecked) {
    return <div className='Cargando1' style={{ color: '#00FF88' }}>
    Cargando<span className='DotAnimation'>.</span>
  </div>;
  }

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <Routes>
      <Route path="/" element={<IndexProduct />} />
      <Route path="/category" element={<IndexCategory />} />
      <Route path="/subcategory" element={<IndexSubCategory />} />
      <Route path="/user" element={<IndexUser />} />
      <Route path="/ticket" element={<IndexTicket />} />
      <Route path="/worker" element={<IndexWorker />} />
      <Route path="/warehouse" element={<IndexWarehouse />} />
      <Route path="/hooks" element={<IndexHooks />} />
    </Routes>
  );
};

export default ProtectedRoutes;
