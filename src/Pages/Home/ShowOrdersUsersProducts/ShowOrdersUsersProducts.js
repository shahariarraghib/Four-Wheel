import { CardContent, CardMedia, Container, Grid, Typography, Card } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import usersimg from '../../../Images/ancestors.png'
import completedtask from '../../../Images/completed-task.png'
import productsimg from '../../../Images/box.png'
import './ShowOrder.css'

const ShowOrdersUsersProducts = () => {
    const [products, setProducts] = useState([]);
    const [allBookings, setAllBooking] = useState([]);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://four-wheel-25-06-2022.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.result))
    }, [])


    useEffect(() => {
        fetch('https://four-wheel-25-06-2022.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                setAllBooking(data)

            })
    }, [])


    useEffect(() => {
        fetch('https://four-wheel-25-06-2022.herokuapp.com/userInfo')
            .then(res => res.json())
            .then(data => {
                setUsers(data)

            })
    }, [])

    return (

        <>
            <Container >
                <Grid container spacing={2} sx={{ marginTop: 5 }}>
                    <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center", }}>

                        <Box >
                            <Box id="a" class="inversePair">
                                <CardMedia
                                    component="img"

                                    style={{ width: 'auto', height: '80px', margin: '0 auto', padding: 10, borderRadius: "50%" }}
                                    image={productsimg}
                                    alt="green iguana"
                                />
                            </Box>

                            <Box id="b" class="inversePair">

                                <Box >

                                    <CountUp end={products.length} redraw={true} h >

                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall >
                                                <span ref={countUpRef} style={{ color: "white", fontSize: 50, fontWeight: 800 }} />

                                            </VisibilitySensor>
                                        )}

                                    </CountUp>

                                </Box>

                            </Box>

                        </Box>


                    </Grid>
                    <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center", }}>

                        <Box >
                            <Box id="a" class="inversePair">
                                <CardMedia
                                    component="img"

                                    style={{ width: 'auto', height: '80px', margin: '0 auto', padding: 10, borderRadius: "50%" }}
                                    image={completedtask}
                                    alt="green iguana"
                                />
                            </Box>

                            <Box id="b" class="inversePair">
                                <Box >
                                    <CountUp end={allBookings.length} redraw={true} >
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall >
                                                <span ref={countUpRef} style={{ color: "white", fontSize: 50, fontWeight: 800 }} />

                                            </VisibilitySensor>
                                        )}
                                    </CountUp>

                                </Box>

                            </Box>
                        </Box>


                    </Grid>

                    <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center", }}>

                        <Box >
                            <Box id="a" class="inversePair">
                                <CardMedia
                                    component="img"

                                    style={{ width: 'auto', height: '80px', margin: '0 auto', padding: 10, borderRadius: "50%" }}
                                    image={usersimg}
                                    alt="green iguana"
                                />
                            </Box>

                            <Box id="b" class="inversePair">
                                <Box >
                                    <CountUp end={users.length} redraw={true} >
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall >
                                                <span ref={countUpRef} style={{ color: "white", fontSize: 50, fontWeight: 800 }} />

                                            </VisibilitySensor>
                                        )}
                                    </CountUp>

                                </Box>

                            </Box>
                        </Box>


                    </Grid>

                </Grid>

            </Container>
        </>

    );
};

export default ShowOrdersUsersProducts;