import { useEffect, useState } from 'react'
import './App.css'
import Category from './component/Category'
import Job from './component/Job'

function App() {

  const [jobdata , setjobdata] = useState([])
  const [loading , setloading] = useState(false)
 
  
  // Get data from API
  useEffect( () => {
   
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
    method: "POST",
    headers: myHeaders,
    };

  
   const fetchjobdata = async() => {
    
    // used try catch for error handling 
     try {
      
       setloading(true)
      const data = await fetch ("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
      const res  = await data.json()
      setjobdata(res.jdList)
      setloading(false)
      


     } catch (error) {
        console.log(error)
     }

   }
 
    fetchjobdata()

  },[])
 
 

  return (
    <>
     
     <Category />

    {/* handle loading state */}
      {
       loading 
       
       ? 
         <p> Loading ....</p> 
       : 
       
       ( 
       
       <div> 
          {
              <Job 
              jobdata = {jobdata}  
              setjobdata = {setjobdata}
              />
          } 

       </div>)
     }
    
        
   
    </>
  )
}

export default App
