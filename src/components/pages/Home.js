import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundImage: 'url("/Logo.jpg")', // Background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Keeps the image fixed while content scrolls
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Dark overlay to make text pop
        animation: 'backgroundMove 30s infinite linear, gradientAnimation 10s ease infinite', // Animation for both
        color: 'white',
      }}
    >
      <Container sx={{ textAlign: 'center', padding: 4 }}>
        <Typography variant="h2" component="h1" sx={{ fontWeight: 700, marginBottom: 2 }}>
          Welcome to Exchange Hub
        </Typography>
        <Typography variant="h5" sx={{ marginBottom: 3 }}>
          Track global exchange rates in real-time. Make smarter decisions, faster.
        </Typography>
        
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Link to="/dashboard" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                borderRadius: 3,
                padding: '12px 36px',
                fontSize: '16px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 6px 16px rgba(0, 0, 0, 0.3)',
                },
              }}
            >
              View Dashboard
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

export default Home;