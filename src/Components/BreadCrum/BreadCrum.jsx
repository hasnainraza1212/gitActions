import { Box, Typography } from "@mui/material";
import { useCallback, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import BreadCrumBG from "./../../assets/images/breadCrumBg.png";
const BreadCrum = () => {
  const location = useLocation();
  const handleBreadCrum = useCallback(() => {
    const crums = location.pathname
      .split("/")
      .filter((x) => x != "")
      .map((x, i) => (
        <Box key={i} sx={{display:"flex", alignItems:"center",gap:"10px"}}>
           <Box sx={{color:"white"}}>
            /
           </Box>
          <Link className="manRope400" style={{ color: "white", textDecoration: "none" }} to={`/${x}`}>
            {`${x} `}
          </Link>
        </Box>
      ));
    return crums;
  }, [location.pathname]);
  return (
    <Box
      sx={{
        width: "100%",
        height: "300px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `url(${BreadCrumBG})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box 
        sx={{
          display:"flex",
          gap:"10px"
        }}
      >
       <Link className="manRope400" style={{ color: "white", textDecoration: "none" }}  to="/">Home</Link> {handleBreadCrum()}
      </Box>
    </Box>
  );
};

export default BreadCrum;
