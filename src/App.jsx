import { useEffect, useState } from 'react'
import './App.css'
import JobCard from './component/JobCard'

function App() {

  const [jobdata , setjobdata] = useState([])
  const [loading , setloading] = useState(false)
  
  useEffect( () => {
   
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
    method: "POST",
    headers: myHeaders,
    };


   const fetchjobdata = async() => {
    
     try {
      
       setloading(true)
      const data = await fetch ("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
      const res  = await data.json()
      
      console.log(res)

      //console.log(data.json());
      //console.log(data.jdList)
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

     {
       loading ? 
        <p> Loading ....</p> 
       : 
       
       ( <div className='grid xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 p-2 mx-auto space-y-10 space-x-5 mb-2 '> 
         {
           jobdata?.map( (item) => <JobCard  key ={item.jdUid} item={item}/>)
         }  
       </div>)
     }
    
     
    
   
    </>
  )
}

export default App
