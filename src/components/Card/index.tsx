import React from "react";
import Box from "@mui/material/Box";
import { Grid, Divider } from "@mui/material";

function index() {
  return (
    <Box sx={{my:2, p:2, border: "1px solid gray", borderRadius: 1}}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
            image
        </Grid>
        <Grid item xs={3}>
            title
        </Grid>
        <Grid item xs={4}>qty</Grid>
        <Grid item xs={3}>price</Grid>
      </Grid>
    </Box>
  );
}

export default index;
