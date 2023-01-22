import React from "react";
import { Box, Typography, TextField } from "@mui/material";

function Payment({ values, tuoched, errors, handleBlur, handleChange }) {
  return (
    <Box m="30px 0">
      {/* Contacts */}
      <Box>
        <Typography sx={{ mb: "15px" }} fontSize="18px">
          Contact Info
        </Typography>
        <TextField
          fullWidth
          type="text"
          label="Email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
          name={"email"}
          error={!!tuoched.email && !!errors.email}
          helperText={tuoched.email && errors.email}
          sx={{ gridColumn: "span 4", marginBottom: "15px" }}
        />
        <TextField
          fullWidth
          type="text"
          label="Phone Number"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.phoneNumber}
          name={"phoneNumber"}
          error={!!tuoched.phoneNumber && !!errors.phoneNumber}
          helperText={tuoched.phoneNumber && errors.phoneNumber}
          sx={{ gridColumn: "span 4", marginBottom: "15px" }}
        />
      </Box>
      Payment
    </Box>
  );
}

export default Payment;
