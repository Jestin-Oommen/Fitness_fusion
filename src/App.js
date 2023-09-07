import React from 'react'
import './App.css'
import {Routes, Route, useNavigate} from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import DietPage from './pages/DietPage';
import WorkoutHome from './pages/WorkoutHome';
import ExerciseDetails from './pages/ExerciseDetails';
import Cuisine from './pages/Cuisine';
import Searched from './pages/Searched';
import Recipe from './pages/Recipe';
import Footer from './components/Footer';

import {ClerkProvider,SignedIn,SignedOut,RedirectToSignIn} from "@clerk/clerk-react";

 
if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
 
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;



const App = () => {
  const navigate = useNavigate();
  return (
    
    <ClerkProvider
      publishableKey={clerkPubKey}
       navigate={(to) => navigate(to)}
    >
      <SignedIn>
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
      </SignedIn>
      
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    
    </ClerkProvider>
    
    
  );
}

 export default App

