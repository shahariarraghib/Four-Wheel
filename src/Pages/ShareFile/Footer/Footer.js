import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';

import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import { Link } from "react-router-dom";
import faceBook from '../../../Images/facebook-logo.png'
import email from '../../../Images/email.png'
import lIn from '../../../Images/linkedin.png'

const Footer = () => {
    return (

        <Box sx={{ backgroundColor: "#ffebee" }}>
            <Container sx={{ marginTop: 5, padding: 5 }}>

                <Grid container spacing={2}>

                    <Grid item xs={12} md={3}>
                        <Box sx={{ display: "flex", justifyContent: "center", }}>
                            <DirectionsCarFilledIcon sx={{ display: { md: 'flex', fontSize: 40, color: '#f44336' }, mr: 1, }}></DirectionsCarFilledIcon>
                            <Typography variant='h4' sx={{ fontWeight: 'bold', }}>Four Wheel</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography variant='h6' sx={{ fontWeight: 'bold', }}>Important Links</Typography>
                        <Box>
                            <Link to="/home" style={{ textDecoration: 'none', }}>

                                <Button


                                    sx={{ my: 2, color: 'black', display: 'block', m: 1 }}

                                >
                                    Home
                                </Button>
                            </Link>

                            <Link to="/about" style={{ textDecoration: 'none', }}>

                                <Button


                                    sx={{ my: 2, color: 'black', display: 'block', m: 1 }}
                                >
                                    about
                                </Button>
                            </Link>

                            <Link to="/dashboard" style={{ textDecoration: 'none', }}>

                                <Button


                                    sx={{ my: 2, color: 'black', display: 'block', m: 1 }}
                                >
                                    Deshboard
                                </Button>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography variant='h6' sx={{ fontWeight: 'bold', }}>ABOUT US</Typography>
                        <Typography >
                            Award-winning, family owned dealership of new and pre-owned vehicles with several locations across the city. Lowest prices and the best customer service guaranteed.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={3} >
                        <Typography variant='h6' sx={{ fontWeight: 'bold', }}>CONTACT</Typography>
                        <Box >
                            <Typography>
                                +8801689797288
                            </Typography>
                            <Typography>
                                sr.raghib@gmail.com
                            </Typography>
                            <Typography>
                                Tejgaon,Dhaka
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <hr />
                <Box sx={{ display: "flex", justifyContent: "center", }}>

                    <Box flexGrow={1}>
                        <Box sx={{ marginTop: 2 }}>
                            <small>Copyright © 2022. All rights reserved. Shahariar</small>
                        </Box>
                    </Box>
                    <Box>
                        <Box sx={{ display: "flex", justifyContent: "center", }}>
                            <Box>
                                <a href="https://www.facebook.com/shahariar.raghib/" target="_blank" > <img style={{ width: 'auto', height: '40px', margin: '0 auto', padding: 10, borderRadius: "50%" }} src={faceBook} alt="" /> </a>
                            </Box>
                            <Box>
                                <a href="https://mail.google.com/" target="_blank" > <img style={{ width: 'auto', height: '40px', margin: '0 auto', padding: 10, borderRadius: "50%" }} src={email} alt="" /> </a>
                            </Box>
                            <Box >
                                <a href="https://www.linkedin.com/in/shahariar-bhuiyan-2a6b04130/" target="_blank" > <img style={{ width: 'auto', height: '40px', margin: '0 auto', padding: 10, borderRadius: "50%" }} src={lIn} alt="" /> </a>
                            </Box>


                        </Box>
                    </Box>

                </Box>


            </Container>
        </Box >
    );
};

export default Footer;