import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar, Button, Stack } from '@mui/material';
import { Outlet, Link } from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const drawerWidth = 240;

function DeshBoard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { admin, user, logout } = useAuth();
    console.log(admin)


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box sx={{ backgroundColor: "#eceff1", height: "100vh" }}>
            <Toolbar />
            <Divider />

            <Box sx={{ display: "flex", justifyContent: "center", marginTop: 5 }}>

                <Box>
                    <Box>
                        {admin && <Typography gutterBottom variant="h5" component="div" textAlign="center" color="text.primary" fontWeight="fontWeightBold" padding="10px">Admin</Typography>}
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Avatar

                            alt="Remy Sharp"
                            src={user?.photoURL}
                            sx={{ width: 56, height: 56, borderColor: "error.main" }}
                        />
                    </Box>

                    <Typography sx={{ display: "flex", justifyContent: "center" }}>{user.displayName}</Typography>
                    {

                        user?.email ?

                            <Stack direction="row" spacing={2}>
                                <Button onClick={logout} variant="text" sx={{ mt: 2, mb: 2, ml: 2, color: 'red' }} startIcon={<LogoutIcon />}>
                                    Logout
                                </Button>

                            </Stack>

                            :

                            <></>

                    }
                </Box>
            </Box>

            <Divider />

            <Box sx={{ component: "span", display: "block", }} style={{ textDecoration: 'none' }}>

                <Box>
                    <Link style={{ textDecoration: 'none' }} to="/home">
                        <Stack direction="row" spacing={2}>
                            <Button variant="text" startIcon={<HomeIcon />}>
                                Home
                            </Button>

                        </Stack>
                    </Link>
                </Box>

                <Box>
                    <Link style={{ textDecoration: 'none' }} to={`/dashboard/myorders`}>
                        <Stack direction="row" spacing={2}>
                            <Button variant="text" startIcon={<ShoppingCartIcon />}>
                                My Orders
                            </Button>

                        </Stack>
                    </Link>
                </Box>

            </Box>



            {admin && <Box >

                <Box>
                    <Link style={{ textDecoration: 'none' }} to={`/dashboard/makeadmin`}>
                        <Stack direction="row" spacing={2}>
                            <Button variant="text" startIcon={<AdminPanelSettingsIcon />}>
                                make admin
                            </Button>

                        </Stack>
                    </Link>
                </Box>

                <Box>
                    <Link style={{ textDecoration: 'none' }} to={`/dashboard/adminaddproducts`}>
                        <Stack direction="row" spacing={2}>
                            <Button variant="text" startIcon={< AddShoppingCartIcon />}>
                                Add products
                            </Button>

                        </Stack>
                    </Link>
                </Box>

                <Box>
                    <Link style={{ textDecoration: 'none' }} to={`/dashboard/manageallproduucts`}>
                        <Stack direction="row" spacing={2}>
                            <Button variant="text" startIcon={<ManageAccountsIcon />}>
                                manage all products
                            </Button>

                        </Stack>
                    </Link>
                </Box>

                <Box>
                    <Link style={{ textDecoration: 'none' }} to={`/dashboard/allorders`}>
                        <Stack direction="row" spacing={2}>
                            <Button variant="text" startIcon={< ShoppingBasketIcon />}>
                                All Orders
                            </Button>

                        </Stack>
                    </Link>
                </Box>


            </Box>
            }


        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }} style={{
            minHeight: "100vh"
        }}>
            <CssBaseline />
            <AppBar
                // position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },

                }}
            >
                <Toolbar sx={{ backgroundColor: "#ec5990", }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        DASHBOARD
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Typography paragraph>


                </Typography>

                <Outlet></Outlet>
            </Box>

        </Box>
    );
}

DeshBoard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DeshBoard;
