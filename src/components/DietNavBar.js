import React from 'react'
import { Box, Typography } from '@mui/material'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'


const DietNavBar = () => {
  return (
    <>
    
      <Box sx={{display:"flex", flexDirection:"row", 
    justifyContent:"center",alignItems:"center",
    bgcolor:"#16003B" }}>
      
        <Link to={"/"}><img src={Logo} alt="logo" width={70}  style={{textDecoration:"none"}}/></Link>
        <Link to={"/"}><Typography fontSize={"32px"} fontWeight={700} color={"white"} style={{textDecoration:"none"}}>
            FITNESS FUSION
        </Typography>
        </Link>
      
      </Box>
      
      
    </>
  )
}

export default DietNavBar
