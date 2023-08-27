import Viggie from "../components/Viggie";
import Popular from "../components/Popular";
import {motion} from "framer-motion"
import React from 'react'



function RecipeHome() {
  return (
    <motion.div
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:0.5}}>
      
      <Viggie/>
      <Popular/>
    </motion.div>
  )
}

export default RecipeHome
