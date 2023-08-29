import React from 'react'
import { Box,Typography } from '@mui/material'
import { BlogData } from '../utils/blogData'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'

const Blog = () => {

  const isLargeScreen = window.innerWidth >= 1024;
  
  return (
    
    <Box id="blog" >
            <Typography fontSize={"24px"} fontWeight={"bold"}
            sx={{display:"flex", justifyContent:"center", mt:"2rem", mb:"2rem"}}>FITNESS FUSION BLOG</Typography>
             <Splide style={{}} options={{ 
              perPage:isLargeScreen ? 4:2,
              arrows:true,
              pagination:false,
              drag:"free",
              gap:"2rem"

            }}>
      {BlogData.map((Item, index) => (
        
        <SplideSlide key={index}>
        <Card sx={{ maxWidth: 300, borderRadius:"1rem", ml:2,mr:2 }} >
          <Link to={Item.url} target="_blank">
        <CardActionArea>
          <CardMedia
            component="img"
            height="240"
            width={"240"}
            image={Item.img}
            alt={Item.title}
          />
          <CardContent sx={{bgcolor:"#37306B"}}>
            <Typography gutterBottom color={"white"} fontWeight={"bold"} variant="h5" component="div">
              {Item.title}
            </Typography>
            
          </CardContent>
        </CardActionArea>
        </Link>
      </Card>
      </SplideSlide>
      
      ))}
    </Splide>  
    </Box>
  )
}

export default Blog
