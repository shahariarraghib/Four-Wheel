import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ProductsCard from '../ProductsCard/ProductsCard';
import './ShowCard.css'

const ShowCardProducts = () => {
    const [products, setProducts] = useState([]);

    const [pageCount, setPagecount] = useState(0);
    const [page, setPage] = useState(0);

    const size = 6;


    useEffect(() => {
        fetch(`https://four-wheel-25-06-2022.herokuapp.com/products?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.result)

                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setPagecount(pageNumber);


            })


    }, [page])




    // .from(Array(6))
    return (
        <>

            <Container>
                <Box>
                    <Typography variant='h5' fontWeight='bold' color="#bf1650" sx={{ paddingLeft: 3, marginTop: 8 }}>
                        Handy picked
                    </Typography >
                    <Typography variant='h2' color="black" sx={{ paddingLeft: 3, marginBottom: 5 }} fontWeight='bold'>
                        Featured Listings
                    </Typography>
                </Box>

                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {products.map((product) => (

                            <Grid item xs={12} sm={4} md={4}>
                                <ProductsCard
                                    key={product._id}
                                    product={product}
                                ></ProductsCard>
                            </Grid>


                        ))}





                    </Grid>

                    <Box sx={{ display: "flex", justifyContent: "flex-end", marginBottom: 2 }} class="pagination">
                        {
                            [...Array(pageCount).keys()].map(number => < button
                                className={number === page ? 'selected' : ''}
                                key={number}
                                onClick={() => setPage(number)}

                            >{number + 1}</button>)

                        }
                    </Box>







                </Box>



            </Container >


        </>
    );
};

export default ShowCardProducts;