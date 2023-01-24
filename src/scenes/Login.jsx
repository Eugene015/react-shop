import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  return (
    <Box
      sx={{
        m: "200px auto",
        width: "300px",
      }}
    >
      <Box>
        <TextField
          sx={{ m: "10px 0", width: "25ch" }}
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />

        <FormControl sx={{ mb: "10px", width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </Box>
      <Button
        variant="contained"
        fullWidth
        sx={{
          backgroundColor: "#222222",
          "&:hover": {
            opacity: [0.7],
          },
          color: "white",
          borderRadius: 0,
          minWidth: "150px",
          padding: "10px 40px",
          mb: "10px",
        }}
      >
        Login
      </Button>
      <Typography sx={{ textAlign: "center" }} fontSize="small">
        Don`t have account? <Link to="/register">Sign Up</Link>
      </Typography>
    </Box>
  );
}

export default Login;
