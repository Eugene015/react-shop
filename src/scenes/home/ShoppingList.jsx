import React, { useEffect, useState } from "react";
import { Box, Typography, Tabs, Tab, useMediaQuery } from "@mui/material";
import Item from "../../components/Item";
import { useDispatch, useSelector } from "react-redux";
import { getIsItemsLoaded, setItems, getItemsFromStore } from "../../state";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";

function ShoppingList() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("all");
  const items = useSelector(getItemsFromStore());
  const isItemsLoaded = useSelector(getIsItemsLoaded());
  const isNonMobile = useMediaQuery("(min-width: 600px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function getItems() {
    const items = await axios
      .get("https://ecommerce-shop-back.herokuapp.com/api/items?populate=image")
      .then((response) => response.data);

    dispatch(setItems(items.data));
  }

  useEffect(() => {
    getItems();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const topRatedItems = items.filter(
    (item) => item.attributes.category === "topRated"
  );

  const newArrivalsItems = items.filter(
    (item) => item.attributes.category === "newArrivals"
  );

  const bestSellersItems = items.filter(
    (item) => item.attributes.category === "bestSellers"
  );

  return isItemsLoaded ? (
    <Box width="80%" margin="80px auto">
      <Typography variant="h3" textAlign="center">
        Our featured <b>Products</b>
      </Typography>
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ sx: { display: isNonMobile ? "block" : "none" } }}
        sx={{
          m: "25px",
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap",
          },
        }}
      >
        <Tab label="ALL" value="all" />
        <Tab label="NEW ARRIVALS" value="newArrivals" />
        <Tab label="BEST SELLERS" value="bestSellers" />
        <Tab label="TOP RATED" value="topRated" />
      </Tabs>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        {value === "all" &&
          items.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "newArrivals" &&
          newArrivalsItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "bestSellers" &&
          bestSellersItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "topRated" &&
          topRatedItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
      </Box>
    </Box>
  ) : (
    <Box
      display="grid"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#878787"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </Box>
  );
}

export default ShoppingList;
