import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Wide from "../../../Images/43814.jpg"
import Trusted from "../../../Images/high-five.png"
import easyfinancing from "../../../Images/operation.png"
const WhyChooseUS = () => {
    return (
        <Box style={{ backgroundColor: '#ffebee', paddingBottom: 10 }} >
            <Container sx={{ marginBottom: 5 }}>
                <Typography variant='h4' fontWeight='bold' textAlign="center" sx={{ marginTop: 5, paddingTop: 5, }} >
                    Why choose us?
                </Typography>
                <Grid container spacing={2} sx={{ marginTop: 5 }}>
                    <Grid item xs={12} md={4} >

                        <Card sx={{ maxWidth: 'auto', border: 0, boxShadow: 0, m: 0, borderRadius: 5 }}>
                            <CardMedia
                                component="img"
                                style={{ width: 'auto', height: '100px', margin: '0 auto', padding: 20 }}
                                image={Wide}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" textAlign="center">
                                    Wide range of brands
                                </Typography>
                                <Typography variant="body2" color="text.secondary" textAlign="center">
                                    We can help with your financing plan, we can offer some tips and tricks. Drive off with this dream car of yours regardless of your credit history.
                                </Typography>
                            </CardContent>

                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card sx={{ maxWidth: 'auto', border: 0, boxShadow: 0, m: 0, borderRadius: 5 }}>
                            <CardMedia
                                component="img"
                                style={{ width: 'auto', height: '100px', margin: '0 auto', padding: 20 }}
                                image={Trusted}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" textAlign="center">
                                    Trusted by our clients
                                </Typography>
                                <Typography variant="body2" color="text.secondary" textAlign="center">
                                    We can help with your financing plan, we can offer some tips and tricks. Drive off with this dream car of yours regardless of your credit history.
                                </Typography>
                            </CardContent>

                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card sx={{ maxWidth: 'auto', border: 0, boxShadow: 0, m: 0, borderRadius: 5 }}>
                            <CardMedia
                                component="img"
                                style={{ width: 'auto', height: '100px', margin: '0 auto', padding: 20 }}
                                image={easyfinancing}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" textAlign="center">
                                    Fast & easy financing
                                </Typography>
                                <Typography variant="body2" color="text.secondary" textAlign="center">
                                    We can help with your financing plan, we can offer some tips and tricks. Drive off with this dream car of yours regardless of your credit history.
                                </Typography>
                            </CardContent>

                        </Card>
                    </Grid>

                </Grid>
            </Container >
        </Box>
    );
};

export default WhyChooseUS;