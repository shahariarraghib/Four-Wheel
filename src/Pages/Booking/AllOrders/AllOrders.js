
import { Box, Button, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';

import './AllOrder.css'
const AllOrders = () => {
    const [allBookings, setAllBooking] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { user } = useAuth();

    useEffect(() => {
        fetch('https://four-wheel-25-06-2022.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                setAllBooking(data)
                setIsLoading(false)
            })
    }, [])

    const handleDeleteBooking = id => {
        const proceed = window.confirm("Are you sure, You want to delete ?");
        if (proceed) {
            const url = `https://four-wheel-25-06-2022.herokuapp.com/orders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire('Order  Delete Successfully')
                        const remainingUsers = allBookings.filter(allBookings => allBookings._id !== id)
                        setAllBooking(remainingUsers);
                    }
                })
        }
    }

    return (
        <>
            <div>

                <Typography variant='h4' sx={{ display: "flex", justifyContent: "center", padding: 5 }}>All Bookings List</Typography>
                <hr></hr>

                <TableContainer component={Paper} >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Package Id</TableCell>
                                <TableCell align="left">name</TableCell>
                                <TableCell align="left">Email Address</TableCell>
                                <TableCell align="left">Address</TableCell>
                                <TableCell align="left">City</TableCell>
                                <TableCell align="left">Mobile Number</TableCell>
                                <TableCell align="left">Delete Order</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {allBookings.map((allBooking) => (
                                <TableRow


                                    key={allBooking._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {allBooking._id}
                                    </TableCell>
                                    <TableCell align="left">{allBooking.name}</TableCell>
                                    <TableCell align="left">{allBooking.email}</TableCell>
                                    <TableCell align="left">{allBooking.address}</TableCell>
                                    <TableCell align="left">{allBooking.city}</TableCell>
                                    <TableCell align="left">{allBooking.phone}</TableCell>
                                    {/* <TableCell align="right">{<img src={allBooking.img} alt="" height={100} width={100} />}</TableCell> */}

                                    <TableCell align="left">


                                        <Stack direction="row" spacing={2}>
                                            <Button onClick={() => handleDeleteBooking(allBooking._id)} variant="outlined" color="error" startIcon={<DeleteIcon />}>
                                                Delete Order
                                            </Button>

                                        </Stack>
                                    </TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Box sx={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
                    {isLoading && < div class="balls">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    }
                </Box>
            </div>
        </>
    );
};

export default AllOrders;