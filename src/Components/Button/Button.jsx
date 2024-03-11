import React, { memo } from "react";
import { Button as MUIButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Button = ({
  text = "click me",
  textColor = "white",
  BgColor = "red",
  hoverBgColor = "#c92525",
  hoverTextColor = "white",
  link="/"
}) => {
  const navigate = useNavigate();
  const handleNavigate = ()=> navigate(link)
  return (
    <MUIButton
      onClick={handleNavigate}
      className="manRope800"
      sx={{
        borderRadius: "0.62rem",
        minHeight: {
          lg: "3.5rem",
        },
        backgroundColor: BgColor,
        fontSize: {
          lg: "0.87rem",
          xs: ".6rem",
        },
        lineHeight: "1.87rem",
        padding: "10px 30px",
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
