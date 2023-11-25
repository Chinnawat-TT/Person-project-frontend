import React from 'react'
import { useAuth } from '../../hooks/use-Auth';
import { Navigate } from 'react-router-dom';

export default function RedirectLogin({children}) {
    const { authUser } = useAuth();
    if (authUser) {
        
        return <Navigate to="/" />;
      }
      return children;
  
}
