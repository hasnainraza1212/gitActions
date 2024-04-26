import React, { useCallback, useEffect } from "react";
import NewItem from "../../Components/NewItem/NewItem";
import { Box } from "@mui/material";
import { NewsCards } from "../../utils/utils";
export const filter = (value="") => {
  const filteredData = NewsCards.filter((item) =>
    item?.text?.toLocaleLowerCase()?.includes(value)
  );
  console.log(filteredData);
  return filteredData;
};
const News = () => {
 
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "30px",
        justifyContent: "center",
        p: { lg: "120px 0", sm: "40px", xs: "30px" },
        maxWidth: "1200px",
        m: "auto",
      }}
    >
      {NewsCards.map((x, i) => (
        <NewItem
          key={i}
          newsId={x.newsId}
          src={x.src}
          name={x.name}
          date={x.date}
          count={x.count}
          text={x.text}
        />
      ))}
    </Box>
  );
};

export default News;
