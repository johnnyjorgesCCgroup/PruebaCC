import React from 'react';
import { Route,Routes, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import IndexCategory from '../views/Category/Index';
import IndexSubCategory from '../views/SubCategory/index';
import IndexProduct from '../views/Product/index';
import IndexUser from '../views/User/index';

const ProtectedRoutes = () => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    // Si el usuario no está autenticado, redirige a la página de inicio de sesión
    return <Navigate to="/login" />;
  }

  return (
    <Routes>
    <Route path="/" element={<IndexProduct />} />
    <Route path="/category" element={<IndexCategory />}  />
    <Route path="/subcategory" element={<IndexSubCategory />} />
    <Route path="/user" element={<IndexUser />} />
    </Routes>
  );
};

export default ProtectedRoutes;