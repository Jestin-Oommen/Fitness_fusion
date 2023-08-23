import React from 'react'
import { Box, Typography } from '@mui/material'
import Logo from '../assets/logo.png'


const DietNavBar = () => {
  return (
    <>
      <Box sx={{display:"flex", flexDirection:"row", 
    justifyContent:"center",alignItems:"center",
    bgcolor:"#F5F5F5" }}>
        <img src={Logo} alt="logo" width={70}/>
        <Typography fontSize={"32px"} fontWeight={700} color={"black"}>
            FITNESS FUSION
        </Typography>

      </Box>
      
    </>
  )
}

export default DietNavBar
