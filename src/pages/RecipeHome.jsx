import Viggie from "../components/Viggie";
import Popular from "../components/Popular";
import {motion} from "framer-motion"
import React, { useState } from 'react'
import RecipeSearch from "../components/RecipeSearch";
import Category from "../components/Category";
import { Typography } from "@mui/material";
import CalorieRecipe from "../components/CalorieRecipe";
import TdeeCalculator from "../components/TdeeCalculator";




function RecipeHome() {



  return (
    <motion.div
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:0.5}}>
      <TdeeCalculator />
      <Typography sx={{display:"flex",justifyContent:"center",
    fontSize:"24px",fontWeight:"bold", mb:2}}>"Savor the Flavors: Our Recipe Collection"</Typography>
      <RecipeSearch/>
      <Category/>
      <Viggie/>
      <CalorieRecipe />
      <Popular/>
    </motion.div>
  )
}

export default RecipeHome
