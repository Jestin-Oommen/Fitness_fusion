import React from 'react'
import { useState } from 'react'
import { Button, Stack,TextField,Box,Typography, ToggleButtonGroup,ToggleButton } from '@mui/material'
import { fetchData,fitnessCalculatorOptions  } from '../utils/fetchData';

const TdeeCalculator = () => {

    const [gender, setGender] = React.useState('Male');

  const handleChange = (event, newAlignment) => {
    setGender(newAlignment);
  };

  

  const [height, setHeight] = useState('');
  const HeightChange = (event) => {
    setHeight(event.target.value);
  };

  const [weight, setWeight] = useState('');
  const WeightChange = (event) => {
    setWeight(event.target.value);
  };
  
  const [age, setAge] = useState('');
  const AgeChange = (event) => {
    setAge(event.target.value);
  };

  

  const [tdee,setTdee]=useState([''])
  
  
  
  const calorieCalculate = () => {
    const fetchTdeeData = async () => {
      try {
        const tdeeData = await fetchData(`https://mega-fitness-calculator1.p.rapidapi.com/tdee?weight=${parseInt(weight)}&height=${parseInt(height)}&activitylevel=ma&age=${parseInt(age)}&gender=male`, fitnessCalculatorOptions);
        setTdee((tdeeData.info.tdee));
        console.log((tdeeData.info.tdee));
      } catch (error) {
        console.error('Error fetching TDEE data:', error);
      }
    };
  
    fetchTdeeData();
  };
    
  return (
    <Box sx={{mt:3,mb:3}}>
      <Typography textAlign={"center"} fontSize="38px" fontWeight={700}>Let's calculate your need for calories?</Typography>
      
      <Box sx={{ml:3,mr:3,borderRadius:2,display:"flex",flexDirection:"column",
      justifyContent:"center",alignItems:"center",
        background:`rgba(48, 30, 103, 0.50)`, height:"80vh"}} >
        
        <Typography>What's your gender</Typography> 
        
        <ToggleButtonGroup
      color="warning"
      
      value={gender}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="Male">Male</ToggleButton>
      <ToggleButton value="Women">Women</ToggleButton>
    </ToggleButtonGroup> 

    <Typography>Your constitution</Typography>
    <Stack>
    <TextField value={height} onChange={HeightChange} label="Height" variant="outlined" />
    <TextField value={weight} onChange={WeightChange} label="Weight" variant="outlined" />
    <TextField value={age} onChange={AgeChange} label="Age" variant="outlined" />
    </Stack>

    <Typography>Choose your physical activity</Typography>
    <Stack>
    <Button variant="outlined" id='Calorie-btn' onClick={calorieCalculate}>Inactive</Button>
    <Button variant="outlined" id='Calorie-btn' onClick={calorieCalculate}>Lightly Active</Button>
    <Button variant="outlined" id='Calorie-btn' onClick={calorieCalculate}>Moderately Active</Button>
    <Button variant="outlined" id='Calorie-btn'onClick={calorieCalculate}>High Active</Button>
    </Stack>

    <Typography>Your daily calorie intake:{tdee}</Typography>
    

        </Box> 
    </Box>
  )
}

export default TdeeCalculator
