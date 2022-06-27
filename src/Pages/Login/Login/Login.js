import { Alert, Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import useAuth from '../../../Hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';
import loginImg from '../../../Images/undraw_security_re_a2rk.svg';
const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { user, googleSignin, isLoading, authError, loginUser } = useAuth()

    console.log(user)
    const location = useLocation();
    const history = useNavigate();


    const handleGoogleLogin = () => {
        googleSignin(location, history);

    }

    const handleLoginSubmit = event => {
        loginUser(loginData.email, loginData.password, location, history);
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
                    <Grid item xs={12
                    } md={6} sx={{ mt: 30 }}>
                        <Typography sx={{ mb: 5, marginLeft: "25%" }}>
                            LOGIN
                        </Typography>

                        {!isLoading &&
                            <form onSubmit={handleLoginSubmit}>

                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    label="Email"
                                    name="email"
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

                                <Button sx={{ width: '75%', mt: 5 }} type="submit" variant="contained">Login</Button>

                                <NavLink
                                    style={{ textDecoration: 'none', }}
                                    to='/register'>
                                    <Button variant='text'>New User? Please Register</Button>
                                </NavLink>
                                <br />
                                {/* <Button onClick={handleGoogleLogin}>GOOGLE Login</Button> */}

                                <h4 style={{ color: 'gray' }}>Or, login With</h4>
                                <Stack direction="row" spacing={2}>

                                    <Button sx={{ width: '75%', }} onClick={handleGoogleLogin} variant="contained" startIcon={<GoogleIcon />}>
                                        GOOGLE Login
                                    </Button>

                                </Stack>
                            </form>
                        }

                        {isLoading && <CircularProgress />}
                        {
                            authError && <Alert severity="error">{authError}</Alert>


                        }
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '100%', marginTop: 200 }} src={loginImg} alt="" />
                    </Grid>

                </Grid>
            </Box>
        </Container>

    );
};

export default Login;