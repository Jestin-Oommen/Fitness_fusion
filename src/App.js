import React from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';
import Home from './pages/Home';
import DietPage from './pages/DietPage';
import WorkoutHome from './pages/WorkoutHome';
import ExerciseDetails from './pages/ExerciseDetails';
import Cuisine from './pages/Cuisine';
import Searched from './pages/Searched';
import Recipe from './pages/Recipe';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <Box>
      
      <Routes>
        
      <Route path="/" element={<Home/>} />
      <Route path="/workout" element={<WorkoutHome/>} />
      <Route path="/exercise/:id" element={<ExerciseDetails />} />
      <Route path="/diet" element={<DietPage/>} />
      <Route path="/cuisine/:type" element={<Cuisine/>}/>
      <Route path='/searched/:search' element={<Searched/>}/>
      <Route path='/recipe/:name' element={<Recipe/>}/>




      </Routes>
      <Footer/>
    </Box>
  )
}

export default App
