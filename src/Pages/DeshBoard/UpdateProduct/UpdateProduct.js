import { Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './UpdateProducts.css'

const UpdateProduct = () => {
    const { id } = useParams();
    const [products, setProducts] = useState({});
    console.log(products)

    useEffect(() => {
        const url = `https://four-wheel-25-06-2022.herokuapp.com/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data)
            });
    }, [])




    const handleUpdateUser = event => {

        const url = `https://four-wheel-25-06-2022.herokuapp.com/products/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(products)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert("update Successfully")
                    setProducts({})
                }
            })

        event.preventDefault();
    }

    const handleNameChanage = event => {
        const updateName = event.target.value;
        const updateUser = {
            name: updateName, description: products.description, price: products.price, img:
                products.img
        }
        setProducts(updateUser);
    }

    const handleDescriptionChanage = event => {
        const updateDescription = event.target.value;
        const updateUser = {
            description: updateDescription, name: products.name, price: products.price, img:
                products.img
        }
        setProducts(updateUser);
    }

    const handlePriceChanage = event => {
        const updatePrice = event.target.value;
        const updateUser = {
            price: updatePrice, name: products.name, description: products.description, img:
                products.img
        }
        setProducts(updateUser);
    }

    const handleImgChanage = event => {
        const updateImg = event.target.value;
        const updateUser = { img: updateImg, price: products.price, name: products.name, description: products.description, }
        setProducts(updateUser);
    }
    return (
        <>

            <Container>
                <div class="formstyle">
                    <Typography variant='h4' sx={{ display: "flex", justifyContent: "center", padding: 5 }}>Update Package Info</Typography>
                    <Typography sx={{ display: "flex", justifyContent: "center", }}>Package ID: {id}</Typography>
                    <hr />
                    <form onSubmit={handleUpdateUser} className='d-flex justify-content-center p-5'>

                        <input type="text" onChange={handleNameChanage} value={products.name || ''} placeholder='Name' />
                        <textarea type="text" onChange={handleDescriptionChanage} value={products.description || ''} placeholder='Description' />
                        <input type="text" onChange={handlePriceChanage} value={products.price || ''} placeholder='Price' />
                        <input type="text" onChange={handleImgChanage} value={products.img || ''} placeholder='Image Url' />
                        <input type="submit" value="Update" />
                    </form>
                </div>
            </Container>
        </>
    );
};

export default UpdateProduct;