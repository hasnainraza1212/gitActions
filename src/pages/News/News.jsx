import React from 'react'
import NewItem from '../../Components/NewItem/NewItem'
import { Box, Typography } from '@mui/material'
import bayHaleNew from "./../../assets/images/bayHaleNews.png"
import Button from "./../../Components/Button/Button"
import NewsCardUserDetails from '../../Components/NewsCardUserDetails/NewsCardUserDetails'
import { NewsCards } from '../../utils/utils'



const News = () => {
  return (
<Box sx={{display:"flex", flexWrap:"wrap", gap:"30px", justifyContent:"center",p:{lg:"120px 0", sm:"40px", xs:"30px"}, maxWidth:"1200px", m:"auto"}}>
 {
  NewsCards.map((x,i)=>(<NewItem key={i} newsId = {x.newsId}src={x.src} name={x.name} date={x.date} count={x.count }text={x.text}/>))
 }
  
  
</Box>
  )
}

export default News