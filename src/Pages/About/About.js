import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import './About.css'
import aboutImg from '../../Images/aboutImg.avif'

const About = () => {
    return (
        <>
            <Box style={{
                minHeight: "100vh",
            }}>

                <Container>

                    <Grid container spacing={2}>
                        <Grid item xs={12} md={10}>
                            <Typography sx={{ fontWeight: "fontWeightBold", fontSize: 42, marginTop: 10 }}>About us</Typography>
                            <Typography sx={{ fontWeight: "fontWeightBold", fontSize: 18, marginBottom: 3, color: 'gray' }}>How the adventure ended will be seen anon. Aouda was anxious,
                                though she said nothing.</Typography>

                            <Typography>As for Passepartout, he thought Mr. Fogg’s manoeuvre simply glorious. The captain had said “between eleven and twelve knots,” and the Henrietta confirmed his prediction. How the adventure ended will be seen anon. Aouda was anxious, though she said nothing. As for Passepartout, he thought Mr. Fogg’s manoeuvre simply glorious. The captain had said.</Typography>
                            <Box sx={{ display: "flex", marginTop: 2, marginLeft: 4 }}>

                                <Box class="hr" >

                                </Box>

                                <Box sx={{ marginLeft: 3, marginTop: 2, display: { xs: { marginTop: 'none' } } }}>
                                    <Typography>During the first days, they went along smoothly enough. The sea was not very unpropitious, the wind seemed stationary in the north-east.</Typography>
                                </Box>

                            </Box>

                            <Typography>As for Passepartout, he thought Mr. Fogg’s manoeuvre simply glorious. The captain had said “between eleven and twelve knots,” and the Henrietta confirmed his prediction. How the adventure ended will be seen anon. Aouda was anxious, though she said nothing. As for Passepartout, he thought Mr. Fogg’s manoeuvre simply glorious. The captain had said.</Typography>
                        </Grid>

                    </Grid>

                    <Grid container spacing={2} sx={{ marginTop: 4 }}>
                        <Grid item xs={12} md={8}>
                            <img style={{ width: "100%", borderRadius: 20 }} src={aboutImg} alt="" />

                        </Grid>


                        <Grid item xs={12} md={4}>
                            <Grid item xs={12} md={12}>
                                <img style={{ width: "100%", borderRadius: 20 }} src={'https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} alt="" />
                                <Grid item xs={12} md={12}>
                                    <img style={{ width: "100%", borderRadius: 20 }} src={'https://images.unsplash.com/photo-1526996292069-fe119340a058?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} alt="" />

                                </Grid>

                            </Grid>


                        </Grid>


                    </Grid>
                </Container>

            </Box >
        </>
    );
};

export default About;