import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'
import { Link } from 'react-router-dom';



function CalorieRecipe({tdee}) {

  const isLargeScreen = window.innerWidth >= 1024;

    const [calorieRecipe,setCalorieRecipe]=useState([]);

    useEffect(()=>{
        getCalorieRecipe(tdee);
    },[tdee])

    
    const getCalorieRecipe = async (tdee) => {
      //console.log(tdee);
      const maxCalorie = tdee ? tdee : 1900;
      const api = await fetch(`https://api.spoonacular.com/recipes/findByNutrients?random=true&maxCalories=${maxCalorie}&apiKey=${process.env.REACT_APP_RecipeAPI_KEY}&number=9`);

if (api.status === 404) {
  console.error('API endpoint not found:', api.status);
  // Handle the 404 error as needed
} else if (!api.ok) {
  console.error('API request failed with status:', api.status);
  // Handle other errors as needed
} else {
  const responseText = await api.text();
  //console.log(responseText);
  try {
    const data = JSON.parse(responseText);
    setCalorieRecipe(data);
  } catch (error) {
    console.error('Error parsing JSON:', error);
    // Handle JSON parsing errors as needed
  }
}
    };
  return (
    <div>
      
          <Wrapper>
            <h3>Based on Daily Intake</h3>
            <Splide options={{
              perPage:isLargeScreen ? 4:2,
              arrows:true,
              pagination:false,
              drag:"free",
              gap:"5rem"

            }}>
            {calorieRecipe.map((recipe)=>{
              return(
                <SplideSlide key={recipe.id}>
                <Card>
                <Link to={"/recipe/"+recipe.id}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title}/>
                  <Gradient/>
                  </Link>
                </Card>
                </SplideSlide>
              )
            })}
            </Splide>
            </Wrapper>
        
      
    </div>
  )
}
const Wrapper=styled.div`
  //margin:4rem 0rem;
  margin-left:2rem;
  margin-right:2rem;

  

h3{
  font-size: 2rem;
  color: white;
  line-height: 2.5rem;
  margin: 2rem 0rem;
}
`;

const Card=styled.div`
  min-height: 25rem;
  border-radius:2rem;
  overflow: hidden;
  position: relative;

  img{
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;

  }

  p{
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%,0%);
    color:white;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient=styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient( rgba(0,0,0,0), rgba(0,0,0,0.5));

`

export default CalorieRecipe
