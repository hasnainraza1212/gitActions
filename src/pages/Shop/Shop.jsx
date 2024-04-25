import React, { useCallback, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import Heading from "../../Components/Heading/Heading";
import { products } from "../../utils/utils";
import Product from "../../Components/Product/Product";
import SnackAlert from "../../Components/SnackAlert/SnackAlert";
import { updateCart } from "../../Redux/Slice/Slice";
import { useSelector, useDispatch } from 'react-redux'

let localCart = JSON.parse(window?.localStorage?.getItem("cart"))||[]
const Shop = () => {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const [open, setOpen]= useState(false)
  const [cartDetails, setCartDetails] = useState({message:"", severity:"success"})
  
  const cb=(data)=>{
    const existingItem = cart.some(item=>item?.id===data?.id)  
      if(existingItem){
        setCartDetails({severity:"error", message:`${data?.name} already added into cart.`})
       return  setOpen(true)
      }
        setCartDetails({severity:"success", message:`${data?.name} added to cart.`})

        let newItem = [data]?.map(item=>{
          const {src, ...rest} = item
          return rest
        })
          window?.localStorage?.setItem("cart", JSON.stringify([...prev,...newItem ]))
        dispatch(updateCart(cart, newItem))
        setOpen(true)
  }

  return (
   <>
   <Box
          sx={{
            maxWidth: "1200px",
            boxSizing: "border-box",
            padding: {
              lg: "106px 0px",
              xs: "50px 0px",
            },
            margin: "auto",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <Heading subHeading="Recently Added" heading="Latest Products" />
          </Box>
          <Box
            sx={{
              width: "100%",
              mt: {
                md: "90px",
                xs: "50px",
              },
              boxSizing: "border-box",
              display: "flex",
              flexDirection: {
                md: "row",
                xs: "column",
                flexWrap: "wrap",
                gap: "30px",
              },
            }}
          >
            {products.map((x, i) => (
              <Box key={i} sx={{ maxWidth: {
                sm:"370px",
                xs:"250px"
              }, m: "0 auto",
              }}>
                <Product
                  name={x.name}
                  price={x.price}
                  src={x.src}
                  id={x.id}
                  rating={x.rating}
                  cb={cb}
                />
              </Box>
            ))}
          </Box>
        </Box>
        <SnackAlert severity = {cartDetails.severity}message={cartDetails.message}  handleClose={()=>{setOpen(false)}}  open={open}/>
        
        </>
  );
};

export default Shop;
