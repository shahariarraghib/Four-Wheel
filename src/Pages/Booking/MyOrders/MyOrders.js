import { Box, Button, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";

const MyOrders = () => {
    const [myBookings, setMybooking] = useState([]);
    const { user } = useAuth();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const url = `https://four-wheel-25-06-2022.herokuapp.com/ordersemail?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMybooking(data)
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
                        const remainingUsers = myBookings.filter(myBookings => myBookings._id !== id)
                        setMybooking(remainingUsers);
                    }
                })
        }
    }

    return (
        <>
            <div>

                <Typography variant='h4' sx={{ display: "flex", justifyContent: "center", padding: 5 }}>My Booking List</Typography>
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
                            {myBookings.map((myBooking) => (
                                <TableRow
                                    key={myBooking._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {myBooking._id}
                                    </TableCell>
                                    <TableCell align="left">{myBooking.name}</TableCell>
                                    <TableCell align="left">{myBooking.email}</TableCell>
                                    <TableCell align="left">{myBooking.address}</TableCell>
                                    <TableCell align="left">{myBooking.city}</TableCell>
                                    <TableCell align="left">{myBooking.phone}</TableCell>
                                    {/* <TableCell align="right">{<img src={allBooking.img} alt="" height={100} width={100} />}</TableCell> */}

                                    <TableCell align="left">


                                        <Stack direction="row" spacing={2}>
                                            <Button onClick={() => handleDeleteBooking(myBooking._id)} variant="outlined" color="error" startIcon={<DeleteIcon />}>
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

export default MyOrders;