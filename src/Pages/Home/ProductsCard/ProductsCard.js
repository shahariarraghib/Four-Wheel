import { Box, Button, Container } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductsCard = (props) => {
    const { name, img, description, price, _id } = props.product;
    return (
        <Container sx={{ mt: 1, mb: 5, }}>
            <Card sx={{ maxWidth: 500, borderRadius: 5 }} style={{ minHeight: 400, background: 'linear-gradient(to bottom,#ffebee, #ffcdd2)' }}>
                <CardActionArea >
                    <CardMedia
                        component="img"
                        height="200"
                        image={img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" color="black">
                            {name}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div" color="#bf1650" fontWeight='bold'>
                            <span>$</span><span>{price}</span>
                        </Typography>
                        <Typography variant="body2" color="gray">
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>

            </Card>
            <Box sx={{ mt: -4.5, width: '100%', }} >
                <Link style={{ textDecoration: 'none' }} to={`/booking/${_id}`}><Box><Button sx={{ backgroundColor: "#ec5990", ":hover": { backgroundColor: '#bf1650', } }} style={{ width: '100%', borderRadius: 15 }} variant="contained">Buy Now</Button></Box></Link>
            </Box>

        </Container>
    );
};

export default ProductsCard;