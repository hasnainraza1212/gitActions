import { Box, Typography } from '@mui/material'
import React, { memo } from 'react'
import leaf from "./../../assets/images/leaf.png"
const FooterPageItem = ({
    pageName
}) => {

  return (
    <Box sx={{
        display:"flex",
        alignItems:"center",
        gap:".85rem"
    }}>
        <img style={{
            width:".688rem",
            height:".625rem"
        }} src={leaf} alt={leaf + " page"}/>
        <Typography sx={{color:"secondary.main",lineHeight:"1.87rem", fontSize:".93rem"}} className='manRope500'>{pageName}</Typography>
    </Box>
  )
}

export default memo(FooterPageItem)