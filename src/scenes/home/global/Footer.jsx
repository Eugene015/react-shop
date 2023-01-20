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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem magni molestias aliquid modi sunt tenetur! Dolores
            consequatur, maxime voluptatibus ullam fugit deleniti sint nobis
            soluta perferendis repellendus accusantium qui id delectus quasi
            atque quo cupiditate est nulla facere earum dicta laboriosam.
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
