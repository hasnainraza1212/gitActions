import { Box, Container, Typography } from "@mui/material";
import React from "react";
import logo from "./../../assets/images/logo.png";
import FooterHeading from "./../FooterHeading/FooterHeading.jsx";
import { contactData, newsData, socialMediaHandles } from "../../utils/utils";
import FooterPageList from "../FooterPageList/FooterPageList.jsx";
import FooterNews from "../FooterNews/FooterNews.jsx";
import FooterContact from "../FooterContact/FooterContact.jsx";
const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#24231D", color: "white" }}>
      <Box
        maxWidth="75rem"
        sx={{
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr .5fr 1.5fr 1fr",
          },
          gap: "1.87",
          color: "secondary",
          padding: {
            xs: "2rem",
            md: "7.5rem 0rem 7.5rem 3.5rem",
          },
          boxSizing: "border-box",
        }}
      >
        <Box sx={{ minWidth: { xs: 0, md: "16.87rem" } }}>
          <img src={logo} alt={"agrios logo"} />
          <Typography
            sx={{
              color: "secondary.main",
              fontSize: ".93rem",
              marginBottom: "1.25rem",
            }}
            className="manRope500"
            variant="subtitle1"
          >
            There are many variations of passages of lorem ipsum available, but
            the majority suffered.
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: ".625rem",
            }}
          >
            {socialMediaHandles.map((x, i) => (
              <Box
                key={i}
                sx={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "50%",
                  background: "#1F1E17",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{ width: ".87rem", height: ".87rem" }}
                  src={x.src}
                  alt={x.alt}
                />
              </Box>
            ))}
          </Box>
        </Box>
        <Box sx={{ minWidth: { xs: "", md: "12.5rem" } }}>
          <FooterHeading text={"Explore"} />
          <FooterPageList />
        </Box>
        <Box>
          <FooterHeading text={"News"} />
          <Box
            sx={{
              padding: {xs:0, md:"0 5.54rem 0 6.25rem"},
              minWidth: {
                xs: 0,
                md: "12.25rem",
              },
            }}
          >
            {newsData.map((x, i) => (
              <Box
                key={i}
                sx={{
                  mb: "1.78rem",
                }}
              >
                <FooterNews news={x.news} date={x.date} />
              </Box>
            ))}
          </Box>
        </Box>
        <Box>
          <FooterHeading text={"Contact"} />
          <Box>
            {contactData.map((x, i) => (
              <Box key={i} sx={{mb:"1.25rem"}}>
                <FooterContact src={x.src}  text={x.text} />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
