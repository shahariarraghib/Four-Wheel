import { Alert, Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import registrationImg from '../../../Images/Mobile-login.jpg'
import CircularProgress from '@mui/material/CircularProgress';

const Register = () => {

    const [loginData, setLoginData] = useState({})
    const { registerUser, isLoading, user, authError
    } = useAuth()

    const handleLoginSubmit = event => {

        if (loginData.password !== loginData.password2) {
            alert('Password did not match');
            return
        }

        registerUser(loginData.email, loginData.password, loginData.name);
        event.preventDefault();
    }


    const handleOnChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        // console.log(field, value)
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    return (
        <Container style={{
            minHeight: "100vh",
        }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} sx={{ mt: 30, }}>
                        <Typography sx={{ mb: 5, marginLeft: "25%" }}>
                            Please Register
                        </Typography>

                        {!isLoading &&
                            <form onSubmit={handleLoginSubmit}>
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    label="Name"
                                    name="name"
                                    onChange={handleOnChange}
                                    variant="standard" />

                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    label="Email"
                                    name="email"
                                    type="email"
                                    onChange={handleOnChange}
                                    variant="standard" />

                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    label="Password"
                                    type="password"
                                    name="password"
                                    onChange={handleOnChange}
                                    variant="standard" /> <br />

                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    label="Confirm Password"

                                    type="password"
                                    name="password2"
                                    onChange={handleOnChange}
                                    variant="standard" />


                                <br />

                                <Button sx={{ width: '75%', mt: 5 }} type="submit" variant="contained">Register</Button>

                                <NavLink
                                    style={{ textDecoration: 'none', }}
                                    to='/login'>
                                    <Button variant='text'>Already Registered? Please Login</Button>
                                </NavLink>
                            </form>
                        }
                        {isLoading && <CircularProgress />}

                        {
                            user?.email && <Alert severity="success">Register Successfully</Alert>

                        }



                        {
                            authError && <Alert severity="error">{authError}</Alert>
                        }
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: " 100%", marginTop: "30%" }} src={registrationImg} alt="" />
                    </Grid>

                </Grid>
            </Box>


        </Container>
    );
};

export default Register;