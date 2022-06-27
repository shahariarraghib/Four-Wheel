import React from 'react';
import { CircularProgress } from '@mui/material';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const AdminRoute = ({ children }) => {
    const { user, admin, isLoading } = useAuth();
    console.log(user, admin)
    const location = useLocation();
    if (isLoading) { return <CircularProgress /> }
    if (user.email && admin) {
        return children;
    }
    return <Navigate to="/home" state={{ from: location }} />;
};

export default AdminRoute;