import React from 'react';
import useAuth from '../../../../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import useFireBase from '../../../../Hooks/useFireBase';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useFireBase()
    console.log(user)
    let location = useLocation();
    if (isLoading) { return <CircularProgress /> }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;