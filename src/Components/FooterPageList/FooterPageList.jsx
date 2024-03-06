import React from "react";
import { pages } from "../../utils/utils";
import FooterPageItem from "../FooterPageItem/FooterPageItem";
const FooterPageList = () => {
  return (
    <>
      {

            pages.map((x,i)=><FooterPageItem key={i} pageName={x.name}/>)
      }
      
    </>
  );
};

export default FooterPageList;
