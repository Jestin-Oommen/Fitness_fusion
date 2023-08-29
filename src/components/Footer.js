import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';
import {BsFacebook,BsLinkedin} from "react-icons/bs"
import {FaTwitter} from "react-icons/fa"
import {AiFillInstagram} from "react-icons/ai"



const Footer = () => {

  const handleHover = (event) => {
    const icon = event.currentTarget.querySelector('.icon'); // Get the icon element
    icon.style.transform = 'scale(1.2)'; // Apply the zoom-in effect on hover
  };

  const handleMouseLeave = (event) => {
    const icon = event.currentTarget.querySelector('.icon'); // Get the icon element
    icon.style.transform = 'scale(1)'; // Reset the transform on mouse leave
  };
  
  return (
    <Box sx={{height:"40vh",display:"flex",flexDirection:"column" ,justifyContent:"center", alignItems:"center"}}>
    
    <Stack spacing={4} direction={'row'} sx={{mb:3,mt:3,}}>
    <div onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
        <BsFacebook className="icon" style={{ fontSize: '25px', transition: 'transform 0.3s ease' }} />
    </div>
    <div onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
        <FaTwitter className="icon" style={{ fontSize: '25px', transition: 'transform 0.3s ease' }} />
    </div>
    
    <div onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
        <BsLinkedin className="icon" style={{ fontSize: '25px', transition: 'transform 0.3s ease' }} />
    </div>
    
    <div onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
        <AiFillInstagram className="icon" style={{ fontSize: '25px', transition: 'transform 0.3s ease' }} />
    </div>
    </Stack>

  <Stack spacing={2} direction={'row'} marginBottom={2}>
      <a style={{textDecoration:"none", color:"white", fontWeight:"700"}} href="/">HOME</a> 
      <a style={{textDecoration:"none", color:"white", fontWeight:"700"}} href="#about">ABOUT</a> 
      <a style={{textDecoration:"none", color:"white", fontWeight:"700"}} href="#features">SERVICES</a> 
      <a style={{textDecoration:"none", color:"white", fontWeight:"700"}} href="#blog">BLOG</a>
    </Stack>
  <Typography fontWeight="bold">© 2023 Fitness Fusion | All Rights Reserved</Typography>
  </Box>
  )
}

export default Footer
