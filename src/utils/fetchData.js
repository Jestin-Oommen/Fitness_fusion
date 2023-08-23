export const exerciseOptions= {
    method: 'GET',
    
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RADID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com' 
    },
  };


export const youtudeOptions = {
    method: 'GET',
    
    headers: {
      'X-RapidAPI-Key':  process.env.REACT_APP_RADID_API_KEY,
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    },
  };

export const fitnessCalculatorOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RADID_API_KEY,
      'X-RapidAPI-Host': 'mega-fitness-calculator1.p.rapidapi.com'
    }
  };
  
export const fetchData=async(url,options)=>{
    const response=await fetch(url,options);
    const data=await response.json();

    return data;
};