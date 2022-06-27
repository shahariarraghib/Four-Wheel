import { Paper, } from '@mui/material';
import React from 'react';
import topbanner from '../../../Images/topbanner.jpg'

const topbannerStyle = {
    backgroundImage: `url(${topbanner})`,
    height: 800,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: 24,


}


const TopBanner = () => {
    return (
        <Paper style={topbannerStyle} sx={{ borderEndEndRadius: 250, borderStartStartRadius: 250 }}>

        </Paper >
    );
};

export default TopBanner;