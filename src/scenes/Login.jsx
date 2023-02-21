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
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setUser } from "../state/user";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    identifier: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const responseData = await axios
      .post(`https://ecommerce-shop-back.herokuapp.com/api/auth/local`, {
        identifier: data.identifier,
        password: data.password,
      })
      .then((response) => response.data)
      .catch((error) => {
        setError(error.response.data.error.message);
      });
    dispatch(setUser(responseData.user));
    setToken(responseData);
    if (responseData !== undefined) {
      navigate("/");
    }
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
      <Typography variant="h3" sx={{ textAlign: "center", mb: "16px" }}>
        Please, login or register
      </Typography>
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
        <Typography
          variant="h4"
          sx={{ textAlign: "center", color: "red", mb: "16px" }}
        >
          {error}
        </Typography>
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
