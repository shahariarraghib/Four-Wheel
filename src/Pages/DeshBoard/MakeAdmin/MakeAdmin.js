import { Alert, Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';


const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false)

    const { token } = useAuth()

    const handleOnBlur = evevt => {
        setEmail(evevt.target.value);
        // console.log(evevt.target.value)
    }
    const handleAdminSubmit = evevt => {
        const user = { email };
        // console.log(user)
        fetch('https://four-wheel-25-06-2022.herokuapp.com/userInfo/admin', {
            method: 'PUT',
            headers: {
                // jwt token Bearer nam ta change kore dite hobe for sicurity 

                'authorization': `Bearer ${token}`,

                'content-type': 'application/json'

            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    // console.log(data)
                    setSuccess(true)

                }

            })

        evevt.preventDefault();
    }
    return (

        <Container style={{
            minHeight: "100vh",
        }}>
            <Box >
                <Typography sx={{ fontWeight: "fontWeightBold", fontSize: 18, marginBottom: 3, color: 'gray' }} >You Can Make Admin</Typography>
                <form onSubmit={handleAdminSubmit}>
                    <TextField
                        sx={{ width: '25%', mb: 5 }}
                        id="standard-basic"
                        label="Email"
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <br />
                    <Button sx={{ backgroundColor: "#ec5990", ":hover": { backgroundColor: '#bf1650', } }} type='submit' variant="contained" style={{ width: '25%', borderRadius: 15 }}>Make Admin</Button>

                </form>
                {
                    success && <Alert severity="success">Make Admin Successfully</Alert>}
            </Box>
        </Container>

    );
};

export default MakeAdmin;