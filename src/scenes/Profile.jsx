import {
  Box,
  Card,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

function Profile() {
  return (
    <Box width="80%" m="80px auto">
      <Box mb="24px">
        <Typography variant="h3">Profile Page</Typography>
      </Box>
      <Typography variant="h4" sx={{ pb: "24px" }}>
        My Orders
      </Typography>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card>
            <Box>
              <Table>
                <TableHead>
                  <TableRow sx={{ fontWeight: "bold" }}>
                    <TableCell>Product</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Total</TableCell>
                    <TableCell>Delete</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Typography>Table data 1</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>Table data 2</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>Table data 3</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>Table data 4</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>Table data 5</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>Delete</Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Profile;
