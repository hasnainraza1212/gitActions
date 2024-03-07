import React from "react";
import hero from "./../../assets/images/hero.png";
import { Box, Typography } from "@mui/material";
import Button from "../../Components/Button/Button";
import goldLeaf from "./../../assets/images/goldLeaf.png";
const Home = () => {
  return (
    <Box
      sx={{
        background: `url(${hero})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        boxSizing:"border-box",
        padding:{
          xs:"40px"
        },
        height: {
          lg:"810px"
        },
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: {
            lg:"1200px"
          },
          width: "100%",
          margin: "0 auto",
        }}
      >
        <Typography
          className="manRope400"
          sx={{
            color: "white",
            fontSize: {
              lg:"1rem",
              xs:".8rem"
            },
            lineHeight: {
              lg:"1.87rem"
            },
          }}
          variant="p"
        >
          Welcome to agrios farming
        </Typography>
       <Box sx={{
        display:"flex",
        alignItems:"center",
        gap:"20px",
        mt:{
          xs:"20px"
        }

       }}>
       <Typography
        variant="subtitle1"
          className="coveredBy400"
          sx={{
            color: "white",
            fontSize: {
              lg:"7.5rem",
              xs:"3rem"
            },
            maxWidth: {
              lg:"40.98rem",
            },
            lineHeight: {
              lg:"110px",
              xs:"1.3rem"
            },
            mt: "18px",
          }}
        >
          Agriculture 
        </Typography>
        <Typography
            variant="h1"
            className="coveredBy400"
            sx={{
              color: "#EEC044",
              fontSize:{
                xs:"4rem",
                lg:"7.5rem"
              },
              lineHeight: {
                xs:"1.3rem",
                lg:"110px",
                
              },
              mt:{
                xs:"20px"
              }
            }}
          >
            &
          </Typography>
       </Box>
          <Typography
          className="coveredBy400"
          sx={{
            color: "white",
            fontSize: {
              lg:"7.5rem",
              xs:"3rem"
            },
            maxWidth: {
              lg:"40.98rem",
            },
            lineHeight: {
              lg:"110px",
              xs:"1.3"
            },
            mt: "18px",
          }}
          variant="subtitle1"
        >
         Eco Farming
        </Typography>
        <Typography
          className="manRope400"
          sx={{
            color: "white",
            fontSize: {
              lg:"1rem",
              xs:".8rem"
            },
            lineHeight: {
              lg:"1.87rem",
              xs:"1.3rem"
            },
            maxWidth: {
              lg:"32.61rem"
            },
            mt: {
              xs:".8rem",
              lg:"1.62rem"
            },
          }}
          variant="subtitle1"
        >
          Farming is the cultivation of plants and livestock, a cornerstone of
          human civilization, providing food, fiber, and raw materials.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection:{
                xs:"column"
            },
            alignItems: {
              lg:"center",
              xs:"start"
            },
            gap:"1.25rem",
            mt:"2.75rem"
          }}
        >
          <Button
            text={"Discover More"}
            BgColor={"#4BAF47"}
            hoverBgColor={"#47d742"}
            textColor="white"
          >
            Discover More
          </Button>
          <img src={goldLeaf}/>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
