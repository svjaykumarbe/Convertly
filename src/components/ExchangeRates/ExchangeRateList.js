import React, { useState, useEffect } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import ExchangeRateCard from './ExchangeRateCard';
import axios from 'axios';

function ExchangeRateList() {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://api.exchangerate-api.com/v4/latest/USD')
      .then(response => {
        setRates(response.data.rates);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  if (loading) {
    return <Typography>Loading exchange rates...</Typography>;
  }

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>Exchange Rates</Typography>
      <Grid container spacing={2}>
        {Object.entries(rates).map(([currency, rate]) => (
          <Grid item xs={12} sm={6} md={4} key={currency}>
            <ExchangeRateCard currency={currency} rate={rate} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ExchangeRateList;