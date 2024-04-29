import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Drawer as MuiDrawer, Typography } from "@mui/material";
import { IoCloseOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import zIndex from "@mui/material/styles/zIndex";
import inion from "./../../assets/images/onion.png";
import CartItem from "../CartItem/CartItem";
const CartDrawer = ({
  open = false,
  handleClose = () => {},
  handleOpen = () => {},
}) => {
  const navigate = useNavigate();

  const data = useSelector((state) => state.cart);

  const DrawerList = (
    <Box
      sx={{
        width: "100vw",
        p: {
          md: "40px 80px",
          sm: "20px",
          xs: "0px",
        },
        position: "relative",
        background: "white",
        height: "100vh",
        boxSizing: "border-box",
      }}
      role="presentation"
    >
      <Typography
        className="manRope700"
        sx={{
          color: "primary.main",
          fontSize: {
            md: "30px",
            xs: "24px",
          },
          p: {
            xs: "30px 30px 0px 30px",
          },
          mb: {
            xs: "50px",
          },
          m: {
            // sm:"30px 0 20px 30px",
            // xs:"30px"
          },
        }}
        variant="h3"
      >
        Shopping Cart
      </Typography>

      <Box
        sx={{
          boxSizing: "border-box",

          background: "white",
          borderRadius: "10px",
          maxHeight: {
            md: "400px",
            xs: "500px",
          },
          position: "relative",
          minHeight: "300px",
          m: "auto !important",
          overflowY: "auto",
          "&::webkitScrollbar": {
            display: "none",
          },
          "msOverflowStyle": "none",
          "scrollbarWidth": "none",
          "@media (min-width: 600px)": {
            "&::webkitScrollbar": {
              display: "initial",
            },
            "msOverflowStyle": "auto",
            "scrollbarWidth": "auto",
          },
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
        }}
      >
        <Typography
          className="manRope400"
          variant="h5"
          sx={{
            fontSize: {
              xs: "18px",
              md: "20px",
            },
            position: "sticky",
            p: {
              md: "40px 30px 20px 30px",
              xs: "20px 30px 10px 30px",
            },
            top: "-1px",
            background: "white",
          }}
        >
          Your Order
        </Typography>
        <Box
          sx={{
            mt: "10px",
            display: "flex",
            flexWrap: "wrap",
            p: {
              sm: "0 20px",
              xs: "0  0  0 10px",
            },
            flexDirection: "column",
            gap: "10px",
            boxSizing: "border-box",
          }}
        >
          {data.map((x, i) => (
           <CartItem price={x.price} name={x.name} src={x.src} count={x.count} id={x.id} key={i}/>
          ))}
        </Box>
      </Box>
    </Box>
  );

  return (
    <div>
      <MuiDrawer
        anchor={"right"}
        sx={{ position: "relative" }}
        open={open}
        onClose={handleClose}
      >
        <Box
          sx={{
            width: "fit-content",
            position: "absolute",
            zIndex: "1",
            top: {
              md: "50px",
              xs: "30px",
            },
            right: {
              md: "80px",
              xs: "20px",
            },
            cursor: "pointer",
            fontSize: {
              xs: "20px",
              sm: "30px",
              md: "30px",
            },
          }}
          onClick={handleClose}
        >
          <IoCloseOutline
            style={{
              fontSize: "inherit",
              color: "#1F1E17",
            }}
          />
        </Box>
        {DrawerList}
      </MuiDrawer>
    </div>
  );
};

export default CartDrawer;
