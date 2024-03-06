import React, { memo } from "react";
import { Button as MUIButton } from "@mui/material";

const Button = ({
  text = "click me",
  textColor = "white",
  BgColor = "red",
  hoverBgColor = "#c92525",
  hoverTextColor = "white",
}) => {
  return (
    <MUIButton
      sx={{
        borderRadius: "1.5625rem", 
        padding: "0.9375rem 1.875rem", 
        backgroundColor: BgColor,
        color: textColor,
        "&:hover": { backgroundColor: hoverBgColor, color: hoverTextColor },
      }}
      variant="contained"
    >
      {text}
    </MUIButton>
  );
};

export default memo(Button);
