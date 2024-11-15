import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material';
import StarRating from '../components/StarRating';

function Recipe() {

    const[details,setDetails]=useState({});
    const[activeTab,setActiveTab]=useState("instructions");
    let params=useParams();

    //console.log(details.analyzedInstructions.Objects.steps)
    console.log(details)
    
    const fetchDetails=async()=>{
        const data=await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_RecipeAPI_KEY}`)
        const detailData= await data.json();
        setDetails(detailData);
        
        
    }

    useEffect(()=>{
        fetchDetails();
    },[params.name])

    

  return (
    
    <DetailWrapper>
      
      <div>
        <h2>{details.title} ({details.readyInMinutes}minutes)</h2>
        <img src={details.image} alt={details.title}/>
        <StarRating/>
      </div>
      <Info >
        <div style={{direction:"row"}}>
        <Button className={activeTab==="instructions"? "active":""} onClick={()=>setActiveTab("instructions")}>Instructions</Button>
        <Button className={activeTab==="ingredients"? "active":""} onClick={()=>setActiveTab("ingredients")}>Ingredients</Button>
        </div>
        {activeTab ==="instructions" && (
            <div>
            <h2  dangerouslySetInnerHTML={{__html: details.summary}}></h2> <br/>
            <h2  dangerouslySetInnerHTML={{__html:details.instructions}}></h2>
            <br/>

        </div>
       
       )}

       {activeTab==="ingredients" &&(
            <ul>
            {details.extendedIngredients.map((ingredient)=>(
              <li style={{fontWeight:"bold", fontSize:"20px"}}  key={ingredient.id}>{ingredient.original}</li>

  
            ))}  
            
          </ul>
       )}
        
        
      </Info>
      
    </DetailWrapper>
    
    
    

    
    
  )
}

const DetailWrapper=styled.div`
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: center;
  .active{
    background: linear-gradient(35deg,#494949,#313131);;
    color: white;
}
  h2{
    margin-bottom: 2rem;
    text-align: center;
  }

  img{
    border-radius: 2rem;
    
  }
  li{
    font-size: 1.2 rem;
    line-height: 2.5rem;
  }
  ul{
    margin-top: 2rem;
  }
`;

const Button=styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
    

`
const Info=styled.div`
   margin-top: 2rem;
   margin-left: 2rem;
   margin-right: 2rem;
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: center;
`

export default Recipe
