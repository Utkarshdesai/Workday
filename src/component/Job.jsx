import { useSelector } from 'react-redux'
import JobCard from './JobCard'
import { useEffect, useState } from 'react';

const Job = ({jobdata }) => {
 
    
    const [jobs , setfilter] = useState('')

     const role2 = useSelector( (state) => state.filterjob.role)
     const locate3 = useSelector( (state) => state.filterjob.location)
     const exp = useSelector( (state) => state.filterjob.minexp )
     const Isremote = useSelector( (state) => state.filterjob.InOffice)
     const pay = useSelector((state)=> state.filterjob.Basepay)

    
  

     useEffect( () => {
        const filteredListings = jobdata.filter(item => {
            const roleMatch = role2 && item.jobRole === role2;
            const locationMatch = locate3 && item.location === locate3;
            const expMatch = exp && item.minExp >= exp;
            const remote = Isremote && item.location == Isremote ;
            const amount = pay && item.minJdSalary >= pay

    
            // Return true if all criteria match
            return roleMatch || locationMatch || expMatch || remote || amount;
        });
    
        // Update the jobs state with the filtered results
        setfilter(filteredListings);

     }, [role2 , locate3 , exp , Isremote , pay ,jobdata] )
  
    
  
    return (
    <div className='grid xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]'>
        
     {     
         jobs.length > 0 

          ? jobs.map( (item) => <JobCard  key={jobdata.jdUid}
            item = {item}/> )
          :
           jobdata.map( (item) => <JobCard  key={jobdata.jdUid}
           item = {item}/> )
      
     }
     

    </div>
  )
}

export default Job