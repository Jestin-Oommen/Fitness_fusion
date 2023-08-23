import React from 'react'
import { Box, Typography, Stack } from '@mui/material'
import Diet1 from '../assets/diet1.jpg'
import Diet2 from '../assets/diet2.jpg'
import Diet3 from '../assets/diet3.jpg'
import "../App.css"

const DietHeader = () => {
  return (
    
      <Box minHeight={"80vh"}  
      sx={{mt:3,display:"flex", flexDirection:"row"}} >
        
        <Box width={"50vw"} color={"white"} textAlign={"center"}   
        sx={{fontWeight:700,display:"flex", justifyContent:"center", alignItems:"center",
        flexDirection:"column"}}>
            <Typography fontSize={"40px"} fontWeight={700}>
            Your Journey to a Healthier You 
            </Typography>
            <Typography fontSize={"22px"} fontWeight={700} >
            Welcome to our Diet & Nutrition Page! Here, we're dedicated to helping you achieve your health and 
            wellness goals through balanced and nutritious eating habits. 
            </Typography>
        </Box>
           
        <Box width={"50vw"} 
        sx={{display:"flex",justifyContent:"center",flexDirection:"row", flexWrap:"wrap",gap:5} }>
            
             
              <img src={Diet2} className='dietHeaderImg' width={"300px"} height={"300px"}  alt='diet1'/>  
              <img src={Diet1} width={"300px"} className='dietHeaderImg'  height={"300px"} alt='diet2'/> 
              <img src={Diet3} width={"300px"} className='dietHeaderImg' height={"300px"} alt='diet3'/>   
            
            
        </Box>
      </Box>
    
  )
}

export default DietHeader
