import React, { useState, useRef } from "react";
import playIcon from "./../../assets/images/playIcon.png";
import farmVideo1 from "./../../assets/videos/farmVideo1.mp4";
import { Box, Typography } from "@mui/material";
const VideoBox = ({icon="", videoUri="",title=""}) => {
     const [isPlaying, setIsPlaying] = useState(false);
  const [isTitle, setIsTitle] = useState(true);
  const videoRef = useRef(null);
  const togglePlay = () => {
    if (isTitle) {
      setIsTitle(false);
    }
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };
  return (
    <Box
    sx={{
      width: {
        xs: "90%",
        sm: "100%",
      },
      m: {
        xs: "0 auto 50px auto",
        sm: "0",
      },
      height: {
        xs: "150px",
        sm: "300px",
        md: "400px",
      },
      borderRadius: {
        xs: "10px",
        sm: "0",
      },
      position: "relative",
      overflow: "hidden",
    }}
  >
    {!isPlaying && (
      <Box
        sx={{
          width: {
            xs:"200px",
            sm:"500px",
            md: "800px",
            lg: "750px",
          },
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Box sx={{ width: {
          xs:"40px",
          sm:"70px",
          md:"100px",
        }, height: {
          xs:"40px",
          sm:"70px",
          md:"100px",
        }, margin: "0 auto" }}>
          <img style={{ width: "100%", height: "100%" }} src={icon} />
        </Box>
        {isTitle && (
          <Typography
            className="manRope800"
            sx={{
              color: "white",
              marginTop: {
                xs:"20px",
                md:"45px"
              },
              fontSize: {
                xs:"16px",
                sm:"30px",
                md: "50px",
                lg: "60px",
              },
              lineHeight: {
                xs:"20px",
                sm:"50px",
                md: "72px",
              },
              textAlign: "center",
              letterSpacing: {
                xs:"0",
                md:"-4px",
              },
            }}
          >
            {title}
          </Typography>
        )}
      </Box>
    )}
    <video
      muted
      loop
      ref={videoRef}
      onClick={togglePlay}
      style={{ width: "100%", cursor: "pointer" }}
      src={videoUri}
    ></video>
  </Box>
  )
}

export default VideoBox