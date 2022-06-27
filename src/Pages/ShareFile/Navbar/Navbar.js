// import React from 'react';
import { Link } from "react-router-dom";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import useAuth from "../../../Hooks/useAuth";
import { Stack } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';

const Navbar = () => {
    const { user, logout } = useAuth();
    console.log(user)

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: "#ec5990", }}>
                <Container maxWidth="xl" >
                    <Toolbar disableGutters>
                        {/* <DirectionsCarFilledIcon sx={{ display: { xs: 'none', md: 'flex', fontSize: 40, color: 'white' }, mr: 1, }} /> */}

                        <Typography
                            variant="h5"
                            noWrap
                            component="a"

                            sx={{
                                mr: 4,
                                display: { xs: 'none', md: 'flex' },
                                letterSpacing: '.3rem',

                                textDecoration: 'none',

                            }}
                        >
                            <Link sx={{ fontFamily: 'monospace', }} style={{ textDecoration: 'none', color: 'white', fontWeight: "fontWeightBold" }} to='/home'> Four Wheel</Link>

                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"

                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none', },
                                }}
                            >

                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Link to="/home" style={{ textDecoration: 'none', }}>

                                        <Button

                                            onClick={handleCloseNavMenu}
                                            sx={{
                                                my: 2, color: 'black'
                                                , display: 'block', m: 1, fontWeight: "fontWeightBold"
                                            }}

                                        >
                                            Home
                                        </Button>
                                    </Link>

                                    <Link to="/about" style={{ textDecoration: 'none', }}>

                                        <Button

                                            onClick={handleCloseNavMenu}
                                            sx={{ my: 2, color: 'black', display: 'block', m: 1, fontWeight: "fontWeightBold" }}
                                        >
                                            about
                                        </Button>
                                    </Link>

                                    <Link to="/dashboard" style={{ textDecoration: 'none', }}>

                                        <Button

                                            onClick={handleCloseNavMenu}
                                            sx={{ my: 2, color: 'black', display: 'block', m: 1, fontWeight: "fontWeightBold" }}
                                        >
                                            Deshboard
                                        </Button>
                                    </Link>
                                </MenuItem>

                            </Menu>
                        </Box>
                        {/* <DirectionsCarFilledIcon sx={{ display: { xs: 'flex', md: 'none', fontSize: 40, color: '#f44336' }, mr: 1 }} /> */}
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/home"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',

                            }}
                        >
                            Four Wheel
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', } }}>

                            <Link to="/home" style={{ textDecoration: 'none', }}>

                                <Button

                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block', m: 1, fontWeight: "fontWeightBold" }}

                                >
                                    Home
                                </Button>
                            </Link>

                            <Link to="/about" style={{ textDecoration: 'none', }}>

                                <Button

                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block', m: 1, fontWeight: "fontWeightBold" }}
                                >
                                    about
                                </Button>
                            </Link>

                            <Link to="/dashboard" style={{ textDecoration: 'none', }}>

                                <Button

                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block', m: 1, fontWeight: "fontWeightBold" }}
                                >
                                    Deshboard
                                </Button>
                            </Link>

                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Profile">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src={user?.photoURL} />

                                </IconButton>

                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >

                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">
                                        <>

                                            {
                                                user?.email ?
                                                    <Typography>
                                                        Hello  {user.displayName}
                                                    </Typography> :
                                                    <>
                                                    </>
                                            }

                                            {

                                                user?.email ?
                                                    <Stack direction="row" spacing={2}>
                                                        <Button onClick={logout} variant="text" sx={{ mt: 2, mb: 2, ml: 4, color: 'red' }} startIcon={<LogoutIcon />}>
                                                            Logout
                                                        </Button>

                                                    </Stack>
                                                    :

                                                    <Link to="/login" style={{ textDecoration: 'none', }}>

                                                        <Stack direction="row" spacing={2}>
                                                            <Button onClick={handleCloseNavMenu} variant="text" sx={{ mt: 2, mb: 2, ml: 2 }} startIcon={< LoginIcon />}>
                                                                Login
                                                            </Button>

                                                        </Stack>

                                                    </Link>

                                            }
                                        </>

                                    </Typography>
                                </MenuItem>

                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
};

export default Navbar;