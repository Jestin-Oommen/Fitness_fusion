import React from 'react'
import DietNavBar from '../components/DietNavBar'
import DietHeader from '../components/DietHeader'
import TdeeCalculator from '../components/TdeeCalculator'
import RecipeSearch from '../components/RecipeSearch'
import Category from '../components/Category'
import RecipeHome from './RecipeHome'

const DietPage = () => {
  return (
    <>
      <DietNavBar/>
      <DietHeader/>
      <TdeeCalculator/>
      <RecipeSearch/>
      <Category/>
      <RecipeHome/>
    </>
  )
}

export default DietPage
