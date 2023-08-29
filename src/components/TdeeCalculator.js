import React from 'react'
import { useState } from 'react'
import { Button, Stack,TextField,Box,Typography, ToggleButtonGroup,ToggleButton } from '@mui/material'
import { fetchData,fitnessCalculatorOptions  } from '../utils/fetchData';
import { Link } from 'react-router-dom';

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

  

  
  
  
  const calorieCalculate = (activitylevel) => {
    const fetchTdeeData = async (activitylevel) => {
      try {
        const Data = await fetchData(`https://mega-fitness-calculator1.p.rapidapi.com/tdee?weight=${parseInt(weight)}&height=${parseInt(height)}&activitylevel=${activitylevel}&age=${parseInt(age)}&gender=${gender.toLowerCase()}`, fitnessCalculatorOptions);
        const tdeeData=((Math.round(Data.info.tdee)));
        setTdee(prevTdee =>tdeeData);
        
      } catch (error) {
        console.error('Error fetching TDEE data:', error);
      }
    };
  
    fetchTdeeData(activitylevel);
  };
    
  return (

    
    <Box sx={{mt:5,mb:3}}>
      
      <Typography textAlign={"center"} fontSize="40px" fontWeight={700}>Let's calculate your need for calories?</Typography>
      
      <Box sx={{ml:3,mr:3,borderRadius:2,display:"flex",flexDirection:"column",
      justifyContent:"center",alignItems:"center",
        background:`rgba(48, 30, 103, 0.50)`, height:"98vh"}} >
        
        <Typography  fontSize={"30px"} fontWeight={600} sx={{mt:3}}>What's your gender</Typography> 
        
        <ToggleButtonGroup sx={{bgcolor:"beige", fontSize:3}}
      color="secondary"
      
      value={gender}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="Male" sx={{fontWeight:"bold"}}>Male</ToggleButton>
      <ToggleButton value="Female" sx={{fontWeight:"bold"}}>Female</ToggleButton>
    </ToggleButtonGroup> 

    <Typography marginTop={2} marginBottom={2} fontSize={"30px"} fontWeight={600}>
        Your constitution</Typography>
    <Stack  spacing={2} direction={{lg:"row",xs:"column"}}>
    <TextField  className="white-border" color="secondary" value={height} onChange={HeightChange} label="Height" variant="outlined" />
    <TextField className="white-border" color="secondary" value={weight} onChange={WeightChange} label="Weight" variant="outlined" />
    <TextField  className="white-border" color="secondary" value={age} onChange={AgeChange} label="Age" variant="outlined" />
    </Stack>

    <Typography marginTop={2} marginBottom={2} fontSize={"30px"} fontWeight={600}>Choose your physical activity</Typography>
    <Stack spacing={2}>
    <Button sx={{bgcolor:"white",fontWeight:"bold"}} variant="outlined" id='Calorie-btn' onClick={()=>calorieCalculate('se')}>Inactive</Button>
    <Button sx={{bgcolor:"white",fontWeight:"bold"}}  variant="outlined" id='Calorie-btn' onClick={()=>calorieCalculate('la')}>Lightly Active</Button>
    <Button sx={{bgcolor:"white",fontWeight:"bold"}}  variant="outlined" id='Calorie-btn' onClick={()=>calorieCalculate('ma')}>Moderately Active</Button>
    <Button sx={{bgcolor:"white",fontWeight:"bold"}}  variant="outlined" id='Calorie-btn'onClick={()=>calorieCalculate('va')}>High Active</Button>
    </Stack>

    <Typography marginTop={2} marginBottom={2} fontSize={"30px"} fontWeight={600}>Your daily calorie intake:{tdee}</Typography>
    

        </Box> 
    </Box>
  )
}

export default TdeeCalculator

