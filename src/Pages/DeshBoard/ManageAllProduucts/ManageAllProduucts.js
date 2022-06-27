import { Box, Button, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";
import './ManageAllProducts.css'
const ManageAllProduucts = () => {
    const [products, setProducts] = useState([]);
    const [isLoadinga, setIsLoding] = useState(true);
    useEffect(() => {
        fetch('https://four-wheel-25-06-2022.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.result))
        setIsLoding(false);
    }, [])



    // delete operation
    const handleDeleteUser = id => {
        const proceed = window.confirm("Are you sure, You want to delete ?");
        if (proceed) {
            const url = `https://four-wheel-25-06-2022.herokuapp.com/products/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire('Product Delete Succesfully')
                        const remainingUsers = products.filter(products => products._id !== id)
                        setProducts(remainingUsers);
                    }
                })
        }
    }

    return (
        <>
            <Typography sx={{ display: "flex", justifyContent: "center" }} variant="h4">Manage All Produucts</Typography>

            <hr />

            <Box sx={{ minWidth: 900 }}>
                <TableContainer component={Paper} sx={{ marginTop: 5 }}>
                    <Table aria-label="simple table" >
                        <TableHead>
                            <TableRow>
                                <TableCell>Package Id</TableCell>
                                <TableCell align="left">name</TableCell>
                                <TableCell align="left">Description</TableCell>
                                <TableCell align="left" >price</TableCell>
                                <TableCell align="left" >img Url</TableCell>
                                <TableCell align="left">Image</TableCell>
                                <TableCell align="left">Delete Button</TableCell>
                                <TableCell align="left">Update Button</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {products.map((product) => (
                                <TableRow
                                    key={product._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {product._id}
                                    </TableCell>
                                    <TableCell align="left">{product.name}</TableCell>
                                    <TableCell align="left">{product.description}</TableCell>
                                    <TableCell align="left">{product.price}</TableCell>
                                    <TableCell align="left">{product.img}</TableCell>
                                    <TableCell align="left" >{<img src={product.img} alt="" height={100} width={100} />}</TableCell>
                                    <TableCell align="left">

                                        <Link to={`/dashboard/updateproduct/${product._id}`} style={{ textDecoration: 'none' }}>

                                            <Stack direction="row" spacing={2}>
                                                {/* backgroundColor:hover: "#bf1650" */}
                                                <Button variant="contained" sx={{ backgroundColor: "#ec5990", ":hover": { backgroundColor: '#bf1650' } }}>Update</Button></Stack></Link>

                                    </TableCell>
                                    <TableCell align="right">


                                        <Stack direction="row" spacing={2}>
                                            <Button variant="contained" sx={{ backgroundColor: "#ec5990", ":hover": { backgroundColor: '#bf1650' } }} onClick={() => handleDeleteUser(product._id)} startIcon={<DeleteIcon />}>
                                                Delete
                                            </Button>

                                        </Stack>

                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                </TableContainer>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
                {isLoadinga && < div class="balls">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                }
            </Box>
        </>
    );
};

export default ManageAllProduucts;