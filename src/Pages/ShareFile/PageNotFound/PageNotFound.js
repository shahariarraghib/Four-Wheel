import { Container } from '@mui/material';
import React from 'react';
import pagenotfound from '../../../Images/2696450.jpg'
const PageNotFound = () => {
    return (
        <Container style={{
            minHeight: "100vh",
        }}>

            <img style={{ width: '100%', marginTop: 5 }} src={pagenotfound} alt="" />

        </Container>
    );
};

export default PageNotFound;