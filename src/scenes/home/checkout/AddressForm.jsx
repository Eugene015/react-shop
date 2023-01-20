import React from "react";
import { Box, useMediaQuery, TextField } from "@mui/material";
import { getIn } from "formik";

function AddressForm({
  type,
  value,
  shippingAddress,
  touched,
  handleBlur,
  handleChange,
}) {
  const isNonMobile = useMediaQuery("(min-width: 600px)");

  const formattedName = (field) => `${type}.${field}`;

  return <div>AddressForm</div>;
}

export default AddressForm;
