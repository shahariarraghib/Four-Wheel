import { Container, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';

const Booking = () => {
    const { id } = useParams();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();

    const onSubmit = data => {


        fetch('https://four-wheel-25-06-2022.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    Swal.fire('Order Placed Successfully')

                    reset();
                }
            })
        console.log(data)
    };
    return (
        <>
            <Container style={{
                minHeight: "100vh"
            }}>
                <Typography variant='h4' sx={{ display: "flex", justifyContent: "center", padding: 5 }}>Place Your Order</Typography>


                <div class="formstyle">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input defaultValue={id} {...register("productId")} />
                        <input defaultValue={user.displayName} {...register("name")} />
                        <input defaultValue={user.email} {...register("email", { required: true })} />
                        {errors.email && <span className="error">This field is required</span>}
                        <input placeholder="Address" defaultValue="" {...register("address")} />
                        <input placeholder="City" defaultValue="" {...register("city")} />
                        <input placeholder="phone number" defaultValue="" {...register("phone")} />

                        <input type="submit" />
                    </form>
                </div>
            </Container>
        </>
    );
};

export default Booking;