import { Box } from "@mui/material";
import React from "react";

const SocialIcon = ({ src = "", alt = "", bgColor = "#1F1E17" }) => {
  return (
    <Box
      sx={{
        width: "2.5rem",
        height: "2.5rem",
        borderRadius: "50%",
        background: bgColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img style={{ width: ".87rem", height: ".87rem" }} src={src} alt={alt} />
    </Box>
  );
};

export default SocialIcon;
