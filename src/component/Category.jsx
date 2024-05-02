import { useDispatch, useSelector } from 'react-redux'
import { setrole, setlocation, setexp, setremote, setbasepay } from '../redux/slices/Filterslice'


const Category = () => {
   
     const dispatch = useDispatch()
     const role1 = useSelector( (state) => state.filterjob.role)
     const locate2 = useSelector( (state) => state.filterjob.location)
     const exp = useSelector( (state) => state.filterjob.minexp )
     const Isremote = useSelector( (state) => state.filterjob.InOffice)
     const pay = useSelector((state)=> state.filterjob.Basepay)

    console.log(role1)
    console.log(locate2)

    const changerole = () =>{
       dispatch(setrole(''))
    }

    const changelocation =()=> {
        dispatch(setlocation(''))
    }

    const changeexp =()=> {
        dispatch(setexp(''))
    }

    const changeremote =()=> {
        dispatch(setremote(''))
    }

    const changepay =()=> {
        dispatch(setbasepay(''))
    }

    



  return (
    <div className="flex flex-col mt-4 justify-around items-center mx-auto w-full  sm:flex-col  gap-y-2 md:flex-row ">
   
    {/* Job Role */}
     <div className=' relative flex gap-x-2 w-[120px]'> 

     <div className='w-[120px]'>   
      <select
       className='w-full'
       value={role1}
       onChange={(e)=> dispatch(setrole(e.target.value))}
       >        
        <option value='android'> Android </option>
        <option value='tech lead'> Tech Lead </option>
        <option value='ios'> Ios </option>
        <option value='frontend'> Frontend </option>
        <option value='backend'>  Backend </option>
       
      </select>
     </div> 

     <div> 
     {role1 && ( 
                <button 
                 className='absolute left-20'
                onClick={changerole}> X </button>
            )}

    </div>
      
     

     </div>
        
    
    {/* Job location  */}
    <div className='relative w-[140px]'> 
        <select  
        className='w-full'
        value={locate2}
        onChange={(e)=> dispatch(setlocation(e.target.value))}
         >        
            <option value='delhi ncr'>Delhi </option>
            <option value='remote'> Remote </option>
            <option value='bangalore'> Bangalore </option>
            <option value='chennai'> Channai </option>
            <option value='mumbai'>  Mumbai  </option>
        </select>

        {locate2 && (
                <button 
                className='absolute left-20'
                onClick={changelocation}> X </button>
            )}
       

    </div> 

   {/* min exp */}
    <div className='relative w-[100px]'> 
     <select
       className='w-full'
       value={exp}
       onChange={(e)=> dispatch (setexp(e.target.value))}
     >        
        <option value={3}> 3 </option>
        <option value={2}> 2 </option>
        <option value={1}> 1 </option>
        <option value={8}> 8 </option>
        <option value={5}> 5 </option>
     </select>
        
      {exp && ( 
                <button 
                className='absolute left-10'
                onClick={changeexp}> X </button>
            )}


     </div> 

      {/* REMOTE / ONSITE*/}

     <div className='relative w-[120px]'> 
     <select
       className='w-full'
       value={Isremote}
       onChange={(e)=> dispatch(setremote(e.target.value))}
     >        
        <option value='on-site'> Onsite </option>
        <option value='remote'> Remote </option>
       
      </select> 

      {Isremote && ( 
                <button 
                className='absolute left-20'
                onClick={changeremote}> X </button>
            )}

    </div>

    {/* MIN BASE PAY*/}

     <div className='relative w-[120px]' > 
     <select
       className='w-full'
       value={pay}
       onChange={(e)=> dispatch (setbasepay(e.target.value))}
     >        
        <option value={10}> 10 $ </option>
        <option value={20}> 20 $ </option>
        <option value={40}> 40 $ </option>
        <option value={80}> 80 $ </option>
        <option value={100}> 100 $ </option>
     </select>

     {pay && ( 
                <button 
                className='absolute left-20'
                onClick={changepay}> X </button>
            )}

     </div> 

 </div>


  
  )
}

export default Category