
const JobCard = ({item}) => {
 
  return (
    <div className="flex flex-col p-4 mb-2 rounded-xl hover:scale-80 border-2 border-slate-200">
      
       <div>
           <p className="text-gray-900 font-semibold"> {item.jobRole} </p>
           <p> {item.location} </p>
       </div>

        <div className="mt-6">  
            <h2 className="font-semibold text-lg"> About company </h2>
           <p className="text-gray-600 font-normal">{item.jobDetailsFromCompany.substring(0,350)}  </p>
        </div>

        <div className="flex flex-col h-[100px] mt-4">

          <button className="bg-green-400 text-gray-700 border-2 border-gray-700 rounded-md font-semibold h-[50px] cursor-pointer"> 
            <h3 className="font-mono"> Easy Apply </h3>
          </button> 
          <button> Unlock refeerel ask </button> 
        </div>

      
    </div>

  )
}

export default JobCard