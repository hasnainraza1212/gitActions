import React, { useState, useRef } from "react";
import BreadCrum from "../../Components/BreadCrum/BreadCrum";
import { Box } from "@mui/material";
import TeaserBox from "../../Components/TeaserBox/TeaserBox";
import Button from "../../Components/Button/Button";
import { featureCheckList } from "../../utils/utils";
import ChecklistItem from "../../Components/ChecklistItem/ChecklistItem";
import traktor from "./../../assets/images/traktor.jpg";
import playIcon from "./../../assets/images/playIcon.png";
import farmVideo1 from "./../../assets/videos/farmVideo1.mp4";
import VideoBox from "../../Components/VideoBox/VideoBox";

const About = () => {
  return (
    <>
      <BreadCrum />
      <Box>
        <Box
          sx={{
            maxWidth: "1200px",
            boxSizing: "border-box",
            padding: {
              lg: "106px 30px",
              xs: "50px 30px",
            },
            margin: "auto",

            display: "flex",
            gap: "80px",
            height: "100%",
            flexDirection: {
              md: "row",
              xs: "column",
            },
          }}
        >
          <Box
            sx={{
              flexGrow: "1",
              flexShrink: "1",
              flexBasis: {
                md: "50%",
                xs: "80%",
              },
              textAlign: "justify",
              position: "relative",
            }}
          >
            <Box
              sx={{
                width: "100%",
                background: "red",
                height: {
                  md: "100%",
                  xs: "450px",
                  sm: "500px",
                },
                borderRadius: "10px",
              }}
            >
              <Box
                sx={{
                  minHeight: "100%",
                  borderRadius: "8px",
                  background: `url(${traktor})`,
                  width: "100%",
                  backgroundSize: "cover",
                  backgroundPosition: "80%",
                }}
              ></Box>
            </Box>
          </Box>
          <Box
            sx={{
              flexGrow: "1",
              flexShrink: "1",
              flexBasis: {
                md: "50%",
                xs: "100%",
              },
            }}
          >
            <TeaserBox
              title="Get to Know Us"
              subHeading="There are many variations of passa of lorem available, but the majority have suffered alteration."
              heading="The Best Agriculture Market"
              text="There are many variations of passages of lorem ipsum available but the
              majority have suffered alteration in some form by injected humor or
              random word which don’t look even."
            />
            <Box sx={{ mt: "20px" }}>
              {featureCheckList.map((x, i) => (
                <ChecklistItem text={x.text} src={x.src} key={i} />
              ))}
            </Box>

            <Box
              sx={{
                mt: {
                  md: "40px",
                  xs: "30px",
                },
              }}
            >
              <Button
                text={"Discover More"}
                BgColor={"#4BAF47"}
                hoverBgColor={"#47d742"}
                textColor="white"
                link={"/projects"}
              >
                Discover More
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <VideoBox title="ECO-Friendly Products can be Made from Scratch" icon={playIcon} videoUri={farmVideo1}/>
    </>
  );
};

export default About;
