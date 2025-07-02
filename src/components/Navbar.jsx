// import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
// import { useContext } from 'react';
// import { AuthContext } from '../context/AuthContext';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const { user, logout } = useContext(AuthContext);

//   return (
//     <AppBar position="fixed">
//       <Toolbar>
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             Form Approval System
//         </Typography>
//         {user ? (
//           <Button color="inherit" onClick={logout}>Logout</Button>
//         ) : (
//           <Button color="inherit" component={Link} to="/login">Login</Button>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;

import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    Avatar,
    Menu,
    MenuItem,
    Divider,
    IconButton
} from '@mui/material';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMenuAnchor(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setMobileMenuAnchor(null);
    };

    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: 'background.paper',
                color: 'text.primary',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            }}
        >
            <Toolbar sx={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: { xs: '0 8px', sm: '0 16px' }
            }}>
                {/* Logo/Brand */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, display: { sm: 'none' } }}
                        onClick={handleMobileMenuOpen}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography
                        variant="h6"
                        component={Link}
                        to="/"
                        sx={{
                            flexGrow: 1,
                            fontWeight: 700,
                            textDecoration: 'none',
                            color: 'inherit',
                            '&:hover': {
                                opacity: 0.9
                            }
                        }}
                    >
                        Form Approval System
                    </Typography>
                </Box>

                {/* Desktop Navigation */}
                <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 2 }}>
                    {user ? (
                        <>
                            <Button
                                component={Link}
                                to="/dashboard"
                                color="inherit"
                                sx={{
                                    textTransform: 'none',
                                    fontWeight: 500,
                                    '&:hover': {
                                        backgroundColor: 'action.hover'
                                    }
                                }}
                            >
                                Dashboard
                            </Button>

                            <Button
                                component={Link}
                                to="/forms"
                                color="inherit"
                                sx={{
                                    textTransform: 'none',
                                    fontWeight: 500,
                                    '&:hover': {
                                        backgroundColor: 'action.hover'
                                    }
                                }}
                            >
                                My Forms
                            </Button>

                            <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                                <IconButton onClick={handleMenuOpen} sx={{ p: 0 }}>
                                    <Avatar
                                        alt={user.name}
                                        src={user.avatar}
                                        sx={{ width: 36, height: 36, bgcolor: 'primary.main' }}
                                    >
                                        {user.name.charAt(0)}
                                    </Avatar>
                                </IconButton>

                                <Menu
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={handleMenuClose}
                                    PaperProps={{
                                        elevation: 0,
                                        sx: {
                                            mt: 1.5,
                                            minWidth: 200,
                                            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                                            '& .MuiAvatar-root': {
                                                width: 32,
                                                height: 32,
                                                ml: -0.5,
                                                mr: 1,
                                            },
                                        },
                                    }}
                                >
                                    <MenuItem
                                        component={Link}
                                        to="/profile"
                                        onClick={handleMenuClose}
                                    >
                                        My Profile
                                    </MenuItem>
                                    <MenuItem
                                        component={Link}
                                        to="/settings"
                                        onClick={handleMenuClose}
                                    >
                                        Settings
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem onClick={logout}>
                                        Logout
                                    </MenuItem>
                                </Menu>
                            </Box>
                        </>
                    ) : (
                        <>
                            <Button
                                component={Link}
                                to="/login"
                                color="inherit"
                                sx={{
                                    textTransform: 'none',
                                    fontWeight: 500,
                                    '&:hover': {
                                        backgroundColor: 'action.hover'
                                    }
                                }}
                            >
                                Login
                            </Button>

                            <Button
                                component={Link}
                                to="/register"
                                variant="contained"
                                color="primary"
                                sx={{
                                    textTransform: 'none',
                                    fontWeight: 500,
                                    borderRadius: 2,
                                    boxShadow: 'none',
                                    '&:hover': {
                                        boxShadow: 'none',
                                        backgroundColor: 'primary.dark'
                                    }
                                }}
                            >
                                Register
                            </Button>
                        </>
                    )}
                </Box>

                {/* Mobile Menu */}
                <Menu
                    anchorEl={mobileMenuAnchor}
                    open={Boolean(mobileMenuAnchor)}
                    onClose={handleMenuClose}
                    sx={{ display: { sm: 'none' } }}
                >
                    {user ? (
                        [
                            <MenuItem key="dashboard" component={Link} to="/dashboard" onClick={handleMenuClose}>
                                Dashboard
                            </MenuItem>,
                            <MenuItem key="forms" component={Link} to="/forms" onClick={handleMenuClose}>
                                My Forms
                            </MenuItem>,
                            <MenuItem key="profile" component={Link} to="/profile" onClick={handleMenuClose}>
                                Profile
                            </MenuItem>,
                            <Divider key="divider" />,
                            <MenuItem key="logout" onClick={() => { handleMenuClose(); logout(); }}>
                                Logout
                            </MenuItem>
                        ]
                    ) : (
                        [
                            <MenuItem key="login" component={Link} to="/login" onClick={handleMenuClose}>
                                Login
                            </MenuItem>,
                            <MenuItem key="register" component={Link} to="/register" onClick={handleMenuClose}>
                                Register
                            </MenuItem>
                        ]
                    )}
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;