import { memo, useEffect, useState } from "react";
import Rating from "react-rating";
import rating from "./../../assets/images/rating.png";
const ReactRating = () => {
  
  return (
    
    <Rating
      readonly={true}
      emptySymbol={<img style={{width:"20px",  filter: 'sepia(100%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(75%)'}} src={rating} className="icon" />}
      fullSymbol={ <img style={{width:"20px"}} src={rating} className="icon" />}
      quiet={true}
      initialRating={5}
    />
  );
};

export default memo(ReactRating);