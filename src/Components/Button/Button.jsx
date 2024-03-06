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
        borderRadius: "25px",
        padding: "15px 30px",
        backgroundColor: BgColor,
        color: textColor,
        "&:hover": { background: hoverBgColor , color:hoverTextColor},
      }}
      variant="contained"
    >
      {text}
    </MUIButton>
  );
};

export default memo(Button);
