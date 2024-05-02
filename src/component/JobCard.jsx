import { useState } from "react"

const JobCard = ({item }) => {
 
  // hide jobdata 
  const [showmore , setshowmore] = useState(false)

  const desc = showmore? item.jobDetailsFromCompany : `${item.jobDetailsFromCompany.slice(0,200)}...`
 
  return (
    <div className="p-4 mb-2 rounded-xl hover:scale-80 border-2 border-slate-200 t">
      
       <div>
           <p className="text-gray-900 font-semibold"> {item.jobRole} </p>
           <p> {item.location} </p>
           <p> Estimated Salary : ${item.minJdSalary} - {item.maxJdSalary} </p>
       </div>

        <div className="mt-6 ">  
            <h2 className="font-semibold text-lg"> About company </h2>
           <div className="text-gray-600 font-normal">
              {desc}
            </div> 

            <div className="mt-3 justify-center rounded-sm bg-gray-300 text-center w-[80px]"> 
            <button onClick={()=> setshowmore(!showmore)}>
              {
                showmore ?  'Hide': 'show' 
              }
            </button>
            </div>
           
        </div>

        <div className="flex flex-col h-[100px] mt-4">
           
         {
           item.minExp !== null && 
           (
             <div> Experience required : {item.minExp} - {item.maxExp} </div>
           )

         }
          <button className="bg-green-400 text-gray-700 border-2 border-gray-700 rounded-md font-semibold h-[50px] cursor-pointer"> 
            <h3 className="font-mono"> Easy Apply </h3>
          </button> 

          <button> Unlock refeerel ask </button> 
        </div>

      
    </div>

  )
}

export default JobCard