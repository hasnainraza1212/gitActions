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
    className="manRope700"
      sx={{
        borderRadius: "0.62rem", 
        minHeight:{
          lg:"3.5rem"
        },
        minWidth:{
          lg:"12.25rem"
        },
        backgroundColor: BgColor,
        fontSize:{
          lg:"0.87rem",
          xs:".6rem"
        },
        lineHeight:"1.87rem",
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
