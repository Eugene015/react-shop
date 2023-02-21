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
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { setToken } from "../services/auth";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setUser } from "../state/user";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const responseData = await axios
      .post(
        `https://ecommerce-shop-back.herokuapp.com/api/auth/local/register`,
        {
          email: data.email,
          password: data.password,
          username: data.username,
        }
      )
      .then((response) => response.data)
      .catch((error) => {
        setError(error.response.data.error.message);
      });

    dispatch(setUser(responseData.user));
    setToken(responseData);
    if (Cookies.get("username")) {
      navigate("/");
    }
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
      <form type="submit" onSubmit={handleSubmit}>
        <Box>
          <TextField
            sx={{ m: "10px 0", width: "25ch" }}
            id="outlined-basic"
            label="Name"
            name="username"
            onChange={handleChange}
            variant="outlined"
          />
          <TextField
            sx={{ mb: "10px", width: "25ch" }}
            id="outlined-basic"
            name="email"
            onChange={handleChange}
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
          type="submit"
        >
          Register
        </Button>
      </form>
      <Typography sx={{ textAlign: "center" }} fontSize="small">
        By pressing Register button you accept our{" "}
        <Link to="/">license agreement</Link>
      </Typography>
    </Box>
  );
}

export default Register;
