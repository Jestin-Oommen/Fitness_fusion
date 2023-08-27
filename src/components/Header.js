import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import HeaderImage from "../assets/header.png";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <Box
      sx={{
        backgroundSize: "cover",
        backgroundAttachment: "local",
        backgroundImage: `url(${HeaderImage})`,
        minHeight: { lg: "90vh", xs: "60vh" },
        width: "100vw",
      }}
    >
      <Stack direction={"row"}
      sx={{display:"flex", justifyContent:"space-between"
      }}>
        <a href="/"><img src={Logo} alt="logo" width="73px" height="76px"/></a>

        <Box sx={{mt:3, mr:3}}>
          <nav style={{display:"flex",gap:10}}>
            <a href="/">HOME</a> 
            <a href="#about">ABOUT</a> 
            <a href="#features">SERVICES</a> 
            <a href="/python/">BLOG</a>
          </nav>
        </Box>
      </Stack>

      <Box sx={{ color:"white", display:"flex",flexDirection:"column",
    justifyContent:"center",alignItems:"center",mt:15}}>
        
        <Typography sx={{fontSize:"64px",fontWeight:"700"}}>FITNESS FUSION</Typography>
        <Typography sx={{fontSize:"20px",fontWeight:"700"}}>Unlock Your Best Self with our Diet and Fitness Companion</Typography>
      </Box>
    </Box>
  );
};

export default Header;
