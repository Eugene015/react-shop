import React, { useEffect, useState } from "react";
import { Box, Typography, Tabs, Tab, useMediaQuery } from "@mui/material";
import Item from "../../components/Item";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../state";

function ShoppingList() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("all");
  const items = useSelector((state) => state.cart.items);
  console.log("🚀 ~ file: ShoppingList.jsx:11 ~ ShoppingList ~ items", items);

  const isNonMobile = useMediaQuery("(min-width: 600px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function getItems() {
    const items = await fetch(
      "http://localhost:1337/api/items?populate=image",
      { method: "GET" }
    );
    const itemsJson = await items.json();
    console.log(
      "🚀 ~ file: ShoppingList.jsx:24 ~ getItems ~ itemsJson",
      itemsJson.data
    );

    dispatch(setItems(itemsJson.data));
  }
  useEffect(() => {
    getItems();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <div>ShoppingList</div>;
}

export default ShoppingList;
