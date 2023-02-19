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
import { setToken, unsetToken } from "../services/auth";

import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    identifier: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const responseData = await axios
      .post("http://localhost:1337/api/auth/local", {
        identifier: data.identifier,
        password: data.password,
      })
      .then((response) => response.data)
      .catch((error) => {
        console.log("An error occurred:", error.response);
      });

    setToken(responseData);
    if (Cookies.get("username")) {
      navigate("/");
    }
  };

  const logout = () => {
    unsetToken();
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

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
      <form onSubmit={handleSubmit}>
        <Box>
          <TextField
            sx={{ m: "10px 0", width: "25ch" }}
            id="outlined-basic"
            name="identifier"
            label="Email"
            variant="outlined"
            onChange={handleChange}
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
              name="password"
              onChange={handleChange}
              label="Password"
            />
          </FormControl>
        </Box>
        <Button
          variant="contained"
          fullWidth
          type="submit"
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
      </form>
      <Typography sx={{ textAlign: "center" }} fontSize="small">
        Don`t have account? <Link to="/register">Sign Up</Link>
      </Typography>
    </Box>
  );
}

export default Login;
