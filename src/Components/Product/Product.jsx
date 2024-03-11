import { Box, Typography } from '@mui/material'
import Rating from '../Rating/Rating'
const Product = ({name="", price="",  src="", rating=3}) => {
  return (
    <Box sx={{
        borderRadius:"10px",
        textAlign:"center",

      }}>
        <img style={{width:"100%", aspectRatio:"1/1", borderRadius:"10px" }} alt={name} src={src}/>
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
          <Rating initialRating={rating} fractions={2}  isStatic={true}/>
      </Box>
  )
}

export default Product