import React from "react";
import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

function Search() {
  const location = useLocation();

  return (
    <Box m="320px auto" width="300px" textAlign="center">
      Your search query:
      <Typography sx={{ fontWeight: "700" }}>
        {location.state?.value}
      </Typography>
    </Box>
  );
}

export default Search;
