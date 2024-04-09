import React, { useMemo } from "react";
import { NewsCards, servicesProductCategoriesArray } from "../../utils/utils";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import NewsCardUserDetails from "../../Components/NewsCardUserDetails/NewsCardUserDetails";
import Button from "../../Components/Button/Button";
import user from "./../../assets/images/user.png";
const scrollbarStyles = {

  "&::-webkit-scrollbar": {
    width: "8px",
    backgroundColor: "#F5F5F5",
    borderRadius:"10px"
  },
  "&::-webkit-scrollbar-thumb": {
    borderRadius: "10px",
    WebkitBoxShadow: " 0 0 6px rgba(0,0,0,.3)",
    background:"#d7d7d7"
  }
};
const DetailedNews = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const id = useMemo(
    () => +location?.pathname?.split("/")?.filter((x) => x !== "")[1],
    [location?.pathname]
  );
  const data = useMemo(
    () => NewsCards?.find((x) => x.newsId == id),
    [location.pathname]
  );
  if (!data) {
    return <>No News Found.</>;
  }
  const handleNewsNavigate = (newsId) => () => {
    if (id === newsId) {
      return;
    }
    navigate(`/news/${newsId}`);
  };

 
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        p: {
          lg: "120px 0px",
          xs: "20px 30px ",
        },
      }}
    >
      {/* main */}
      <Box
        sx={{
          maxWidth: {
            lg: "1200px",
          },
          m: "auto",
          alignItems: {
            lg: "start",
          },
          display: "flex",
          flexDirection: {
            lg: "row",
            xs: "column",
          },
          gap: "40px",
        }}
      >
        {/* child1 */}
        <Box
          sx={{
            flexBasis: { lg: "780px" },
          }}
        >
          <img
            src={data?.src}
            style={{
              width: "100%",
              borderRadius: "10px",
              aspectRatio: "16/8",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              objectFit: "cover",
            }}
            alt={""}
          />
          <Box sx={{ mt: "40px" }}>
            <NewsCardUserDetails
              name={data.name}
              count={data.count}
              postionX={"start"}
            />
          </Box>
          <Typography
            className="manRope800"
            sx={{
              fontSize: {
                lg: "30px",
                xs: "24px",
                sm: "26px",
                md: "28px",
              },
              lineHeight: {
                lg: "42px",
                xs: "36px",
                sm: "38px",
                md: "40px",
              },
              color: "#1F1E17",
              m: {
                xs: "10px 0",
              },
            }}
          >
            {data.text}
          </Typography>
          {data?.desc?.map((x, i) => (
            <Typography
              key={i}
              className="manRope500"
              sx={{
                fontSize: {
                  lg: "16px",
                  xs: "14px",
                },
                lineHeight: {
                  lg: "30px",
                  xs: "28px",
                },
                color: "#878680",
                mb: { xs: "30px" },
              }}
            >
              {x.desc}
            </Typography>
          ))}
        </Box>
        {/* child2 */}
        <Box
          sx={{
            display: "flex",
            boxSizing: "border-box",
            flexWrap: "wrap",
            gap: {
              xs: "30px",
            },
            alignItems: {
              xs: "stretch", // Default value for xs
              sm: "start", // alignItems start for sm
              md: "start", // alignItems start for md
              lg: "stretch", // Stretch to take available space for lg
            },
            flexDirection: {
              xs: "column",
              sm: "row",
              lg: "column",
            },
            flexBasis: {
              lg: "400px",
              xs: "100%",
            },
          }}
        >
          <Box
            sx={{
              position:"relative",
              ...scrollbarStyles,
              flexBasis: {
                xs: "100%",
                sm: "100%",
                lg: "100%",
              },
              borderRadius: "10px", 
              flexGrow: "1",
              flexShrink: "1",
              background: "#F8F7F0",
              maxHeight:{
                xs:"600px",
                sm:"700px",
                lg:"500px"
              },
              overflowY: "scroll", // Use auto to enable scrolling when content overflows
              boxSizing: "border-box",
              padding: {
                lg: "42px 50px 36px 50px",
                xs: "30px",
              },
              mb: {
                lg: "30px",
                xs: "18px",
              },
            }}
          >
            <Typography
              className="manRope800"
              sx={{
                color: "#1F1E17",
                fontSize: {
                  xs: "20px",
                },
                lineHeight: {
                  lg: "30px",
                },
                textAlign: {
                  xs: "center",
                  lg: "left",
                },
              }}
            >
              Latest News
            </Typography>
            <Box
              sx={{
                display: "flex",
                mt: "21px",
                flexDirection: "column",
                gap: "30px",
              }}
            >
              {NewsCards.map((ele, index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      p: "20px",
                      cursor: "pointer",
                      boxShadow:
                        id == ele.newsId
                          ? "rgba(0, 0, 0, 0.1) 0px 4px 12px"
                          : "",
                      boxSizing: "border-box",
                      background: "white",
                      display: "flex",
                      alignItems: "start",
                      flexDirection: {
                        xs: "column",
                        lg: "row",
                      },

                      // flexWrap: { lg: "nowrap", xs: "wrap" },
                      gap: "20px",
                      borderRadius: "10px",
                    }}
                    onClick={handleNewsNavigate(ele.newsId)}
                  >
                    <Box
                      sx={{
                        flexBasis: {
                          lg: "80px",
                        },
                        borderRadius: "10px",
                        flexGrow: "1",
                        alignSelf: {
                          xs: "stretch",
                          lg: "start",
                        },
                      }}
                    >
                      <img
                        src={ele.src}
                        style={{
                          width: "100%",
                          aspectRatio: "1/1",
                          borderRadius: "10px",
                          objectFit: "cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                        }}
                        alt=""
                      />
                    </Box>
                    <Box>
                      <Box sx={{ display: "flex", gap: "8px" }}>
                        <img
                          src={user}
                          style={{ width: "20px", height: "20px" }}
                          alt=""
                        />
                        <Typography
                          className="manRope600"
                          sx={{
                            fontSize: "14px",
                            color: "secondary.main",
                            lineHeight: "20px",
                          }}
                        >
                          by {ele.name}
                        </Typography>
                      </Box>
                      <Typography
                        className="manRope800"
                        sx={{
                          flexGrow: "1",
                          flexShrink: "1",
                          fontSize: "14px",
                          color: "primary.main",
                          lineHeight: "26px",
                        }}
                      >
                        {ele?.text?.slice(0, 40)
                          ? ele?.text?.slice(0, 30) + "..."
                          : ""}
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
          <Box
            sx={{
              flexBasis: {
                xs: "100%",
                sm: "45%",
                lg: "100%",
              },
              flexGrow: "1",
              flexShrink: "1",
              background: "#F8F7F0",
              borderRadius: "10px",
              boxSizing: "border-box",
              padding: {
                lg: "42px 50px 36px 50px",
                xs: "30px",
              },
              mb: {
                lg: "30px",
                xs: "18px",
              },
            }}
          >
            <Typography
              className="manRope800"
              sx={{
                color: "#1F1E17",
                fontSize: {
                  xs: "20px",
                },
                lineHeight: {
                  lg: "30px",
                },
                textAlign: {
                  xs: "center",
                  lg: "left",
                },
              }}
            >
              Categories
            </Typography>
            {servicesProductCategoriesArray.map((ele, index) => {
              return (
                <Typography
                  key={index}
                  className="manRope500"
                  sx={{
                    lineHeight: {
                      xs: "40px",
                    },
                    fontSize: {
                      xs: "16px",
                    },
                    color: "#878680",
                    textAlign: {
                      xs: "center",
                      lg: "left",
                    },
                    mt: "11px",
                  }}
                >
                  {ele.tab}
                </Typography>
              );
            })}
          </Box>
          <Box
            sx={{
              flexBasis: {
                xs: "100%",
                sm: "45%",
                lg: "100%",
              },
              flexGrow: "1",
              flexShrink: "1",
              background: "#F8F7F0",
              borderRadius: "10px",
              boxSizing: "border-box",
              padding: {
                lg: "42px 50px 36px 50px",
                xs: "30px",
              },
              mb: {
                lg: "30px",
                xs: "18px",
              },
            }}
          >
            <Typography
              className="manRope800"
              sx={{
                color: "#1F1E17",
                fontSize: {
                  xs: "20px",
                },
                lineHeight: {
                  lg: "30px",
                },
                textAlign: {
                  xs: "center",
                  lg: "left",
                },
                mb: "21px",
              }}
            >
              Tags
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: {
                  xs: "center",
                  sm: "space-evenly",
                  md: "center",
                  lg: "start",
                },
                gap: "10px",
                boxSizing: "border-box",
                alignItems: "start",
              }}
            >
              {data?.tags?.map((x, index) => {
                return (
                  <Button
                    key={index}
                    textColor="primary.main"
                    BgColor="white"
                    hoverBgColor="white"
                    hoverTextColor="primary.main"
                    text={x}
                    isNavigate={false}
                  />
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};


export default DetailedNews;
