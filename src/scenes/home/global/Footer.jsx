import React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import { shades } from "../../../theme";

function Footer() {
  const {
    palette: { neutral },
  } = useTheme();

  return (
    <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h3"
            fontWeight="bold"
            mb="30px"
            color={shades.primary[500]}
          >
            FarFetch
          </Typography>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem magni molestias aliquid modi sunt tenetur! Dolores
            consequatur, maxime voluptatibus ullam fugit deleniti sint nobis
            soluta perferendis repellendus accusantium qui id delectus quasi
            atque quo cupiditate est nulla facere earum dicta laboriosam,
            officiis asperiores! Corrupti, vero eos consectetur accusantium nemo
            nisi.
          </div>
        </Box>
        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">Our Stores</Typography>
          <Typography mb="30px">Terms and Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>
        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Corporate and Bulk Purchasing</Typography>
          <Typography mb="30px">Returns and Refunds</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 20%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">5th Avenue, Manhattan, NY, 11232</Typography>
          <Typography mb="30px">Email: contact@farfetch.com</Typography>
          <Typography mb="30px">(111)123-4455</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;