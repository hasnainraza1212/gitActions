import * as React from "react";
import { Box, FormControl, OutlinedInput, Tab, Tabs } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import HeaderIcon from "../HeaderIcon/HeaderIcon";
import {
  contactHeaderData,
  darkSocialMediaHandles,
  headerIcons,
  tabsArray,
} from "../../utils/utils.jsx";
import darklogo from "./../../assets/images/darklogo.png";
import SocialIcon from "../SocialIcon/SocialIcon.jsx";
import ContactComponent from "../ContactComponent/ContactComponent.jsx";
import BreadCrum from "../BreadCrum/BreadCrum.jsx";
import CartDrawer from "../CartDrawer/CartDrawer.jsx";
import { useDispatch, useSelector } from "react-redux";
import { upateNewsCards } from "../../Redux/Slice/NewsSlice/NewsSlice.js";
import { updateProductsCards } from "../../Redux/Slice/ProductSlice/ProductSlice.js";
const Header = () => {
  const dispatch = useDispatch()
  const news = useSelector(state=>state.news)
  const navigate = useNavigate();
  const {pathname} = useLocation()
  const [value, setValue] = React.useState(0);
  const [input, setInput] = React.useState("")
  const [open, setOpen] = React.useState(true);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handlenavigate = (link) => {
    navigate(link);
  };
  React.useEffect(()=>{
 const ind = tabsArray.findIndex(tab=>tab.link===pathname)
 if(ind !== -1){
  return setValue(ind)
 }
  },[pathname])

  const showCrumbs = ()=>{
    if(location.pathname !== "/"){
      return <BreadCrum/>
    }
  }
  const cb=(id)=>{
    console.log(input)
    if(id==="cart"){
     return setOpen(true)
    }
    if(pathname?.toLowerCase().includes("news")){
      return dispatch(upateNewsCards(input))
      
    }
    if(pathname?.toLowerCase().includes("shop")){
      console.log(input)
      return dispatch(updateProductsCards(input))
    }
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          background: "white",
        }}
      >
        <Box
          sx={{
            maxWidth: "1200px",
            margin: "0 auto",
            minHeight: "112px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              flexGrow: "1",
              flexShrink: "1",
              flexBasis: "25%",
            }}
          >
            <img src={darklogo} />
          </Box>
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              flexGrow: "3",
              flexShrink: "1",
              flexBasis: "75%",
            }}
          >
            <Box>
              <Box
                sx={{
                  display: "flex",
                  gap: ".625rem",
                }}
              >
                {darkSocialMediaHandles.map((x, i) => (
                  <SocialIcon
                    bgColor={"#F8F7F0"}
                    key={i}
                    src={x.src}
                    alt={x.alt}
                    link={x.link}
                  />
                ))}
              </Box>
            </Box>
            <Box className="headerContactComponent" sx={{display:"flex",  alignItems:"center"}}>
              {contactHeaderData.map((x, i) => (
                <Box className="headerContactComponentItem" sx={{padding:"0px 20px 0 30px"}} key={i}>
                  <ContactComponent
                    src={x.src}
                    alt={x.alt}
                    title={x.title}
                    subTitle={x.subTitle}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: "79px",
        }}
      >
        <Box>
          <Tabs
            className={"headerTab"}
            onChange={handleChange}
            value={value}
            aria-label="Tabs where each tab needs to be selected manually"
          >
            {tabsArray.map((tab, index) => (
              <Tab
                className={value === index ? "manRope800" : "manRope700"}
                onClick={() => {
                  handlenavigate(tab.link);
                }}
                key={index}
                label={tab.tabName}
                sx={{
                  color: value === index ? "primary.main" : "secondary.main",
                }}
              />
            ))}
          </Tabs>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                borderRight: "1px solid  #E4E2D7",
                minHeight: "36px",
                display: "flex",
                alignItems: "center",
              }}
              className={"inputBox"}
            >
              <FormControl sx={{ mr: 1 }}>
                <OutlinedInput
                onChange={(e)=>{setInput(e.target.value)}}
                placeholder="Search..."
                value={input}
                  sx={{
                    color: "secondary.main",
                    maxHeight: "36px",
                  }}
                />
              </FormControl>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap:"30px",
                padding:"0 30px",
                alignItems:"center"
              }}
            >
              {headerIcons.map((x, i) => {
                return <HeaderIcon cb={cb} key={i} id={x.id}component={x.icon} />
                })}
            </Box>
          </Box>
        </Box>
      </Box>
      {showCrumbs()}
      <CartDrawer open={open} handleClose={()=>{setOpen(false)}} handleOpen={()=>{setOpen(true)}}/>
    </Box>
  );
};

export default Header;
