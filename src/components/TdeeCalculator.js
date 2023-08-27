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
    const fetchTdeeData = async (activitylevel) => {
      try {
        const tdeeData = await fetchData(`https://mega-fitness-calculator1.p.rapidapi.com/tdee?weight=${parseInt(weight)}&height=${parseInt(height)}&activitylevel=${activitylevel}&age=${parseInt(age)}&gender=${gender.toLowerCase()}`, fitnessCalculatorOptions);
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
      <Typography textAlign={"center"} fontSize="40px" fontWeight={700}>Let's calculate your need for calories?</Typography>
      
      <Box sx={{ml:3,mr:3,borderRadius:2,display:"flex",flexDirection:"column",
      justifyContent:"center",alignItems:"center",
        background:`rgba(48, 30, 103, 0.50)`, height:"90vh"}} >
        
        <Typography  fontSize={"30px"} fontWeight={600}>What's your gender</Typography> 
        
        <ToggleButtonGroup sx={{bgcolor:"aliceblue", color:"black"}}
      color="primary"
      
      value={gender}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="Male">Male</ToggleButton>
      <ToggleButton value="Female">Female</ToggleButton>
    </ToggleButtonGroup> 

    <Typography marginTop={2} marginBottom={2} fontSize={"30px"} fontWeight={600}>
        Your constitution</Typography>
    <Stack spacing={2} direction={{lg:"row",xs:"column"}}>
    <TextField sx={{}} color="warning" value={height} onChange={HeightChange} label="Height" variant="outlined" />
    <TextField style={{bgcolor:"red"}} color="warning" value={weight} onChange={WeightChange} label="Weight" variant="outlined" />
    <TextField color="warning" value={age} onChange={AgeChange} label="Age" variant="outlined" />
    </Stack>

    <Typography marginTop={2} marginBottom={2} fontSize={"30px"} fontWeight={600}>Choose your physical activity</Typography>
    <Stack>
    <Button variant="outlined" id='Calorie-btn' onClick={()=>calorieCalculate('se')}>Inactive</Button>
    <Button variant="outlined" id='Calorie-btn' onClick={()=>calorieCalculate('la')}>Lightly Active</Button>
    <Button variant="outlined" id='Calorie-btn' onClick={()=>calorieCalculate('ma')}>Moderately Active</Button>
    <Button variant="outlined" id='Calorie-btn'onClick={()=>calorieCalculate('va')}>High Active</Button>
    </Stack>

    <Typography marginTop={2} marginBottom={2} fontSize={"30px"} fontWeight={600}>Your daily calorie intake:{tdee}</Typography>
    

        </Box> 
    </Box>
  )
}

export default TdeeCalculator
