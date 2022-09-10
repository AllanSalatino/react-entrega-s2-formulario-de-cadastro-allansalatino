import React from 'react';
import { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";
import { Loading } from './style';

const ProtectedRoutes = () => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading><h1>Carregando...</h1></Loading>;
  }

  return user ? (
    <Outlet />
  ) : (
    <Navigate to='/' replace state={{ from: location }} />
  );
};

export default ProtectedRoutes;