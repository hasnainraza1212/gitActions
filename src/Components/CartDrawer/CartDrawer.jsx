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
import { CiMenuBurger } from "react-icons/ci";
import { tabsArray } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const CartDrawer = ({
  open=false,
  handleClose=()=>{},
  handleOpen=()=>{}
}) => {
  const navigate = useNavigate()

  const data = useSelector(state=>state.cart)

  const DrawerList = (
    <Box sx={{ width: 400, mt:"30px" }} role="presentation" onClick={handleClose}>
      <List>
        {data.map((x, index) => (
          <ListItem onClick={()=>{navigate(x.link)}} key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon></ListItemIcon>
              <ListItemText  primary={x.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
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
            top: "10px",
            right: "20px",
          }}
          onClick={handleClose}
        >
          <IoCloseOutline style={{
            fontSize:"30px",
            color:"#1F1E17"
          }} />
        </Box>
        {DrawerList}
      </MuiDrawer>
    </div>
  );
};

export default CartDrawer