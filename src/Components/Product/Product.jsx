import { Box, Typography } from '@mui/material'
import ReactRating from '../Rating/Rating'
const Product = ({name="", price="",  src=""}) => {
  return (
    <Box sx={{
        borderRadius:"10px",
        textAlign:"center",

      }}>
        <img style={{ aspectRatio:"1/1", borderRadius:"10px" }} alt={name} src={src}/>
        <Typography 
        className="manRope800"
        sx={{
          color:"#222222",
          fontSize:"22px",
          lineHeight:"26px",
          mt:"14px"
        }}>
        {name}
        </Typography>

        <Typography 
        className="manRope600"
        sx={{
          fontSize:"16px",
          lineHeight:"30px",
          color:"#4BAF47"
        }}
        >
{
  price
}        </Typography>
          <ReactRating/>
      </Box>
  )
}

export default Product