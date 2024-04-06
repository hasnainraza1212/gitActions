import { Box, Typography } from "@mui/material";
import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import BreadCrumBG from "./../../assets/images/breadCrumBg.png";

const BreadCrum = () => {
  const location = useLocation();

  const crumbs = useMemo(() => {
    return location.pathname
      .split("/")
      .filter((x) => x !== "")
      .map((x, i) => (
        <Box key={i} sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Box sx={{ color: "white" }}>/</Box>
          <Link className="manRope400" style={{ color: "white", textDecoration: "none" }} to={`/${x}`}>
            {`${x} `}
          </Link>
        </Box>
      ));
  }, [location.pathname]);

  const currentPage = useMemo(() => {
    const pages = location.pathname.split("/").filter((x) => x !== "");
    return pages[0];
  }, [location.pathname]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "300px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        background: `url(${BreadCrumBG})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box sx={{ display: "flex", gap: "10px" }}>
        <Link className="manRope400" style={{ color: "white", textDecoration: "none" }} to="/">
          Home
        </Link>{" "}
        {crumbs}
      </Box>
      <Typography
        className="manRope800"
        sx={{
          mt: "20px",
          fontSize: { lg: "50px" },
          lineHeight: { lg: "60px" },
          color: "white",
        }}
      >
        {currentPage}
      </Typography>
    </Box>
  );
};

export default BreadCrum;
