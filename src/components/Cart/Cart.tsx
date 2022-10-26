import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Grid,Divider} from "@mui/material";
import Typography from "@mui/material/Typography";
import Card from "../Card/index"

export interface CardProps {
  label: string;
}

const Cart = (props: CardProps) => {
  return (
    <Box sx={{ width: "70%", margin: "0 auto", flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Button variant="text" endIcon={<ArrowForwardIcon />} sx={{
            "&:hover": {
                //you want this to be the same as the backgroundColor above
                backgroundColor: "transparent"
            },
            color: "black"
          }}>
            Continue Shopping
          </Button>
          <Divider sx={{mt:4}}/>
          <Typography variant="body1" fontWeight={700} color="initial" sx={{mt:3}}> Shopping Cart</Typography>
          <Typography variant="body1" color="initial" sx={{fontSize: "10px", color: "gray"}}>You have 4 items in your cart</Typography>
          <Card />
        </Grid>
        <Grid item xs={4}>
          Cart
        </Grid>
      </Grid>
    </Box>
  );
};

export default Cart;
