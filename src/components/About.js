import React from 'react';
import { Box,Typography, Stack } from '@mui/material';


const About = () => {
  return (
    <Box id="about" sx={{bgcolor:"#03001C", color:"white"}}>
      <Box textAlign={"center"}
      sx={{mt:2, mb:2}}>
      <Typography 
      sx={{fontSize:"40px", fontWeight:700}}>
      ABOUT US
      </Typography>

      <Typography  sx={{fontSize:"20px", fontWeight:700}} >
      Welcome to Diet Fusion, your one-stop destination for achieving 
      a healthier and fitter lifestyle right from the comfort of your home
      </Typography>
      
      </Box>
      
      <Stack textAlign={"center"} 
      sx={{display:"flex",flexWrap:"wrap",flexDirection:"row",
      gap:7,justifyContent:"center"}}>
        
        <Box sx={{width: '357px',height:'396px', 
          background:`rgba(48, 30, 103, 0.50)`}} >
        
            <Typography sx={{mb:2, fontSize:"32px",fontWeight:"700"}}>Our Approach</Typography>
            <Typography sx={{fontSize:"16px", fontWeight:"700"}}>At Diet Fusion, we understand that each 
               person's body is unique, which is why
               we've developed an interactive body 
               structure assessment. Our aim is to 
               make exercising enjoyable and effective, 
               guiding you every step of the way</Typography>
        
        </Box>

        <Box sx={{width: '357px',height:'396px',background:`rgba(48, 30, 103, 0.50)`}}>
        
            <Typography sx={{mb:2, fontSize:"32px",fontWeight:"700"}}>Personalized Diet Plans</Typography>
            <Typography sx={{fontSize:"16px", fontWeight:"700"}}>A healthy diet is the cornerstone of 
                any successful fitness journey. 
                Our team of nutrition experts has 
                designed comprehensive and balanced 
                diet plans to complement your workouts 
                and optimize your results. Our diet 
                plans will help you fuel your body with 
                the right nutrients</Typography>
        
        </Box>

        <Box sx={{width: '357px',height:'396px',background:`rgba(48, 30, 103, 0.50)`}}>
        
            <Typography sx={{mb:2, fontSize:"32px",fontWeight:"700"}}>Expert Guidance</Typography>
            <Typography sx={{fontSize:"16px", fontWeight:"700"}}>We believe that knowledge is power, 
                and that's why we provide expert 
                guidance and educational resources to 
                empower you with the tools you need 
                for lasting success. Our dedicated team 
                of fitness trainers and nutritionists 
                are here to answer your questions, offer 
                support, and keep you motivated throughout 
                your transformation.</Typography>
            
        
        </Box>
      </Stack>
      
   



    </Box>
  )
}

export default About
