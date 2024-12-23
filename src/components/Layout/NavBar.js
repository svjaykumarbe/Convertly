import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      <ListItem button component={Link} to="/" onClick={handleDrawerToggle}>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button component={Link} to="/dashboard" onClick={handleDrawerToggle}>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button component={Link} to="/compare-vendors" onClick={handleDrawerToggle}>
        <ListItemText primary="Compare ExRate" />
      </ListItem>
      <ListItem button component={Link} to="/register" onClick={handleDrawerToggle}>
        <ListItemText primary="Register" />
      </ListItem>
    </List>
  );

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            CurrenSync
          </Typography>
          {/* Desktop Menu */}
          <div className="desktop-menu">
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
            <Button color="inherit" component={Link} to="/compare-vendors">Compare ExRate</Button>
            <Button color="inherit" component={Link} to="/register">Register</Button>
          </div>
          {/* Mobile Menu */}
          <IconButton
            color="inherit"
            edge="end"
            onClick={handleDrawerToggle}
            className="mobile-menu-button"
            sx={{ display: { sm: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', sm: 'block', md: 'none' },
          '& .MuiDrawer-paper': { width: '250px' },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default Navbar;