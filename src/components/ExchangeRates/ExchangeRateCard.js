import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function ExchangeRateCard({ currency, rate }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{currency}</Typography>
        <Typography variant="body2">Rate: {rate}</Typography>
      </CardContent>
    </Card>
  );
}

export default ExchangeRateCard;