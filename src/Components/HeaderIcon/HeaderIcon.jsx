import { Box } from '@mui/material'
import { memo } from 'react'
const HeaderIcon = ({component}) => {
  return (
    <Box sx={{
        width:"56px",
        height:"56px",
        display:"flex",
        alignItems:"center",
        justifyContent:"end"
    }}>
        {component}
    </Box>
  )
}

export default memo(HeaderIcon)