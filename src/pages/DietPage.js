import React from 'react'
import DietNavBar from '../components/DietNavBar'
import DietHeader from '../components/DietHeader'
import TdeeCalculator from '../components/TdeeCalculator'

import RecipeHome from './RecipeHome'

const DietPage = () => {
  return (
    <>
      <DietNavBar/>
      <DietHeader/>
      
      <RecipeHome/>
    </>
  )
}

export default DietPage
