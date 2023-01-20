import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Box, Button, Stepper, Step, StepLabel } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { shades } from "../../../theme";

function Checkout() {
  const [activeStep, setActiveStep] = useState(0);
  return <div>Checkout</div>;
}

export default Checkout;
