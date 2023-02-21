import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled, alpha } from "@mui/material/styles";
import {
  Badge,
  Box,
  IconButton,
  useMediaQuery,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { useNavigate } from "react-router-dom";
import { shades } from "../../../theme";
import { getCart, setIsCartOpen } from "../../../state";
import { unsetToken } from "../../../services/auth";
import { removeUser } from "../../../state/user";
import { setUser } from "../../../state/user";
import { getTokenFromLocalCookie } from "../../../services/auth";
import axios from "axios";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: "20",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  backgroundColor: "#FAFAFA",
  borderRadius: "5px",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [value, setValue] = useState("all");
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const cart = useSelector(getCart());
  const user = useSelector((state) => state.user.user);
  const isUserLoaded = useSelector((state) => state.user.isUserLoaded);
  console.log(
    "🚀 ~ file: Navbar.jsx:80 ~ Navbar ~ isUserLoggedIn:",
    isUserLoaded
  );
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef();

  const handleInputChange = (e) => {
    setTimeout(() => {
      const value = e.target.value;

      setValue(value);
    }, 1000);
  };

  const logout = () => {
    dispatch(removeUser());
    unsetToken();
    navigate("/");
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      navigate("/searchpage", { state: { value: e.target.value } });
      setIsSearchClicked(false);
    }
  };

  const handleSelectClick = () => {
    setIsOpen((prev) => !prev);
  };

  async function getUserFromBack() {
    const jwt = getTokenFromLocalCookie();
    const responseUserData = await axios
      .get(`https://ecommerce-shop-back.herokuapp.com/api/users/me`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
      });

    dispatch(setUser(responseUserData));
  }

  useEffect(() => {
    const jwt = getTokenFromLocalCookie();
    if (jwt) {
      getUserFromBack();
    }
  }, []);

  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="60px"
      backgroundColor="rgba(255,255,255, 0.95)"
      color="black"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          onClick={() => navigate("/")}
          sx={{ "&:hover": { cursor: "pointer" } }}
          color={shades.primary[500]}
          fontSize="24px"
          fontWeight="bold"
        >
          FarFetch
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          columnGap="20px"
          zIndex="2"
        >
          {isSearchClicked && isNonMobile ? (
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                onChange={handleInputChange}
                onKeyDown={handleSearch}
              />
            </Search>
          ) : (
            <IconButton
              sx={{ color: "black" }}
              onClick={() => setIsSearchClicked(true)}
            >
              <SearchOutlined />
            </IconButton>
          )}
          {!isUserLoaded ? (
            <IconButton
              sx={{ color: "black" }}
              onClick={() => navigate("/login")}
            >
              <PersonOutline />
            </IconButton>
          ) : (
            <Box
              position="relative"
              display="flex"
              justifyContent="center"
              alignItems="center"
              backgroundColor="#c9c9c9"
              border="1px"
              height="30px"
              width="30px"
              borderRadius="50%"
              onClick={handleSelectClick}
              hover={{ cursor: "pointer", backgroundColor: "red" }}
            >
              <FormControl>
                <Select
                  ref={selectRef}
                  open={isOpen}
                  sx={{
                    position: "absolute",
                    top: "30px",
                    maxHeight: 0,
                    overflow: "hidden",
                  }}
                >
                  <MenuItem onClick={() => navigate("/profile")}>
                    Profile
                  </MenuItem>
                  <MenuItem onClick={logout}>Logout</MenuItem>
                </Select>
              </FormControl>
              <Typography variant="h3">
                {user.username[0].toUpperCase()}
              </Typography>
            </Box>
          )}
          <Badge
            badgeContent={cart.length}
            color="secondary"
            invisible={cart.length === 0}
            sx={{
              "& .MuiBadge-badge": {
                right: "5",
                top: "5",
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
              },
            }}
          >
            <IconButton
              sx={{ color: "black" }}
              onClick={() => dispatch(setIsCartOpen({}))}
            >
              <ShoppingBagOutlined />
            </IconButton>
          </Badge>
          <IconButton sx={{ color: "black" }}>
            <MenuOutlined />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
