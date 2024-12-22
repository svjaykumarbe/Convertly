import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ textAlign: 'center', padding: 2, background: '#f1f1f1' }}>
      <Typography variant="body2">© 2024 CurrenSync. All rights reserved.</Typography>
    </Box>
  );
}

export default Footer;