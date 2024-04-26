import { Box, Typography } from "@mui/material";
import { memo } from "react";
import { useSelector } from "react-redux";
const HeaderIcon = ({ component = <></>, id = "", cb=()=>{} }) => {
  const cart = useSelector((state) => state.cart);

  return (
    <Box onClick={()=>{cb(id)}} sx={{ position: "relative", cursor:"pointer" }}>
      <Box sx={{userSelect:"none"}}>

      {component}
      </Box>
      {id === "cart" && (
        <Box
          sx={{
            position: "absolute",
            top: "-12px",
            padding:"12px",
            right: "-28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#C5CE38",
            borderRadius: "50%",
            height: "8px",
            width: "8px",
            userSelect:"none"
          }}
        >
          {cart?.length > 9 
          ? (
           <Box sx={{m:"0", position:"relative", color:"white"}}>
              <Typography sx={{mb:"-2px", ml:"-2px", fontWeight:"bold"}}>
9
              </Typography>
              <Typography sx={{
                m:"0",
                position:"absolute",
                top:"-6px",
                right:"-9px"
              }}>
                +
              </Typography>
           </Box>
          ) 
          : 
          (
            cart.length
          )}
        </Box>
      )}
    </Box>
  );
};

export default memo(HeaderIcon);
