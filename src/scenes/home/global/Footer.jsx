import React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import { shades } from "../../../theme";

function Footer() {
  const {
    palette: { neutral },
  } = useTheme();

  return (
    <Box mt="70px" p="70px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="25px"
        columnGap="clamp(20px, 25px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h3"
            fontWeight="bold"
            mb="25px"
            color={shades.primary[500]}
          >
            FarFetch
          </Typography>
          <Box fontSize="14px">
            The content of this site is protected by copyright and is the
            property of FarFetch Company. FarFetch business concept is to offer
            fashion and quality at the best price and in a sustainable way.
            Since its foundation in 2011, FarFetch has become one of the world's
            leading fashion companies.
          </Box>
        </Box>
        <Box>
          <Typography variant="h4" fontWeight="bold" mb="25px">
            About Us
          </Typography>
          <Typography mb="25px" fontSize="14px">
            Careers
          </Typography>
          <Typography mb="25px" fontSize="14px">
            Our Stores
          </Typography>
          <Typography mb="25px" fontSize="14px">
            Terms and Conditions
          </Typography>
          <Typography mb="25px" fontSize="14px">
            Privacy Policy
          </Typography>
        </Box>
        <Box>
          <Typography variant="h4" fontWeight="bold" mb="25px">
            Customer Care
          </Typography>
          <Typography mb="25px" fontSize="14px">
            Help Center
          </Typography>
          <Typography mb="25px" fontSize="14px">
            Track Your Order
          </Typography>
          <Typography mb="25px" fontSize="14px">
            Corporate and Bulk Purchasing
          </Typography>
          <Typography mb="25px" fontSize="14px">
            Returns and Refunds
          </Typography>
        </Box>

        <Box width="clamp(20%, 25%, 20%)">
          <Typography variant="h4" fontWeight="bold" mb="25px">
            Contact Us
          </Typography>
          <Typography mb="25px" fontSize="14px">
            5th Avenue, Manhattan, NY, 11232
          </Typography>
          <Typography mb="25px" fontSize="14px">
            Email: contact@farfetch.com
          </Typography>
          <Typography mb="25px" fontSize="14px">
            (111)123-4455
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
