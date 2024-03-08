import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import featureCardMan from "./../../assets/images/featureCardMan.png";
import { pxToRem } from "../../utils/utils";
const FeatureCard = ({ title = "", heading = "", src = "" }) => {
  return (
    <Card
      sx={{
        background: "white",
        borderRadius: pxToRem("10"),
        maxWidth:{
            md: pxToRem("370"),
            xs:"100%"
        },
        boxShadow: `0 0 ${pxToRem("60")} ${pxToRem("10")} rgba(0, 0, 0, 0.1)`,
        padding: "0px",
      }}
    >
      <CardContent
        className="cardContent"
        sx={{ mt: pxToRem("48"), padding: "0px" }}
      >
        <Typography
          className="coveredBy400"
          sx={{
            textAlign: "center",
            color: "#EEC044",
            lineHeight: pxToRem("24"),
            fontSize: pxToRem("24"),
          }}
          variant="h5"
        >
          {title}
        </Typography>
        <Typography
          className="manRope800"
          sx={{
            textAlign: "center",
            maxWidth: "220px",
            margin: "auto",
            fontSize: pxToRem("24"),
            lineHeight: pxToRem("30"),
            color: "primary.main",
            mt: pxToRem("29"),
          }}
          variant="subtitle1"
        >
          {heading}
        </Typography>
        <img
          style={{
            width: pxToRem("90"),
            height: pxToRem("90"),
            borderRadius: pxToRem("10"),
            margin: "0 auto",
            display: "block",
            marginBottom: pxToRem("13"),
          }}
          src={src}
          alt= {heading}
        />
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
