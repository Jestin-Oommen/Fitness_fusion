import React from 'react';
import { Box, Typography,Stack } from '@mui/material';
import DietIcon from "../assets/dieticon.png";
import Workout from "../assets/workout_icon.png";
import Community from "../assets/community_icon.png";
import { Link } from 'react-router-dom';


const Features = () => {
  return (
    <Box id="features" bgcolor={"#03001C"} color={"white"}
    sx={{mt:"25px"}}>
      <Typography textAlign={"center"} sx={{mb:"25px",fontSize:"40px", fontWeight:700}}>
      FEATURES
      </Typography>

      <Stack spacing={2} direction={"row"} sx={{
        display:"flex", flexWrap:"wrap",justifyContent:"space-around",
        
      }}>
        <Box textAlign={"center"}>
            <Link className='feature_link' to='/diet'><img src={DietIcon} alt="diet"/>
            <Typography sx={{fontSize:"40px",fontWeight:"700"}}>Recipes</Typography>
            <Typography sx={{fontSize:"32px",fontWeight:"700"}}>Cook, eat and log</Typography></Link>
            
        </Box>
        <Box textAlign={"center"}>
            <Link className='feature_link' to='https://shorturl.at/GINOY' target="_blank"><img src={Community} alt="diet"/>
            <Typography sx={{fontSize:"40px",fontWeight:"700"}}>Community</Typography>
            <Typography sx={{fontSize:"32px",fontWeight:"700"}}>Food and Fitness</Typography></Link>
            
        </Box>
        <Box textAlign={"center"}>
            <Link className='feature_link' to='/workout'><img src={Workout} alt="diet"/>
            <Typography sx={{fontSize:"40px",fontWeight:"700"}}>Workout</Typography>
            <Typography sx={{fontSize:"32px",fontWeight:"700"}}>Get Fit. Stay Strong.</Typography></Link>
            
        </Box>
      </Stack>
    </Box>
  )
}

export default Features
