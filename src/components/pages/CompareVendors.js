import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";

const vendors = [
  { name: "Western Union", margin: 0.03, fee: 5.0 },
  { name: "Remitly", margin: 0.015, fee: 3.0 },
  { name: "Wise", margin: 0.01, fee: 2.0 },
];

function CompareVendors() {
  const [currencies, setCurrencies] = useState([]);
  const [exchangeRates, setExchangeRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [amountToSend, setAmountToSend] = useState(1000); // Default amount
  const [sourceCurrency, setSourceCurrency] = useState("USD"); // Default source currency
  const [targetCurrency, setTargetCurrency] = useState("EUR"); // Default target currency

  // Fetch currency list and exchange rates
  useEffect(() => {
    const fetchCurrenciesAndRates = async () => {
      try {
        // Fetch supported currencies
        const currenciesResponse = await axios.get(
          "https://openexchangerates.org/api/currencies.json"
        );
        const ratesResponse = await axios.get(
          "https://openexchangerates.org/api/latest.json",
          {
            params: {
              app_id: "a88390bdca69460cbff43bb91121227b", // Replace with your API key
            },
          }
        );
        setCurrencies(Object.keys(currenciesResponse.data));
        setExchangeRates(ratesResponse.data.rates);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching currencies or exchange rates:", error);
        setLoading(false);
      }
    };

    fetchCurrenciesAndRates();
  }, []);

  const calculateVendorRate = (baseRate, margin, fee) => {
    const effectiveRate = baseRate * (1 - margin);
    const amountReceived = (amountToSend - fee) * effectiveRate;
    return {
      effectiveRate: effectiveRate.toFixed(2),
      amountReceived: amountReceived.toFixed(2),
    };
  };

  const handleUpdate = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 500); // Simulate loading for new selections
  };

  if (loading) {
    return <Typography>Loading exchange rates...</Typography>;
  }

  // Calculate exchange rate between source and target currencies
  const baseRate =
    exchangeRates[targetCurrency] / exchangeRates[sourceCurrency];

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Compare Exchange Rates
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
        <TextField
          label="Amount to Send"
          type="number"
          value={amountToSend}
          onChange={(e) => setAmountToSend(Number(e.target.value))}
          sx={{ minWidth: 200 }}
        />
        <TextField
          select
          label="Source Currency"
          value={sourceCurrency}
          onChange={(e) => setSourceCurrency(e.target.value)}
          sx={{ minWidth: 200 }}
        >
          {currencies.map((currency) => (
            <MenuItem key={currency} value={currency}>
              {currency}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Target Currency"
          value={targetCurrency}
          onChange={(e) => setTargetCurrency(e.target.value)}
          sx={{ minWidth: 200 }}
        >
          {currencies.map((currency) => (
            <MenuItem key={currency} value={currency}>
              {currency}
            </MenuItem>
          ))}
        </TextField>
        <Button variant="contained" onClick={handleUpdate}>
          Update
        </Button>
      </Box>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Vendor</TableCell>
              <TableCell>Effective Rate</TableCell>
              <TableCell>Fee ({sourceCurrency})</TableCell>
              <TableCell>
                Amount Received ({targetCurrency})
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vendors.map((vendor) => {
              const { effectiveRate, amountReceived } =
                calculateVendorRate(baseRate, vendor.margin, vendor.fee);
              return (
                <TableRow key={vendor.name}>
                  <TableCell>{vendor.name}</TableCell>
                  <TableCell>{effectiveRate}</TableCell>
                  <TableCell>
                    {vendor.fee.toFixed(2)} {sourceCurrency}
                  </TableCell>
                  <TableCell>{amountReceived}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
}

export default CompareVendors;